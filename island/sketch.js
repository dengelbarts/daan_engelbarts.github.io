const noiseScale = 0.01;
let waterLevel = 0.3;

let sun;

let heightMap, finalScreen;

let shadowShader;


function preload() {
  shadowShader = loadShader("/shaders/shader.vert", "/shaders/shader.frag");
}


function setup() {
  createCanvas(800, 800);
  
  heightMap = createGraphics(width, height);
  finalScreen = createGraphics(width, height, WEBGL);
  
  sun = createVector(0, 0, 1); // sun at 1 unit high
  
  noiseSeed(random());
  
  generate();
  
  finalScreen.shader(shadowShader);
}

function draw() {
  
  sun.x = mouseX/width;
  sun.y = mouseY/height;
  
// Uncomment these lines for animated shadows  
//   const timeSlow = 10000;
//   sun.x = cos(millis()/timeSlow) * 0.75 + 0.5;
//   sun.y = sin(millis()/timeSlow) * 0.75 + 0.5;
//   sun.z = 1; //cos(millis()/timeSlow * 5) * 0.6 + 1;
  
  shadowShader.setUniform("height", heightMap);
  shadowShader.setUniform("sunPos", [sun.x, sun.y, sun.z]);
  shadowShader.setUniform("pix", [1/width, 1/height, 0]);
  shadowShader.setUniform("waterLevel", waterLevel);
  shadowShader.setUniform("millis", millis());
  
  finalScreen.clear();
  finalScreen.rect(0, 0, width, height);
  
  image(finalScreen, 0, 0, width, height);
}


// Island generation stuff
// not that exciting, just use perlin noise to make
// some basic island terrain

function generate() {
  // Loop through each pixel and fill the height and colour maps
  for(let i = 0; i < width; i ++) {
    for(let j = 0; j < height; j ++) {
      tile(i, j);
    }
  }
}

function tile(x, y) {
  // Get the nois value
  let n = noiseVal(x, y);
  
  // Draw it in grey scale onto the height map
  heightMap.noStroke();
  heightMap.fill(255 * n);
  heightMap.square(x, y, 1);
}

function noiseVal(x, y) {
  // Use perlin noise for basic terrain
  let n = noise(x * noiseScale, y * noiseScale);
    
  // Shape terrain to be islands in the middle
  n *= islandMod(x, y);
  return n;
}

// Squashes terrain further from the centre so that
// outsides are guarenteed to be water
function islandMod(x, y) {
  let maxD = min(width, height);
  maxD = (maxD/2) * (maxD/2);
  
  const dx = width/2 - x;
  const dy = height/2 - y;
  
  const dSq = (dx * dx) + (dy * dy);
  
  return map(dSq, 0, maxD, 1, 0);
}