"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4642],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),k=p(t),m=o,u=k["".concat(s,".").concat(m)]||k[m]||d[m]||a;return t?r.createElement(u,l(l({ref:n},i),{},{components:t})):r.createElement(u,l({ref:n},i))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=k;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},94909:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],c={id:"docker-deploy-node-project",title:"Docker\u90e8\u7f72Node\u9879\u76ee",date:new Date("2022-05-25T00:00:00.000Z"),authors:"kuizuo",tags:["docker","node"]},s=void 0,p={unversionedId:"skill/docker/docker-deploy-node-project",id:"skill/docker/docker-deploy-node-project",title:"Docker\u90e8\u7f72Node\u9879\u76ee",description:"\u628a\u4e00\u4e2a Node.js web \u5e94\u7528\u7a0b\u5e8f\u7ed9 Docker \u5316 | Node.js (nodejs.org)",source:"@site/docs/skill/docker/Docker\u90e8\u7f72Node\u9879\u76ee.md",sourceDirName:"skill/docker",slug:"/skill/docker/docker-deploy-node-project",permalink:"/docs/skill/docker/docker-deploy-node-project",draft:!1,tags:[{label:"docker",permalink:"/docs/tags/docker"},{label:"node",permalink:"/docs/tags/node"}],version:"current",frontMatter:{id:"docker-deploy-node-project",title:"Docker\u90e8\u7f72Node\u9879\u76ee",date:"2022-05-25T00:00:00.000Z",authors:"kuizuo",tags:["docker","node"]},sidebar:"skill",previous:{title:"Docker\u8bbf\u95ee\u5bbf\u4e3b\u673a\u4e0a\u670d\u52a1",permalink:"/docs/skill/docker/docker-accesses-host-service"},next:{title:"\u4fee\u6539\u65e0\u6cd5\u542f\u52a8\u7684Docker\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6",permalink:"/docs/skill/docker/fix-docker-config-that-cannot-start-up"}},i={},d=[{value:"\u90e8\u7f72 Express \u9879\u76ee",id:"\u90e8\u7f72-express-\u9879\u76ee",level:2},{value:"\u90e8\u7f72 Express+MongoDB+Redis",id:"\u90e8\u7f72-expressmongodbredis",level:2}],k={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/zh-cn/docs/guides/nodejs-docker-webapp/"},"\u628a\u4e00\u4e2a Node.js web \u5e94\u7528\u7a0b\u5e8f\u7ed9 Docker \u5316 | Node.js (nodejs.org)")),(0,a.kt)("h2",{id:"\u90e8\u7f72-express-\u9879\u76ee"},"\u90e8\u7f72 Express \u9879\u76ee"),(0,a.kt)("p",null,"\u524d\u63d0\uff1a\u51c6\u5907\u4e00\u4e2a Express \u9879\u76ee\u4ee5\u53ca Docker \u73af\u5883"),(0,a.kt)("p",null,"\u5728 Express \u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa Dockerfile \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'FROM node:alpine as builder\n\nWORKDIR /app\n\nCOPY . .\n\nRUN npm install\n\nEXPOSE 3000\n\nCMD ["npm", "run", "start"]\n')),(0,a.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u7684\u5927\u81f4\u610f\u601d\u5982\u4e0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d node \u73af\u5883"),(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e RUN CMD COPY ADD \u6307\u4ee4\u7684\u5de5\u4f5c\u76ee\u5f55"),(0,a.kt)("li",{parentName:"ol"},"\u62f7\u8d1d\u5bbf\u4e3b\u673a\uff08\u5f53\u524d\u8fd0\u884c\u7ec8\u7aef\u7684\u4f4d\u7f6e\uff09\u7684\u6587\u4ef6\u5230\u5bb9\u5668\u4e2d\u7684 app \u76ee\u5f55\u4e2d"),(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5 npm \u5305"),(0,a.kt)("li",{parentName:"ol"},"\u66b4\u9732 3000 \u7aef\u53e3"),(0,a.kt)("li",{parentName:"ol"},"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"npm run start"),"\u811a\u672c\u547d\u4ee4")),(0,a.kt)("p",null,"\u5728\u6267\u884c\u547d\u4ee4\u524d\uff0c\u8fd8\u9700\u8981\u521b\u5efa.dockerignore\uff0c\u5c06\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u6392\u9664\uff08\u5176\u4f5c\u7528\u4e8e.gitignore \u4e00\u81f4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title=".dockerignore"',title:'".dockerignore"'},"/dist\n/node_modules\npackage-lock.json\nyarn.lock\n")),(0,a.kt)("p",null,"\u6b64\u65f6\u6253\u5f00\u7ec8\u7aef\uff0c\u8f93\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t my-app .\n")),(0,a.kt)("p",null,"\u5c06\u4f1a\u6267\u884c Dockerfile \u547d\u4ee4\uff0c\u5f85\u6240\u6709\u547d\u4ee4\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u5c06\u4f1a\u521b\u5efa my-app \u7684\u955c\u50cf"),(0,a.kt)("p",null,"\u6267\u884c\u542f\u52a8\u5bb9\u5668\u547d\u4ee4\uff0c\u5c06\u670d\u52a1\u542f\u52a8\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name my-app -p 3000:3000 my-app\n")),(0,a.kt)("p",null,"\u6b64\u65f6\u8bbf\u95ee\u5bf9\u5e94\u673a\u5668\u7684 3000 \u7aef\u53e3\u5373\u53ef\u8bbf\u95ee express \u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u6253\u5f00\u5bb9\u5668\u5185\u7684\u7ec8\u7aef\uff0c\u6709\u4ee5\u4e0b\u4e24\u79cd\u9009\u62e9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker exec -it \u5bb9\u5668ID/\u540d /bin/bash  # \u8fdb\u5165\u540e\u5f00\u542f\u65b0\u7684\u7ec8\u7aef \u53ef\u5728\u91cc\u9762\u64cd\u4f5c(\u5e38\u7528) \u6216\u8005\u4e3a/bin/sh\ndocker attach \u5bb9\u5668ID/\u540d # \u4e0d\u4f1a\u542f\u52a8\u65b0\u7684\u8fdb\u7a0b \u5355\u5355\u53ea\u662f\u8fdb\u5165\u5bb9\u5668\u7684\u7ec8\u7aef\n")),(0,a.kt)("h2",{id:"\u90e8\u7f72-expressmongodbredis"},"\u90e8\u7f72 Express+MongoDB+Redis"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u73b0\u5728\u8981\u90e8\u7f72 Express + MongoDB+Redis \u7684\u670d\u52a1\u7684\u8bdd\uff0c\u53ef\u4ee5\u4f7f\u7528 docker-compose.yml \u6765\u81ea\u52a8\u5316\u90e8\u7f72\u591a\u4e2a\u5bb9\u5668\u3002"),(0,a.kt)("p",null,"\u521b\u5efa docker-compose.yml \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},"version: '3.9'\n\nservices:\n  mongodb:\n    image: mongo:4.4.6\n    restart: always\n    ports:\n      - 27017:27017\n    networks:\n      - backend\n    environment:\n      MONGO_INITDB_ROOT_USERNAME: root\n      MONGO_INITDB_ROOT_PASSWORD: 123\n    volumes:\n      - db-data:/data/db\n\n  redis:\n    image: redis:latest\n    command:\n      - /bin/bash\n      - -c\n      - redis-server --appendonly yes\n    ports:\n      - 6379:6379\n    networks:\n      - backend\n\n  web:\n    build: .\n    restart: always\n    environment:\n      - NODE_ENV=development\n      - MYSQL_HOST=mysql\n      - REDIS_HOST=redis\n    ports:\n      - 5000:5000\n    networks:\n      - backend\n    depends_on:\n      - mongodb\n      - redis\n\nnetworks:\n  backend:\n\nvolumes:\n  db-data:\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u547d\u4ee4\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u90e8\u7f72\u7684\u8bdd\u53ef\u4ee5\u6dfb\u52a0--build \u53c2\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose up -d\n")),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"web \u540e\u7aef\u9879\u76ee\u4e2d\u6d89\u53ca\u5230\uff0c\u6570\u636e\u5e93\u7684\u8fde\u63a5\u5730\u5740\uff08Host\uff09\u8981\u4ee5 docker-compose.yml \u4e2d\u7684 service \u540d\u4e00\u81f4\u3002\u4f8b\u5982\u4e0a\u9762\u6240\u5b9a\u4e49\u7684 environment \u4e2d"),(0,a.kt)("p",{parentName:"div"},"MYSQL_HOST=mysql"),(0,a.kt)("p",{parentName:"div"},"REDIS_HOST=redis"),(0,a.kt)("p",{parentName:"div"},"\u800c\u4e0d\u80fd\u4e3a localhost\uff0c\u56e0\u4e3a",(0,a.kt)("strong",{parentName:"p"},"docker \u5bb9\u5668\u5185\u7684 localhost \u4e0e\u5bbf\u4e3b\u673a\u7684 localhost \u5e76\u4e0d\u662f\u540c\u4e00\u4e2a\u5730\u5740"),"\u3002"),(0,a.kt)("p",{parentName:"div"},"\u6216\u8005\u662f\u5728\u914d\u7f6e\u4e2d\u5c06 localhost \u4fee\u6539\u4e3a docker \u7f51\u7edc\u7684 ip\uff0c\u4e00\u822c\u4e3a 172.17.0.1\uff0c\u5177\u4f53\u6839\u636e docker \u5b9e\u9645\u7f51\u7edc\u800c\u5b9a\u3002"))))}m.isMDXComponent=!0}}]);