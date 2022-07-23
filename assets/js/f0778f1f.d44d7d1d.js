"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7038],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33415:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={slug:"use-github-action-to-auto-deploy",title:"\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72",date:new Date("2022-05-11T00:00:00.000Z"),authors:"kuizuo",tags:["github","git"]},p=void 0,u={permalink:"/use-github-action-to-auto-deploy",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72.md",source:"@site/blog/develop/\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72.md",title:"\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72",description:"\u5982\u679c\u6709\u5199\u8fc7\u9879\u76ee\u7684\u7ecf\u5386\uff0c\u5c31\u514d\u4e0d\u4e86\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u5b89\u88c5\u4f9d\u8d56\uff0c\u7136\u540e\u8f93\u5165\u542f\u52a8\u547d\u4ee4\u7684\u6b65\u9aa4\u3002\u4f46\u662f\u6709\u7684\u9879\u76ee\u5f80\u5f80\u9700\u8981\u7ecf\u5e38\u6027\u7684\u6539\u52a8\uff0c\u5982\u679c\u8fd8\u662f\u7167\u7740\u4e0a\u9762\u7684\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72\u7684\u8bdd\u3002\u5148\u4e0d\u8bf4\u8fd9\u6837\u64cd\u4f5c\u7684\u6548\u7387\uff0c\u64cd\u4f5c\u4e2a\u51e0\u6b21\u5c31\u60f3\u7f62\u5de5\u4e86\u3002\u5e76\u4e14\u4e0a\u9762\u8fd9\u6837\u64cd\u4f5c\u7684\u5f80\u5f80\u5bb9\u6613\u8bef\u64cd\u4f5c\u3002\u800c Github Actions \u6b63\u662f\u8be5\u95ee\u9898\u7684\u826f\u836f\u3002",date:"2022-05-11T00:00:00.000Z",formattedDate:"2022\u5e745\u670811\u65e5",tags:[{label:"github",permalink:"/tags/github"},{label:"git",permalink:"/tags/git"}],readingTime:4.173333333333333,truncated:!0,authors:[{name:"\u6127\u600d",title:"\u7f16\u7a0b\u7231\u597d\u8005 / \u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"use-github-action-to-auto-deploy",title:"\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72",date:"2022-05-11T00:00:00.000Z",authors:"kuizuo",tags:["github","git"]},prevItem:{title:"Vercel\u90e8\u7f72Serverless",permalink:"/vercel-deploy-serverless"},nextItem:{title:"Vercel\u90e8\u7f72\u4e2a\u4eba\u535a\u5ba2",permalink:"/vercel-deploy-blog"}},s={authorsImageUrls:[void 0]},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u5b9e\u4f8b\uff1a\u5c06 VIte \u9879\u76ee\u53d1\u5e03\u5230 GitHub Pages",id:"\u5b9e\u4f8b\u5c06-vite-\u9879\u76ee\u53d1\u5e03\u5230-github-pages",level:2},{value:"\u5c06\u9879\u76ee\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a",id:"\u5c06\u9879\u76ee\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5982\u679c\u6709\u5199\u8fc7\u9879\u76ee\u7684\u7ecf\u5386\uff0c\u5c31\u514d\u4e0d\u4e86\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u5b89\u88c5\u4f9d\u8d56\uff0c\u7136\u540e\u8f93\u5165\u542f\u52a8\u547d\u4ee4\u7684\u6b65\u9aa4\u3002\u4f46\u662f\u6709\u7684\u9879\u76ee\u5f80\u5f80\u9700\u8981\u7ecf\u5e38\u6027\u7684\u6539\u52a8\uff0c\u5982\u679c\u8fd8\u662f\u7167\u7740\u4e0a\u9762\u7684\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72\u7684\u8bdd\u3002\u5148\u4e0d\u8bf4\u8fd9\u6837\u64cd\u4f5c\u7684\u6548\u7387\uff0c\u64cd\u4f5c\u4e2a\u51e0\u6b21\u5c31\u60f3\u7f62\u5de5\u4e86\u3002\u5e76\u4e14\u4e0a\u9762\u8fd9\u6837\u64cd\u4f5c\u7684\u5f80\u5f80\u5bb9\u6613\u8bef\u64cd\u4f5c\u3002\u800c Github Actions \u6b63\u662f\u8be5\u95ee\u9898\u7684\u826f\u836f\u3002"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"Github Actions \u662f Github \u63d0\u4f9b\u7684\u514d\u8d39\u81ea\u52a8\u5316\u6784\u5efa\u5b9e\u73b0\uff0c\u7279\u522b\u9002\u7528\u4e8e\u6301\u7eed\u96c6\u6210\u548c\u6301\u7eed\u4ea4\u4ed8\u7684\u573a\u666f\uff0c\u5b83\u5177\u5907\u81ea\u52a8\u5316\u5b8c\u6210\u8bb8\u591a\u4e0d\u540c\u4efb\u52a1\u7684\u80fd\u529b\uff0c\u4f8b\u5982\u6784\u5efa\u3001\u6d4b\u8bd5\u548c\u90e8\u7f72\u7b49\u7b49\u3002"),(0,r.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,r.kt)("p",null,"\u5728\u8fdb\u884c\u64cd\u4f5c\u524d\uff0c\u5148\u5bf9 Github Actions \u57fa\u7840\u77e5\u8bc6\u8fdb\u884c\u8865\u5145\uff0c\u5177\u4f53\u53ef\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html"},"GitHub Actions \u5165\u95e8\u6559\u7a0b \u962e\u4e00\u5cf0")),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marketplace?type=actions"},"GitHub Marketplace \xb7 Actions to improve your workflow")," \u4e2d\u627e\u5230\u6240\u6709\u7684 Actions\u3002"),(0,r.kt)("h2",{id:"\u5b9e\u4f8b\u5c06-vite-\u9879\u76ee\u53d1\u5e03\u5230-github-pages"},"\u5b9e\u4f8b\uff1a\u5c06 VIte \u9879\u76ee\u53d1\u5e03\u5230 GitHub Pages"),(0,r.kt)("p",null,"\u7b2c\u4e00\u6b65\uff1a\u521b\u5efa\u4e00\u4e2a Vite \u5de5\u7a0b\uff0c\u53ef\u5728",(0,r.kt)("a",{parentName:"p",href:"https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project"},"\u5b98\u7f51"),"\u4e2d\u67e5\u770b\u5982\u4f55\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm create vite\n")),(0,r.kt)("p",null,"\u9009\u62e9\u5bf9\u5e94\u7684\u9879\u76ee\u540d\uff08vite-project\uff09\u4e0e\u6a21\u677f\uff08vue-ts\uff09"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff1a\u6253\u5f00",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\u6587\u4ef6\uff0c\u52a0\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"homepage"),"\u5b57\u6bb5\uff0c\u8868\u793a\u8be5\u5e94\u7528\u53d1\u5e03\u540e\u7684\u6839\u76ee\u5f55\uff08\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/deployment#building-for-relative-paths"},"\u5b98\u65b9\u6587\u6863"),"\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"homepage": "https://[username].github.io/vite-project",\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"[username]"),"\u66ff\u6362\u6210\u4f60\u7684 GitHub \u7528\u6237\u540d\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e09\u6b65\uff1a\u5728\u8fd9\u4e2a\u4ed3\u5e93\u7684",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows"),"\u76ee\u5f55\uff0c\u751f\u6210\u4e00\u4e2a workflow \u6587\u4ef6\uff0c\u540d\u5b57\u53ef\u4ee5\u968f\u4fbf\u53d6\uff0c\u8fd9\u4e2a\u793a\u4f8b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"ci.yml"),"\u3002"),(0,r.kt)("p",null,"workflow \u6587\u4ef6\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"name: Build and Deploy\non:\n  push:\n    branches:\n      - master\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n\n      - name: Install and Build\n        run: |\n          yarn install\n          yarn run build\n\n      - name: Deploy\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          personal_token: ${{ secrets.ACCESS_TOKEN }}\n          publish_dir: ./dist\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e2a workflow \u6587\u4ef6\u7684\u8981\u70b9\u5982\u4e0b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6574\u4e2a\u6d41\u7a0b\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"master"),"\u5206\u652f\u53d1\u751f",(0,r.kt)("inlineCode",{parentName:"li"},"push"),"\u4e8b\u4ef6\u65f6\u89e6\u53d1\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ea\u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"job"),"\uff0c\u8fd0\u884c\u5728\u865a\u62df\u673a\u73af\u5883",(0,r.kt)("inlineCode",{parentName:"li"},"ubuntu-latest"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u6b65\u662f\u83b7\u53d6\u6e90\u7801\uff0c\u4f7f\u7528\u7684 action \u662f",(0,r.kt)("inlineCode",{parentName:"li"},"actions/checkout"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u6b65\u662f\u5b89\u88c5\u4f9d\u8d56\u4e0e\u6784\u5efa\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"yarn install"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"yarn run build")),(0,r.kt)("li",{parentName:"ol"},"\u7b2c\u4e09\u6b65\u662f\u90e8\u7f72\u5230 Github Page \u4e0a\uff0c\u4f7f\u7528\u7684 action \u662f ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/github-pages-action"},"peaceiris/actions-gh-pages@v3"),"\u3002\u5176\u4e2d\u9700\u8981\u8bbe\u7f6e secrets.ACCESS_TOKEN")),(0,r.kt)("p",null,"\u7b2c\u56db\u6b65\uff1a\u5c06\u9879\u76ee\u4e0a\u4f20\u7f6e Github \u4ed3\u5e93\u4e2d\uff0c"),(0,r.kt)("p",null,"\u8be5 peaceiris/actions-gh-pages \u652f\u6301\u4e09\u79cd Token\uff0c\u8fd9\u91cc\u4f7f\u7528 personal_token\uff0c\u5176\u751f\u6210\u6559\u7a0b\u5728",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"\u5b98\u65b9\u6587\u6863"),"\u4e2d\u6709\u8be6\u7ec6\u56fe\u6587\uff0c\u8fd9\u91cc\u5c31\u4e0d\u8d34\u5176\u751f\u6210\u7684\u56fe\u4e86\u3002",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u8fc7\u8bb0\u5f97\u6743\u9650\u8fc7\u671f\u4ee5\u53ca\u52fe\u9009\u4e0a workflow")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"token \u53ea\u4f1a\u5728\u751f\u6210\u7684\u65f6\u5019\u663e\u793a\u4e00\u6b21\uff0c\u5982\u9700\u8981\u518d\u6b21\u663e\u793a\uff0c\u5219\u53ef\u4ee5\u70b9\u51fb\uff0c\u4f46\u4f7f\u7528\u6b64\u4ee4\u724c\u7684\u4efb\u4f55\u811a\u672c\u6216\u5e94\u7528\u7a0b\u5e8f\u90fd\u9700\u8981\u66f4\u65b0\uff01"))),(0,r.kt)("p",null,"\u7136\u540e\u5728",(0,r.kt)("strong",{parentName:"p"},"Settings -> Secrets -> Actions \u4e2d New repository secret"),"\u4e2d\u4fbf\u53ef\u6dfb\u52a0 secret\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20220511122017247.png",alt:"image-20220511122017247"})),(0,r.kt)("p",null,"\u8fd9\u65f6\u5019\u53ea\u8981\u4e00\u8c03\u7528 git push\uff0c\u5c31\u4f1a\u89e6\u53d1\u5bf9\u5e94\u7684 workflows \u6587\u4ef6\u914d\u7f6e\u3002\u70b9\u51fb Actions \u4fbf\u53ef\u770b\u5230 jobs \u5de5\u4f5c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20220511122420135.png",alt:"image-20220511122420135"})),(0,r.kt)("p",null,"\u6b64\u65f6\u8bbf\u95ee",(0,r.kt)("a",{parentName:"p",href:"https://kuizuo.github.io/vite-project%E5%B0%B1%E5%8F%AF%E5%91%88%E7%8E%B0vite%E9%A1%B9%E7%9B%AE%EF%BC%88%E4%B8%8D%E8%BF%87%E6%88%91%E5%B7%B2%E7%BB%8F%E6%8A%8A%E4%BB%93%E5%BA%93%E7%BB%99%E5%85%B3%E9%97%AD%E4%BA%86%EF%BC%89%EF%BC%8C%E4%BD%86%E8%BF%9B%E5%85%A5%E4%BC%9A%E7%99%BD%E5%B1%8F%EF%BC%8C%E6%8E%A7%E5%88%B6%E5%8F%B0%E6%8F%90%E7%A4%BA"},"https://kuizuo.github.io/vite-project\u5c31\u53ef\u5448\u73b0vite\u9879\u76ee\uff08\u4e0d\u8fc7\u6211\u5df2\u7ecf\u628a\u4ed3\u5e93\u7ed9\u5173\u95ed\u4e86\uff09\uff0c\u4f46\u8fdb\u5165\u4f1a\u767d\u5c4f\uff0c\u63a7\u5236\u53f0\u63d0\u793a")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20220511122914534.png",alt:"image-20220511122914534"})),(0,r.kt)("p",null,"\u5f88\u663e\u7136\uff0c\u9700\u8981\u9759\u6001\u8d44\u6e90\u8bf7\u6c42\u7684\u8def\u5f84\u9519\u4e86\uff0c\u6b63\u786e\u7684\u5e94\u8be5\u662f",(0,r.kt)("a",{parentName:"p",href:"https://kuizuo.github.io/vite-project/assets/index.2435d274.js%EF%BC%8C%E6%A0%B9%E6%8D%AEVite%E4%B8%AD%E7%9A%84%5B%E6%9E%84%E5%BB%BA%E7%94%9F%E4%BA%A7%E7%89%88%E6%9C%AC%5D(https://www.vitejs.net/guide/build.html#public-base-path)"},"https://kuizuo.github.io/vite-project/assets/index.2435d274.js\uff0c\u6839\u636eVite\u4e2d\u7684[\u6784\u5efa\u751f\u4ea7\u7248\u672c](https://www.vitejs.net/guide/build.html#public-base-path)")," \u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"--base=/vite-project/")),(0,r.kt)("p",null,"\u7a0d\u52a0\u64cd\u4f5c\u5728 Install and Build \u52a0\u4e0a base \u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      - name: Install and Build\n        run: |\n          yarn install\n          yarn run build --base=/vite-project/\n")),(0,r.kt)("p",null,"git push \u540e\uff0c\u7a0d\u7b49\u7247\u523b\u518d\u6b21\u8bbf\u95ee\u4fbf\u53ef\u5f97\u5230\u5982\u4e0b\u9875\u9762"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20220511125536189.png",alt:"image-20220511125536189"})),(0,r.kt)("h2",{id:"\u5c06\u9879\u76ee\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a"},"\u5c06\u9879\u76ee\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a"),(0,r.kt)("p",null,"\u90a3\u4e48\u73b0\u5728\u5728 Github Page \u4e0a\u642d\u5efa\u597d\u4e86\uff0c\u4f46\u8fd8\u8981\u5c06\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u8fd8\u53ef\u4ee5\u901a\u8fc7 FTP \u534f\u8bae\u6dfb\u52a0\u81ea\u5df1\u7684\u670d\u52a1\u5668\u4e0a\uff0c\u8fd9\u91cc\u6211\u5c31\u4ee5\u6211\u7684\u535a\u5ba2\u4e3a\u4f8b\u3002"),(0,r.kt)("p",null,"\u5728\u670d\u52a1\u5668\u4e2d\u5f00\u542f FTP\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a\u7528\u6237\u540d,\u5bc6\u7801\u4ee5\u53ca\u6839\u76ee\u5f55(\u8fd9\u91cc\u6211\u95ee\u9009\u62e9\u4e3a\u9879\u76ee\u76ee\u5f55)"),(0,r.kt)("p",null,"workflow \u8981\u505a\u7684\u5c31\u662f\u65b0\u5efa\u4e00\u4e2a steps\uff0c\u8fd9\u91cc\u9009\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SamKirkland/FTP-Deploy-Action"},"FTP-Deploy-Action"),"\uff0c\u4ee5\u4e0b\u662f\u6211\u7684\u5b8c\u6574\u914d\u7f6e\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"name: Build and Deploy\n\non: [push]\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n\n      - name: Use Node.js 16\n        uses: actions/setup-node@v3\n        with:\n          node-version: '16.x'\n\n      - name: Build Project\n        run: |\n          yarn install\n          yarn run build\n\n      - name: FTP Deploy\n        uses: SamKirkland/FTP-Deploy-Action@4.0.0\n        with:\n          server: ${{ secrets.ftp_server }}\n          username: ${{ secrets.ftp_user }}\n          password: ${{ secrets.ftp_pwd }}\n          local-dir: ./build/\n          server-dir: ./\n")),(0,r.kt)("p",null,"\u76f8\u4fe1\u7b2c\u4e00\u4e2a\u5b9e\u4f8b\u4e2d\u7684 workflow \u5e94\u8be5\u5df2\u7ecf\u660e\u767d\u4e86\uff0c\u5176\u4e2d ftp_server\uff0cftp_user\uff0cftp_pwd \u90fd\u662f\u79c1\u5bc6\u4fe1\u606f\uff0c\u6240\u4ee5\u9700\u8981 New repository secret \u8bbe\u7f6e\u8fd9\u4e09\u4e2a\u53d8\u91cf\u3002"),(0,r.kt)("p",null,"\u4f46\u7531\u4e8e build \u4e0b\u5b58\u5728\u5927\u91cf\u6587\u4ef6\u5939\u4e0e\u6587\u4ef6\uff0c\u6240\u4ee5 FTP \u901f\u5ea6\u4e0a\u4f20\u901f\u5ea6\u582a\u5fe7\uff0c\u6700\u7ec8\u8017\u65f6 17 minutes 38.4 seconds\u3002\u8fd9\u91cc\u53ea\u662f\u4f5c\u4e3a FTP \u6f14\u793a\u3002"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u6f14\u793a\u4fbf\u53ef\u770b\u51fa Github Actions \u7684\u5f3a\u5927\uff0c\u4f46\u5176\u5b9e\u6211\u633a\u65e9\u4e4b\u524d\u5c31\u4e86\u89e3\u5230\u5b83\u80fd\u505a\u8fd9\u4e9b\u4e8b\u60c5\uff0c\u4f46\u8fdf\u8fdf\u6ca1\u6709\u52a8\u624b\u5c1d\u8bd5\u4e00\u756a\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u81ea\u52a8\u5316\u64cd\u4f5c\u7528\u4eba\u5de5\u4e5f\u662f\u80fd\u5b8c\u6210\u7684\u3002\u4e5f\u8bb8\u5f53\u65f6\u7684\u6211\u8ba4\u4e3a\uff0c\u7528\u4eba\u5de5\u6240\u82b1\u8d39\u7684\u65f6\u95f4\u8fdc\u6bd4\u81ea\u52a8\u5316\u64cd\u4f5c\u7684\u5b66\u4e60\u65f6\u95f4\u6765\u7684\u957f\uff0c\u53ef\u53c8\u968f\u7740\u81ea\u5df1\u7684\u4e2a\u4eba\u5e94\u7528\u589e\u52a0\uff0c\u6bcf\u6b21\u90fd\u9700\u8981\u624b\u52a8\u53d1\u5e03\uff0c\u800c\u6b64\u65f6\u524d\u8005\u7684\u65f6\u95f4\u5df2\u8fdc\u8fdc\u5927\u4e8e\u540e\u8005\uff0c\u6240\u4ee5\u624d\u4f1a\u60f3\u53bb\u5b66\u4e60\u3002"),(0,r.kt)("p",null,"\u660e\u77e5\u8be5\u6280\u672f\u662f\u4e00\u5b9a\u4f1a\u63a5\u89e6\u7684\uff0c\u4e3a\u4f55\u4e0d\u8d81\u73b0\u5728\u53bb\u4e86\u89e3\u5b66\u4e60\u5462\uff1f"))}d.isMDXComponent=!0}}]);