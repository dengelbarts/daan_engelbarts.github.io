precision mediump float;

uniform sampler2D height;

uniform float millis;

uniform vec3 sunPos;

uniform vec3 pix; // normalised size of a pixel, zero in z for convenience

uniform float waterLevel;

const float slopeCutoff = 0.3;

// Terrain colours
const vec4 colourWater = vec4(0.384,0.651,0.663, 1.);
const vec4 colourSand = vec4(0.839,0.714,0.62, 1.);
const vec4 colourGrass = vec4(0.596,0.678,0.353, 1.);
const vec4 colourBush = vec4(0.396,0.522,0.255, 1.);
const vec4 colourForest = vec4(0.278,0.463,0.271, 1.);
const vec4 colourStone = vec4(0.427,0.463,0.529, 1.);
const vec4 colourSlate = vec4(0.518,0.553,0.604, 1.);
const vec4 colourSnow = vec4(0.824,0.878,0.871, 1.);

const vec4 shadowBrightness = vec4(0.5, 0.5, 0.5, 1.);

const int MAX_STEPS = 200;

varying vec2 pos;

// use the four neighbouring pixels and
// lerp the height
float getHeightRaw(vec2 pos) {
  
  vec2 res = 1./pix.xy;

  
  vec2 p = pos * res;
  
  vec2 lerpP = fract(p);
  
  p = floor(p);
  
  p *= pix.xy;
  
  float tl = texture2D(height, p).r;
  float bl = texture2D(height, p + pix.zy).r;
  
  float tr = texture2D(height, p + pix.xz).r;
  float br = texture2D(height, p + pix.xy).r;
  
  float t = mix(tl, tr, lerpP.x);
  float b = mix(bl, br, lerpP.x);
  
  return mix(t, b, lerpP.y);
}

float getHeight(vec2 pos) {
  return max(getHeightRaw(pos), waterLevel);
}

  vec4 getTerrainColour(float h, vec3 normal) {

    float flatness = dot(normal, vec3(0., 0., 1.));
    float isFlat = step(slopeCutoff, flatness);

    vec4 col = colourSnow;

    if(h < 0.2) {
      col = colourStone;
    } else if(h < 0.4) {
      col = colourSand;
    } else if(h < 0.5) {
      col = colourGrass;
    } else if(h < 0.6) {
      col = colourBush;
    } else if(h < 0.7) {
      col = colourForest;
    } else if(h < 0.8) {
      col = colourStone;
    } else if(h < 0.9) {
      col = colourSlate;
    }

    return col * isFlat + colourSlate * (1. - isFlat);
  }

vec3 getNormal(vec2 pos) {
  float h = 200.;
  float l = h * getHeight(pos - pix.xz);
  float r = h * getHeight(pos + pix.xz);
  
  float d = h * getHeight(pos - pix.zy);
  float u = h * getHeight(pos + pix.zy);
  
  return normalize(vec3(l-r, d-u, 1.));
}

float easeOut(float x) {
  return clamp(1. - pow(1. - x, 6.), 0., 1.);
}

void main() {
  // Get height from height map
  float hgt = getHeightRaw(pos);
  
  // Starting point for ray cast
  vec3 p = vec3(pos, getHeight(pos));
  
  float minStepSize = min(pix.x, pix.y);
  
  // Direction of raycast is towards the sun from centre of screen
  vec3 sunDir = sunPos - vec3(0.5, 0.5, 0.);
  vec3 stepDir = normalize(sunDir);
    
  float inShadow = 0.;
  int n = 0;
  for(int i = 1; i <= MAX_STEPS; i ++) {    
    n++;
    // Check height at new location
    float h = getHeight(p.xy);
    if(h > p.z) {
      // ray is inside the terrain
      // therefore must be in shadow
      inShadow = 1.;
      break;
    }
    if(p.z > 1.) {
      // above the heighest terrain level
      // will not be in shadow
      break;
    }
    
    // Step towards the sun by dist to heightmap
    p += stepDir * max(minStepSize, (p.z - h) * 0.05);
  }
  if(n == MAX_STEPS) {
    inShadow = 1.;
  }

  // calculate normal based on surrounding tiles
  vec3 normal = getNormal(pos);
  float normalShadow = (dot(normal, -stepDir) + 1.)/2.;
  
  
  vec4 col = getTerrainColour(hgt, normal);
  
  float waterDepth = waterLevel - hgt;
  
  // Add water if the terrain is below water level
  float isWater = step(0., waterDepth);
  // Add waves if the water depth is really shallow
  float isWave = isWater * (1. - smoothstep(0., 0.05, waterDepth));
  isWave *= (sin(cos(millis/500.)*2. + waterDepth * 500.) + 1.)/2.;
  
  float waterLerp = easeOut(waterDepth/waterLevel);
  
  // Simulate see-through water by mixing between the terrain and water
  // colour based on depth
  col = mix(col, colourWater, waterLerp);
  
  // Add the waves into the colour
  col += isWave/8.;
  
  // Add normal shadows into shadow variable
  inShadow = clamp(inShadow + normalShadow, 0., 1.);
  
  // Create a darker version of the colour for the shadows (blue shifted);
  vec4 shadowCol = col * shadowBrightness * vec4(1., 1., 1. + inShadow * 0.2, 1.);  
  
  gl_FragColor = mix(col, shadowCol, inShadow);
}
