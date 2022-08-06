"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4145],{4137:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},i=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),i=m(t),g=r,c=i["".concat(s,".").concat(g)]||i[g]||u[g]||l;return t?a.createElement(c,o(o({ref:n},d),{},{components:t})):a.createElement(c,o({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=i;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<l;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}i.displayName="MDXCreateElement"},6573:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u}});var a=t(7462),r=t(3366),l=(t(7294),t(4137)),o=["components"],p={id:"mongodb-note",slug:"/skill/database/mongodb",title:"MongoDB\u7b14\u8bb0",date:new Date("2021-06-20T00:00:00.000Z"),tags:["mongodb","database"]},s=void 0,m={unversionedId:"skill/database/mongo/mongodb-note",id:"skill/database/mongo/mongodb-note",title:"MongoDB\u7b14\u8bb0",description:"\u5b89\u88c5",source:"@site/docs/skill/database/mongo/index.md",sourceDirName:"skill/database/mongo",slug:"/skill/database/mongodb",permalink:"/docs/skill/database/mongodb",draft:!1,tags:[{label:"mongodb",permalink:"/docs/tags/mongodb"},{label:"database",permalink:"/docs/tags/database"}],version:"current",frontMatter:{id:"mongodb-note",slug:"/skill/database/mongodb",title:"MongoDB\u7b14\u8bb0",date:"2021-06-20T00:00:00.000Z",tags:["mongodb","database"]}},d={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"Docker",id:"docker",level:3},{value:"\u914d\u7f6e\u8fdc\u7a0b\u8fde\u63a5",id:"\u914d\u7f6e\u8fdc\u7a0b\u8fde\u63a5",level:3},{value:"\u57fa\u672c\u547d\u4ee4",id:"\u57fa\u672c\u547d\u4ee4",level:2},{value:"\u589e\u5220\u6539\u67e5",id:"\u589e\u5220\u6539\u67e5",level:3},{value:"\u7d22\u5f15",id:"\u7d22\u5f15",level:3},{value:"\u8d26\u6237\u6743\u9650\u914d\u7f6e\u7ba1\u7406",id:"\u8d26\u6237\u6743\u9650\u914d\u7f6e\u7ba1\u7406",level:3},{value:"1.\u521b\u5efa\u7528\u6237",id:"1\u521b\u5efa\u7528\u6237",level:4},{value:"\u89d2\u8272\u547d\u4ee4",id:"\u89d2\u8272\u547d\u4ee4",level:3},{value:"\u805a\u5408\u7ba1\u9053",id:"\u805a\u5408\u7ba1\u9053",level:3},{value:"Mongoose",id:"mongoose",level:2},{value:"\u8fde\u63a5",id:"\u8fde\u63a5",level:3},{value:"\u5b9a\u4e49 Schema",id:"\u5b9a\u4e49-schema",level:3},{value:"\u5b9a\u4e49\u6a21\u578b",id:"\u5b9a\u4e49\u6a21\u578b",level:3},{value:"\u81ea\u5b9a\u4e49\u5c01\u88c5\u65b9\u6cd5(\u4e00\u822c\u5f88\u5c11\u4f7f\u7528)",id:"\u81ea\u5b9a\u4e49\u5c01\u88c5\u65b9\u6cd5\u4e00\u822c\u5f88\u5c11\u4f7f\u7528",level:3},{value:"\u6570\u636e\u6548\u9a8c",id:"\u6570\u636e\u6548\u9a8c",level:3},{value:"Mongoose \u547d\u4ee4",id:"mongoose-\u547d\u4ee4",level:2},{value:"\u67e5\u8be2\u6307\u5b9a\u65f6\u95f4\u8303\u56f4",id:"\u67e5\u8be2\u6307\u5b9a\u65f6\u95f4\u8303\u56f4",level:3},{value:"\u53bb\u9664 mongodb __v \u5b57\u6bb5",id:"\u53bb\u9664-mongodb-__v-\u5b57\u6bb5",level:3},{value:"\u67e5\u8be2\u5185\u5d4c\u6570\u7ec4",id:"\u67e5\u8be2\u5185\u5d4c\u6570\u7ec4",level:3},{value:"$elemMatch",id:"elemmatch",level:4},{value:"aggregation",id:"aggregation",level:4},{value:"$group",id:"group",level:4},{value:"\u6570\u636e\u4efd\u4e0e\u6062\u590d",id:"\u6570\u636e\u4efd\u4e0e\u6062\u590d",level:2},{value:"\u5907\u4efd",id:"\u5907\u4efd",level:3},{value:"\u6062\u590d",id:"\u6062\u590d",level:3},{value:"\u5c06 mysql \u4e2d\u7684\u6570\u636e\u5bfc\u5165 mongo",id:"\u5c06-mysql-\u4e2d\u7684\u6570\u636e\u5bfc\u5165-mongo",level:3}],i={toc:u};function g(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("p",null,"\u5b98\u7f51\u4e0b\u8f7d",(0,l.kt)("a",{parentName:"p",href:"https://www.mongodb.com/try/download/community"},"MongoDB Community Download")),(0,l.kt)("p",null,"\u53ef\u5b89\u88c5 MongoDB Compass \u7684\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177"),(0,l.kt)("p",null,"\u6253\u5f00 bin/mongo.exe \u5373\u53ef\u8fde\u63a5 MongoDB"),(0,l.kt)("h3",{id:"linux"},"Linux"),(0,l.kt)("p",null,"\u63a8\u8350\u76f4\u63a5\u5b9d\u5854\u9762\u677f\uff0c\u7136\u540e\u5728\u8f6f\u4ef6\u5546\u5e97\u70b9\u51fb\u5b89\u88c5 MongoDB \u5373\u53ef"),(0,l.kt)("h3",{id:"docker"},"Docker"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/mongo"},"mongo (docker.com)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull mongo:latest\n\nmkdir /home/mongo/ # \u521b\u5efa\u672c\u5730\u6570\u636e\u5e93\u6587\u4ef6\u5939\n\ndocker run -itd --name mongo --restart=always --privileged -p 27017:27017 -v /home/mongo/data:/data/db  -v /home/mongo/conf:/data/configdb  -v /home/mongo/logs:/data/log/ mongo:latest --config /data/configdb/mongod.conf --bind_ip_all\n# -v \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\n# --bind_ip_all \u5141\u8bb8\u6240\u6709IP\u8bbf\u95ee\n# ----restart=always  Docker\u670d\u52a1\u91cd\u542f\u5bb9\u5668\u4e5f\u542f\u52a8\n# --privileged  \u62e5\u6709\u771f\u6b63\u7684root\u6743\u9650\n\ndocker exec -it mongo bash\n# \u8fdb\u5165\u5bb9\u5668\n\nroot@71351dc5b914:/# mongo\n# \u8fdb\u5165 mongo\n\n# \u540e\u6587\u6709\n")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u8fdc\u7a0b\u8fde\u63a5"},"\u914d\u7f6e\u8fdc\u7a0b\u8fde\u63a5"),(0,l.kt)("p",null,"\u9996\u5148\u6309\u7167\u4e0a\u9762\u6b65\u9aa4\u521b\u5efa\u7528\u6237\uff0c\u540e\u7eed\u90fd\u662f\u4ee5\u8fd9\u4e2a\u7528\u6237\u6765\u8fdb\u884c\u8fde\u63a5\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u627e\u5230\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"windows ",(0,l.kt)("inlineCode",{parentName:"p"},"\\bin\\mongod.cfg")),(0,l.kt)("p",null,"linux ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/mongo/mongod.conf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bind_ip = 0.0.0.0\n\nsecurity:\n  authorization:enabled\n# \u6ce8\u610f \u4e24\u4e2a\u7a7a\n")),(0,l.kt)("p",null,"\u6ce8\u610f: mongodb Compass \u6709\u53ef\u80fd\u4f1a\u8fde\u63a5\u4e0d\u4e0a\u63d0\u793a",(0,l.kt)("strong",{parentName:"p"},"Authentication failed"),",\u4f46\u4f7f\u7528\u4ee3\u7801\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u6570\u636e\u5e93\u6587\u4ef6\u5b58\u50a8\u4f4d\u7f6e\ndbpath = /data/db/\n# log\u6587\u4ef6\u5b58\u50a8\u4f4d\u7f6e\nlogpath = /data/log/mongodb/master/mongodb.log\n# \u4f7f\u7528\u8ffd\u52a0\u7684\u65b9\u5f0f\u5199\u65e5\u5fd7\nlogappend = true\n# \u662f\u5426\u4ee5\u5b88\u62a4\u8fdb\u7a0b\u65b9\u5f0f\u8fd0\u884c\n# fork    = true\n# \u7aef\u53e3\u53f7\nport    = 27017\n# \u662f\u5426\u542f\u7528\u8ba4\u8bc1\nauth  = true\n# \u8bbe\u7f6eoplog\u7684\u5927\u5c0f(MB)\noplogSize=2048\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f00\u542f\u9632\u706b\u5899\nsystemctl start firewall")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9632\u706b\u5899\u653e\u7aef\u53e3"),(0,l.kt)("p",{parentName:"li"},"firewall-cmd --zone=public --add-port=27010/tcp --permanent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u91cd\u542f\u9632\u706b\u5899"),(0,l.kt)("p",{parentName:"li"},"firewall-cmd --reload"))),(0,l.kt)("h2",{id:"\u57fa\u672c\u547d\u4ee4"},"\u57fa\u672c\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u6570\u636e\u5e93\nuse \u6570\u636e\u5e93\u540d\n\nshow databases\n\nshow users\n")),(0,l.kt)("h3",{id:"\u589e\u5220\u6539\u67e5"},"\u589e\u5220\u6539\u67e5"),(0,l.kt)("p",null,"\u539f\u751f\u7684 mongodb CRUD \u547d\u4ee4\u6ca1\u5565\u597d\u8bf4\u7684\uff0cNodejs \u4e3b\u8981\u914d\u5408 Mongoose \u6765\u4f7f\u7528\uff0c\u8fd9\u8fb9\u5c31\u76f4\u63a5\u4e0d\u5217\u4e3e\u4e86"),(0,l.kt)("h3",{id:"\u7d22\u5f15"},"\u7d22\u5f15"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// \u521b\u5efa\u7d22\u5f15\ndb.user.ensureIndex({"username":1},{"name":"usernameIndex"}) // 1\u662f\u5347\u5e8f  \u4e00\u822c\u7528\u964d\u5e8f \u53ef\u67e5\u6700\u65b0\u7684\u8d26\u53f7  \u7b2c\u4e8c\u4e2a\u53c2\u6570\u53ef\u6307\u5b9a\u7d22\u5f15\u540d\u79f0\n\n// \u83b7\u53d6\u7d22\u5f15\ndb.user.getIndexes()\n\n// \u5220\u9664\u7d22\u5f15\ndb.user.dropIndex({"username":1})\n\n// \u552f\u4e00\u7d22\u5f15\ndb.user.ensureIndex({"userId":1},{"unique",true})\n// \u518d\u6b21\u63d2\u5165userId\u91cd\u590d\u7684\u6587\u6863 mongodb\u5c06\u4f1a\u62a5\u9519 \u63d0\u793a\u63d2\u5165\u91cd\u590d\u952e  \u540c\u65f6\u6709\u91cd\u590d\u6587\u6863\u4e5f\u65e0\u6cd5\u521b\u5efa\u552f\u4e00\u7d22\u5f15\n')),(0,l.kt)("h3",{id:"\u8d26\u6237\u6743\u9650\u914d\u7f6e\u7ba1\u7406"},"\u8d26\u6237\u6743\u9650\u914d\u7f6e\u7ba1\u7406"),(0,l.kt)("h4",{id:"1\u521b\u5efa\u7528\u6237"},"1.\u521b\u5efa\u7528\u6237"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"use admin\n\n# root \u8d85\u7ea7\u7ba1\u7406\u5458\ndb.createUser({ user:'admin',pwd:'123456',roles:[ { role:'root', db: 'admin'}]});\ndb.auth('admin', '123456')\n\n# \u521b\u5efa\u6709\u53ef\u8bfb\u5199\u6743\u9650\u7684\u7528\u6237. \u5bf9\u4e8e\u4e00\u4e2a\u7279\u5b9a\u7684\u6570\u636e\u5e93, \u6bd4\u5982 my\uff0c\u6dfb\u52a0\u7528\u6237 user1\uff0c\u89d2\u8272\uff1adbOwner\ndb.createUser({user:\"user1\",pwd:\"pwd\",roles:[{role:\"dbOwner\",db:\"my\"}]})\n")),(0,l.kt)("p",null,"\u4e00\u4e9b\u89d2\u8272\u6743\u9650 \u547d\u4ee4"),(0,l.kt)("h3",{id:"\u89d2\u8272\u547d\u4ee4"},"\u89d2\u8272\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'show users   // \u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u4e0b\u89d2\u8272\n\ndb.updateUser("admin",pwd:"password")\n\ndb.auth("admin","password")\n\n// \u6216\u8005 \u76f4\u63a5\u901a\u8fc7Url \u6765\u8fde\u63a5\nconst url = \'mongodb://admin:a123456.@localhost:27027/\';\n')),(0,l.kt)("h3",{id:"\u805a\u5408\u7ba1\u9053"},"\u805a\u5408\u7ba1\u9053"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// $projext \u9650\u5236\u5b57\u6bb5\ndb.order.aggregate([\n{$projext:{no:1,all_price:1}}\n])\n\n// $match \u8fc7\u6ee4\u6587\u6863 \u7c7b\u4f3c\u4e8efind \u65b9\u6cd5\u4e2d\u7684\u53c2\u6570\ndb.order.aggregate([\n    {$projext:{no:1,all_price:1}},\n    {$match:{"all_price":{$get:90}}\n])\n\n// $group \u5206\u7ec4\ndb.order.aggregate([\n    {\n        $group:{_id:"$order_id",total:{$sum: "$price"}}\n    },\n])\n\n// \u53ef\u52a0 $sort  $skip\n\n// $lookup \u8868\u5173\u8054\ndb.order.aggregate([\n    {\n        $lookup:{\n            from:\'order_item\',\n            localField:"order_id",\n            foreignField:"order_id",\n            as:"items"\n        }\n    },\n])\n')),(0,l.kt)("h2",{id:"mongoose"},"Mongoose"),(0,l.kt)("h3",{id:"\u8fde\u63a5"},"\u8fde\u63a5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const mongoose = require('mongoose');\nlet url = 'mongodb://localhost:27017/kuizuo';\nmongoose.connect(url, { useNewUrlParser: true }, function (err) {});\n")),(0,l.kt)("h3",{id:"\u5b9a\u4e49-schema"},"\u5b9a\u4e49 Schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import * as mongoose from 'mongoose';\n\nlet UserSchema = mongoose.Schema({\n  username: {\n    type: String,\n    trim: true,\n    unique: true, // \u552f\u4e00\u7d22\u5f15  index:true \u662f\u666e\u901a\u7d22\u5f15\n  },\n  password: String,\n  age: {\n    type: Number,\n    get(params) {\n      return params + '\u5c81';\n    }, // get\u4e0d\u5efa\u8bae\u4f7f\u7528  \u56e0\u4e3a\u4e0d\u662f\u83b7\u53d6\u7684\u65f6\u5019\u6dfb\u52a0 \u800c\u662f\u5b9e\u4f8b\u5316\u7684\u65f6\u5019\u53d6\u7684\u65f6\u5019\u6dfb\u52a0\n  },\n  status: Number,\n  headImg: {\n    type: String,\n    set(params) {\n      if (!params.includes('https://') || !params.includes('http://')) {\n        return 'http://' + params;\n      }\n      return params;\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"\u5b9a\u4e49\u6a21\u578b"},"\u5b9a\u4e49\u6a21\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// let User = mongoose.model('User', UserSchema) // \u9996\u5b57\u6bcd\u5927\u5199  \u9ed8\u8ba4users\u8868\nlet User = mongoose.model('User', UserSchema, 'user'); // \u6307\u5b9auser\u8868\n\nUser.find({}, (err, doc) => {\n  console.log(doc);\n});\n\n// \u589e\u52a0\u6570\u636e\n// \u5b9e\u4f8b\u5316\u5bf9\u8c61\nlet user = new User({\n  username: 'kuizuo',\n  password: 'a12345678',\n});\n\nuser.save();\n")),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u5c01\u88c5\u65b9\u6cd5\u4e00\u822c\u5f88\u5c11\u4f7f\u7528"},"\u81ea\u5b9a\u4e49\u5c01\u88c5\u65b9\u6cd5(\u4e00\u822c\u5f88\u5c11\u4f7f\u7528)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u9759\u6001\u65b9\u6cd5 \u5b9e\u5728Schema\u4e0a\u6269\u5c55\nUserSchema.statics.findByUsername = function(username,cb){\n    this.find({'username',username},function(err,data){\n        cb(err,data)\n    })\n}\n\n// \u5b9e\u4f8b\u65b9\u6cd5  \u6ca1\u591a\u5927\u7528\nUserSchema.methods.print = function(){\n    console.log(\"\u5b9e\u4f8b\u65b9\u6cd5\")\n}\n")),(0,l.kt)("h3",{id:"\u6570\u636e\u6548\u9a8c"},"\u6570\u636e\u6548\u9a8c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let UserSchema = mongoose.Schema({\n  username: {\n    type: String,\n    trim: true,\n    require:true // \u5fc5\u987b\u4f20\u5165\n  },\n  password: String,\n  mobile:{\n    match: /^1((34[0-8]\\d{7})|((3[0-3|5-9])|(4[5-7|9])|(5[0-3|5-9])|(6[0-9])|(7[0-3|5-8])|(8[0-9])|(9[1|5|8|9]))\\d{8})$/,\n  },\n  age: {\n    type: Number,\n    max: 200,\n    min: 0\n  },\n  status: {\n    type:String,\n    default:"success",\n    enum:["success",\'error] //\u7528\u5728String\u7c7b\u578b\n  },\n  headImg: {\n    type: String,\n    set(params) {\n      if (!params.includes("https://") || !params.includes("http://")) {\n        return \'http://\' + params\n      }\n      return params\n    }\n  }\n})\n')),(0,l.kt)("h2",{id:"mongoose-\u547d\u4ee4"},"Mongoose \u547d\u4ee4"),(0,l.kt)("h3",{id:"\u67e5\u8be2\u6307\u5b9a\u65f6\u95f4\u8303\u56f4"},"\u67e5\u8be2\u6307\u5b9a\u65f6\u95f4\u8303\u56f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let filter = {\n    timestamp: {\n    '$gte': 123456789,\n    '$lte': 987654321,\n    }\n}\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"(>) \u5927\u4e8e - $gt"),(0,l.kt)("li",{parentName:"ol"},"(<) \u5c0f\u4e8e - $lt"),(0,l.kt)("li",{parentName:"ol"},"(>=) \u5927\u4e8e\u7b49\u4e8e - $gte"),(0,l.kt)("li",{parentName:"ol"},"(<= ) \u5c0f\u4e8e\u7b49\u4e8e - $lte")),(0,l.kt)("p",null,"\u5982\u679c\u65f6\u95f4\u65e5\u671f\u683c\u5f0f\u662f ISO\uff0c\u5219\u9700\u7528\u4f7f\u7528 ISODate \u51fd\u6570\u8f6c\u4e3a\u4e00\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'ISODate("2020-01-01T00:00:00Z")\n')),(0,l.kt)("h3",{id:"\u53bb\u9664-mongodb-__v-\u5b57\u6bb5"},"\u53bb\u9664 mongodb ","_","_","v \u5b57\u6bb5"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/a1059526327/article/details/106893186"},"\u53bb\u9664 mongodb \u4e0b\u5212\u7ebf","_","_","v \u5b57\u6bb5")),(0,l.kt)("p",null,"\u53bb\u9664","_","_","v \u5b57\u6bb5\uff0c\u53ef\u4ee5\u5728\u5b9a\u4e49 schema \u89c4\u5219\u7684\u65f6\u5019\u901a\u8fc7\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"versionKey:false"),"\u53bb\u9664\u8fd9\u4e2a\u5b57\u6bb5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var userSchema = new mongoose.Schema(\n  {\n    username: {\n      type: String,\n      required: true,\n    },\n    password: {\n      type: String,\n      required: true,\n      select: false,\n    },\n  },\n  { versionKey: false },\n);\n")),(0,l.kt)("p",null,"\u5982\u679c\u5728\u6570\u636e\u5e93\u4e2d\u6254\u5411\u4fdd\u7559\u8fd9\u4e2a\u5b57\u6bb5\uff0c\u53ea\u662f\u5728\u67e5\u8be2\u7684\u65f6\u5019\u4e0d\u60f3\u8fd4\u56de",(0,l.kt)("strong",{parentName:"p"},"v \u5b57\u6bb5\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e{ "),"v: 0}\u5728\u8fd4\u56de\u7ed3\u679c\u4e2d\u8fc7\u6ee4\u6389\u8fd9\u4e00\u5b57\u6bb5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"UserModel.findOne({username, password}, {__v: 0}, function (err, user){\n}\n")),(0,l.kt)("h3",{id:"\u67e5\u8be2\u5185\u5d4c\u6570\u7ec4"},"\u67e5\u8be2\u5185\u5d4c\u6570\u7ec4"),(0,l.kt)("p",null,"\u539f\u59cb\u6570\u636e\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id" : ObjectId("5aab3460353df3bd352e0e15"),\n    "username": "15212345678"\n    "tags" : [\n        {\n            "name" : "\u524d\u7aef",\n        },\n        {\n            "name" : "\u540e\u7aef",\n        },\n    ]\n}\n')),(0,l.kt)("p",null,'\u67e5\u8be2 username=15212345678 and tags.name="\u524d\u7aef" \uff08',(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u5e0c\u671b\u51fa\u73b0\u8fd9\u4e2a\u540e\u7aef"),"\uff09"),(0,l.kt)("p",null,"\u60f3\u8981\u7684\u6570\u636e\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id" : ObjectId("5aab3460353df3bd352e0e15"),\n    "username": "15212345678"\n    "tags" : [\n        {\n            "name" : "\u524d\u7aef",\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"\u4f46\u901a\u8fc7 find \u67e5\u8be2\u4f1a\u5c06\u6574\u4e2a\u6587\u6863\u90fd\u7ed9\u8fd4\u56de\uff0c\u8fd9\u662f\u6211\u4eec\u4e0d\u5e0c\u671b\u7684\uff0c\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0"),(0,l.kt)("h4",{id:"elemmatch"},"$elemMatch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Model.find({ username: '15212345678', name: { $elemMatch: { name: '\u524d\u7aef' } } });\n")),(0,l.kt)("p",null,"\u8981\u6ce8\u610f\u7684\u662f\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e\u6570\u7ec4\u4e2d\u53ea\u6709\u4e00\u4e2a\u8fd4\u56de\u5143\u7d20\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528$elemMatch\u6765\u67e5\u8be2\uff0c\u4f46\u662f\u5bf9\u4e8e\u591a\u4e2a\u5143\u7d20$elemMatch \u662f\u4e0d\u9002\u5e94\u3002")),(0,l.kt)("h4",{id:"aggregation"},"aggregation"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/"},"Aggregation Pipeline")),(0,l.kt)("p",null,"\u4e00\u5171\u6709\u4e09\u4e2a\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"$unwind: \u5c06\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u8f6c\u4e3a\u6bcf\u4e00\u6761\u6587\u6863\n\u4f7f\u7528$unwind \u53ef\u4ee5\u5c06\u6307\u5b9a\u5185\u5d4c\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u6570\u636e\u90fd\u88ab\u5206\u89e3\u6210\u4e00\u4e2a\u6587\u6863\uff0c\u5e76\u4e14\u9664\u4e86\u6307\u5b9a\u7684\u503c\u4e0d\u540c\u5916\uff0c\u5176\u4ed6\u7684\u503c\u90fd\u662f\u76f8\u540c\u7684"),(0,l.kt)("li",{parentName:"ul"},"$match: \u7b80\u5355\u7684\u8fc7\u6ee4\u6587\u6863\uff0c\u6761\u4ef6\u67e5\u8be2\u3002query"),(0,l.kt)("li",{parentName:"ul"},"$project: \u4fee\u6539\u8f93\u5165\u6587\u6863\u7684\u7ed3\u6784\uff0c\u4f8b\u5982\u522b\u540d\uff0c\u5b57\u6bb5\u663e\u793a  ",(0,l.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/ellen-mylife/p/14794284.html"},"mongoose\u805a\u5408\u2014$project"))),(0,l.kt)("p",null,"\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'Model.aggregate([{ "$unwind": "$tags" }, { "$match": { "tags.name": "\u524d\u7aef" } }, { "$project": { "tags": 1 } }])\n')),(0,l.kt)("p",null,"\u4f46\u663e\u793a\u7684\u6548\u679c\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id" : ObjectId("5aab3460353df3bd352e0e15"),\n    "username": "15212345678"\n    "tags" : {\n            "name" : "\u524d\u7aef",\n     }\n}\n')),(0,l.kt)("p",null,"tags \u76f4\u63a5\u6709",(0,l.kt)("strong",{parentName:"p"},"\u6570\u7ec4\u8f6c\u4e3a\u6587\u6863"),"\u4e86\uff0c\u56e0\u4e3a\u6dfb\u52a0\u4e86$unwind\u8fd9\u4e2a\u53c2\u6570\uff0c\u5c06\u4f1a\u62c6\u5206\u4e3a\u591a\u6761\u6570\u636e\uff0c\u6bd4\u5982\u6211\u4e0d\u52a0$match \u90a3\u4e48\u8fd8\u5c06\u8f93\u51fa tags \u4e3a\u540e\u7aef\u5355\u72ec\u4e00\u4e2a\u6587\u6863\uff0c\u8fd9\u80af\u5b9a\u4e5f\u4e0d\u662f\u60f3\u8981\u7684\u6570\u636e\uff0c\u5c31\u662f\u60f3\u8981\u8fd9\u4e2a tags \u4e3a\u6570\u7ec4\uff0c\u90a3\u4e48\u6709\u5982\u4e0b\u4e24\u79cd\u64cd\u4f5c\u65b9\u5f0f"),(0,l.kt)("h4",{id:"group"},"$group"),(0,l.kt)("p",null,"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528$unwind\u5c06tags\u6570\u7ec4\u6253\u6563,\u83b7\u53d6\u7ed3\u679c\u96c6\u540e\u7528$match \u7b5b\u9009\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\uff0c\u6700\u540e\u4f7f\u7528$group \u8fdb\u884c\u805a\u5408\u83b7\u53d6\u6700\u7ec8\u7ed3\u679c\u96c6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'db.getCollection("user").aggregate([\n  { "$unwind": "$tagss" },\n  { "$match": { "tags.name": "\u524d\u7aef" } },\n  {\n    "$group": {\n      "_id": "$uid",\n      "username": { "$first": "$username" },\n      "tags": { "$push": "$tags" }\n    }\n  }\n])\n')),(0,l.kt)("p",null,"\u4e0d\u8fc7\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8981\u663e\u793a\u5176\u4ed6\u5b57\u6bb5\u7684\u8bdd\uff0c\u53ef\u4ee5\u901a\u8fc7$first\u6765\u663e\u793a\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"p"},'\u201cusername\u201d: { $first: "$username" }')),(0,l.kt)("p",null,"\u65b9\u6cd5\u4e8c\uff1a\u4f7f\u7528$match\u8fc7\u6ee4\u7b26\u5408\u6761\u4ef6\u7684\u6839\u6587\u6863\u7ed3\u679c\u96c6\uff0c\u7136\u540e\u4f7f\u7528$project \u8fd4\u56de\u5bf9\u5e94\u5b57\u6bb5\u7684\u540c\u65f6\uff0c\u5728 tags \u6570\u7ec4\u4e2d\u4f7f\u7528$filter \u8fdb\u884c\u5185\u90e8\u8fc7\u6ee4\uff0c\u8fd4\u56de\u6700\u7ec8\u7ed3\u679c\u96c6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'db.getCollection(\'user\').aggregate(\n  [\n    { "$match": { }},\n    {\n      $project: {\n        "uid": 1,\n        "username": 1,\n        "tags": {\n          $filter: {\n            input: "$tags",\n            as: "item",\n            cond: { $eq : ["$$item.name","\u524d\u7aef"] }\n          }\n        }\n      }\n    }\n  ]\n)\n')),(0,l.kt)("p",null,"\u76f8\u6bd4 group \u800c\u8a00\uff0cfilter \u6bd4\u8f83\u76f4\u63a5\uff0c\u4f46\u901a\u8fc7 group \u53ef\u4ee5\u76f4\u63a5\u7edf\u8ba1\u5bf9\u5e94\u7684\u6570\u91cf\u5565\u7684\uff0c\u6bd5\u7adf\u5206\u7ec4\u805a\u5408\u624d\u662f\u5173\u952e\u7cbe\u9ad3\u3002"),(0,l.kt)("h2",{id:"\u6570\u636e\u4efd\u4e0e\u6062\u590d"},"\u6570\u636e\u4efd\u4e0e\u6062\u590d"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/163255094"},"MongoDB \u5907\u4efd\u4e0e\u6062\u590d")),(0,l.kt)("h3",{id:"\u5907\u4efd"},"\u5907\u4efd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mongodump -h dbhost -d dbname -o dbdirectory\n")),(0,l.kt)("p",null,"-h\uff1aMongoDB \u6240\u5728\u670d\u52a1\u5668\u5730\u5740\uff0c\u4f8b\u5982\uff1a127.0.0.1\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u6307\u5b9a\u7aef\u53e3\u53f7\uff1a127.0.0.1:27017"),(0,l.kt)("p",null,"-d\uff1a\u9700\u8981\u5907\u4efd\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\uff0c\u4f8b\u5982\uff1atest"),(0,l.kt)("p",null,"-o\uff1a\u5907\u4efd\u7684\u6570\u636e\u5b58\u653e\u4f4d\u7f6e\uff0c\u4f8b\u5982\uff1ac:\\data\\dump\uff0c\u5f53\u7136\u8be5\u76ee\u5f55\u9700\u8981\u63d0\u524d\u5efa\u7acb\uff0c\u5728\u5907\u4efd\u5b8c\u6210\u540e\uff0c\u7cfb\u7edf\u81ea\u52a8\u5728 dump \u76ee\u5f55\u4e0b\u5efa\u7acb\u4e00\u4e2a test \u76ee\u5f55\uff0c\u8fd9\u4e2a\u76ee\u5f55\u91cc\u9762\u5b58\u653e\u8be5\u6570\u636e\u5e93\u5b9e\u4f8b\u7684\u5907\u4efd\u6570\u636e\u3002"),(0,l.kt)("p",null,"--gzip\uff1a\u538b\u7f29\u683c\u5f0f gzip"),(0,l.kt)("p",null,"mongodump \u547d\u4ee4\u53ef\u9009\u53c2\u6570\u5217\u8868\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bed\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5b9e\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mongodump --host HOST_NAME --port PORT_NUMBER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8be5\u547d\u4ee4\u5c06\u5907\u4efd\u6240\u6709 MongoDB \u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"mongodump --host runoob.com --port 27017")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mongodump --dbpath DB_PATH --out BACKUP_DIRECTORY"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5907\u4efd\u6570\u636e\u5e93\u4f4d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"mongodump --dbpath /data/db/ --out /data/backup/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mongodump --collection COLLECTION --db DB_NAME"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8be5\u547d\u4ee4\u5c06\u5907\u4efd\u6307\u5b9a\u6570\u636e\u5e93\u7684\u96c6\u5408\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},"mongodump --collection mycol --db test")))),(0,l.kt)("p",null,"\u4f8b: \u5907\u4efd test \u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mongodump  --port 27017  -u test -p 123456 --authenticationDatabase test -o back\n")),(0,l.kt)("h3",{id:"\u6062\u590d"},"\u6062\u590d"),(0,l.kt)("p",null,"mongorestore \u547d\u4ee4\u811a\u672c\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mongorestore -h <hostname><:port> -d dbname <path>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"--host <:port>, -h <:port>\uff1aMongoDB \u6240\u5728\u670d\u52a1\u5668\u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a\uff1a localhost:27017")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"--db , -d \uff1a\u9700\u8981\u6062\u590d\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\uff0c\u4f8b\u5982\uff1atest\uff0c\u5f53\u7136\u8fd9\u4e2a\u540d\u79f0\u4e5f\u53ef\u4ee5\u548c\u5907\u4efd\u65f6\u5019\u7684\u4e0d\u4e00\u6837\uff0c\u6bd4\u5982 test2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"--drop\uff1a\u6062\u590d\u7684\u65f6\u5019\uff0c\u9047\u5230\u91cd\u590d\u503c\u5148\u5220\u9664\u5f53\u524d\u6570\u636e\uff0c\u7136\u540e\u6062\u590d\u5907\u4efd\u7684\u6570\u636e\u3002\u5c31\u662f\u8bf4\uff0c\u6062\u590d\u540e\uff0c\u5907\u4efd\u540e\u6dfb\u52a0\u4fee\u6539\u7684\u6570\u636e\u90fd\u4f1a\u88ab\u5220\u9664\uff0c\u614e\u7528\u54e6\uff01")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\\<path",">","\uff1amongorestore \u6700\u540e\u7684\u4e00\u4e2a\u53c2\u6570\uff0c\u8bbe\u7f6e\u5907\u4efd\u6570\u636e\u6240\u5728\u4f4d\u7f6e\uff0c\u4f8b\u5982\uff1ac:\\data\\dump\\test\u3002"),(0,l.kt)("p",{parentName:"li"},"\u4f60\u4e0d\u80fd\u540c\u65f6\u6307\u5b9a \\<path",">"," \u548c --dir \u9009\u9879\uff0c--dir \u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u5907\u4efd\u76ee\u5f55\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"--dir\uff1a\u6307\u5b9a\u5907\u4efd\u7684\u76ee\u5f55"),(0,l.kt)("p",{parentName:"li"},"\u4f60\u4e0d\u80fd\u540c\u65f6\u6307\u5b9a \\<path",">"," \u548c --dir \u9009\u9879\u3002"))),(0,l.kt)("p",null,"\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mongorestore  --port 27017  -u test -p 123456 --authenticationDatabase test\n")),(0,l.kt)("h3",{id:"\u5c06-mysql-\u4e2d\u7684\u6570\u636e\u5bfc\u5165-mongo"},"\u5c06 mysql \u4e2d\u7684\u6570\u636e\u5bfc\u5165 mongo"),(0,l.kt)("p",null,"1\u3001mysql \u5f00\u542f\u5b89\u5168\u8def\u5f84"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"vim /etc/my.cnf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"#\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\nsecure-file-priv=/tmp\n")),(0,l.kt)("p",null,"\u91cd\u542f\u6570\u636e\u5e93\u751f\u6548"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/etc/init.d/mysqld restart\n")),(0,l.kt)("p",null,"2\u3001mysql \u2f83\u5b9a\u4e49\u5206\u9694\u7b26\u5bfc\u51fa\u6210 csv \u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"select * from test.t100w limit 10 into outfile '/tmp/100w.csv' fields terminated by ',';\n")),(0,l.kt)("p",null,"PS\uff1amysql \u5bfc\u51fa csv"),(0,l.kt)("p",null,"fields terminated by ','\u3000\u3000\u3000 ------\u5b57\u6bb5\u95f4\u4ee5,\u53f7\u5206\u9694"),(0,l.kt)("p",null,"optionally enclosed by '\"'\u3000\u3000 ------\u5b57\u6bb5\u7528\"\u53f7\u62ec\u8d77"),(0,l.kt)("p",null,"escaped by '\"' \u3000\u3000\u3000------\u5b57\u6bb5\u4e2d\u4f7f\u7528\u7684\u8f6c\u4e49\u7b26\u4e3a\""),(0,l.kt)("p",null,"lines terminated by '\\r\\n';\u3000\u3000------\u884c\u4ee5\\r\\n \u7ed3\u675f"),(0,l.kt)("p",null,"PS\uff1amysql \u5bfc\u5165 csv"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"load data infile '/tmp/2.csv'\ninto table t1\nfields terminated by ','  ;\n")),(0,l.kt)("p",null,"3\u3001\u5728 mongodb \u4e2d\u5bfc\u5165\u5907\u4efd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"mongoimport -u root -p root123 --port 27017 --authenticationDatabase admin -d test  -c t100w --type=csv -f id,num,k1,k2,dt --file  /tmp/100w.csv\n")))}g.isMDXComponent=!0}}]);