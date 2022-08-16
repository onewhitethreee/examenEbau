"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3300],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=l,f=d["".concat(i,".").concat(k)]||d[k]||c[k]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},422:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),l=n(3366),a=(n(7294),n(4137)),o=["components"],s={id:"look-up-port-and-kill-process",title:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u53ca\u7ed3\u675f\u8fdb\u7a0b",date:new Date("2022-05-09T00:00:00.000Z"),authors:"kuizuo",tags:["system"]},i=void 0,u={unversionedId:"skill/other/look-up-port-and-kill-process",id:"skill/other/look-up-port-and-kill-process",title:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u53ca\u7ed3\u675f\u8fdb\u7a0b",description:"Linux",source:"@site/docs/skill/other/\u67e5\u770b\u7aef\u53e3\u5360\u7528\u53ca\u7ed3\u675f\u8fdb\u7a0b.md",sourceDirName:"skill/other",slug:"/skill/other/look-up-port-and-kill-process",permalink:"/docs/skill/other/look-up-port-and-kill-process",draft:!1,tags:[{label:"system",permalink:"/docs/tags/system"}],version:"current",frontMatter:{id:"look-up-port-and-kill-process",title:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u53ca\u7ed3\u675f\u8fdb\u7a0b",date:"2022-05-09T00:00:00.000Z",authors:"kuizuo",tags:["system"]},sidebar:"skill",previous:{title:"\u6742\u9879",permalink:"/docs/category/\u6742\u9879"}},p={},c=[{value:"Linux",id:"linux",level:2},{value:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u60c5\u51b5",id:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u60c5\u51b5",level:3},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:4},{value:"netstat",id:"netstat",level:3},{value:"\u7ed3\u675f\u8fdb\u7a0b",id:"\u7ed3\u675f\u8fdb\u7a0b",level:3},{value:"Windows",id:"windows",level:2},{value:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u7684 PID",id:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u7684-pid",level:3},{value:"\u67e5\u770b\u6307\u5b9a PID \u7684\u8fdb\u7a0b",id:"\u67e5\u770b\u6307\u5b9a-pid-\u7684\u8fdb\u7a0b",level:3},{value:"\u7ed3\u675f\u8fdb\u7a0b",id:"\u7ed3\u675f\u8fdb\u7a0b-1",level:3}],d={toc:c};function k(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"linux"},"Linux"),(0,a.kt)("h3",{id:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u60c5\u51b5"},"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u60c5\u51b5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"lsof -i:\u7aef\u53e3\u53f7\n")),(0,a.kt)("h4",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"[root@VM-4-5-centos]# lsof -i:5002\nCOMMAND   PID USER   FD   TYPE   DEVICE SIZE/OFF NODE NAME\nnode    15196  www   25u  IPv6 63810147      0t0  TCP *:rfe (LISTEN)\n")),(0,a.kt)("p",null,"\u66f4\u591a lsof \u7684\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"lsof -i:8080\uff1a\u67e5\u770b8080\u7aef\u53e3\u5360\u7528\nlsof abc.txt\uff1a\u663e\u793a\u5f00\u542f\u6587\u4ef6abc.txt\u7684\u8fdb\u7a0b\nlsof -c abc\uff1a\u663e\u793aabc\u8fdb\u7a0b\u73b0\u5728\u6253\u5f00\u7684\u6587\u4ef6\nlsof -c -p 1234\uff1a\u5217\u51fa\u8fdb\u7a0b\u53f7\u4e3a1234\u7684\u8fdb\u7a0b\u6240\u6253\u5f00\u7684\u6587\u4ef6\nlsof -g gid\uff1a\u663e\u793a\u5f52\u5c5egid\u7684\u8fdb\u7a0b\u60c5\u51b5\nlsof +d /usr/local/\uff1a\u663e\u793a\u76ee\u5f55\u4e0b\u88ab\u8fdb\u7a0b\u5f00\u542f\u7684\u6587\u4ef6\nlsof +D /usr/local/\uff1a\u540c\u4e0a\uff0c\u4f46\u662f\u4f1a\u641c\u7d22\u76ee\u5f55\u4e0b\u7684\u76ee\u5f55\uff0c\u65f6\u95f4\u8f83\u957f\nlsof -d 4\uff1a\u663e\u793a\u4f7f\u7528fd\u4e3a4\u7684\u8fdb\u7a0b\nlsof -i -U\uff1a\u663e\u793a\u6240\u6709\u6253\u5f00\u7684\u7aef\u53e3\u548cUNIX domain\u6587\u4ef6\n")),(0,a.kt)("h3",{id:"netstat"},"netstat"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"netstat -tunlp")," \u7528\u4e8e\u663e\u793a tcp\uff0cudp \u7684\u7aef\u53e3\u548c\u8fdb\u7a0b\u7b49\u76f8\u5173\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"netstat \u67e5\u770b\u7aef\u53e3\u5360\u7528\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"netstat -tunlp | grep \u7aef\u53e3\u53f7\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"-t (tcp) \u4ec5\u663e\u793a tcp \u76f8\u5173\u9009\u9879"),(0,a.kt)("li",{parentName:"ul"},"-u (udp)\u4ec5\u663e\u793a udp \u76f8\u5173\u9009\u9879"),(0,a.kt)("li",{parentName:"ul"},"-n \u62d2\u7edd\u663e\u793a\u522b\u540d\uff0c\u80fd\u663e\u793a\u6570\u5b57\u7684\u5168\u90e8\u8f6c\u5316\u4e3a\u6570\u5b57"),(0,a.kt)("li",{parentName:"ul"},"-l \u4ec5\u5217\u51fa\u5728 Listen(\u76d1\u542c)\u7684\u670d\u52a1\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"-p \u663e\u793a\u5efa\u7acb\u76f8\u5173\u94fe\u63a5\u7684\u7a0b\u5e8f\u540d")),(0,a.kt)("h3",{id:"\u7ed3\u675f\u8fdb\u7a0b"},"\u7ed3\u675f\u8fdb\u7a0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kill -9 PID\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.runoob.com/w3cnote/linux-check-port-usage.html"},"Linux \u67e5\u770b\u7aef\u53e3\u5360\u7528\u60c5\u51b5 | \u83dc\u9e1f\u6559\u7a0b (runoob.com)")),(0,a.kt)("h2",{id:"windows"},"Windows"),(0,a.kt)("h3",{id:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u7684-pid"},"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u7684 PID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'netstat -ano | findstr "\u7aef\u53e3\u53f7"\n')),(0,a.kt)("p",null,"\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'  netstat -ano | findstr "8080"\n  TCP    0.0.0.0:8080           0.0.0.0:0              LISTENING       18180\n  TCP    192.168.123.210:14075  115.236.121.240:8080   ESTABLISHED     14060\n  TCP    [::]:8080              [::]:0                 LISTENING       18180\n')),(0,a.kt)("h3",{id:"\u67e5\u770b\u6307\u5b9a-pid-\u7684\u8fdb\u7a0b"},"\u67e5\u770b\u6307\u5b9a PID \u7684\u8fdb\u7a0b"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u770b\u5360\u7528\u8fdb\u7a0b\uff0c\u53ef\u4ee5\u7ee7\u7eed\u8f93\u5165\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'tasklist|findstr "PID"\n')),(0,a.kt)("p",null,"\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'tasklist|findstr "18180"\njava.exe                     18180 Console                    1    852,996 K\n')),(0,a.kt)("h3",{id:"\u7ed3\u675f\u8fdb\u7a0b-1"},"\u7ed3\u675f\u8fdb\u7a0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"taskkill /T /F /PID PID\n")),(0,a.kt)("p",null,"\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"taskkill /T /F /PID 8080\n")),(0,a.kt)("p",null,"\u5f3a\u5236\uff08/F \u53c2\u6570\uff09\u6740\u6b7b pid \u4e3a 8080 \u7684\u6240\u6709\u8fdb\u7a0b\u5305\u62ec\u5b50\u8fdb\u7a0b\uff08/T \u53c2\u6570\uff09"))}k.isMDXComponent=!0}}]);