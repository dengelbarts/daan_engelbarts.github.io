(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[311],{9432:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var s=t(3005),i=t(5027),l=t(4637);function r(e){var n=e.guides,t=n.length>1;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h3",{className:"text-lg font-bold pt-1",id:"guides",children:[t?"Guides":"Guide",":"]}),n.map((function(e){var n=(0,s.Z)(e,2),t=n[0],r=n[1];return(0,l.jsx)("div",{children:(0,l.jsx)(i.Z,{href:r,children:t})},t)}))]})}},6761:function(e,n,t){"use strict";t.d(n,{ZP:function(){return o},Wr:function(){return d}});var s=t(1025),i=t(7565),l=t.n(i),r=t(4668),c=t(5027),a=t(4637);function o(e){var n=e.icon,t=e.className,s=e.loading,i=void 0===s?"lazy":s,l=(0,r.by)(n.icon);return(0,a.jsx)("img",{alt:n.name,loading:i,src:l,className:t,width:256,height:256,onError:function(e){return e.target.src="/img/unknown.png"}})}function d(e){var n,t,i,d=e.thing,m=e.location,u=e.sizeSet,x=void 0===u?"m":u,h=e.children,f=(0,r.ol)(null!==(n=void 0!=d.stars?d.stars:0)&&void 0!==n?n:0),v={m:"w-24 sm:w-28 lg:w-32",s:"w-5 sm:w-6 lg:w-7"};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c.Z,{location:m,href:"/".concat(d.urlpath,"/").concat((0,r.x5)(d.name,!1)),className:"bg-slate-300 dark:bg-slate-800 ".concat(v[x]," relative ").concat("s"==x?"rounded-lg m-0.5 outline-1":"rounded-xl m-1 outline-3"," transition-all duration-100 hover:outline outline-slate-800 dark:outline-slate-300 font-bold text-sm"),children:[(0,a.jsxs)("div",{className:"".concat(f," ").concat("s"==x?"rounded-lg":"rounded-t-xl"," ").concat(v[x]),children:[(0,a.jsx)(o,{icon:d,className:"".concat("s"==x?"rounded-lg":"rounded-t-xl"," m-0 p-0")}),(i=d,void 0!=i.element&&d.element&&"s"!=x&&(0,a.jsx)("span",{className:"absolute block p-0.5 top-0 w-full",children:(0,a.jsx)("div",{className:"flex flex-col",children:d.element.map((function(e){return(0,a.jsx)("div",{className:"w-6 md:w-8",children:(0,a.jsx)(s.default,{src:r.Rm[e],alt:"".concat(e," Element"),loading:"eager"})},e)}))})})),(t=d,void 0!=t.weapon&&d.weapon&&"s"!=x&&(0,a.jsx)("span",{className:"absolute block p-0.5 top-0 w-full",children:(0,a.jsx)("div",{className:"flex flex-col float-right",children:(0,a.jsx)("div",{className:"w-6 md:w-8",children:(0,a.jsx)(s.default,{src:r.Ar[d.weapon],alt:d.weapon,loading:"eager"})})})}))]}),"s"!=x&&(0,a.jsx)("span",{className:"flex justify-center items-center m-0 p-0 px-1 ".concat(d.name.length>27?"text-xs md:text-xs":d.name.length>20?"text-sm md:text-sm":""," duration-200 md:text-base ").concat(l().iconHeight),children:d.name})]},d.name),h&&(0,a.jsx)(c.Z,{location:m,href:"/".concat(d.urlpath,"/").concat((0,r.x5)(d.name,!1)),children:h})]})}},9865:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var s=t(8796),i=t(7931),l=t(9337),r=t(2004),c=t(647),a=t(9496),o=t(4637);function d(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,c.Z)(e);if(n){var i=(0,c.Z)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return(0,r.Z)(this,t)}}var m=function(e){(0,l.Z)(t,e);var n=d(t);function t(){return(0,s.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){var e,n=(this.props.homePage?"":"max-w-5xl w-full px-1")+(null!==(e=this.props.className)&&void 0!==e?e:"");return(0,o.jsx)("main",{className:n,children:this.props.children})}}]),t}(a.Component)},7979:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return h},default:function(){return f}});var s=t(9372),i=t(1025),l=t(5970),r=t(5027),c=t(9432),a=t(6761),o=t(9865),d=t(4668),m=t(7565),u=t.n(m),x=t(4637),h=!0;function f(e){var n,t,i,m,u=e.enemy,h=e.location,f=e.guides,j=(0,d.ol)(1),p="".concat(u.name).concat(u.type?" (".concat(u.type,")"):"").concat(u.kind?" is a ".concat(u.kind):" is an enemy"," in Genshin Impact.").concat(u.resistance?" Click to find out their resistances!":"");return(0,x.jsxs)(o.Z,{children:[(0,x.jsxs)(s.default,{children:[(0,x.jsxs)("title",{children:[u.name," | Hu Tao"]}),(0,x.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,x.jsx)("meta",{property:"og:title",content:"".concat(u.name," | Hu Tao")}),(0,x.jsx)("meta",{property:"og:description",content:p}),(0,x.jsx)("meta",{name:"description",content:p}),u.icon&&(0,x.jsx)("meta",{property:"og:image",content:(0,d.by)(u.icon)})]}),(0,x.jsx)("h2",{className:"font-semibold",children:(0,x.jsx)(r.Z,{href:"/enemies/",location:h,className:"font-semibold text-lg",children:"Enemies"})}),(0,x.jsxs)("h1",{className:"text-4xl font-bold pb-2 sm:sr-only not-sr-only",children:[(0,x.jsx)(a.ZP,{icon:u,className:"".concat(j," rounded-xl sm:w-0 mr-2 w-12 inline-block")}),u.name]}),(0,x.jsxs)("div",{className:"grid grid-flow-col justify-start",children:[(0,x.jsx)("div",{className:"sm:w-36 mr-2 w-0 ",children:(0,x.jsx)(a.ZP,{icon:u,className:"".concat(j," rounded-xl")})}),(0,x.jsxs)("div",{id:"description",className:"w-full",children:[(0,x.jsx)("h1",{className:"text-4xl font-bold pb-2 sm:not-sr-only sr-only",children:u.name}),u.type&&(0,x.jsx)("div",{className:"inline-block pr-2 font-semibold",children:u.type}),u.kind&&(0,x.jsx)("div",{className:"inline-block pr-2 ",children:u.kind}),(0,x.jsx)("blockquote",{className:"pl-5 mt-3 mb-2 border-l-2",children:(0,x.jsx)(l.D,{children:null!==(n=null===(t=u.desc)||void 0===t?void 0:t.replace(/ ?\$\{.*?\}/g,"").replace(/\n/g,"\n\n"))&&void 0!==n?n:""})})]})]}),(0,x.jsxs)("div",{id:"details",children:[f&&f.length>0&&(0,x.jsx)(c.Z,{guides:f}),u.notes&&(0,x.jsx)(l.D,{children:null!==(i=null===(m=u.notes)||void 0===m?void 0:m.replace(/ ?\$\{.*?\}/g,"").replace(/\n/g,"\n\n"))&&void 0!==i?i:""}),u.resistance&&(0,x.jsx)(v,{resistance:u.resistance})]})]})}function v(e){var n=e.resistance;function t(e){if(e.match(/\d+%/)){var n=parseInt(e.replace("%",""));if(10==n)return"opacity-60";if(n>50)return"font-bold";if(n>100)return"font-bold text-red-400";if(n<-50)return"font-semibold text-green-400";if(n<0)return"text-green-400"}return""}return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h3",{className:"text-lg font-bold pt-1",id:"resistance",children:"Resistances:"}),(0,x.jsxs)("table",{className:"table-auto w-full ".concat(u().table," mb-2 sm:text-base text-sm"),children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{className:"divide-x divide-gray-200 dark:divide-gray-500",children:[(0,x.jsx)("th",{children:(0,x.jsxs)("div",{className:"flex flex-row items-center content-center",children:[(0,x.jsx)("div",{className:"absolute invisible inline-block w-5 h-5 sm:relative sm:pr-1 sm:visible",children:(0,x.jsx)(i.default,{src:d.Rm.Pyro,alt:"Pyro Element"})}),(0,x.jsx)("div",{children:"Pyro"})]})}),(0,x.jsx)("th",{children:(0,x.jsxs)("div",{className:"flex flex-row items-center content-center",children:[(0,x.jsx)("div",{className:"absolute invisible inline-block w-5 h-5 sm:relative sm:pr-1 sm:visible",children:(0,x.jsx)(i.default,{src:d.Rm.Electro,alt:"Electro Element"})}),(0,x.jsx)("div",{children:"Electro"})]})}),(0,x.jsx)("th",{children:(0,x.jsxs)("div",{className:"flex flex-row items-center content-center",children:[(0,x.jsx)("div",{className:"absolute invisible inline-block w-5 h-5 sm:relative sm:pr-1 sm:visible",children:(0,x.jsx)(i.default,{src:d.Rm.Cryo,alt:"Cryo Element"})}),(0,x.jsx)("div",{children:"Cryo"})]})}),(0,x.jsx)("th",{children:(0,x.jsxs)("div",{className:"flex flex-row items-center content-center",children:[(0,x.jsx)("div",{className:"absolute invisible inline-block w-5 h-5 sm:relative sm:pr-1 sm:visible",children:(0,x.jsx)(i.default,{src:d.Rm.Hydro,alt:"Hydro Element"})}),(0,x.jsx)("div",{children:"Hydro"})]})}),(0,x.jsx)("th",{children:(0,x.jsxs)("div",{className:"flex flex-row items-center content-center",children:[(0,x.jsx)("div",{className:"absolute invisible inline-block w-5 h-5 sm:relative sm:pr-1 sm:visible",children:(0,x.jsx)(i.default,{src:d.Rm.Anemo,alt:"Anemo Element"})}),(0,x.jsx)("div",{children:"Anemo"})]})}),(0,x.jsx)("th",{children:(0,x.jsxs)("div",{className:"flex flex-row items-center content-center",children:[(0,x.jsx)("div",{className:"absolute invisible inline-block w-5 h-5 sm:relative sm:pr-1 sm:visible",children:(0,x.jsx)(i.default,{src:d.Rm.Geo,alt:"Geo Element"})}),(0,x.jsx)("div",{children:"Geo"})]})}),(0,x.jsx)("th",{children:"Physical"}),n[0].length>7&&(0,x.jsx)("th",{children:"Note"})]})}),(0,x.jsx)("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-500",children:n.map((function(e,n){return(0,x.jsx)("tr",{className:"pr-1 divide-x divide-gray-200 dark:divide-gray-500",children:e.map((function(e,s){return(0,x.jsx)("td",{className:t(e),children:(0,x.jsx)(l.D,{children:e})},n+","+s)}))},n)}))})]})]})}},8317:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/enemies/[enemy]",function(){return t(7979)}])},7565:function(e){e.exports={autosize:"style_autosize___znCe",fill:"style_fill___5P66",video:"style_video__J3fXM",table:"style_table__dNKBG",stattable:"style_stattable__0eUi_",iconHeight:"style_iconHeight__LP772",mask:"style_mask__AfuL5"}},3005:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(1359);function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var s,i,l=[],r=!0,c=!1;try{for(t=t.call(e);!(r=(s=t.next()).done)&&(l.push(s.value),!n||l.length!==n);r=!0);}catch(a){c=!0,i=a}finally{try{r||null==t.return||t.return()}finally{if(c)throw i}}return l}}(e,n)||(0,s.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[642,905,668,774,888,179],(function(){return n=8317,e(e.s=n);var n}));var n=e.O();_N_E=n}]);