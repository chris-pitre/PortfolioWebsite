"use strict";(self.webpackChunkportfolio_website=self.webpackChunkportfolio_website||[]).push([[691],{9662:function(t,e,n){var r=n(614),o=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},9670:function(t,e,n){var r=n(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){var r,o,i,A=n(3013),c=n(9781),a=n(7854),u=n(614),f=n(111),g=n(2597),s=n(648),v=n(6330),l=n(8880),p=n(8052),y=n(7045),E=n(7976),m=n(9518),w=n(7674),x=n(5112),B=n(9711),h=n(9909),d=h.enforce,C=h.get,b=a.Int8Array,S=b&&b.prototype,I=a.Uint8ClampedArray,Q=I&&I.prototype,R=b&&m(b),T=S&&m(S),D=Object.prototype,O=a.TypeError,J=x("toStringTag"),F=B("TYPED_ARRAY_TAG"),P="TypedArrayConstructor",H=A&&!!w&&"Opera"!==s(a.opera),L=!1,M={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},z={BigInt64Array:8,BigUint64Array:8},N=function(t){var e=m(t);if(f(e)){var n=C(e);return n&&g(n,P)?n[P]:N(e)}},U=function(t){if(!f(t))return!1;var e=s(t);return g(M,e)||g(z,e)};for(r in M)(i=(o=a[r])&&o.prototype)?d(i)[P]=o:H=!1;for(r in z)(i=(o=a[r])&&o.prototype)&&(d(i)[P]=o);if((!H||!u(R)||R===Function.prototype)&&(R=function(){throw O("Incorrect invocation")},H))for(r in M)a[r]&&w(a[r],R);if((!H||!T||T===D)&&(T=R.prototype,H))for(r in M)a[r]&&w(a[r].prototype,T);if(H&&m(Q)!==T&&w(Q,T),c&&!g(T,J))for(r in L=!0,y(T,J,{configurable:!0,get:function(){return f(this)?this[F]:void 0}}),M)a[r]&&l(a[r],F,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:H,TYPED_ARRAY_TAG:L&&F,aTypedArray:function(t){if(U(t))return t;throw O("Target is not a typed array")},aTypedArrayConstructor:function(t){if(u(t)&&(!w||E(R,t)))return t;throw O(v(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,e,n,r){if(c){if(n)for(var o in M){var i=a[o];if(i&&g(i.prototype,t))try{delete i.prototype[t]}catch(A){try{i.prototype[t]=e}catch(u){}}}T[t]&&!n||p(T,t,n?e:H&&S[t]||e,r)}},exportTypedArrayStaticMethod:function(t,e,n){var r,o;if(c){if(w){if(n)for(r in M)if((o=a[r])&&g(o,t))try{delete o[t]}catch(i){}if(R[t]&&!n)return;try{return p(R,t,n?e:H&&R[t]||e)}catch(i){}}for(r in M)!(o=a[r])||o[t]&&!n||p(o,t,e)}},getTypedArrayConstructor:N,isView:function(t){if(!f(t))return!1;var e=s(t);return"DataView"===e||g(M,e)||g(z,e)},isTypedArray:U,TypedArray:R,TypedArrayPrototype:T}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,n){var r=n(1694),o=n(614),i=n(4326),A=n(5112)("toStringTag"),c=Object,a="Arguments"===i(function(){return arguments}());t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=c(t),A))?n:a?i(e):"Object"===(r=i(e))&&o(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7045:function(t,e,n){var r=n(6339),o=n(3070);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),o.f(t,e,n)}},8052:function(t,e,n){var r=n(614),o=n(3070),i=n(6339),A=n(3072);t.exports=function(t,e,n,c){c||(c={});var a=c.enumerable,u=void 0!==c.name?c.name:e;if(r(n)&&i(n,u,c),c.global)a?t[e]=n:A(e,n);else{try{c.unsafe?t[e]&&(a=!0):delete t[e]}catch(f){}a?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n=void 0===e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,A=o(i)&&o(i.createElement);t.exports=function(t){return A?i.createElement(t):{}}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,o,i=n(7854),A=n(8113),c=i.process,a=i.Deno,u=c&&c.versions||a&&a.version,f=u&&u.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&A&&(!(r=A.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=A.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,A=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,u=c&&(!r||r&&A(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:u}},5668:function(t,e,n){var r=n(1702),o=n(9662);t.exports=function(t,e,n){try{return r(o(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(i){}}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.call,A=r&&o.bind.bind(i,i);t.exports=r?A:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614);t.exports=function(t,e){return arguments.length<2?(n=r[t],o(n)?n:void 0):r[t]&&r[t][e];var n}},8173:function(t,e,n){var r=n(9662),o=n(8554);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),A=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return A(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,A=n(4811),c=n(7854),a=n(111),u=n(8880),f=n(2597),g=n(5465),s=n(6200),v=n(3501),l="Object already initialized",p=c.TypeError,y=c.WeakMap;if(A||g.state){var E=g.state||(g.state=new y);E.get=E.get,E.has=E.has,E.set=E.set,r=function(t,e){if(E.has(t))throw p(l);return e.facade=t,E.set(t,e),e},o=function(t){return E.get(t)||{}},i=function(t){return E.has(t)}}else{var m=s("state");v[m]=!0,r=function(t,e){if(f(t,m))throw p(l);return e.facade=t,u(t,m,e),e},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw p("Incompatible receiver, "+t+" required");return n}}}},614:function(t,e,n){var r=n(4154),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},8554:function(t){t.exports=function(t){return null==t}},111:function(t,e,n){var r=n(614),o=n(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),o=n(614),i=n(7976),A=n(3307),c=Object;t.exports=A?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,c(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),o=n(7293),i=n(614),A=n(2597),c=n(9781),a=n(6530).CONFIGURABLE,u=n(2788),f=n(9909),g=f.enforce,s=f.get,v=String,l=Object.defineProperty,p=r("".slice),y=r("".replace),E=r([].join),m=c&&!o((function(){return 8!==l((function(){}),"length",{value:8}).length})),w=String(String).split("String"),x=t.exports=function(t,e,n){"Symbol("===p(v(e),0,7)&&(e="["+y(v(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!A(t,"name")||a&&t.name!==e)&&(c?l(t,"name",{value:e,configurable:!0}):t.name=e),m&&n&&A(n,"arity")&&t.length!==n.arity&&l(t,"length",{value:n.arity});try{n&&A(n,"constructor")&&n.constructor?c&&l(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=g(t);return A(r,"source")||(r.source=E(w,"string"==typeof e?e:"")),t};Function.prototype.toString=x((function(){return i(this)&&s(this).source||u(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(3353),A=n(9670),c=n(4948),a=TypeError,u=Object.defineProperty,f=Object.getOwnPropertyDescriptor,g="enumerable",s="configurable",v="writable";e.f=r?i?function(t,e,n){if(A(t),e=c(e),A(n),"function"==typeof t&&"prototype"===e&&"value"in n&&v in n&&!n[v]){var r=f(t,e);r&&r[v]&&(t[e]=n.value,n={configurable:s in n?n[s]:r[s],enumerable:g in n?n[g]:r[g],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(A(t),e=c(e),A(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},9518:function(t,e,n){var r=n(2597),o=n(614),i=n(7908),A=n(6200),c=n(9920),a=A("IE_PROTO"),u=Object,f=u.prototype;t.exports=c?u.getPrototypeOf:function(t){var e=i(t);if(r(e,a))return e[a];var n=e.constructor;return o(n)&&e instanceof n?n.prototype:e instanceof u?f:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},7674:function(t,e,n){var r=n(5668),o=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=r(Object.prototype,"__proto__","set"))(n,[]),e=n instanceof Array}catch(A){}return function(n,r){return o(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),o=n(614),i=n(111),A=TypeError;t.exports=function(t,e){var n,c;if("string"===e&&o(n=t.toString)&&!i(c=r(n,t)))return c;if(o(n=t.valueOf)&&!i(c=r(n,t)))return c;if("string"!==e&&o(n=t.toString)&&!i(c=r(n,t)))return c;throw A("Can't convert object to primitive value")}},4488:function(t,e,n){var r=n(8554),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),i="__core-js_shared__",A=r[i]||o(i,{});t.exports=A},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),o=n(7293),i=n(7854).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},4590:function(t,e,n){var r=n(3002),o=RangeError;t.exports=function(t,e){var n=r(t);if(n%e)throw o("Wrong offset");return n}},3002:function(t,e,n){var r=n(9303),o=RangeError;t.exports=function(t){var e=r(t);if(e<0)throw o("The argument can't be less than 0");return e}},7593:function(t,e,n){var r=n(6916),o=n(111),i=n(2190),A=n(8173),c=n(2140),a=n(5112),u=TypeError,f=a("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,a=A(t,f);if(a){if(void 0===e&&(e="default"),n=r(a,t,e),!o(n)||i(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),A=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+A(++o+i,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),o=n(614),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),A=n(9711),c=n(6293),a=n(3307),u=r.Symbol,f=o("wks"),g=a?u.for||u:u&&u.withoutSetter||A;t.exports=function(t){return i(f,t)||(f[t]=c&&i(u,t)?u[t]:g("Symbol."+t)),f[t]}},3462:function(t,e,n){var r=n(7854),o=n(6916),i=n(260),A=n(6244),c=n(4590),a=n(7908),u=n(7293),f=r.RangeError,g=r.Int8Array,s=g&&g.prototype,v=s&&s.set,l=i.aTypedArray,p=i.exportTypedArrayMethod,y=!u((function(){var t=new Uint8ClampedArray(2);return o(v,t,{length:1,0:3},1),3!==t[1]})),E=y&&i.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var t=new g(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));p("set",(function(t){l(this);var e=c(arguments.length>1?arguments[1]:void 0,1),n=a(t);if(y)return o(v,this,n,e);var r=this.length,i=A(n),u=0;if(i+e>r)throw f("Wrong length");for(;u<i;)this[e+u]=n[u++]}),!y||E)},2944:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(7294),o=n(4160),i=n(5268);const A=t=>{let{itemLink:e,content:n,isActive:i}=t;return r.createElement(o.rU,{to:e,className:`text-white mr-4 p-2 rounded text-center transform transition-transform duration-500 ${i?"bg-rose-900":"hover:bg-rose-700"} hover:scale-110`},n)};var c=()=>{const t=(0,i.useLocation)();return r.createElement("nav",{className:"flex flex-wrap bg-rose-800 p-3 justify-between shadow-dark-mild fixed top-0 w-full"},r.createElement("div",{className:"container mx-auto flex justify-between"},r.createElement("div",{className:"flex items-center"},r.createElement(o.rU,{to:"/"},r.createElement("img",{src:"data:image/png;base64,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",alt:"Website Logo",className:"h-12 w-auto object-contain rounded transform transition-transform duration-500 hover:scale-110",loading:"lazy"})),r.createElement("span",{className:"ml-3 text-white text-xl font-bold"},"Chris Pitre")),r.createElement("div",{className:"flex items-center"},r.createElement(A,{itemLink:"/",content:"Home",isActive:"/"===t.pathname}),r.createElement(A,{itemLink:"/about",content:"About Me",isActive:"/about/"===t.pathname}),r.createElement(A,{itemLink:"/projects",content:"Projects",isActive:"/projects/"===t.pathname}))))};var a=t=>{let{pageTitle:e,children:n}=t;return r.createElement("div",null,r.createElement(c,null),r.createElement("main",null,r.createElement("div",{className:"text-center"},n)))}},7200:function(t,e,n){n.r(e),n.d(e,{Head:function(){return A}});n(3462);var r=n(7294),o=n(2944);const i=()=>{const t=r.useRef(null);return r.useEffect((()=>{const e=t.current;if(!e)return;const n=e.getContext("webgl");if(!n)return;const r=n.createShader(n.VERTEX_SHADER);if(!r)return;n.shaderSource(r,"\n        attribute vec2 position;\n        \n        void main() {\n            gl_Position = vec4(position, 0, 1);\n        }\n        "),n.compileShader(r);const o=n.createShader(n.FRAGMENT_SHADER);if(!o)return;n.shaderSource(o,"\n        precision mediump float;\n\n        uniform float u_time;\n        uniform vec2 u_resolution;\n\n        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n        vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }\n        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\n\n        vec3 fade(vec3 t) {\n            return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n        }\n\n        float noise(vec3 P) {\n            vec3 i0 = floor(P);\n            vec3 i1 = i0 + vec3(1.0);\n            vec3 f0 = fract(P);\n            vec3 f1 = f0 - vec3(1.0);\n            vec3 f = fade(f0);\n\n            vec4 ix = vec4(i0.x, i1.x, i0.x, i1.x);\n            vec4 iy = vec4(i0.y, i0.y, i1.y, i1.y);\n            vec4 iz0 = vec4(i0.z);\n            vec4 iz1 = vec4(i1.z);\n\n            vec4 ixy = permute(permute(ix) + iy);\n            vec4 ixy0 = permute(ixy + iz0);\n            vec4 ixy1 = permute(ixy + iz1);\n\n            vec4 gx0 = ixy0 * (1.0 / 7.0);\n            vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n            gx0 = fract(gx0);\n            vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n            vec4 sz0 = step(gz0, vec4(0.0));\n            gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n            gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n            vec4 gx1 = ixy1 * (1.0 / 7.0);\n            vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n            gx1 = fract(gx1);\n            vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n            vec4 sz1 = step(gz1, vec4(0.0));\n            gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n            gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n            vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n            vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n            vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n            vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n            vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n            vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n            vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n            vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n\n            vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n            g000 *= norm0.x;\n            g010 *= norm0.y;\n            g100 *= norm0.z;\n            g110 *= norm0.w;\n            vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n            g001 *= norm1.x;\n            g011 *= norm1.y;\n            g101 *= norm1.z;\n            g111 *= norm1.w;\n\n            float n000 = dot(g000, f0);\n            float n100 = dot(g100, vec3(f1.x, f0.yz));\n            float n010 = dot(g010, vec3(f0.x, f1.y, f0.z));\n            float n110 = dot(g110, vec3(f1.xy, f0.z));\n            float n001 = dot(g001, vec3(f0.xy, f1.z));\n            float n101 = dot(g101, vec3(f1.x, f0.y, f1.z));\n            float n011 = dot(g011, vec3(f0.x, f1.yz));\n            float n111 = dot(g111, f1);\n\n            vec3 fade_xyz = fade(f);\n            vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n            vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n            float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n            return 2.2 * n_xyz;\n        }\n\n\n        void main() {\n            vec2 uv = (2.0 * gl_FragCoord.xy - u_resolution.xy) / u_resolution.y;\n\n            vec2 noiseOffset1 = vec2(noise(vec3(uv, u_time * 0.5)), noise(vec3(uv + 10.0, u_time * 0.5))) * 0.3;\n            vec2 noiseOffset2 = vec2(noise(vec3(uv + 20.0, u_time * 0.5)), noise(vec3(uv + 30.0, u_time * 0.5))) * 0.3;\n            vec2 noiseOffset3 = vec2(noise(vec3(uv + 40.0, u_time * 0.5)), noise(vec3(uv + 50.0, u_time * 0.5))) * 0.3;\n\n            vec2 c1 = 0.8 * sin(u_time * 1.0 + vec2(4.0, 0.5) + 1.0) + noiseOffset1;\n            vec2 c2 = 0.8 * sin(u_time * 1.3 + vec2(1.0, 2.0) + 2.0) + noiseOffset2;\n            vec2 c3 = 0.8 * sin(u_time * 1.5 + vec2(0.0, 2.0) + 4.0) + noiseOffset3;\n\n            float v = 0.0;\n            v += 1.0 - smoothstep(0.0, 0.7, length(uv-c1)); \n            v += 1.0 - smoothstep(0.0, 0.7, length(uv-c2)); \n            v += 1.0 - smoothstep(0.0, 0.7, length(uv-c3)); \n\n            vec3 rose600 = vec3(0.6235294117647059, 0.07058823529411765, 0.2235294117647059);\n            vec3 rose800 = vec3(0.8823529411764706, 0.11372549019607843, 0.2823529411764706);\n\n            vec3 col = mix(vec3(0.0), rose600, smoothstep(0.01, 1.0, v));\n            col = mix(col, rose800, smoothstep(0.3, 1.0, v));\n\n            gl_FragColor = vec4(col, 1.0);\n        }\n        "),n.compileShader(o);const i=n.createProgram();if(!i)return;n.attachShader(i,r),n.attachShader(i,o),n.linkProgram(i),n.useProgram(i);const A=n.getAttribLocation(i,"position");n.enableVertexAttribArray(A);const c=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,c);n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,-1,1,1]),n.STATIC_DRAW),n.vertexAttribPointer(A,2,n.FLOAT,!1,0,0),n.drawArrays(n.TRIANGLE_STRIP,0,4);const a=n.getUniformLocation(i,"u_resolution");n.uniform2f(a,e.width,e.height);const u=n.getUniformLocation(i,"u_time");let f=Date.now();!function t(){const e=(Date.now()-f)/1e3;null==n||n.uniform1f(u,e),null==n||n.clearColor(0,0,0,1),null==n||n.clear(n.COLOR_BUFFER_BIT),null==n||n.drawArrays(n.TRIANGLE_STRIP,0,4),requestAnimationFrame(t)}()}),[]),r.createElement("div",{className:"grid place-items-center h-screen"},r.createElement("canvas",{ref:t,className:"w-full h-full col-start-1 row-start-1"}),r.createElement("div",{className:"col-start-1 row-start-1 rounded-md bg-gradient-to-t from-slate-300 to-slate-100"},r.createElement("h1",{className:"text-5xl mx-10"},"Welcome to my Portfolio!")))},A=()=>r.createElement("title",null,"Home Page");e.default=()=>r.createElement(o.Z,{pageTitle:"Home Page"},r.createElement(i,null))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-04d66f71f7fab1fc7943.js.map