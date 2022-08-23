"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4554],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=c(n),f=a,k=y["".concat(o,".").concat(f)]||y[f]||u[f]||p;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},28576:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),l=["components"],i={id:"type-of-object-map-refactor",title:"\u91cd\u6784\u4e4b\u5bf9\u8c61\u6620\u5c04\u7c7b\u578b",date:new Date("2021-12-07T00:00:00.000Z"),authors:"kuizuo",tags:["javascript","refactor"]},o=void 0,c={unversionedId:"skill/js/type-of-object-map-refactor",id:"skill/js/type-of-object-map-refactor",title:"\u91cd\u6784\u4e4b\u5bf9\u8c61\u6620\u5c04\u7c7b\u578b",description:"\u5199\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u9047\u5230\u591a\u91cd\u6761\u4ef6\u5206\u652f\u7684\u65f6\u5019\uff0c\u4f7f\u7528if else if\u80af\u5b9a\u4e0d\u5982 switch \u597d\u7528\uff0c\u4f46 switch \u53c8\u907f\u514d\u4e0d\u4e86 break \u8bed\u53e5\u3002\u4f46\u5982\u679c\u53ea\u662f\u5c06\u6570\u636e\u8f6c\u5316\u7684\u8bdd\uff0c\u4e0d\u59a8\u4f7f\u7528\u5bf9\u8c61\u6620\u5c04\u7684\u5f62\u5f0f\u6765\u66ff\u6362",source:"@site/docs/skill/js/\u91cd\u6784\u4e4b\u5bf9\u8c61\u6620\u5c04\u7c7b\u578b.md",sourceDirName:"skill/js",slug:"/skill/js/type-of-object-map-refactor",permalink:"/docs/skill/js/type-of-object-map-refactor",draft:!1,tags:[{label:"javascript",permalink:"/docs/tags/javascript"},{label:"refactor",permalink:"/docs/tags/refactor"}],version:"current",frontMatter:{id:"type-of-object-map-refactor",title:"\u91cd\u6784\u4e4b\u5bf9\u8c61\u6620\u5c04\u7c7b\u578b",date:"2021-12-07T00:00:00.000Z",authors:"kuizuo",tags:["javascript","refactor"]},sidebar:"skill",previous:{title:"\u91cd\u6784\u4e4b\u591a\u6001\u6d88\u9664\u6761\u4ef6\u5206\u652f",permalink:"/docs/skill/js/polymorphic-elimination-conditional-branching-refactor"},next:{title:"Node",permalink:"/docs/category/node"}},s={},u=[{value:"\u9700\u6c42",id:"\u9700\u6c42",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2},{value:"enum\uff08\u679a\u4e3e\uff09",id:"enum\u679a\u4e3e",level:2},{value:"\u540e\u7eed\u91cd\u6784",id:"\u540e\u7eed\u91cd\u6784",level:2}],y={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u5199\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u9047\u5230\u591a\u91cd\u6761\u4ef6\u5206\u652f\u7684\u65f6\u5019\uff0c\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"if else if"),"\u80af\u5b9a\u4e0d\u5982 switch \u597d\u7528\uff0c\u4f46 switch \u53c8\u907f\u514d\u4e0d\u4e86 break \u8bed\u53e5\u3002\u4f46\u5982\u679c\u53ea\u662f\u5c06\u6570\u636e\u8f6c\u5316\u7684\u8bdd\uff0c\u4e0d\u59a8\u4f7f\u7528\u5bf9\u8c61\u6620\u5c04\u7684\u5f62\u5f0f\u6765\u66ff\u6362"),(0,p.kt)("h2",{id:"\u9700\u6c42"},"\u9700\u6c42"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u9898\u578b\u5bf9\u5e94\u7684\u6570\u5b57\u8f6c\u5316 \u5c06\u5355\u9009 0 \u591a\u9009 1 \u586b\u7a7a 2 \u5224\u65ad 3 \u7b80\u7b54 4 \u5176\u4ed6\u7c7b\u578b-1 \u8f6c\u5316\u4e3a \u5355\u9009 1 \u591a\u9009 2 \u5224\u65ad 3 \u586b\u7a7a 4 \u7b80\u7b54 5 \u5176\u4ed6\u7c7b\u578b-1")),(0,p.kt)("p",null,"\u76ee\u7684\uff1a\u524d\u8005\u662f\u5176\u4ed6\u6765\u6e90\u7684\u9898\u76ee\u9898\u578b\u6807\u8bb0\uff0c\u800c\u540e\u8005\u662f\u5b58\u5165\u6570\u636e\u5e93\u7684\u9898\u76ee\u6807\u8bb0\u3002"),(0,p.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"if else if \u8bed\u53e5")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"let ti = {\n  title: '\u9898\u76ee',\n  answer: '\u7b54\u6848',\n  type: null,\n};\n\nlet type = 0;\nif (type === 0) {\n  ti.type = 1;\n} else if (type === 1) {\n  ti.type = 2;\n} else if (type === 2) {\n  ti.type = 3;\n} else if (type === 3) {\n  ti.type = 4;\n} else if (type === 4) {\n  ti.type = 5;\n} else {\n  ti.type = -1;\n}\n\nconsole.log(ti.type); // 1\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"swtich \u8bed\u53e5")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"let ti = {\n  title: '\u9898\u76ee',\n  answer: '\u7b54\u6848',\n  type: null,\n};\n\nlet type = 0;\nswitch (type) {\n  case 0:\n    ti.type = 1;\n    break;\n  case 1:\n    ti.type = 2;\n    break;\n  case 2:\n    ti.type = 3;\n    break;\n  case 3:\n    ti.type = 4;\n    break;\n  case 4:\n    ti.type = 5;\n    break;\n  default:\n    ti.type = -1;\n    break;\n}\n\nconsole.log(ti.type); // 1\n")),(0,p.kt)("p",null,"\u663e\u800c\u6613\u89c1 \u4e0a\u9762\u7684\u4ee3\u7801\u5199\u7684\u5f88\u81c3\u80bf\uff0c\u5e76\u4e14\u53ef\u8bfb\u6027\u5f88\u5dee\uff0c\u4e07\u4e00\u8fd9\u65f6\u5019\u6709\u9053\u9898\u578b\u5bf9\u5e94\u6570\u5b57\u7684\u53d1\u751f\u4e86\u6539\u53d8\uff0c\u5c31\u5f88\u5bb9\u6613\u6539\u9519\u3002"),(0,p.kt)("p",null,"\u4e0d\u59a8\u5b9a\u4e49\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u4e8e\u6620\u5c04\u4e0d\u540c\u7684\u9898\u76ee\u9898\u578b\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"let ti = {\n  title: '\u9898\u76ee',\n  answer: '\u7b54\u6848',\n  type: null,\n};\n\nlet type = 0;\n\nconst typeMap = {\n  0: 1, // \u5355\u9009\n  1: 2, // \u591a\u9009\n  2: 3, // \u5224\u65ad\n  3: 4, // \u586b\u7a7a\n  4: 5, // \u7b80\u7b54\n};\n\nti.type = typeMap[type] ?? -1; // typeMap[type]\u4e3a0\u7684\u8bdd \u4e3a\u5047\u503c \u4f7f\u7528||\u5c06\u4f1a\u8d4b\u503c\u4e3a-1\n\nconsole.log(ti.type); // 1\n")),(0,p.kt)("p",null,"\u50cf\u8fd9\u6837\u7684\u4f8b\u5b50\u8fd8\u6709\u72b6\u6001\u6620\u5c04\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"let status = 1\nconst statusMap = {\n  0: '\u672a\u4f7f\u7528'\n  1: '\u5df2\u4f7f\u7528',\n}\nlet statusStr = statusMap[status]\n")),(0,p.kt)("p",null,"\u8fd9\u6837\u5df2\u7ecf\u5f88\u597d\u4e86\uff0c\u8fd9\u91cc\u7684 1 2 3 4 5 \u540e\u90fd\u6dfb\u52a0\u4e86\u6ce8\u91ca\uff0c\u589e\u52a0\u4e86\u4e00\u5b9a\u7684\u53ef\u8bfb\u6027\uff0c\u4f46\u662f\u8fd8\u4e0d\u591f\uff0c\u6709\u65f6\u5019\u5728\u5f15\u7528\u7684\u8bdd\u6216\u8bb0\u6df7\u4e86\u90fd\u6709\u53ef\u80fd\u628a\u586b\u7a7a\u9898\u5224\u65ad\u6210\u7b80\u7b54\u9898\uff0c\u6bd4\u5982\u540e\u7eed\u4f7f\u7528\u7684\u4ee3\u7801"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"switch (ti.type) {\n  case 1: // \u5355\u9009\n    // ...\n    break;\n  case 2: // \u591a\u9009\n    // ...\n    break;\n  case 3: // \u5224\u65ad\n    // ...\n    break;\n  case 4: // \u586b\u7a7a\n    // ...\n    break;\n  case 5: // \u7b80\u7b54\n    // ...\n    break;\n  default:\n    break;\n}\n")),(0,p.kt)("p",null,"\u53c8\u9700\u8981\u52a0\u4e00\u904d\u6ce8\u91ca\uff0c\u5982\u679c\u4e0d\u770b",(0,p.kt)("inlineCode",{parentName:"p"},"typeMap"),"\u7684\u8bdd\uff0c\u5c31\u5f88\u5927\u7684\u53ef\u80fd\u4f1a\u5199\u9519\u3002\u4e8e\u662f\u4e00\u4e2a\u597d\u7684\u547d\u540d\u5c31\u81f3\u5173\u91cd\u8981\u4e86"),(0,p.kt)("h2",{id:"enum\u679a\u4e3e"},"enum\uff08\u679a\u4e3e\uff09"),(0,p.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u7684\u662f Typescript\uff0c\u90a3\u4e48\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 enum\uff08\u679a\u4e3e\uff09"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"enum Qtype {\n  RADIO = 0,\n  MULT = 1,\n  BLANK = 2,\n  JUDGE = 3,\n  SHORT = 4,\n  UNKNOWN = -1,\n}\n")),(0,p.kt)("p",null,"\u6b64\u65f6\u7684\u6574\u4e2a\u4ee3\u7801\u5c31\u53ef\u4ee5\u5199\u6210\u8fd9\u6837"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"let ti = {\n  title: '\u9898\u76ee',\n  answer: '\u7b54\u6848',\n  type: null,\n};\n\nlet type = 0;\nconst typeMap = {\n  0: Qtype.RADIO, // \u5355\u9009\n  1: Qtype.CHECK, // \u591a\u9009\n  2: Qtype.JUDGE, // \u5224\u65ad\n  3: Qtype.BLANK, // \u586b\u7a7a\n  4: Qtype.SHORT, // \u7b80\u7b54\n};\n\nti.type = typeMap[type] ?? Qtype.UNKNOWN;\nconsole.log(ti.type); // 1\n\nswitch (ti.type) {\n  case Qtype.RADIO:\n    // ...\n    break;\n  case Qtype.CHECK: // \u591a\u9009\n    // ...\n    break;\n  case Qtype.JUDGE: // \u5224\u65ad\n    // ...\n    break;\n  case Qtype.BLANK: // \u586b\u7a7a\n    // ...\n    break;\n  case Qtype.SHORT: // \u7b80\u7b54\n    // ...\n    break;\n  default:\n    break;\n}\n")),(0,p.kt)("p",null,"\u5982\u679c\u4e0d\u65b0\u5efa\u4e00\u4e2atypeMap\u53d8\u91cf\uff0c\u8fd8\u53ef\u4ee5\u76f4\u63a5\u8fd9\u6837\u64cd\u4f5c"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"ti.type = {\n  0: Qtype.RADIO, // \u5355\u9009\n  1: Qtype.CHECK, // \u591a\u9009\n  2: Qtype.JUDGE, // \u5224\u65ad\n  3: Qtype.BLANK, // \u586b\u7a7a\n  4: Qtype.SHORT, // \u7b80\u7b54\n}[type] ?? Qtype.UNKNOWN;\n")),(0,p.kt)("h2",{id:"\u540e\u7eed\u91cd\u6784"},"\u540e\u7eed\u91cd\u6784"),(0,p.kt)("p",null,"\u5982\u679c\u8fd9\u65f6\u5019\u9700\u6c42\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u6bd4\u5982\u5224\u65ad\u9898\u4e0e\u586b\u7a7a\u9898\u7684\u6570\u5b57\u8981\u4ea4\u6362\u4e00\u4e0b\uff0c\u90a3\u4e48\u4e5f\u53ea\u9700\u8981\u4fee\u6539",(0,p.kt)("inlineCode",{parentName:"p"},"Qtype"),"\uff0c\u6781\u5927\u7684\u63d0\u9ad8\u4e86\u5f00\u53d1\u7684\u6548\u7387\u4e0e bug \u7684\u53d1\u751f\u3002"))}f.isMDXComponent=!0}}]);