"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2005],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65274:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"intercepting-requests",title:"\u6293\u5305",date:new Date("2020-02-02T00:00:00.000Z"),authors:"kuizuo",tags:["android","http","\u6293\u5305"]},s=void 0,p={unversionedId:"skill/reverse/android/\u5237\u673a/intercepting-requests",id:"skill/reverse/android/\u5237\u673a/intercepting-requests",title:"\u6293\u5305",description:"Charles",source:"@site/docs/skill/reverse/android/\u5237\u673a/\u6293\u5305.md",sourceDirName:"skill/reverse/android/\u5237\u673a",slug:"/skill/reverse/android/\u5237\u673a/intercepting-requests",permalink:"/docs/skill/reverse/android/\u5237\u673a/intercepting-requests",draft:!1,tags:[{label:"android",permalink:"/docs/tags/android"},{label:"http",permalink:"/docs/tags/http"},{label:"\u6293\u5305",permalink:"/docs/tags/\u6293\u5305"}],version:"current",frontMatter:{id:"intercepting-requests",title:"\u6293\u5305",date:"2020-02-02T00:00:00.000Z",authors:"kuizuo",tags:["android","http","\u6293\u5305"]},sidebar:"skill",previous:{title:"\u5b89\u88c5LSPosed",permalink:"/docs/skill/reverse/android/\u5237\u673a/install-lsposed"},next:{title:"\u89e3Bootloader\u9501",permalink:"/docs/skill/reverse/android/\u5237\u673a/solution-of-bootloader-lock"}},c={},u=[{value:"Charles",id:"charles",level:2},{value:"1\u3001\u5b89\u88c5",id:"1\u5b89\u88c5",level:3},{value:"2\u3001\u8bbe\u7f6e socket \u4ee3\u7406",id:"2\u8bbe\u7f6e-socket-\u4ee3\u7406",level:3},{value:"3\u3001\u6293\u53d6 HTTPS \u5305",id:"3\u6293\u53d6-https-\u5305",level:3},{value:"3\u3001Denying access from address not on ACL",id:"3denying-access-from-address-not-on-acl",level:3},{value:"Postern",id:"postern",level:2},{value:"1\u3001\u5b89\u88c5 postern",id:"1\u5b89\u88c5-postern",level:3},{value:"2\u3001\u914d\u7f6e\u4ee3\u7406",id:"2\u914d\u7f6e\u4ee3\u7406",level:3},{value:"3\u3001\u914d\u7f6e\u89c4\u5219",id:"3\u914d\u7f6e\u89c4\u5219",level:3},{value:"4\u3001\u914d\u7f6e SSL \u8bc1\u4e66",id:"4\u914d\u7f6e-ssl-\u8bc1\u4e66",level:3},{value:"\u5b89\u88c5\u65b9\u5f0f 1",id:"\u5b89\u88c5\u65b9\u5f0f-1",level:4},{value:"\u5b89\u88c5\u65b9\u5f0f 2",id:"\u5b89\u88c5\u65b9\u5f0f-2",level:4},{value:"2\u3001\u7535\u8111\u7aef\u4e5f\u8981\u5b89\u88c5\u8bc1\u4e66\uff0c\u5982\u56fe",id:"2\u7535\u8111\u7aef\u4e5f\u8981\u5b89\u88c5\u8bc1\u4e66\u5982\u56fe",level:3},{value:"\u68c0\u6d4b\u8bc1\u4e66",id:"\u68c0\u6d4b\u8bc1\u4e66",level:3},{value:"\u5927\u529f\u544a\u6210",id:"\u5927\u529f\u544a\u6210",level:3},{value:"\u5bf9\u6bd4 FD \u914d\u7f6e\u4ee3\u7406 \u4e0e Charles \u548c Postern \u7ec4\u5408",id:"\u5bf9\u6bd4-fd-\u914d\u7f6e\u4ee3\u7406-\u4e0e-charles-\u548c-postern-\u7ec4\u5408",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"charles"},"Charles"),(0,l.kt)("h3",{id:"1\u5b89\u88c5"},"1\u3001\u5b89\u88c5"),(0,l.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740: ",(0,l.kt)("a",{parentName:"p",href:"https://www.charlesproxy.com/download/"},"Download a Free Trial of Charles \u2022 Charles Web Debugging Proxy (charlesproxy.com)")),(0,l.kt)("p",null,"\u6fc0\u6d3b\u7801\u5730\u5740: ",(0,l.kt)("a",{parentName:"p",href:"https://www.zzzmode.com/mytools/charles/"},"Charles \u7834\u89e3\u5de5\u5177 (zzzmode.com)")),(0,l.kt)("h3",{id:"2\u8bbe\u7f6e-socket-\u4ee3\u7406"},"2\u3001\u8bbe\u7f6e socket \u4ee3\u7406"),(0,l.kt)("p",null,"Proxy -> Proxy Setting \u5982\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202045815609.png",alt:"image-20210202045815609"})),(0,l.kt)("p",null,"\u7528 Charles \u9488\u5bf9\u6293\u5b89\u5353\u7684\u5305\uff0c\u6240\u4ee5\u5728 Windows \u4e0b\u5c31\u4e0d\u8bbe\u7f6e\u4ee3\u7406\u3002\u540c\u65f6\u4f7f\u7528 Socket \u4ee3\u7406 \u800c\u4e0d\u662f http \u4ee3\u7406\uff0c\u914d\u7f6e\u7aef\u53e3\uff08\u8fd9\u91cc\u4e3a 8999\uff09\u5373\u53ef"),(0,l.kt)("h3",{id:"3\u6293\u53d6-https-\u5305"},"3\u3001\u6293\u53d6 HTTPS \u5305"),(0,l.kt)("p",null,"Proxy -> SSL Proxying Settings\u2026"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/20220119144147.png",alt:"image-20220119144140665"})),(0,l.kt)("p",null,"\u5339\u914d\u6240\u6709\u5730\u5740\u4e0e\u7aef\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"*:*")," \uff0c\u5bf9\u4e8e\u53cc\u5411\u9a8c\u8bc1\u7684\u8bc1\u4e66\u4e5f\u53ef\u5728\u8fd9\u91cc\u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/20220119144353.png",alt:"image-20220119144353270"})),(0,l.kt)("h3",{id:"3denying-access-from-address-not-on-acl"},"3\u3001Denying access from address not on ACL"),(0,l.kt)("p",null,"\u8981\u5728 charles \u5141\u8bb8\u8bbe\u5907\uff0c\u9700\u8981\u5982\u4e0b\u8bbe\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210517020819625.png",alt:"image-20210517020819625"})),(0,l.kt)("p",null,"\u7136\u540e\u6dfb\u52a0\u4e00\u4e2a 0.0.0.0/0 \u7684 ip \u5373\u53ef\u6293\u53d6\u6240\u6709\u8bbe\u5907"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210517020904361.png",alt:"image-20210517020904361"})),(0,l.kt)("h2",{id:"postern"},"Postern"),(0,l.kt)("h3",{id:"1\u5b89\u88c5-postern"},"1\u3001\u5b89\u88c5 postern"),(0,l.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/postern-overwal/postern-stuff/blob/master/Postern-3.1.2.apk"},"https://github.com/postern-overwal/postern-stuff/blob/master/Postern-3.1.2.apk")),(0,l.kt)("h3",{id:"2\u914d\u7f6e\u4ee3\u7406"},"2\u3001\u914d\u7f6e\u4ee3\u7406"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202050134094.png",alt:"image-20210202050134094"})),(0,l.kt)("p",null,"\u7528\u6237\u540d\u4e0e\u5bc6\u7801\u52a0\u5bc6\u7c7b\u578b\u53ef\u4e0d\u586b"),(0,l.kt)("p",null,"\u6ce8\uff1a \u6709\u4e2a\u5c0f\u5751\uff0c\u8981\u4fdd\u8bc1\u7535\u8111\u4e0e\u624b\u673a\u8fde\u63a5\u7684\u662f\u540c\u4e00\u4e2a Wifi \u7f51\u7edc\uff0c\u70b9\u51fb \u83dc\u5355 -> Help -> Local IP \u53ef\u67e5\u770b\u5f53\u524d\u7f51\u7edc\u4e0b IP \u5982\u56fe\uff0c\u4e00\u822c\u4e3a Wireless\uff08\u7b14\u8bb0\u672c\uff09\uff0c\u5177\u4f53\u90fd\u8981\u5c1d\u8bd5\u4e00\u904d"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202050422857.png",alt:"image-20210202050422857"})),(0,l.kt)("h3",{id:"3\u914d\u7f6e\u89c4\u5219"},"3\u3001\u914d\u7f6e\u89c4\u5219"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202050513312.png",alt:"image-20210202050513312"})),(0,l.kt)("p",null,"\u8fd9\u91cc\u4e5f\u8981\u6ce8\u610f\uff0c\u5728",(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b21"),"\u914d\u7f6e\u7684\u65f6\u5019\uff0c\u70b9\u51fb\u4fdd\u5b58\u540e\uff0cCharles \u4f1a\u5f39\u51fa\u5bf9\u8bdd\u6846\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u70b9\u51fb\u53f3\u8fb9 Allow")," \u5373\u53ef\uff0c\u5982\u679c\u6ca1\u6709\u51fa\u73b0\uff0c\u90a3\u4e48\u591a\u534a\u662f\u4ee3\u7406 IP \u6ca1\u6709\u914d\u7f6e\u597d\uff0c\u8fd9\u65f6\u5019\u5c1d\u8bd5\u591a\u5f00\u5173\u51e0\u6b21 VPN \u4e0e\u8bbe\u7f6e Local IP \u4e2d\u7684 IP \u5373\u53ef\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202051719212.png",alt:"image-20210202051719212"})),(0,l.kt)("h3",{id:"4\u914d\u7f6e-ssl-\u8bc1\u4e66"},"4\u3001\u914d\u7f6e SSL \u8bc1\u4e66"),(0,l.kt)("p",null,"\u6b64\u65f6\u53ef\u4ee5\u6293\u5305\uff0c\u4f46\u6293\u53d6 HTTPS \u5219\u662f unknown\uff0c\u5373\u672a\u89e3\u5bc6\u7684\uff0c\u8fd9\u65f6\u5019\u5c31\u8981\u914d\u7f6e SSL \u8bc1\u4e66"),(0,l.kt)("h4",{id:"\u5b89\u88c5\u65b9\u5f0f-1"},"\u5b89\u88c5\u65b9\u5f0f 1"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202051440984.png",alt:"image-20210202051440984"})),(0,l.kt)("p",null,"\u5f39\u51fa\u5b89\u88c5\u63d0\u793a\uff0c\u5e76\u975e\u76f4\u63a5\u5b89\u88c5"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202051610186.png",alt:"image-20210202051610186"})),(0,l.kt)("p",null,"\u8bbf\u95ee chls.pro/ssl \u4e0b\u8f7d \u5b89\u88c5(\u4e0e fd \u7c7b\u4f3c)"),(0,l.kt)("h4",{id:"\u5b89\u88c5\u65b9\u5f0f-2"},"\u5b89\u88c5\u65b9\u5f0f 2"),(0,l.kt)("p",null,"\u4f46\u8981\u6ce8\u610f\uff0c\u5728 Socket \u4ee3\u7406\u4e0b \u53ef\u80fd\u65e0\u6cd5\u4e0b\u8f7d\u8bc1\u4e66\uff0c\u8fd9\u65f6\u5019 \u5207\u6362\u81f3 HTTPS \u4ee3\u7406\uff08\u540c FD \u914d\u7f6e\uff09\uff0c\u7136\u540e\u4e0b\u8f7d\u8bc1\u4e66\u5b89\u88c5\u4e5f\u6709\u53ef\u80fd\u4f1a\u5931\u8d25\uff0c\u5219\u9009\u62e9 Save Charles Root Certifcate\uff0c\u5c06\u8bc1\u4e66\u63a8\u9001(adb pull)\u5230\u624b\u673a\u4e0a\uff0c\u7136\u540e\u70b9\u51fb\u5b89\u88c5\uff0c\u6216\u8005\u5230\u5b89\u5168->\u52a0\u5bc6\u4e0e\u51ed\u8bc1 -> \u4ece\u5b58\u50a8\u8bbe\u5907\u5b89\u88c5\u8bc1\u4e66 -> CA \u8bc1\u4e66\uff0c\u9009\u62e9\u5bfc\u5165\u5230\u624b\u673a\u7684\u8bc1\u4e66\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"2\u7535\u8111\u7aef\u4e5f\u8981\u5b89\u88c5\u8bc1\u4e66\u5982\u56fe"},"2\u3001\u7535\u8111\u7aef\u4e5f\u8981\u5b89\u88c5\u8bc1\u4e66\uff0c\u5982\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210517023044653.png",alt:"image-20210517023044653"})),(0,l.kt)("p",null,"\u70b9\u51fb \u7136\u540e\u4e0b\u4e00\u6b65\u5373\u53ef"),(0,l.kt)("h3",{id:"\u68c0\u6d4b\u8bc1\u4e66"},"\u68c0\u6d4b\u8bc1\u4e66"),(0,l.kt)("p",null,"\u7531\u4e8e fd \u4e0e charles \u90fd\u662f\u66ff\u6362\u8bc1\u4e66\u7684\uff0c\u5b89\u88c5\u7684\u8bc1\u4e66\u90fd\u662f\u7528\u6237\u4e0b\u7684\uff0c\u800c\u975e\u7cfb\u7edf\u4e0b\uff087.0 \u4ee5\u4e0a\uff09\uff0c\u4e00\u4e9b app \u4f1a\u68c0\u6d4b\u8bc1\u4e66\uff0c\u4ece\u800c\u65e0\u6cd5\u53d1\u9001\u8bf7\u6c42\uff0c\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u5c06\u7528\u6237\u8bc1\u4e66\u79fb\u52a8\u5230\u7cfb\u7edf\u8bc1\u4e66\u4e0b"),(0,l.kt)("p",null,"\u7cfb\u7edf\u8bc1\u4e66\u8def\u5f84 ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/security/cacerts")),(0,l.kt)("p",null,"\u7528\u6237\u8bc1\u4e66\u8def\u5f84 ",(0,l.kt)("inlineCode",{parentName:"p"},"/data/misc/user/0/cacerts-added")),(0,l.kt)("p",null,"\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"#\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199 \u5c06\u6839\u8def\u5f84\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199\nmount -o rw,remount /\n\n# \u5c06\u5f53\u524d\u76ee\u5f55\u4e0b\u6240\u6709\u6587\u4ef6\u79fb\u52a8\u7f6e\u7cfb\u7edf\u8bc1\u4e66\u8def\u5f84\u4e0b\ncp * /etc/security/cacerts\n")),(0,l.kt)("p",null,"\u4e0d\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"mount -o rw,remount /")," \u5219\u4f1a\u62a5 cp: /etc/security/cacerts/03f1f1d0.0: Read-only file system"),(0,l.kt)("p",null,"\u6216\u7528 Root Explorer \u5c06\u7528\u6237\u8bc1\u4e66\u79fb\u52a8\u5230\u7cfb\u7edf\u8bc1\u4e66\u8def\u5f84\u4e0b\u5373\u53ef"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8865\uff1a\u6709\u65f6\u5019\u76ee\u5f55\u65e0\u6cd5\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199\uff08\u6bd4\u5982\u5b89\u5353 10 \u4ee5\u4e0a\u7cfb\u7edf\u5206\u533a/system \u6302\u8f7d\u4e3a\u53ea\u8bfb\uff09\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 Magisk \u7684 Move Certificates \u6a21\u5757\uff0c\u5c06\u7528\u6237\u8bc1\u4e66\u79fb\u52a8\u81f3\u7cfb\u7edf\u8bc1\u4e66\u8def\u5f84\u4e0b"))),(0,l.kt)("h3",{id:"\u5927\u529f\u544a\u6210"},"\u5927\u529f\u544a\u6210"),(0,l.kt)("p",null,"\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u6b63\u5e38\u7684\u6293\u5230\u5b89\u5353\u5bf9\u5e94\u7684\u5305\u4e86\u3002"),(0,l.kt)("h2",{id:"\u5bf9\u6bd4-fd-\u914d\u7f6e\u4ee3\u7406-\u4e0e-charles-\u548c-postern-\u7ec4\u5408"},"\u5bf9\u6bd4 FD \u914d\u7f6e\u4ee3\u7406 \u4e0e Charles \u548c Postern \u7ec4\u5408"),(0,l.kt)("p",null,"\u9996\u5148\u914d\u7f6e\u4ee3\u7406\u5c5e\u4e8e\u4f1a\u8bdd\u5c42\uff0c\u5f88\u5bb9\u6613\u83b7\u53d6\u5230\u4ee3\u7406\u7684 ip \u4e0e\u7aef\u53e3\uff0c\u68c0\u6d4b\u5230\u662f\u5426\u4ee3\u7406\uff0c\u4ece\u800c\u9650\u5236 app \u4f7f\u7528\uff0c"),(0,l.kt)("p",null,"\u800c\u6302\u4e86 VPN \u5219\u662f\u5c06\u5728\u7f51\u7edc\u5c42\u4e2d\uff0c\u4e0d\u6613\u88ab\u68c0\u6d4b\uff0c\u540c\u65f6\u80fd\u83b7\u53d6\u5230\u5e94\u7528\u5c42\uff08HTTP\uff09\u4e0e\u4f20\u8f93\u5c42\uff08TCP\uff09\u7b49\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u540c\u65f6 FD \u9700\u8981\u6765\u56de\u914d\u7f6e\u4ee3\u7406\u7279\u522b\u9ebb\u70e6\uff0c\u800c Postern \u53ea\u9700\u8981\u5f00\u542f VPN \u4e0e\u5173\u95ed\u5373\u53ef\u3002\u6240\u4ee5\u5728 wifi \u4e2d\u5c31\u65e0\u9700\u914d\u7f6e\u4ee3\u7406\u3002"))}m.isMDXComponent=!0}}]);