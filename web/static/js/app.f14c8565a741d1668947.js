webpackJsonp([12],{125:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(n){return e.e(6).then(function(){var t=[e(349)];n.apply(null,t)}.bind(this)).catch(e.oe)},a=function(n){return e.e(8).then(function(){var t=[e(347)];n.apply(null,t)}.bind(this)).catch(e.oe)},c=function(n){return e.e(7).then(function(){var t=[e(348)];n.apply(null,t)}.bind(this)).catch(e.oe)},u=function(n){return e.e(1).then(function(){var t=[e(356)];n.apply(null,t)}.bind(this)).catch(e.oe)},r=function(n){return e.e(9).then(function(){var t=[e(355)];n.apply(null,t)}.bind(this)).catch(e.oe)},i=function(n){return e.e(5).then(function(){var t=[e(357)];n.apply(null,t)}.bind(this)).catch(e.oe)},l=function(n){return e.e(2).then(function(){var t=[e(354)];n.apply(null,t)}.bind(this)).catch(e.oe)},p=function(n){return e.e(10).then(function(){var t=[e(353)];n.apply(null,t)}.bind(this)).catch(e.oe)},f=function(n){return e.e(4).then(function(){var t=[e(351)];n.apply(null,t)}.bind(this)).catch(e.oe)},h=function(n){return e.e(3).then(function(){var t=[e(352)];n.apply(null,t)}.bind(this)).catch(e.oe)},s=function(n){return e.e(0).then(function(){var t=[e(350)];n.apply(null,t)}.bind(this)).catch(e.oe)},d=[{path:"/login",component:o,name:"",hidden:!0},{path:"/404",component:a,name:"",hidden:!0},{path:"/",component:c,name:"用户中心",iconCls:"el-icon-message",children:[{path:"/table",component:u,name:"用户管理"},{path:"/form",component:r,name:"金币管理"},{path:"/user",component:i,name:"房卡管理"}]},{path:"/",component:c,name:"房间管理",iconCls:"fa fa-id-card-o",children:[{path:"/room",component:l,name:"房间信息"},{path:"/page5",component:p,name:"战绩信息"}]},{path:"/",component:c,name:"系统设置",iconCls:"fa fa-id-card-o",children:[{path:"/Reg",component:f,name:"注册配置"},{path:"/Sign",component:h,name:"签到配置"}]},{path:"/",component:c,name:"Charts",iconCls:"fa fa-bar-chart",children:[{path:"/echarts",component:s,name:"echarts"}]},{path:"*",hidden:!0,redirect:{path:"/404"}}];t.default=d},126:function(n,t,e){"use strict";function o(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t.default=n,t}function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var c=e(131),u=a(c),r=e(344),i=a(r),l=e(136),p=o(l),f=e(137),h=o(f);u.default.use(i.default);var s={count:10},d={INCREMENT:function(n){n.count++},DECREMENT:function(n){n.count--}};t.default=new i.default.Store({actions:p,getters:h,state:s,mutations:d})},128:function(n,t){},129:function(n,t){},130:function(n,t,e){e(339);var o=e(132)(e(134),e(342),null,null);n.exports=o.exports},134:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",components:{}}},135:function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=e(127),c=(o(a),e(130)),u=o(c);e(128);var r=e(126),i=o(r),l=e(125),p=o(l);e(129);var f=new VueRouter({routes:p.default});f.beforeEach(function(n,t,e){if(n.meta&&n.meta.deny)e({path:"/403"});else if("/login"===n.path)e();else{var o=localStorage.getItem("token");o||"/login"===n.path?e():e({path:"/login"})}}),new Vue({router:f,store:i.default,render:function(n){return n(u.default)}}).$mount("#app")},136:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.increment=function(n){(0,n.commit)("INCREMENT")},t.decrement=function(n){(0,n.commit)("DECREMENT")}},137:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getCount=function(n){return n.count}},339:function(n,t){},342:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]}}},[135]);
//# sourceMappingURL=app.f14c8565a741d1668947.js.map