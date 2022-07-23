"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7248],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=o.createContext({}),p=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(u.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,k=c["".concat(u,".").concat(g)]||c[g]||i[g]||r;return t?o.createElement(k,l(l({ref:n},s),{},{components:t})):o.createElement(k,l({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},76117:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return i}});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),l=["components"],d={slug:"mongodb-time-grouping",title:"MongoDB\u6309\u65f6\u95f4\u5206\u7ec4",date:new Date("2021-08-30T00:00:00.000Z"),authors:"kuizuo",tags:["mongodb"]},u=void 0,p={permalink:"/examenEbau/mongodb-time-grouping",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/MongoDB\u6309\u65f6\u95f4\u5206\u7ec4.md",source:"@site/blog/develop/MongoDB\u6309\u65f6\u95f4\u5206\u7ec4.md",title:"MongoDB\u6309\u65f6\u95f4\u5206\u7ec4",description:"\u9700\u6c42",date:"2021-08-30T00:00:00.000Z",formattedDate:"2021\u5e748\u670830\u65e5",tags:[{label:"mongodb",permalink:"/examenEbau/tags/mongodb"}],readingTime:7.77,truncated:!0,authors:[{name:"\u6127\u600d",title:"\u7f16\u7a0b\u7231\u597d\u8005 / \u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"mongodb-time-grouping",title:"MongoDB\u6309\u65f6\u95f4\u5206\u7ec4",date:"2021-08-30T00:00:00.000Z",authors:"kuizuo",tags:["mongodb"]},prevItem:{title:"\u5c1d\u8bd5\u4e91\u5f00\u53d1",permalink:"/examenEbau/try-to-cloud-develop"},nextItem:{title:"\u57fa\u4e8eAxios\u5c01\u88c5HTTP\u7c7b\u5e93",permalink:"/examenEbau/axios-http-class-library"}},s={authorsImageUrls:[void 0]},i=[{value:"\u9700\u6c42",id:"\u9700\u6c42",level:2},{value:"MongoDB \u7684\u4e00\u4e9b\u65f6\u95f4\u64cd\u4f5c\u7b26",id:"mongodb-\u7684\u4e00\u4e9b\u65f6\u95f4\u64cd\u4f5c\u7b26",level:2},{value:"\u65e5\u671f\u5206\u7ec4",id:"\u65e5\u671f\u5206\u7ec4",level:2},{value:"\u661f\u671f\u5206\u7ec4",id:"\u661f\u671f\u5206\u7ec4",level:2},{value:"\u591a\u5546\u54c1",id:"\u591a\u5546\u54c1",level:2},{value:"\u6700\u7ec8\u5b9e\u73b0",id:"\u6700\u7ec8\u5b9e\u73b0",level:2},{value:"\u53e6\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f",id:"\u53e6\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f",level:2}],c={toc:i};function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u9700\u6c42"},"\u9700\u6c42"),(0,r.kt)("p",null,"\u9700\u6c42\u662f\u8fd9\u6837\u7684\uff0c\u8981\u7edf\u8ba1\u6bcf\u4e00\u5468\u7684\u5404\u4e2a\u5546\u54c1\u7684\u9500\u552e\u8bb0\u5f55\uff0c\u4f7f\u7528 echarts \u56fe\u8868\u5448\u73b0\uff0c\u5982\u4e0b\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210830214556262.png",alt:"image-20210830214556262"})),(0,r.kt)("p",null,"\u8bf4\u5b9e\u8bdd\uff0c\u4e00\u5f00\u59cb\u542c\u5230\u8fd9\u4e2a\u9700\u6c42\u7684\u65f6\u5019\uff0c\u6211\u662f\u6709\u70b9\u614c\u7684\uff0c\u56e0\u4e3a MongoDB \u7684\u5206\u7ec4\u73a9\u7684\u6bd4\u8f83\u5c11\uff08Mysql \u4e5f\u5dee\u4e0d\u591a\uff09\uff0c\u53c8\u8981\u6309\u7167\u5bf9\u5e94\u7684\u661f\u671f\u6765\u8fdb\u884c\u5206\u7ec4\uff0c\u8fd9\u5728\u4e4b\u524d\u5b66\u4e60 MongoDB \u7684\u65f6\u5019\u8fd8\u6ca1\u63a5\u89e6\u8fc7\uff0c\u4e8e\u662f\u5c31\u51c6\u5907\u5199\u4e86\u8fd9\u7bc7\u6587\u7ae0\uff0c\u6765\u8bb0\u5f55\u4e0b\u6211\u662f\u5982\u4f55\u8fdb\u884c\u5206\u7ec4\u7684"),(0,r.kt)("h2",{id:"mongodb-\u7684\u4e00\u4e9b\u65f6\u95f4\u64cd\u4f5c\u7b26"},"MongoDB \u7684\u4e00\u4e9b\u65f6\u95f4\u64cd\u4f5c\u7b26"),(0,r.kt)("p",null,"\u65f6\u95f4\u64cd\u4f5c\u7b26\uff08\u4e13\u4e1a\u672f\u8bed\u5e94\u8be5\u4e0d\u662f\u8fd9\u4e2a\uff0c\u540e\u6587\u6682\u4e14\u4f7f\u7528\u8fd9\u4e2a\u6765\u63cf\u8ff0\uff09\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u540e\u9762\u4f1a\u7528\u5230\u7684")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$dayOfYear: \u8fd4\u56de\u8be5\u65e5\u671f\u662f\u8fd9\u4e00\u5e74\u7684\u7b2c\u51e0\u5929\u3002\uff08\u5168\u5e74366\u5929\uff09\n$dayOfMonth: \u8fd4\u56de\u8be5\u65e5\u671f\u662f\u8fd9\u4e00\u4e2a\u6708\u7684\u7b2c\u51e0\u5929\u3002\uff081\u523031\uff09\n$dayOfWeek: \u8fd4\u56de\u7684\u662f\u8fd9\u4e2a\u5468\u7684\u661f\u671f\u51e0\u3002\uff081\uff1a\u661f\u671f\u65e5\uff0c7\uff1a\u661f\u671f\u516d\uff09\n$year: \u8fd4\u56de\u8be5\u65e5\u671f\u7684\u5e74\u4efd\u90e8\u5206\n$month\uff1a \u8fd4\u56de\u8be5\u65e5\u671f\u7684\u6708\u4efd\u90e8\u5206\uff08between 1 and 12.\uff09\n$week\uff1a \u8fd4\u56de\u8be5\u65e5\u671f\u662f\u6240\u5728\u5e74\u7684\u7b2c\u51e0\u4e2a\u661f\u671f\uff08between 0 and 53\uff09\n$hour\uff1a \u8fd4\u56de\u8be5\u65e5\u671f\u7684\u5c0f\u65f6\u90e8\u5206\n$minute: \u8fd4\u56de\u8be5\u65e5\u671f\u7684\u5206\u949f\u90e8\u5206\n$second: \u8fd4\u56de\u8be5\u65e5\u671f\u7684\u79d2\u90e8\u5206\uff08\u4ee50\u523059\u4e4b\u95f4\u7684\u6570\u5b57\u5f62\u5f0f\u8fd4\u56de\u65e5\u671f\u7684\u7b2c\u4e8c\u90e8\u5206\uff0c\u4f46\u53ef\u4ee5\u662f60\u6765\u8ba1\u7b97\u95f0\u79d2\u3002\uff09\n$millisecond\uff1a\u8fd4\u56de\u8be5\u65e5\u671f\u7684\u6beb\u79d2\u90e8\u5206\uff08between 0 and 999.\uff09\n$dateToString\uff1a{ $dateToString: { format: <formatString>, date: <dateExpression> } }\n")),(0,r.kt)("h2",{id:"\u65e5\u671f\u5206\u7ec4"},"\u65e5\u671f\u5206\u7ec4"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/wangshu_liang/article/details/95326578?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0.essearch_pc_relevant&spm=1001.2101.3001.4242"},"mongdb \u805a\u5408\u67e5\u8be2\u65e5\u671f \u7edf\u8ba1\u6bcf\u5929\u6570\u636e")),(0,r.kt)("p",null,"\u5173\u4e8e\u65e5\u671f\u5206\u7ec4\u7684\u8bdd\uff0c\u6211\u662f\u501f\u9274\u4e86\u8fd9\u7bc7\u6587\u7ae0\uff0c\u4e5f\u786e\u5b9e\u5e26\u6211\u89e3\u60d1\u4e86\u4e0b\u5982\u4f55\u6309\u7167\u65e5\u671f\u5206\u7ec4\u3002\u8fd9\u91cc\u8d34\u4e0b\u6211\u7684\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let list = await this.goodsModel\n  .aggregate([\n    { $project: { date: { $dateToString: ['$created_at', 0, 10] } } },\n    { $group: { _id: '$date', count: { $sum: 1 } } },\n    { $project: { date: '$_id', _id: 0, count: 1 } }, // \u518d\u4f7f\u7528$project\u5c06_id\u6539\u540d\u4e3adate\n    { $sort: { date: -1 } }, // \u6839\u636e\u65e5\u671f\u5012\u5e8f\n  ])\n  .exec();\n")),(0,r.kt)("p",null,"\u6216\u8005\u4f7f\u7528\u65f6\u95f4\u64cd\u4f5c\u7b26\uff08\u66f4\u51c6\u786e\u4e00\u70b9\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let list = await this.goodsModel\n  .aggregate([\n    {\n      $project: { date: { $dateToString: { format: '%Y-%m-%d', date: '$created_at' } } },\n    },\n    { $group: { _id: '$date', count: { $sum: 1 } } },\n    { $project: { date: '$_id', _id: 0, count: 1 } }, // \u518d\u4f7f\u7528$project\u5c06_id\u6539\u540d\u4e3adate\n    { $sort: { date: -1 } }, // \u6839\u636e\u65e5\u671f\u5012\u5e8f\n  ])\n  .exec();\n")),(0,r.kt)("p",null,"\u901a\u8fc7"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8981\u6ce8\u610f\u7684\u662f\uff0c$group \u91cc\u7684\u5c5e\u6027\u5fc5\u987b\u4e3a","_","id\uff0c\u4e0d\u7136\u65e0\u6cd5\u5206\u7ec4")),(0,r.kt)("p",null,"\u83b7\u53d6\u5230\u7684\u6570\u636e\u5982\u4e0b\uff08\u8fd9\u91cc\u53ea\u663e\u793a\u4e00\u5468\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "count": 54, "date": "2021-08-30" },\n  { "count": 29, "date": "2021-08-29" },\n  { "count": 16, "date": "2021-08-28" },\n  { "count": 17, "date": "2021-08-27" },\n  { "count": 12, "date": "2021-08-26" },\n  { "count": 6, "date": "2021-08-25" },\n  { "count": 0, "date": "2021-08-24" }\n]\n')),(0,r.kt)("p",null,"\u5982\u679c\u53ea\u662f\u65e5\u671f\u548c\u603b\u5546\u54c1\u7684\u8bdd\uff0c\u4e0a\u9762\u5c31\u8db3\u4ee5\u663e\u793a\u5bf9\u5e94\u7684\u6570\u636e\u4e86\uff0c\u53ef\u6211\u8981\u6839\u636e\u661f\u671f\u8fdb\u884c\u5206\u7ec4\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u66ff\u6362 MongoDB \u7684\u65f6\u95f4\u8f6c\u5316\u51fd\u6570\u4e86"),(0,r.kt)("h2",{id:"\u661f\u671f\u5206\u7ec4"},"\u661f\u671f\u5206\u7ec4"),(0,r.kt)("p",null,"\u661f\u671f\u5206\u7ec4\u7684\u8bdd\uff0c\u5176\u5b9e\u4e5f\u633a\u7b80\u5355\u7684\uff0c\u53ea\u9700\u8981\u628a\u4e0a\u9762\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'$project: { day: { $dateToString: { format: "%Y-%m-%d", date: "$created_at" } } }\n')),(0,r.kt)("p",null,"\u66ff\u6362\u6210"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"$project: {\n  week: {\n    $dayOfWeek: {\n      date: '$created_at';\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u5b8c\u6574\u4ee3\u7801\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u8981\u83b7\u53d6\u7684\u662f\u4e00\u5468\u524d\u7684\u96f6\u70b9\u65f6\u95f4\nlet lastweekDay = dayjs(dayjs().add(-7, 'day').format('YYYY-MM-DD')).valueOf();\n\nlet list = await this.goodsModel\n  .aggregate([\n    { $match: { created_at: { $gte: new Date(lastweekDay) } } }, //\u8303\u56f4\u65f6\u95f4\n    { $project: { week: { $dayOfWeek: { date: '$created_at' } } } },\n    { $group: { _id: '$week', count: { $sum: 1 } } },\n    { $project: { week: '$_id', _id: 0, count: 1 } }, // \u518d\u4f7f\u7528$project\u5c06_id\u6539\u540d\u4e3aweek\n    { $sort: { week: 1 } }, // \u6839\u636e\u661f\u671f\u6b63\u5e8f\n  ])\n  .exec();\n")),(0,r.kt)("p",null,"\u83b7\u53d6\u7684\u7ed3\u679c\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[\n  { count: 29, week: 1 }, // \u661f\u671f\u4e03(\u65e5)\n  { count: 54, week: 2 }, // \u661f\u671f\u4e00\n  { count: 1, week: 3 }, // \u661f\u671f\u4e8c\n  { count: 9, week: 4 }, // \u661f\u671f\u4e09\n  { count: 12, week: 5 }, // \u661f\u671f\u56db\n  { count: 17, week: 6 }, // \u661f\u671f\u4e94\n  { count: 16, week: 7 }, // \u661f\u671f\u516d\n];\n")),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u7ec6\u5fc3\u7684\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0\uff0c\u8c8c\u4f3c\u6570\u636e\u5bf9\u4e0d\u4e0a\uff0c\u6ce8\u5f53\u5929\u65f6\u95f4\u4e3a 2021-08-30\uff0c\u661f\u671f\u4e00"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "count": 54, "date": "2021-08-30" }, // \u661f\u671f\u4e00\n  { "count": 29, "date": "2021-08-29" }, // \u661f\u671f\u4e03(\u65e5)\n  { "count": 16, "date": "2021-08-28" }, // \u661f\u671f\u516d\n  { "count": 17, "date": "2021-08-27" }, // \u661f\u671f\u4e94\n  { "count": 12, "date": "2021-08-26" }, // \u661f\u671f\u56db\n  { "count": 9, "date": "2021-08-25" }, // \u661f\u671f\u4e09\n  { "count": 1, "date": "2021-08-24" } // \u661f\u671f\u4e8c\n]\n')),(0,r.kt)("p",null,"\u5176\u5b9e\u53ea\u9700\u8981\u628a\u661f\u671f\u5411\u540e\u6392\u5e8f\u4e00\u4f4d\u5c31\u884c\uff0c\u56e0\u4e3a\u661f\u671f\u672c\u6765\u5c31\u662f\u5c06\u661f\u671f\u65e5\u4f5c\u4e3a\u7b2c\u4e00\u5929\u7684\uff0c\u81f3\u6b64\uff0c\u6309\u7167\u661f\u671f\u5206\u7ec4\u603b\u5546\u54c1\u5c31\u7b97\u5b8c\u6bd5\u4e86\u3002\u540c\u7406\uff0c\u8981\u6309\u7167\u6708\u4efd\uff0c\u5e74\u4efd\uff0c\u751a\u81f3\u5c0f\u65f6\uff0c\u5206\u949f\uff0c\u90fd\u53ef\u4ee5\u76f4\u63a5\u5229\u7528\u65f6\u95f4\u64cd\u4f5c\u7b26\u8f6c\u5316\u65f6\u95f4\u6765\u8fdb\u884c\u5206\u7ec4\u3002"),(0,r.kt)("h2",{id:"\u591a\u5546\u54c1"},"\u591a\u5546\u54c1"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u53ea\u662f\u83b7\u53d6\u4e86\u603b\u5546\u54c1\u4e86\uff0c\u8981\u7ec6\u5206\u4e3a\u591a\u4e2a\u5546\u54c1\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u518d\u6b21\u5229\u7528\u805a\u5408\u51fd\u6570\u6765\u8fdb\u884c\u5206\u7ec4\u4e86\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u5148\u6f14\u793a\u5206\u7ec4\u591a\u4e2a\u5546\u54c1\u5148\uff0c\u5c31\u548c\u6b63\u5e38\u5206\u7ec4\u4e00\u6837"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'let list = await this.goodsModel.aggregate([\n{ $group: { _id: "$type", count: { $sum: 1 } } },\n]).exec()\n')),(0,r.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff08\u8fd9\u91cc\u8f93\u51fa","_","id\uff0c\u662f\u56e0\u4e3a\u6ca1\u6709\u8fdb\u884c$project \u6539\u522b\u540d\uff0c\u5546\u54c1\u6240\u91c7\u7528\u7684\u662f\u6570\u5b57\u8868\u793a\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "_id": 1, "count": 111 },\n  { "_id": 2, "count": 18 },\n  { "_id": 4, "count": 2 },\n  { "_id": 3, "count": 16 }\n]\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u7edf\u8ba1\u7684\u662f\u76f4\u63a5\u662f\u6240\u6709\u5546\u54c1\u7684\u603b\u548c\u3002"),(0,r.kt)("p",null,"\u4f46\u95ee\u9898\u6765\u4e86\uff0c\u600e\u4e48\u6837\u80fd\u5206\u7ec4\u661f\u671f\u7684\u540c\u65f6\uff0c\u53c8\u5bf9\u6bcf\u4e2a\u5546\u54c1\u6240\u5728\u661f\u671f\u8fdb\u884c\u5206\u7ec4\uff0c\u5e76\u4e14\u5230\u5e95\u662f\u4f18\u5148\u5206\u7ec4\u661f\u671f\u671f\u5462\uff0c\u8fd8\u662f\u4f18\u5148\u5206\u7ec4\u5546\u54c1\u5462\uff0c\u8fd9\u8ba9\u6211\u9677\u5165\u6df1\u6df1\u7684\u601d\u8003\u3002"),(0,r.kt)("h2",{id:"\u6700\u7ec8\u5b9e\u73b0"},"\u6700\u7ec8\u5b9e\u73b0"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u7edd\u5bf9\u4e0d\u53ef\u80fd\u4f7f\u7528\u4e24\u6b21",(0,r.kt)("inlineCode",{parentName:"p"},"$group"),"\uff0c\u8981\u4e48\u6ca1\u6709\u661f\u671f\u5206\u7ec4\uff0c\u8981\u4e48\u6ca1\u6709\u5546\u54c1\u5206\u7ec4\uff0c\u4e8e\u662f\u6211\u5c31\u628a\u601d\u8def\u653e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"$project"),"\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"$group"),"\u5185\uff0c\u770b\u770b\u5185\u90e8\u662f\u5426\u6709\u5176\u4ed6\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"$group"),"\u53ef\u4ee5\u5c06\u5c5e\u6027\u6dfb\u52a0\u4e3a\u6570\u7ec4\uff0c\u6ce8\u610f ",(0,r.kt)("inlineCode",{parentName:"p"},'goods: { $push: "$goods" }')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let list = await this.goodsModel\n  .aggregate([\n    { $match: { created_at: { $gte: new Date(lastweekDay) } } },\n    { $project: { week: { $dayOfWeek: { date: '$created_at' } }, goods: 1 } },\n    { $group: { _id: '$week', goods: { $push: '$goods' } } },\n    { $project: { week: '$_id', _id: 0, goods: 1 } },\n    { $sort: { week: 1 } },\n  ])\n  .exec();\n")),(0,r.kt)("p",null,"\u53ef\u5f97\u5230\u7684\u6570\u636e\u5374\u662f\u8fd9\u6837\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "goods": [4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1],\n    "week": 1\n  },\n  {\n    "goods": [1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n    "week": 2\n  },\n  {\n    "goods": [1],\n    "week": 3\n  },\n  {\n    "goods": [3, 3, 3, 3, 3, 3, 3, 3, 4],\n    "week": 4\n  },\n  {\n    "goods": [3, 1, 1, 1, 3, 4, 1, 1, 1, 1, 1, 1],\n    "week": 5\n  },\n  {\n    "goods": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1],\n    "week": 6\n  },\n  {\n    "goods": [4, 3, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1],\n    "week": 7\n  }\n]\n')),(0,r.kt)("p",null,"\u6570\u636e\u5f88\u63a5\u8fd1\u4e86\uff0c\u5982\u679c\u6211\u80fd\u628a\u5bf9\u5e94\u7684\u5546\u54c1\u603b\u548c\u7b97\u8d77\u6765\u5c31\u884c\u4e86\uff0c\u4f46\u95ee\u9898\u662f\u600e\u4e48\u5408\u8d77\u6765\u3002\u3002\u3002"),(0,r.kt)("p",null,"\u5f85\u4f1a\uff0cgoods \u65e2\u7136\u662f\u6570\u7ec4\u7684\u8bdd\uff0c\u90a3\u6211\u80fd\u4e0d\u80fd",(0,r.kt)("inlineCode",{parentName:"p"},"$unwind"),"\u5168\u90e8\u5c55\u5f00\uff0c\u7136\u540e\u6211\u518d\u6765\u4e00\u6b21\u805a\u5408\uff0c\u8bf4\u5e72\u5c31\u5e72\uff01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let list = await this.goodsModel\n  .aggregate([\n    { $match: { created_at: { $gte: new Date(lastweekDay) } } },\n    { $project: { week: { $dayOfWeek: { date: '$created_at' } }, goods: 1 } },\n    { $group: { _id: '$week', goods: { $push: '$goods' } } },\n    { $project: { week: '$_id', _id: 0, goods: 1 } },\n    { $sort: { week: 1 } },\n    { $unwind: '$goods' },\n  ])\n  .exec();\n")),(0,r.kt)("p",null,"\u5f97\u5230\u7684\u6570\u636e\uff08\u7701\u7565\u4e00\u5806\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "goods": 4, "week": 1 },\n  { "goods": 4, "week": 1 },\n  { "goods": 1, "week": 1 },\n  { "goods": 1, "week": 1 },\n  { "goods": 1, "week": 2 },\n  { "goods": 1, "week": 3 },\n  { "goods": 1, "week": 4 }\n]\n')),(0,r.kt)("p",null,"\u7136\u540e\u6211\u5c31\u5361\u4f4f\u4e86\uff0c\u56e0\u4e3a\u6211\u65e0\u8bba\u5982\u4f55\u90fd\u65e0\u6cd5\u5206\u7ec4\u4e00\u4e2a\u5b57\u6bb5\u7684\u65f6\u5019\uff0c\u53c8\u52a0\u4ee5\u9650\u5236\u6761\u4ef6\uff0c\u8981\u4e48\u5206\u7ec4\u5546\u54c1\u7684\u65f6\u5019\uff0c\u7edf\u8ba1\u7684\u662f\u4e00\u5468\u5404\u5546\u54c1\u603b\u6570\u636e\uff0c\u8981\u4e48\u5c31\u662f\u5206\u7ec4\u661f\u671f\u7684\u65f6\u5019\uff0c\u7edf\u8ba1\u7684\u662f\u603b\u7684\u5546\u54c1\u6570\u636e\u3002\u5728\u641c\u7d22\u5927\u91cf\u8d44\u6599\u540e\uff0c\u67e5\u770b\u5b98\u65b9\u4e00\u4e9b\u6587\u6863\u4e5f\u672a\u679c\uff0c\u4e8e\u662f\u6211\u51b3\u5b9a\u81ea\u884c\u5199\u4e00\u4e2a js \u51fd\u6570\u6765\u8fdb\u884c\u6392\u5e8f\uff08\u5b9e\u5728\u662f\u6298\u817e\u4e0d\u52a8\u4e86\uff0c\u80fd\u529b\u6709\u9650 \ud83e\udd71\uff09"),(0,r.kt)("p",null,"\u6700\u7ec8\u5b8c\u6574\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let lastweekDay = dayjs(dayjs().add(-7, 'day').format('YYYY-MM-DD')).valueOf();\n\nlet list = await this.goodsModel\n  .aggregate([\n    { $match: { created_at: { $gte: new Date(lastweekDay) } } },\n    { $project: { week: { $dayOfWeek: { date: '$created_at' } }, goods: 1 } },\n    { $group: { _id: '$week', goods: { $push: '$goods' } } },\n    { $project: { week: '$_id', _id: 0, goods: 1 } },\n    { $sort: { week: 1 } },\n    // { $unwind: \"$goods\" },\n  ])\n  .exec();\n\nfunction getEleNums(data) {\n  var map = {};\n  data.forEach((e) => {\n    if (map[e]) {\n      map[e] += 1;\n    } else {\n      map[e] = 1;\n    }\n  });\n  return map;\n}\n\nlist = list.map((l) => {\n  l.goods = getEleNums(l.goods);\n  return l;\n});\ncosnole.log(list);\n")),(0,r.kt)("p",null,"\u8fd0\u884c\u540e\u7684 list \u7ed3\u679c\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "goods": { "1": 26, "4": 3 }, "week": 1 },\n  { "goods": { "1": 53, "4": 3, "5": 1 }, "week": 2 },\n  { "goods": { "1": 1 }, "week": 3 },\n  { "goods": { "3": 8, "4": 1 }, "week": 4 },\n  { "goods": { "1": 9, "3": 2, "4": 1 }, "week": 5 },\n  { "goods": { "1": 15, "3": 2 }, "week": 6 },\n  { "goods": { "1": 9, "3": 6, "4": 1 }, "week": 7 }\n]\n')),(0,r.kt)("p",null,"\u5982\u679c\u662f\u8981 goods \u4e3a\u5206\u7ec4\u7684\u8bdd\uff0c\u53ea\u9700\u8981\u628a\u4e0a\u9762\u805a\u5408\u4ee3\u7801\u4e2d week \u548c goods \u66ff\u6362\u4e00\u4e0b\u4fbf\u53ef\u3002"),(0,r.kt)("h2",{id:"\u53e6\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f"},"\u53e6\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f"),(0,r.kt)("p",null,"\u4e13\u95e8\u65b0\u5efa\u4e00\u4e2a\u8868\uff0c\u7528\u4e8e\u7edf\u8ba1\u6bcf\u5929\u7684\u9500\u552e\u8bb0\u5f55\uff0c\u7136\u540e\u5206\u7ec4\u7684\u65f6\u5019\u5c31\u6839\u636e\u8be5\u8868\u5c31\u884c\u4e86\uff0c\u5177\u4f53\u4ee3\u7801\u5c31\u5b9e\u73b0\u4e86\uff0c\u601d\u8def\u662f\u633a\u7b80\u5355\u7684\uff0c\u4f46\u662f\u9700\u8981\u65b0\u5efa\u4e00\u4e2a\u8868\uff0c\u589e\u52a0\u8bb0\u5f55\u7684\u65f6\u5019\u6709\u9700\u8981\u589e\u52a0\u4ee3\u7801\uff0c\u5982\u679c\u4e1a\u52a1\u590d\u6742\u7684\u8bdd\u3002\u3002\u3002"))}g.isMDXComponent=!0}}]);