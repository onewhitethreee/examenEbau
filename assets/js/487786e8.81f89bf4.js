"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4468],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),i=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return s.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},k=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=i(n),m=r,w=k["".concat(c,".").concat(m)]||k[m]||u[m]||o;return n?s.createElement(w,a(a({ref:t},p),{},{components:n})):s.createElement(w,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var i=2;i<o;i++)a[i]=n[i];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}k.displayName="MDXCreateElement"},30851:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var s=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],l={slug:"remote-call-browser-function",title:"RPC\u8fdc\u7a0b\u8c03\u7528\u6d4f\u89c8\u5668\u51fd\u6570",date:new Date("2021-10-09T00:00:00.000Z"),authors:"kuizuo",tags:["javascript","rpc","browser"],sticky:!0},c=void 0,i={permalink:"/remote-call-browser-function",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/RPC\u8fdc\u7a0b\u8c03\u7528\u6d4f\u89c8\u5668\u51fd\u6570.md",source:"@site/blog/develop/RPC\u8fdc\u7a0b\u8c03\u7528\u6d4f\u89c8\u5668\u51fd\u6570.md",title:"RPC\u8fdc\u7a0b\u8c03\u7528\u6d4f\u89c8\u5668\u51fd\u6570",description:"\u65e9\u95fb RPC\uff08Remote Procedure Call\uff09\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\uff0c\u8fd9\u4e00\u8bcd\u4e86\uff0c\u5e94\u8be5\u662f\u5728\u5b89\u5353\u9006\u5411\u7684\u65f6\u5019\u542c\u95fb\u7684\uff0c\u5f53\u65f6\u5439\u5618\u7684\u610f\u601d\u662f\u8fd9\u6837\u7684\uff0c\u901a\u8fc7\u53e6\u4e00\u4e2a\u8fdc\u7aef\u670d\u52a1\u5668\u6765\u8c03\u7528\u5b89\u5353\u4ee3\u7801\u4e2d\u7684\u51fd\u6570\uff0c\u5e76\u5c06\u6267\u884c\u540e\u7684\u7ed3\u679c\u8fd4\u56de\u3002\u6bd4\u5982\u6709\u4e00\u4e2a\u52a0\u5bc6\u7b97\u6cd5\uff0c\u5982\u679c\u8981\u5b9e\u73b0\u8131\u673a\uff08\u8131\u79bb\u5f53\u524d\u73af\u5883\uff09\u8fd0\u884c\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u6263\u9664\u76f8\u5bf9\u5e94\u7684\u4ee3\u7801\uff0c\u8865\u9f50\u5bf9\u5e94\u7684\u73af\u5883\uff08\u6a21\u5757\uff0c\u4e0a\u4e0b\u6587\uff0c\u8bed\u8a00\uff09\uff0c\u7136\u800c\u8981\u5728\u8865\u9f50\u8be5\u52a0\u5bc6\u7b97\u6cd5\u7684\u73af\u5883\u53ef\u4e0d\u597d\u5b9e\u73b0\uff0c\u800c\u901a\u8fc7 RPC \u5219\u53ef\u4ee5\u514d\u9664\u6263\u4ee3\u7801\uff0c\u901a\u8fc7\u6570\u636e\u901a\u4fe1\u6765\u8fbe\u5230\u8fdc\u7a0b\u8c03\u7528\u7684\u76ee\u7684\uff0c\u542c\u8d77\u6765\u662f\u633a\u725b\u903c\u7684\uff0c\u5b9e\u9645\u4e0a\u4e5f\u786e\u5b9e\u633a\u9a9a\u7684\u3002\u8fd9\u91cc\u6211\u5c06\u4ee5\u6d4f\u89c8\u5668\u4e0e\u672c\u5730\u642d\u5efa\u4e00\u4e2a websocket \u6765\u5b9e\u73b0\u8c03\u7528\u6d4f\u89c8\u5668\u5185\u7684\u51fd\u6570\u3002",date:"2021-10-09T00:00:00.000Z",formattedDate:"2021\u5e7410\u67089\u65e5",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"rpc",permalink:"/tags/rpc"},{label:"browser",permalink:"/tags/browser"}],readingTime:9.496666666666666,truncated:!0,authors:[{name:"examenEbau",title:"examenEbau",url:"https://examenebau.com",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"remote-call-browser-function",title:"RPC\u8fdc\u7a0b\u8c03\u7528\u6d4f\u89c8\u5668\u51fd\u6570",date:"2021-10-09T00:00:00.000Z",authors:"kuizuo",tags:["javascript","rpc","browser"],sticky:!0},prevItem:{title:"JS\u51fd\u6570hook",permalink:"/js-function-hook"},nextItem:{title:"\u8bb0 ThinkPHP \u9879\u76ee\u90e8\u7f72",permalink:"/thinkphp-deploy"}},p={authorsImageUrls:[void 0]},u=[{value:"\u7b97\u6cd5\u4f8b\u5b50",id:"\u7b97\u6cd5\u4f8b\u5b50",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2},{value:"Nodejs \u5b9e\u73b0 Websocket \u670d\u52a1\u7aef",id:"nodejs-\u5b9e\u73b0-websocket-\u670d\u52a1\u7aef",level:3},{value:"\u5b89\u88c5 ws \u6a21\u5757",id:"\u5b89\u88c5-ws-\u6a21\u5757",level:4},{value:"\u4ee3\u7801\u4f8b\u5b50",id:"\u4ee3\u7801\u4f8b\u5b50",level:4},{value:"\u6d4f\u89c8\u5668\u5b9e\u73b0 websocket",id:"\u6d4f\u89c8\u5668\u5b9e\u73b0-websocket",level:3},{value:"\u4f18\u5316\u6267\u884c\u6d41\u7a0b",id:"\u4f18\u5316\u6267\u884c\u6d41\u7a0b",level:2},{value:"\u601d\u8def",id:"\u601d\u8def",level:2},{value:"\u6d4f\u89c8\u5668\u7aef",id:"\u6d4f\u89c8\u5668\u7aef",level:3},{value:"\u7528\u6237\u8c03\u7528\u7aef",id:"\u7528\u6237\u8c03\u7528\u7aef",level:3},{value:"websocket \u670d\u52a1\u7aef",id:"websocket-\u670d\u52a1\u7aef",level:3},{value:"HTTP \u534f\u8bae\u8c03\u7528\u5b9e\u73b0",id:"http-\u534f\u8bae\u8c03\u7528\u5b9e\u73b0",level:2},{value:"\u4ee3\u7801\u5730\u5740",id:"\u4ee3\u7801\u5730\u5740",level:2}],k={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u65e9\u95fb RPC\uff08Remote Procedure Call\uff09\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\uff0c\u8fd9\u4e00\u8bcd\u4e86\uff0c\u5e94\u8be5\u662f\u5728\u5b89\u5353\u9006\u5411\u7684\u65f6\u5019\u542c\u95fb\u7684\uff0c\u5f53\u65f6\u5439\u5618\u7684\u610f\u601d\u662f\u8fd9\u6837\u7684\uff0c\u901a\u8fc7\u53e6\u4e00\u4e2a\u8fdc\u7aef\u670d\u52a1\u5668\u6765\u8c03\u7528\u5b89\u5353\u4ee3\u7801\u4e2d\u7684\u51fd\u6570\uff0c\u5e76\u5c06\u6267\u884c\u540e\u7684\u7ed3\u679c\u8fd4\u56de\u3002\u6bd4\u5982\u6709\u4e00\u4e2a\u52a0\u5bc6\u7b97\u6cd5\uff0c\u5982\u679c\u8981\u5b9e\u73b0\u8131\u673a\uff08\u8131\u79bb\u5f53\u524d\u73af\u5883\uff09\u8fd0\u884c\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u6263\u9664\u76f8\u5bf9\u5e94\u7684\u4ee3\u7801\uff0c\u8865\u9f50\u5bf9\u5e94\u7684\u73af\u5883\uff08\u6a21\u5757\uff0c\u4e0a\u4e0b\u6587\uff0c\u8bed\u8a00\uff09\uff0c\u7136\u800c\u8981\u5728\u8865\u9f50\u8be5\u52a0\u5bc6\u7b97\u6cd5\u7684\u73af\u5883\u53ef\u4e0d\u597d\u5b9e\u73b0\uff0c\u800c\u901a\u8fc7 RPC \u5219\u53ef\u4ee5\u514d\u9664\u6263\u4ee3\u7801\uff0c\u901a\u8fc7\u6570\u636e\u901a\u4fe1\u6765\u8fbe\u5230\u8fdc\u7a0b\u8c03\u7528\u7684\u76ee\u7684\uff0c\u542c\u8d77\u6765\u662f\u633a\u725b\u903c\u7684\uff0c\u5b9e\u9645\u4e0a\u4e5f\u786e\u5b9e\u633a\u9a9a\u7684\u3002\u8fd9\u91cc\u6211\u5c06\u4ee5\u6d4f\u89c8\u5668\u4e0e\u672c\u5730\u642d\u5efa\u4e00\u4e2a websocket \u6765\u5b9e\u73b0\u8c03\u7528\u6d4f\u89c8\u5668\u5185\u7684\u51fd\u6570\u3002"),(0,o.kt)("h2",{id:"\u7b97\u6cd5\u4f8b\u5b50"},"\u7b97\u6cd5\u4f8b\u5b50"),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u6240\u91c7\u7528\u7684\u662f\u767e\u5ea6\u767b\u5f55\u7684\u5bc6\u7801\u52a0\u5bc6\u7b97\u6cd5\uff0c\u5177\u4f53\u9006\u5411\u5b9e\u73b0\u5c31\u4e0d\u7ec6\u5199\u4e86\uff0c\u501f\u7528\u89c6\u9891\u6559\u7a0b",(0,o.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Kh411r7uR?p=36"},"\u5fd7\u8fdc 2021 \u5168\u65b0 js \u9006\u5411 RPC")),(0,o.kt)("p",null,"\u901a\u8fc7\u5173\u952e\u8bcd",(0,o.kt)("inlineCode",{parentName:"p"},"password:")," \u4fbf\u53ef\u627e\u5230\u5bf9\u5e94\u7684\u52a0\u5bc6\u5730\u70b9\uff0c\u627e\u5230\u52a0\u5bc6\u8c03\u7528\u7684\u51fd\u6570\u6240\u51fa\u73b0\u7684\u4f4d\u7f6e\uff08loginv5.js 8944 \u884c\uff09\uff0c\u53d1\u73b0\u901a\u8fc7\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"e.RSA.encrypt(s)"),"\uff08\u5176\u4e2d s \u4e3a\u660e\u6587 ",(0,o.kt)("inlineCode",{parentName:"p"},"a123456"),"\uff09\uff0c\u4fbf\u53ef\u5f97\u5230\u52a0\u5bc6\u540e\u7684\u7ed3\u679c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211008042148653.png",alt:"image-20211008042148653"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211008041300534.png",alt:"image-20211008041300534"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"e.RSA.encrypt(s)\n'Zhge9q9jkiMA0UTfHxwNeyafnuUG8rcAh/gKfQpZiOQq8EYI/tJO83lKr52c4Im3cew3wVcINf2jEGEqH5EimnMI3g6eOjcdqduGyqynA4JjMJ0wltGdL8VUTTJsknsHUQlJXHOm/7zqx4NaBvOzhWzdDBk5cAOJ2DXgPaqoygg='\n")),(0,o.kt)("p",null,"\u6309\u7167\u5f80\u5e38\u7684\u505a\u6cd5\uff0c\u9700\u8981\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"e.RSA.encrypt(s)"),"\u6240\u7528\u7684\u4ee3\u7801\u5904\u5355\u72ec\u62a0\u51fa\u6765\uff0c\u653e\u5728 V8 \u5f15\u64ce\u4e0a\u6d4b\u8bd5\u6216\u4f7f\u7528\u73b0\u6709\u7684\u52a0\u5bc6\u5e93 \u5982 CryptoJS\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u5bc6\u94a5\u6765\u8fdb\u884c\u52a0\u5bc6\u3002\u4e0d\u8fc7\u8fd9\u91cc\u4f7f\u7528 RPC \u6765\u5b9e\u73b0\u8be5\u7b97\u6cd5\u7684\u8c03\u7528\u3002"),(0,o.kt)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,o.kt)("p",null,"\u76ee\u524d\u8c03\u7528\u7684\u73af\u5883\u6709\u4e86\uff08\u6d4f\u89c8\u5668\u73af\u5883\uff09\uff0c\u53ea\u8981\u6211\u4eec\u8fd9\u4e2a\u6d4f\u89c8\u5668\u4e0d\u505c\u6b62\uff08\u4f7f\u7528\u65e0\u5934\u6d4f\u89c8\u5668\u8fd0\u884c\uff09\uff0c\u63a7\u5236\u53f0\u4fbf\u80fd\u4e00\u76f4\u8f93\u51fa\u6211\u4eec\u60f3\u8981\u7684\u52a0\u5bc6\u540e\u7ed3\u679c\u3002\u6240\u4ee5\u8981\u5b9e\u73b0\u7684\u76ee\u7684\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u5176\u4ed6\u7a97\u53e3\uff08\u6307\u5176\u4ed6\u8bed\u8a00\u6240\u5b9e\u73b0\u7684\u7a0b\u5e8f\uff09\uff0c\u80fd\u8fdc\u7a0b\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"e.RSA.encrypt(s)"),"\u5e76\u5c06\u7ed3\u679c\u8f93\u51fa\u5230\u5176\u4ed6\u7a97\u53e3\u3002"),(0,o.kt)("p",null,"\u90a3\u4e48\u5c31\u9700\u8981\u5efa\u7acb\u901a\u4fe1\u534f\u8bae\u4e86\uff0c\u8fd9\u91cc\u6211\u6240\u91c7\u7528\u7684\u662f\u6d4f\u89c8\u5668\u81ea\u5e26\u7684 Websocket \u5ba2\u6237\u7aef\u4e0e Nodejs \u642d\u5efa\u7684 Websocket \u670d\u52a1\u7aef\u6765\u8fdb\u884c\u901a\u4fe1\uff0c\u4f17\u6240\u5468\u77e5 HTTP \u8bf7\u6c42\u662f\u65e0\u6cd5\u53cc\u5411\u4f20\u8f93\u7684\u3002\u6240\u4ee5\u4f7f\u7528 websocket \u8fd9\u6837\u670d\u52a1\u7aef\u5c31\u53ef\u4ee5\u4e3b\u52a8\u5411\u6d4f\u89c8\u5668\u53d1\u9001\u8bf7\u6c42\uff0c\u540c\u65f6 websocket \u5728\u5f53\u524d\u8fd9\u4e2a\u73af\u5883\u4e0b\u597d\u5b9e\u73b0\u3002"),(0,o.kt)("h3",{id:"nodejs-\u5b9e\u73b0-websocket-\u670d\u52a1\u7aef"},"Nodejs \u5b9e\u73b0 Websocket \u670d\u52a1\u7aef"),(0,o.kt)("h4",{id:"\u5b89\u88c5-ws-\u6a21\u5757"},"\u5b89\u88c5 ws \u6a21\u5757"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install ws -S\nnpm install @types/ws -D\n")),(0,o.kt)("p",null,"\u8fd9\u91cc\u4e4b\u6240\u4ee5\u9009 ws\uff0c\u662f\u56e0\u4e3a ws \u5bf9\u4e8e Websocket \u534f\u8bae\u800c\u5df2\uff0c\u5b9e\u73b0\u65b9\u4fbf\uff0c\u4e14\u901f\u5ea6\u6700\u5feb\uff0c\u5e76\u4e14\u6d4f\u89c8\u5668\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"let ws = new Websocket()"),"\u6765\u521b\u5efa\u5ba2\u6237\u7aef\u76f4\u63a5\u8fde\u63a5\uff0c\u800c\u4f7f\u7528 socket.io \u7684\u8bdd\uff0c\u6d4f\u89c8\u5668\u5219\u9700\u8981\u8f7d\u5165 socket.io \u5ba2\u6237\u7aef\u6587\u4ef6\uff0c\u7e41\u7410\u3002"),(0,o.kt)("h4",{id:"\u4ee3\u7801\u4f8b\u5b50"},"\u4ee3\u7801\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js"',title:'"server.js"'},"import WebSocket, { WebSocketServer } from 'ws'\n\nlet ws = new WebSocketServer({\n  port: 8080,\n})\n\nws.on('connection', (socket) => {\n  function message(msg) {\n    console.log('\u63a5\u53d7\u5230\u7684msg: ' + msg)\n    socket.send('\u6211\u63a5\u53d7\u5230\u4f60\u7684\u6570\u636e: ' + msg)\n  }\n\n  socket.on('message', message)\n})\n")),(0,o.kt)("p",null,"\u4f7f\u7528 WebSocket \u5728\u7ebf\u6d4b\u8bd5\u7f51\u7ad9",(0,o.kt)("a",{parentName:"p",href:"http://www.websocket-test.com/"},"websocket \u5728\u7ebf\u6d4b\u8bd5 (websocket-test.com)")),(0,o.kt)("p",null,"\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211008043925753.png",alt:"image-20211008043925753"})),(0,o.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u5199\u7684\u5f88\u7b80\u964b\uff0c\u5c24\u5176\u662f\u6570\u636e\u4ea4\u4e92\u7684\u5730\u65b9\uff0c\u8fd9\u91cc\u53ef\u4ee5\u4f7f\u7528 json \u6765\u6539\u8fdb\u4e00\u4e0b\u3002\u50cf\u8fd9\u6837\uff0c\u81f3\u4e8e\u4e3a\u5565\u7528 try \u662f\u9632\u6b62 json \u6570\u636e\u4e0d\u5bf9\u5bfc\u81f4\u89e3\u6790\u9519\u8bef\uff08\u5177\u4f53\u4ee3\u7801\u5c31\u4e0d\u89e3\u8bfb\u4e86\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js"',title:'"server.js"'},"import WebSocket, { WebSocketServer } from 'ws'\n\nlet ws = new WebSocketServer({ port: 8080 })\n\nws.on('connection', (socket) => {\n  console.log('\u6709\u4eba\u8fde\u63a5\u4e86')\n  function message(data) {\n    try {\n      let json = JSON.parse(data) // data: {\"type\":\"callbackPasswordEnc\",\"value\":\"a123456\"}\n      let { type, value } = json\n      switch (type) {\n        case 'callbackPasswordEnc':\n          // doSomething()\n          console.log('\u5f97\u5230\u7684\u52a0\u5bc6\u5bc6\u6587\u4e3a:' + value)\n          break\n      }\n    } catch (error) {\n      console.error(error)\n    }\n  }\n\n  socket.on('message', message)\n\n  // \u6d4f\u89c8\u5668\u901a\u4fe11\u79d2\u540e\u5411\u6d4f\u89c8\u5668\u8c03\u7528\u52a0\u5bc6\u7b97\u6cd5\n  setTimeout(() => {\n    let jsonStr = JSON.stringify({\n      type: 'getPasswordEnc',\n      value: 'a123456',\n    })\n    socket.send(jsonStr)\n  }, 1000)\n})\n")),(0,o.kt)("h3",{id:"\u6d4f\u89c8\u5668\u5b9e\u73b0-websocket"},"\u6d4f\u89c8\u5668\u5b9e\u73b0 websocket"),(0,o.kt)("p",null,"\u65e2\u7136\u8981\u5b9e\u73b0\u6211\u4eec\u7684\u4ee3\u7801\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u5c06\u6211\u4eec\u7684\u4ee3\u7801\u6ce8\u5165\u5230\u539f\u6765\u7684\u4ee3\u7801\u4e0a\uff0c\u8fd9\u91cc\u6211\u4f7f\u7528\u7684\u662f Chrome \u7684\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u7684\u8986\u76d6\u529f\u80fd\uff0c\u9009\u62e9\u4e00\u4e2a\u672c\u5730\u6587\u4ef6\u5939\uff0c\u5e76\u5141\u8bb8\u6743\u9650\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211008054918531.png",alt:"image-20211008054918531"})),(0,o.kt)("p",null,"\u9009\u62e9\u8981\u66ff\u6362\u4ee3\u7801\u7684\u6587\u4ef6\uff0c\u9009\u62e9\u4fdd\u5b58\u4ee5\u5907\u66ff\u6362\uff08\u524d\u63d0\u5f97\u5f00\u542f\u8986\u76d6\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211008055032125.png",alt:"image-20211008055032125"})),(0,o.kt)("p",null,"\u63a5\u7740\u5728\u8986\u76d6\u4e2d\u627e\u5230\u6587\u4ef6\uff0c\u627e\u5230\u52a0\u5bc6\u7684\u4ee3\u7801\u5757\uff0c\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="browser.js"',title:'"browser.js"'},"!(function () {\n  let url = 'ws://127.0.0.1:8080'\n  let ws = new WebSocket(url)\n\n  // \u6d4f\u89c8\u5668\u8fde\u63a5\u540e\u544a\u8bc9\u670d\u52a1\u7aef\u662f\u6d4f\u89c8\u5668\n  ws.onopen = function (event) {\n    ws.send(JSON.stringify({ type: 'isBrowser', value: true }))\n  }\n\n  ws.onmessage = function (event) {\n    let json = JSON.parse(event.data)\n    let { type, value } = json\n    switch (type) {\n      case 'getPasswordEnc':\n        let passwordEnc = e.RSA.encrypt(value)\n        let jsonStr = JSON.stringify({\n          type: 'callbackPasswordEnc',\n          value: passwordEnc,\n        })\n        console.log(jsonStr)\n        ws.send(jsonStr)\n        break\n    }\n  }\n})()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211008201809446.png",alt:"image-20211008201809446"})),(0,o.kt)("p",null,"\u7136\u540e\u5c31\u662f\u6700\u5173\u952e\u7684\u5730\u65b9\u4e86\uff0c\u89e6\u53d1\u52a0\u5bc6\u51fd\u6570\uff0c\u5e76\u5c06\u7ed3\u679c\u8fd4\u56de\u3002\u89e6\u53d1\u52a0\u5bc6\u51fd\u6570\u53ea\u9700\u8981\u5411\u6d4f\u89c8\u5668\u53d1\u9001\u6307\u5b9a\u6570\u636e",(0,o.kt)("inlineCode",{parentName:"p"},'{"type":"getPasswordEnc","value":"a123456"}'),"\uff0c\u6d4f\u89c8\u5668\u63a5\u53d7\u5230\u5bf9\u5e94\u7684\u7c7b\u578b\u4e0e\u6570\u636e\uff0c\u4fbf\u8c03\u7528\u76f8\u5e94\u7684\u51fd\u6570\uff0c\u5e76\u5c06\u7ed3\u679c",(0,o.kt)("inlineCode",{parentName:"p"},'{"type":"callbackPasswordEnc","value":"FM6SK3XiL5X0RF9NZi7qhIsu7Pd46mfKnn6YkWUNSGrJO+XXhiXyoG8huaqQW4BnmYuo0JVVQj28C+BK/r6NTNbLcV4gMSREB2hYU/oIYedCJsZ9sbZQ89p1aI9kVcDeRlXBhjNUxkcS9Rh+vKzyNApwpbPcAuGTCSZhKst8vVo="}'),"\u8fd4\u56de\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u670d\u52a1\u7aef\u7684\u6548\u679c\u5982\u4e0b\u56fe"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211008204247104.png",alt:"image-20211008204247104"})),(0,o.kt)("h2",{id:"\u4f18\u5316\u6267\u884c\u6d41\u7a0b"},"\u4f18\u5316\u6267\u884c\u6d41\u7a0b"),(0,o.kt)("p",null,"\u5b9e\u73b0\u662f\u5b9e\u73b0\u4e86\uff0c\u4f46\u662f\u4ee3\u7801\u8c8c\u4f3c\u5f88\u4e0d\u4f18\u96c5\uff0c\u751a\u81f3\u6709\u70b9\u522b\u626d\u3002\u6309\u7406\u6765\u8bf4\u56e0\u4e3a\u662f\u6d4f\u89c8\u5668\u4f5c\u4e3a websocket \u670d\u52a1\u7aef\uff0c\u6211\u4eec\u4f5c\u4e3a\u5ba2\u6237\u7aef\uff0c\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u83b7\u53d6\u6570\u636e\u624d\u5408\u7406\uff0c\u4f46\u5728\u8fd9\u91cc\u6d4f\u89c8\u5668\u5f53\u4e0d\u4e86 websocket \u670d\u52a1\u7aef\u8fd9\u4e2a\u89d2\u8272\uff0c\u6240\u4ee5\u53ea\u80fd\u4f7f\u7528\u5982\u6b64\u522b\u626d\u7684\u65b9\u5f0f\u6765\u8c03\u7528\u3002\u50cf\u4e0a\u9762\u4f8b\u5b50\u7684\u8bdd\uff0c\u5982\u679c\u6211\u7684\u7a0b\u5e8f\u8981\u5b9e\u73b0\u4e00\u4e2a\u67d0\u5ea6\u767b\u5f55\u7684\u8bdd\uff0c\u90a3\u4e48\u6211\u8fd9\u4e2a\u7a0b\u5e8f\u5c31\u9700\u8981\u642d\u5efa\u4e00\u4e2a ws \u670d\u52a1\u5668\u6765\u8fdb\u884c\u4e24\u8005\u7684\u901a\u4fe1\uff0c\u6709\u6ca1\u6709\u597d\u7684\u529e\u6cd5\u53c8\u4e0d\u592a\u4f9d\u8d56\u4e8e ws \u670d\u52a1\u7aef\uff0c\u5c31\u50cf http \u90a3\u6837\uff0c\u7a0b\u5e8f\u53ea\u9700\u8981\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\uff0c\u7ed9\u5b9a\u7c7b\u578b\u548c\u6570\u503c\u8fdb\u884c\u52a0\u5bc6\u5904\u7406\u540e\u8fd4\u56de\u5373\u53ef\u3002\u4e8e\u662f\u6211\u5904\u7406\u7684\u601d\u8def\u662f\u8fd9\u6837\u7684\u3002"),(0,o.kt)("h2",{id:"\u601d\u8def"},"\u601d\u8def"),(0,o.kt)("p",null,"\u6211\u7684\u505a\u6cd5\u662f\u5c06 websocket \u670d\u52a1\u7aef\u5f53\u4e2a\u4e2d\u8f6c\u7ad9\uff0c\u800c\u6d4f\u89c8\u5668\u7684 websocket \u5ba2\u6237\u7aef\u4f5c\u4e3a\u4e00\u4e2a\u52a0\u5bc6\u7b97\u6cd5\u7684\u670d\u52a1\uff0c\u518d\u6dfb\u52a0\u4e00\u4e2a\u767b\u5f55\u7b97\u6cd5\u5b9e\u73b0\u7684\u5ba2\u6237\u7aef\u7b80\u79f0\u4e3a\u7528\u6237\u8c03\u7528\u7684\uff0c\u6240\u4ee5\u73b0\u5728\u4e00\u5171\u6709\u4e09\u4efd\u4ee3\u7801\uff08websocket \u670d\u52a1\u7aef\uff0c\u6d4f\u89c8\u5668\u7aef\uff0c\u7528\u6237\u8c03\u7528\u7aef\uff09\u3002\u8fd9\u91cc\u6211\u8fd8\u662f\u4ee5 nodejs \u4e3a\u4f8b\u3002"),(0,o.kt)("h3",{id:"\u6d4f\u89c8\u5668\u7aef"},"\u6d4f\u89c8\u5668\u7aef"),(0,o.kt)("p",null,"\u6d4f\u89c8\u5668 websocket \u5ba2\u6237\u7aef\u7684\u4ee3\u7801\uff0c\u5728\u521d\u6b21\u8fde\u63a5\u7684\u65f6\u5019\uff0c\u544a\u8bc9 websocket \u670d\u52a1\u7aef\u662f\u4e0d\u662f\u6d4f\u89c8\u5668\u3002\u5e76\u5c06\u4e8e\u6d4f\u89c8\u5668\u8fde\u63a5\u7684 socket \u53e5\u67c4\u5b58\u5165\u5168\u5c40\u5bf9\u8c61\uff0c\u4ee5\u4fbf\u7528\u6237\u83b7\u53d6\u52a0\u5bc6\u53c2\u6570\u7684\u65f6\u5019\u5411\u6d4f\u89c8\u5668\u8c03\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="browser.js"',title:'"browser.js"'},"ws.onopen = function (event) {\n  ws.send(JSON.stringify({ type: 'isBrowser', value: true }))\n}\n")),(0,o.kt)("h3",{id:"\u7528\u6237\u8c03\u7528\u7aef"},"\u7528\u6237\u8c03\u7528\u7aef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="client.js"',title:'"client.js"'},"import WebSocket from 'ws'\n\nasync function getPasswordEnc(password) {\n  return new Promise((resolve, reject) => {\n    const ws = new WebSocket('ws://127.0.0.1:8080')\n\n    ws.on('open', () => {\n      let jsonStr = JSON.stringify({\n        type: 'getPasswordEnc',\n        value: password,\n      })\n      ws.send(jsonStr)\n    })\n\n    ws.on('message', (message) => {\n      let json = JSON.parse(message)\n      let { type, value } = json\n      switch (type) {\n        case 'callbackPasswordEnc':\n          ws.close()\n          resolve(value)\n          break\n      }\n    })\n  })\n}\n\nasync function run() {\n  let passwordEnc = await getPasswordEnc('a123456')\n  console.log(passwordEnc)\n}\n\nrun()\n")),(0,o.kt)("p",null,"\u8fd9\u91cc\u5bf9\u4ee3\u7801\u8fdb\u884c\u89e3\u8bfb\u4e00\u4e0b\uff0c\u6211\u81ea\u884c\u5c01\u88c5\u4e86\u4e00\u4e2a\u51fd\u6570\uff0c\u5176\u4e2d\u51fd\u6570\u8fd4\u56de\u7684\u662f\u4e00\u4e2a Promise \u5bf9\u8c61\uff0c\u503c\u5219\u662f\u5bf9\u5e94\u7684\u52a0\u5bc6\u540e\u7684\u5bc6\u6587\u3002\u5982\u679c\u6211\u8fd9\u8fb9\u4e0d\u91c7\u7528 promise \u6765\u7f16\u5199\u7684\u8bdd\uff0c\u90a3\u4e48\u83b7\u53d6\u5230\u7684\u6570\u636e\u5c06\u5341\u5206\u4e0d\u597d\u8fd4\u56de\u7ed9\u6211\u4eec\u7684\u4e3b\u7ebf\u7a0b\u3002\u8fd9\u91cc\u5bf9\u4e8e js \u7684 Promise \u4f7f\u7528\u9700\u8981\u82b1\u8d39\u70b9\u65f6\u95f4\u53bb\u7406\u89e3\u3002\u603b\u800c\u8a00\u4e4b\uff0c\u901a\u8fc7 promise\uff0c\u4ee5\u53ca async await \u8bed\u6cd5\u7cd6\uff0c\u80fd\u5f88\u8f7b\u677e\u7684\u7b49\u5f85 websocket \u8fde\u63a5\u4e0e\u63a5\u6536\u6570\u636e\u3002\u4f46\u8fd8\u662f\u7528 websocket \u534f\u8bae"),(0,o.kt)("h3",{id:"websocket-\u670d\u52a1\u7aef"},"websocket \u670d\u52a1\u7aef"),(0,o.kt)("p",null,"\u540c\u65f6 websocket \u670d\u52a1\u7aef\u80af\u5b9a\u8981\u65b0\u589e\u4e00\u4e2a\u7c7b\u578b\u7528\u4e8e\u5224\u65ad\u662f\u767b\u5f55\u7b97\u6cd5\u5b9e\u73b0\u7684\u5ba2\u6237\u7aef\u3002\u540c\u65f6\u53c8\u65b0\u7684\u7528\u6237\u8981\u8c03\u7528\uff0c\u6240\u4ee5\u8fd9\u91cc\u4f7f\u7528\u4e86 uuid \u8fd9\u4e2a\u6a21\u5757\u6765\u751f\u6210\u552f\u4e00\u7684\u7528\u6237 id\uff0c\u540c\u65f6\u8fd8\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf clients \u8bb0\u5f55\u6240\u8fde\u63a5\u8fc7\u7684\u7528\u6237\uff08\u5305\u62ec\u6d4f\u89c8\u5668\uff09\uff0c\u5b8c\u6574\u4ee3\u7801\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js"',title:'"server.js"'},"import WebSocket, { WebSocketServer } from 'ws'\nimport { v4 as uuidv4 } from 'uuid'\n\nlet ws = new WebSocketServer({ port: 8080 })\n\nlet browserWebsocket = null\nlet clients = []\n\nws.on('connection', (socket) => {\n  let client_id = uuidv4()\n  clients.push({\n    id: client_id,\n    socket: socket,\n  })\n\n  socket.on('close', () => {\n    for (let i = 0; i < clients.length; i++) {\n      if (clients[i].id == client_id) {\n        clients.splice(i, 1)\n        break\n      }\n    }\n  })\n\n  socket.on('message', (message) => {\n    try {\n      let json = JSON.parse(message)\n      let { id, type, value } = json\n      switch (type) {\n        case 'isBrowser':\n          if (value) {\n            browserWebsocket = socket\n          }\n          console.log('\u6d4f\u89c8\u5668\u5df2\u521d\u59cb\u5316')\n          break\n\n        // \u53d1\u9001\u7ed9\u6d4f\u89c8\u5668 \u8ba9\u6d4f\u89c8\u5668\u6765\u8c03\u7528\u5e76\u8fd4\u56de\n        case 'callbackPasswordEnc':\n          // \u6839\u636eid\u627e\u5230\u8c03\u7528\u7528\u6237\u7684socket,\u5e76\u5411\u8be5\u7528\u6237\u53d1\u9001\u52a0\u5bc6\u540e\u7684\u5bc6\u6587\n          let temp_socket = clients.find((c) => c.id == id).socket\n\n          temp_socket.send(message)\n          break\n        // \u7528\u6237\u53d1\u9001\u8fc7\u6765\u8981\u52a0\u5bc6\u7684\u660e\u6587\n        case 'getPasswordEnc':\n          let jsonStr = JSON.stringify({\n            id: client_id,\n            type: type,\n            value: value,\n          })\n\n          // \u8fd9\u91cc\u4e00\u5b9a\u8981\u662f\u6d4f\u89c8\u5668\u7684websocket\u53e5\u67c4\u53d1\u9001\uff0c\u624d\u80fd\u8c03\u7528\n          browserWebsocket.send(jsonStr)\n          break\n      }\n    } catch (error) {\n      console.log(error.message)\n    }\n  })\n})\n")),(0,o.kt)("p",null,"\u6700\u7ec8\u6f14\u793a\u6548\u679c\u5982\u4e0b\u89c6\u9891\uff08\u6d4f\u89c8\u5668\u4ee3\u7801\u662f\u63d0\u524d\u6ce8\u5165\u8fdb\u53bb\u7684\uff09"),(0,o.kt)("video",{width:"800px",height:"450px",controls:"controls"},(0,o.kt)("source",{id:"mp4",src:"https://img.kuizuo.cn/rpc.mp4",type:"video/mp4"})),(0,o.kt)("p",null,"\u5176\u5b9e\u8fd8\u662f\u4e00\u4e9b\u662f\u8981\u5b8c\u5584\u7684\uff0c\u8fd9\u91cc\u7684 Websocket \u53ea\u662f\u5b9e\u73b0\u4e86\u8fde\u63a5\uff0c\u8fd8\u6709\u5fc3\u8df3\u5305\u5f02\u5e38\u65ad\u5f00\uff0c\u6d4f\u89c8\u5668\u5f02\u5e38\u5173\u95ed\u5bfc\u81f4 websocket \u65ad\u5f00\u65e0\u6cd5\u8c03\u7528\u51fd\u6570\u7b49\u7b49\uff0c\u4ee5\u53ca\u6d4f\u89c8\u5668\u7684\u4ee3\u7801\u8fd8\u9700\u8981\u624b\u52a8\u6ce8\u5165\u5f88\u4e0d\u4f18\u5316\uff0c\u540e\u7eed\u5982\u679c\u4f7f\u7528 Chrome \u63d2\u4ef6\u5f00\u53d1\u4e00\u4e2a\u5b9e\u73b0\u6ce8\u5165 js \u4ee3\u7801\u7684\u529f\u80fd\u4e5f\u8bb8\u4f1a\u597d\u4e00\u4e9b\u3002\uff08\u6b63\u51c6\u5907\u7f16\u5199 Chrome \u63d2\u4ef6\uff09"),(0,o.kt)("h2",{id:"http-\u534f\u8bae\u8c03\u7528\u5b9e\u73b0"},"HTTP \u534f\u8bae\u8c03\u7528\u5b9e\u73b0"),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u4ee5\u4e0a\u90fd\u662f\u57fa\u4e8e WebSocket \u534f\u8bae\uff0c\u5c31\u8fde\u7528\u6237\u7aef\u8c03\u7528\u4e5f\u662f\uff0c\u7136\u800c\u7528\u6237\u8c03\u7528\u6ca1\u5fc5\u8981\u4fdd\u6301\u957f\u8fde\u63a5\u4e14\u4e0d\u5229\u4e8e\u8c03\u7528\uff08\u76f8\u5bf9\u4e00\u4e9b\u8bed\u8a00\u800c\u8a00\uff09\uff0c\u6709\u6ca1\u6709\u80fd\u76f4\u63a5\u4f7f\u7528 http \u534f\u8bae\uff0c\u901a\u8fc7 POST \u8bf7\u6c42\u6765\u5b9e\u73b0\u83b7\u53d6\u53c2\u6570\uff0c\u8fd9\u624d\u662f\u6211\u6240\u8981\u5b9e\u73b0\u7684\u3002"),(0,o.kt)("p",null,"\u5176\u5b9e\u8981\u5b9e\u73b0\u4e5f\u5f88\u7b80\u5355\uff0c\u6211\u53ea\u8981\u628a\u7528\u6237\u8c03\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"getPasswordEnc")," \u8fd9\u4e2a\u51fd\u6570 \u5f04\u5230 node \u521b\u5efa\u7684\u4e00\u4e2a http \u670d\u52a1\u7aef\u5c31\u884c\u4e86\uff0c\u6211\u8fd9\u91cc\u7684\u505a\u6cd5\u4e5f\u662f\u5982\u6b64\u3002\u50cf\u4e0b\u9762\u8fd9\u6837"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server_http.js"',title:'"server_http.js"'},"async function getPasswordEnc(password) {\n  return new Promise((resolve, reject) => {\n    const ws = new WebSocket('ws://127.0.0.1:8080')\n\n    ws.on('open', () => {\n      let jsonStr = JSON.stringify({\n        type: 'getPasswordEnc',\n        value: password,\n      })\n      ws.send(jsonStr)\n    })\n\n    ws.on('message', (message) => {\n      let json = JSON.parse(message)\n      let { type, value } = json\n      switch (type) {\n        case 'callbackPasswordEnc':\n          ws.close()\n          resolve(value)\n          break\n      }\n    })\n  })\n}\n\n// \u521b\u5efahttp\u670d\u52a1\nconst app = http.createServer(async (request, response) => {\n  let { pathname, query } = url.parse(request.url, true)\n\n  if (pathname == '/getPasswordEnc') {\n    let passwordEnc = await getPasswordEnc(query.password)\n    response.end(passwordEnc)\n  }\n})\n\napp.listen(8000, () => {\n  console.log(`\u670d\u52a1\u5df2\u8fd0\u884c http://127.0.0.1:8000/`)\n})\n")),(0,o.kt)("p",null,"\u53d1\u9001 GET \u8bf7\u6c42 URL \u4e3a ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/getPasswordEnc?password=a123456"},"http://127.0.0.1:8000/getPasswordEnc?password=a123456")," \u5b9e\u73b0\u6548\u679c\u5982\u56fe"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211009040704534.png",alt:"image-20211009040704534"})),(0,o.kt)("p",null,"\u5bf9\u4e8e\u7528\u6237\u8c03\u7528\u6765\u8bf4\u76f8\u5bf9\u53cb\u597d\u4e86\u4e0d\u5c11\uff08\u5176\u5b9e\u662f\u5f88\u597d\uff09\uff0c\u4e0d\u7528\u5728\u521b\u5efa websocket \u5ba2\u6237\u7aef\uff0c\u53ea\u9700\u8981\u53d1\u9001 HTTP \u8bf7\u6c42\uff08GET \u6216 POST\uff09\uff0c\u4e0d\u8fc7\u6211\u8fd9\u8fb9\u4f7f\u7528\u7684\u662f Node \u81ea\u5e26\u7684 http \u6a21\u5757\u6765\u642d\u5efa\u7684\u4e00\u4e2a http \u670d\u52a1\u5668\uff0c\u5b9e\u9645\u4f7f\u7528\u4e2d\u5c06\u4f1a\u91c7\u7528 express \u6765\u7f16\u5199\u8def\u7531\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u548c\u4ee3\u7801\u53ef\u8bfb\u6027\uff0c\u8fd9\u91cc\u53ea\u662f\u4f5c\u4e3a\u6f14\u793a\u3002"),(0,o.kt)("p",null,"\u81f3\u4e8e\u8bf4\u6211\u4e3a\u4ec0\u4e48\u8981\u5728 http \u5185\u5728\u65b0\u5efa\u4e00\u4e2a ws \u5ba2\u6237\u7aef\uff0c\u4e3b\u8981\u539f\u56e0\u8fd8\u662f websocket \u670d\u52a1\u7aef\u5411\u6d4f\u89c8\u5668\u53d1\u9001\u8c03\u7528\u7684\u7b97\u6cd5\uff0c\u4f46\u53ea\u80fd\u5728 websocket \u670d\u52a1\u7aef\u4e2d\u7684\u901a\u8fc7 onmessage \u63a5\u53d7\uff0c\u65e0\u6cd5\u5728 http \u670d\u52a1\u7aef\u63a5\u53d7\u5230\uff0c\u5c31\u522b\u8bf4\u5411\u7528\u6237\u7aef\u8fd4\u56de\u4e86\u3002\u8fd9\u91cc\u5176\u5b9e\u53ea\u662f\u4e0d\u8ba9\u7528\u6237\u6765\u8fdb\u884c\u8fde\u63a5 websocket\uff0c\u800c\u662f\u6211\u4eec\u672c\u5730\uff08\u670d\u52a1\u5668\uff09\u5728\u63a5\u53d7\u5230 getPasswordEnc \u8bf7\u6c42\uff0c\u590d\u73b0\u4e86\u4e00\u904d\u4e0a\u9762\u7528\u6237\u8fde\u63a5 websocket \u7684\u4f8b\u5b50\uff0c\u5e76\u5c06\u5176\u8f6c\u4e3a http \u8bf7\u6c42\u8fd4\u56de\u7ed9\u7528\u6237\u800c\u5df2\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5176\u5b9e\u4e5f\u5c31\u662f\u591a\u4e86\u4e00\u4e2a\u8c03\u7528\u7684 HTTP \u670d\u52a1\u5668\uff0c\u800c\u8fd9\u91cc\u5c06 http \u670d\u52a1\u5668\u4e0e websocket \u670d\u52a1\u5668\u5199\u5230\u4e00\u8d77\u800c\u5df2")),(0,o.kt)("h2",{id:"\u4ee3\u7801\u5730\u5740"},"\u4ee3\u7801\u5730\u5740"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kuizuo/rpc-browser.git"},"https://github.com/kuizuo/rpc-browser.git")),(0,o.kt)("p",null,"\u8fd0\u884c\u65b9\u5f0f\u8bf7\u67e5\u770b README.md"))}m.isMDXComponent=!0}}]);