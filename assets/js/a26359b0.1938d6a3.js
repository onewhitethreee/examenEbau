"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3572],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,u(u({ref:t},p),{},{components:r})):n.createElement(b,u({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},53382:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),u=["components"],i={slug:"js-code-deobfuscator",title:"JS\u4ee3\u7801\u4e4b\u8fd8\u539f",date:new Date("2021-12-25T00:00:00.000Z"),authors:"kuizuo",tags:["javascript","ast","reverse","project"],sticky:!0},c=void 0,l={permalink:"/examenEbau/js-code-deobfuscator",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/JS\u4ee3\u7801\u4e4b\u8fd8\u539f.md",source:"@site/blog/develop/JS\u4ee3\u7801\u4e4b\u8fd8\u539f.md",title:"JS\u4ee3\u7801\u4e4b\u8fd8\u539f",description:"\u57fa\u4e8e Babel \u5bf9 JS \u4ee3\u7801\u8fdb\u884c\u6df7\u6dc6\u4e0e\u8fd8\u539f\u64cd\u4f5c\u7684\u7f51\u7ad9 JS \u4ee3\u7801\u6df7\u6dc6\u4e0e\u8fd8\u539f (kuizuo.cn)",date:"2021-12-25T00:00:00.000Z",formattedDate:"2021\u5e7412\u670825\u65e5",tags:[{label:"javascript",permalink:"/examenEbau/tags/javascript"},{label:"ast",permalink:"/examenEbau/tags/ast"},{label:"reverse",permalink:"/examenEbau/tags/reverse"},{label:"project",permalink:"/examenEbau/tags/project"}],readingTime:18.983333333333334,truncated:!0,authors:[{name:"\u6127\u600d",title:"\u7f16\u7a0b\u7231\u597d\u8005 / \u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"js-code-deobfuscator",title:"JS\u4ee3\u7801\u4e4b\u8fd8\u539f",date:"2021-12-25T00:00:00.000Z",authors:"kuizuo",tags:["javascript","ast","reverse","project"],sticky:!0},prevItem:{title:"\u4e3a\u4f55\u6211\u9009\u62e9\u65e5\u591c\u98a0\u5012\u6572\u4ee3\u7801",permalink:"/examenEbau/why-i-turn-night-into-day-to-code"},nextItem:{title:"JS\u4ee3\u7801\u4e4b\u6df7\u6dc6",permalink:"/examenEbau/js-code-obfuscator"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u57fa\u4e8e Babel \u5bf9 JS \u4ee3\u7801\u8fdb\u884c\u6df7\u6dc6\u4e0e\u8fd8\u539f\u64cd\u4f5c\u7684\u7f51\u7ad9 ",(0,a.kt)("a",{parentName:"p",href:"http://deobfuscator.kuizuo.cn/"},"JS \u4ee3\u7801\u6df7\u6dc6\u4e0e\u8fd8\u539f (kuizuo.cn)")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/20220131193110.png",alt:"js-de-obfuscator"})))}m.isMDXComponent=!0}}]);