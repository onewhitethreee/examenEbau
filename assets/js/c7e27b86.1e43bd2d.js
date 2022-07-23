"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5179],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,b=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11866:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={slug:"remote-call-browser-function",title:"RPC\u8fdc\u7a0b\u8c03\u7528\u6d4f\u89c8\u5668\u51fd\u6570",date:new Date("2021-10-09T00:00:00.000Z"),authors:"kuizuo",tags:["javascript","rpc","browser"],sticky:!0},l=void 0,u={permalink:"/remote-call-browser-function",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/RPC\u8fdc\u7a0b\u8c03\u7528\u6d4f\u89c8\u5668\u51fd\u6570.md",source:"@site/blog/develop/RPC\u8fdc\u7a0b\u8c03\u7528\u6d4f\u89c8\u5668\u51fd\u6570.md",title:"RPC\u8fdc\u7a0b\u8c03\u7528\u6d4f\u89c8\u5668\u51fd\u6570",description:"\u65e9\u95fb RPC\uff08Remote Procedure Call\uff09\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\uff0c\u8fd9\u4e00\u8bcd\u4e86\uff0c\u5e94\u8be5\u662f\u5728\u5b89\u5353\u9006\u5411\u7684\u65f6\u5019\u542c\u95fb\u7684\uff0c\u5f53\u65f6\u5439\u5618\u7684\u610f\u601d\u662f\u8fd9\u6837\u7684\uff0c\u901a\u8fc7\u53e6\u4e00\u4e2a\u8fdc\u7aef\u670d\u52a1\u5668\u6765\u8c03\u7528\u5b89\u5353\u4ee3\u7801\u4e2d\u7684\u51fd\u6570\uff0c\u5e76\u5c06\u6267\u884c\u540e\u7684\u7ed3\u679c\u8fd4\u56de\u3002\u6bd4\u5982\u6709\u4e00\u4e2a\u52a0\u5bc6\u7b97\u6cd5\uff0c\u5982\u679c\u8981\u5b9e\u73b0\u8131\u673a\uff08\u8131\u79bb\u5f53\u524d\u73af\u5883\uff09\u8fd0\u884c\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u6263\u9664\u76f8\u5bf9\u5e94\u7684\u4ee3\u7801\uff0c\u8865\u9f50\u5bf9\u5e94\u7684\u73af\u5883\uff08\u6a21\u5757\uff0c\u4e0a\u4e0b\u6587\uff0c\u8bed\u8a00\uff09\uff0c\u7136\u800c\u8981\u5728\u8865\u9f50\u8be5\u52a0\u5bc6\u7b97\u6cd5\u7684\u73af\u5883\u53ef\u4e0d\u597d\u5b9e\u73b0\uff0c\u800c\u901a\u8fc7 RPC \u5219\u53ef\u4ee5\u514d\u9664\u6263\u4ee3\u7801\uff0c\u901a\u8fc7\u6570\u636e\u901a\u4fe1\u6765\u8fbe\u5230\u8fdc\u7a0b\u8c03\u7528\u7684\u76ee\u7684\uff0c\u542c\u8d77\u6765\u662f\u633a\u725b\u903c\u7684\uff0c\u5b9e\u9645\u4e0a\u4e5f\u786e\u5b9e\u633a\u9a9a\u7684\u3002\u8fd9\u91cc\u6211\u5c06\u4ee5\u6d4f\u89c8\u5668\u4e0e\u672c\u5730\u642d\u5efa\u4e00\u4e2a websocket \u6765\u5b9e\u73b0\u8c03\u7528\u6d4f\u89c8\u5668\u5185\u7684\u51fd\u6570\u3002",date:"2021-10-09T00:00:00.000Z",formattedDate:"2021\u5e7410\u67089\u65e5",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"rpc",permalink:"/tags/rpc"},{label:"browser",permalink:"/tags/browser"}],readingTime:9.496666666666666,truncated:!0,authors:[{name:"\u6127\u600d",title:"\u7f16\u7a0b\u7231\u597d\u8005 / \u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"remote-call-browser-function",title:"RPC\u8fdc\u7a0b\u8c03\u7528\u6d4f\u89c8\u5668\u51fd\u6570",date:"2021-10-09T00:00:00.000Z",authors:"kuizuo",tags:["javascript","rpc","browser"],sticky:!0},prevItem:{title:"JS\u51fd\u6570hook",permalink:"/js-function-hook"},nextItem:{title:"\u8bb0 ThinkPHP \u9879\u76ee\u90e8\u7f72",permalink:"/thinkphp-deploy"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u65e9\u95fb RPC\uff08Remote Procedure Call\uff09\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\uff0c\u8fd9\u4e00\u8bcd\u4e86\uff0c\u5e94\u8be5\u662f\u5728\u5b89\u5353\u9006\u5411\u7684\u65f6\u5019\u542c\u95fb\u7684\uff0c\u5f53\u65f6\u5439\u5618\u7684\u610f\u601d\u662f\u8fd9\u6837\u7684\uff0c\u901a\u8fc7\u53e6\u4e00\u4e2a\u8fdc\u7aef\u670d\u52a1\u5668\u6765\u8c03\u7528\u5b89\u5353\u4ee3\u7801\u4e2d\u7684\u51fd\u6570\uff0c\u5e76\u5c06\u6267\u884c\u540e\u7684\u7ed3\u679c\u8fd4\u56de\u3002\u6bd4\u5982\u6709\u4e00\u4e2a\u52a0\u5bc6\u7b97\u6cd5\uff0c\u5982\u679c\u8981\u5b9e\u73b0\u8131\u673a\uff08\u8131\u79bb\u5f53\u524d\u73af\u5883\uff09\u8fd0\u884c\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u6263\u9664\u76f8\u5bf9\u5e94\u7684\u4ee3\u7801\uff0c\u8865\u9f50\u5bf9\u5e94\u7684\u73af\u5883\uff08\u6a21\u5757\uff0c\u4e0a\u4e0b\u6587\uff0c\u8bed\u8a00\uff09\uff0c\u7136\u800c\u8981\u5728\u8865\u9f50\u8be5\u52a0\u5bc6\u7b97\u6cd5\u7684\u73af\u5883\u53ef\u4e0d\u597d\u5b9e\u73b0\uff0c\u800c\u901a\u8fc7 RPC \u5219\u53ef\u4ee5\u514d\u9664\u6263\u4ee3\u7801\uff0c\u901a\u8fc7\u6570\u636e\u901a\u4fe1\u6765\u8fbe\u5230\u8fdc\u7a0b\u8c03\u7528\u7684\u76ee\u7684\uff0c\u542c\u8d77\u6765\u662f\u633a\u725b\u903c\u7684\uff0c\u5b9e\u9645\u4e0a\u4e5f\u786e\u5b9e\u633a\u9a9a\u7684\u3002\u8fd9\u91cc\u6211\u5c06\u4ee5\u6d4f\u89c8\u5668\u4e0e\u672c\u5730\u642d\u5efa\u4e00\u4e2a websocket \u6765\u5b9e\u73b0\u8c03\u7528\u6d4f\u89c8\u5668\u5185\u7684\u51fd\u6570\u3002"))}m.isMDXComponent=!0}}]);