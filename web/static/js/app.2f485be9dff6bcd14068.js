webpackJsonp([1],{241:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(433),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={getUser:function(e,t){return r.default.get("/api/user",{params:e}).then(t)},delUser:function(e,t){return r.default.delete("/api/delete/"+e).then(t)},getRoomList:function(e,t){return r.default.get("/api/room",{params:e}).then(t)}}},242:function(e,t,a){"use strict";function n(e,t){for(var t=t-(e+"").length,a=0;a<t;a++)e="0"+e;return e}Object.defineProperty(t,"__esModule",{value:!0});var r=/([yMdhsm])(\1*)/g;t.default={getQueryStringByName:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(t),n="";return null!=a&&(n=a[2]),t=null,a=null,null==n||""==n||"undefined"==n?"":n},formatDate:{format:function(e,t){return t=t||"yyyy-MM-dd",t.replace(r,function(t){switch(t.charAt(0)){case"y":return n(e.getFullYear(),t.length);case"M":return n(e.getMonth()+1,t.length);case"d":return n(e.getDate(),t.length);case"w":return e.getDay()+1;case"h":return n(e.getHours(),t.length);case"m":return n(e.getMinutes(),t.length);case"s":return n(e.getSeconds(),t.length)}})},parse:function(e,t){var a=t.match(r),n=e.match(/(\d)+/g);if(a.length==n.length){for(var o=new Date(1970,0,1),l=0;l<a.length;l++){var s=parseInt(n[l]);switch(a[l].charAt(0)){case"y":o.setFullYear(s);break;case"M":o.setMonth(s-1);break;case"d":o.setDate(s);break;case"h":o.setHours(s);break;case"m":o.setMinutes(s);break;case"s":o.setSeconds(s)}}return o}return null}}}},378:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(960),o=n(r),l=a(958),s=n(l),i=a(959),u=n(i),c=a(965),d=n(c),m=a(964),f=n(m),p=a(963),h=n(p),v=a(962),g=n(v),b=a(961),_=n(b),y=[{path:"/login",component:o.default,name:"",hidden:!0},{path:"/404",component:s.default,name:"",hidden:!0},{path:"/",component:u.default,name:"用户中心",iconCls:"el-icon-message",children:[{path:"/table",component:d.default,name:"用户管理"},{path:"/form",component:f.default,name:"金币管理"},{path:"/user",component:User,name:"房卡管理"}]},{path:"/",component:u.default,name:"房间管理",iconCls:"fa fa-id-card-o",children:[{path:"/room",component:h.default,name:"房间信息"},{path:"/page5",component:g.default,name:"战绩信息"}]},{path:"/",component:u.default,name:"Charts",iconCls:"fa fa-bar-chart",children:[{path:"/echarts",component:_.default,name:"echarts"}]},{path:"*",hidden:!0,redirect:{path:"/404"}}];t.default=y},379:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(34),l=r(o),s=a(234),i=r(s),u=a(435),c=n(u),d=a(436),m=n(d);l.default.use(i.default);var f={count:10},p={INCREMENT:function(e){e.count++},DECREMENT:function(e){e.count--}};t.default=new i.default.Store({actions:c,getters:m,state:f,mutations:p})},381:function(e,t){},382:function(e,t){},383:function(e,t,a){a(953);var n=a(59)(a(425),a(973),null,null);e.exports=n.exports},425:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",components:{}}},426:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{sysName:"后台管理",collapsed:!1,sysUserName:"",sysUserAvatar:"",form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")},handleopen:function(){},handleclose:function(){},handleselect:function(e,t){},logout:function(){var e=this;this.$confirm("确认退出吗?","提示",{}).then(function(){localStorage.removeItem("token"),e.$router.push("/login")}).catch(function(){})},collapse:function(){this.collapsed=!this.collapsed},showMenu:function(e,t){this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-"+e)[0].style.display=t?"block":"none"}},mounted:function(){localStorage.getItem("token")&&(this.sysUserName="admin",this.sysUserAvatar="https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png")}}},427:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(432),r=a(164),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={data:function(){return{logining:!1,ruleForm2:{account:"",checkPass:""},rules2:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],checkPass:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked:!0}},methods:{handleReset2:function(){this.$refs.ruleForm2.resetFields()},handleSubmit2:function(){var e=this;this.$refs.ruleForm2.validate(function(t){if(!t)return e.logining=!1,e.$notify({message:"error submit!!"}),!1;e.logining=!0;var a={username:e.ruleForm2.account,password:e.ruleForm2.checkPass};(0,n.requestLogin)(a).then(function(t){e.logining=!1;var a=t.msg,n=t.code,r=t.token;"SUCCESS"!==n?(e.logining=!1,e.$notify({message:a,type:"error"})):(localStorage.setItem("token",r),o.default.defaults.headers.common.Authorization=r,e.$router.push({path:"/table"}))})})}}}},428:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(677),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={data:function(){return{chartColumn:null,chartBar:null,chartLine:null,chartPie:null}},methods:{drawColumnChart:function(){this.chartColumn=r.default.init(document.getElementById("chartColumn")),this.chartColumn.setOption({title:{text:"Column Chart"},tooltip:{},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]})},drawBarChart:function(){this.chartBar=r.default.init(document.getElementById("chartBar")),this.chartBar.setOption({title:{text:"Bar Chart",subtext:"数据来自网络"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["2011年","2012年"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["巴西","印尼","美国","印度","中国","世界人口(万)"]},series:[{name:"2011年",type:"bar",data:[18203,23489,29034,104970,131744,630230]},{name:"2012年",type:"bar",data:[19325,23438,31e3,121594,134141,681807]}]})},drawLineChart:function(){this.chartLine=r.default.init(document.getElementById("chartLine")),this.chartLine.setOption({title:{text:"Line Chart"},tooltip:{trigger:"axis"},legend:{data:["邮件营销","联盟广告","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"搜索引擎",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}]})},drawPieChart:function(){this.chartPie=r.default.init(document.getElementById("chartPie")),this.chartPie.setOption({title:{text:"Pie Chart",subtext:"纯属虚构",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})},drawCharts:function(){this.drawColumnChart(),this.drawBarChart(),this.drawLineChart(),this.drawPieChart()}},mounted:function(){this.drawCharts()},updated:function(){this.drawCharts()}}},429:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(242),o=(n(r),a(241)),l=n(o);t.default={data:function(){return{filters:{room_type:"",room_state:""},roomList:[],roomTypeArr:[],roomStateArr:[],total:0,page:1,listLoading:!1}},mounted:function(){this.loadData()},methods:{loadData:function(){var e=this,t={page:this.page};""!==this.filters.room_type&&(t.room_type=this.filters.room_type),""!==this.filters.room_state&&(t.room_state=this.filters.room_state),this.listLoading=!0,l.default.getRoomList(t,function(t){e.roomList=t.data.list,e.roomTypeArr=t.data.room_type,e.roomStateArr=t.data.room_state,e.total=parseInt(t.data.count),e.listLoading=!1}).catch(function(t){e.$notify({message:t})})},handleCurrentChange:function(e){this.page=e,this.loadData()},change:function(){this.filter()}}}},430:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")}}}},431:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(243),o=n(r),l=a(242),s=n(l),i=a(241),u=n(i);t.default={data:function(){return{filters:{unick:""},users:[],total:0,page:1,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editFormRules:{unick:[{required:!0,message:"请输入姓名",trigger:"blur"}]},editForm:{id:0,name:"",sex:-1,age:0,birth:"",addr:""},addFormVisible:!1,addLoading:!1,addFormRules:{unick:[{required:!0,message:"请输入姓名",trigger:"blur"}]},addForm:{name:"",sex:-1,age:0,birth:"",addr:""}}},mounted:function(){this.loadData()},methods:{loadData:function(){var e=this,t={page:this.page};""!==this.filters.unick&&(t.unick=this.filters.unick),this.listLoading=!0,u.default.getUser(t,function(t){e.users=t.data.list,e.total=parseInt(t.data.count),e.listLoading=!1}).catch(function(e){console.log(e)})},handleCurrentChange:function(e){this.page=e,this.loadData()},handleDel:function(e,t){var a=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){a.listLoading=!0,u.default.delUser(t.uid,function(e){a.listLoading=!1,a.$notify({message:e.data.msg}),a.loadData()})}).catch(function(){a.$notify({message:"删除失败"})})},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=(0,o.default)({},t)},handleAdd:function(){this.addFormVisible=!0,this.addForm={name:"",sex:-1,age:0,birth:"",addr:""}},editSubmit:function(){var e=this;this.$refs.editForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.editLoading=!0;var t=(0,o.default)({},e.editForm);t.birth=t.birth&&""!=t.birth?s.default.formatDate.format(new Date(t.birth),"yyyy-MM-dd"):"",editUser(t).then(function(t){e.editLoading=!1,e.$message({message:"提交成功",type:"success"}),e.$refs.editForm.resetFields(),e.editFormVisible=!1,e.getUsers()})})})},addSubmit:function(){var e=this;this.$refs.addForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.addLoading=!0;var t=(0,o.default)({},e.addForm);t.birth=t.birth&&""!=t.birth?s.default.formatDate.format(new Date(t.birth),"yyyy-MM-dd"):"",addUser(t).then(function(t){e.addLoading=!1,e.$message({message:"提交成功",type:"success"}),e.$refs.addForm.resetFields(),e.addFormVisible=!1,e.getUsers()})})})},selsChange:function(e){this.sels=e},batchRemove:function(){var e=this,t=this.sels.map(function(e){return e.uid}).toString(),a=this.sels.map(function(e){return e.uuid}).toString();this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){e.listLoading=!0;var n={uids:t,uuids:a};batchRemoveUser(n).then(function(t){e.listLoading=!1,e.$message({message:"删除成功",type:"success"}),e.getUsers()})}).catch(function(){})}}}},432:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTest=t.addUser=t.editUser=t.batchRemoveUser=t.removeUser=t.getUserListPage=t.getUserList=t.requestLogin=void 0;var n=a(164),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.requestLogin=function(e){return r.default.post("/api/simplelogin",e).then(function(e){return e.data})},t.getUserList=function(e){return r.default.get("/user/list",{params:e})},t.getUserListPage=function(e){return r.default.get("/user/listpage",{params:e})},t.removeUser=function(e){return r.default.get("/user/remove",{params:e})},t.batchRemoveUser=function(e){return r.default.get("/user/batchremove",{params:e})},t.editUser=function(e){return r.default.get("/user/edit",{params:e})},t.addUser=function(e){return r.default.get("/user/add",{params:e})},t.getTest=function(){return r.default.get("/test/data")}},433:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(437),o=n(r),l=a(164),s=n(l),i=a(954),u=n(i);a(233);s.default.defaults.headers.common.Authorization=localStorage.getItem("token"),s.default.interceptors.request.use(function(e){return u.default.start(),e},function(e){return o.default.reject(e)}),t.default=s.default},434:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=a(380),o=(n(r),a(34)),l=n(o),s=a(383),i=n(s),u=a(233),c=n(u);a(381);var d=a(384),m=n(d),f=a(379),p=n(f),h=a(234),v=n(h),g=a(378),b=n(g);a(382),l.default.use(c.default),l.default.use(m.default),l.default.use(v.default);var _=new m.default({routes:b.default});_.beforeEach(function(e,t,a){if(e.meta&&e.meta.deny)a({path:"/403"});else if("/login"===e.path)a();else{var n=localStorage.getItem("token");n||"/login"===e.path?a():a({path:"/login"})}}),new l.default({router:_,store:p.default,render:function(e){return e(i.default)}}).$mount("#app")},435:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.increment=function(e){(0,e.commit)("INCREMENT")},t.decrement=function(e){(0,e.commit)("DECREMENT")}},436:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getCount=function(e){return e.count}},947:function(e,t){},948:function(e,t){},949:function(e,t){},950:function(e,t){},951:function(e,t){},952:function(e,t){},953:function(e,t){},958:function(e,t,a){a(947);var n=a(59)(null,a(966),"data-v-0f02ba32",null);e.exports=n.exports},959:function(e,t,a){a(948);var n=a(59)(a(426),a(967),"data-v-57bf35f5",null);e.exports=n.exports},960:function(e,t,a){a(950);var n=a(59)(a(427),a(970),"data-v-83e7217a",null);e.exports=n.exports},961:function(e,t,a){a(952);var n=a(59)(a(428),a(972),"data-v-ce436f94",null);e.exports=n.exports},962:function(e,t,a){var n=a(59)(null,a(974),null,null);e.exports=n.exports},963:function(e,t,a){a(949);var n=a(59)(a(429),a(969),"data-v-6bfed484",null);e.exports=n.exports},964:function(e,t,a){var n=a(59)(a(430),a(968),null,null);e.exports=n.exports},965:function(e,t,a){a(951);var n=a(59)(a(431),a(971),"data-v-922b67a4",null);e.exports=n.exports},966:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"page-container"},[e._v("404 page not found")])},staticRenderFns:[]}},967:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"container"},[a("el-col",{staticClass:"header",attrs:{span:24}},[a("el-col",{staticClass:"logo",class:e.collapsed?"logo-collapse-width":"logo-width",attrs:{span:10}},[e._v("\n            "+e._s(e.collapsed?"":e.sysName)+"\n        ")]),e._v(" "),a("el-col",{attrs:{span:10}},[a("div",{staticClass:"tools",on:{click:function(t){return t.preventDefault(),e.collapse(t)}}},[a("i",{staticClass:"fa fa-align-justify"})])]),e._v(" "),a("el-col",{staticClass:"userinfo",attrs:{span:4}},[a("el-dropdown",{attrs:{trigger:"hover"}},[a("span",{staticClass:"el-dropdown-link userinfo-inner"},[a("img",{attrs:{src:this.sysUserAvatar}}),e._v(" "+e._s(e.sysUserName))]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("我的消息")]),e._v(" "),a("el-dropdown-item",[e._v("设置")]),e._v(" "),a("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.logout(t)}}},[e._v("退出登录")])],1)],1)],1)],1),e._v(" "),a("el-col",{staticClass:"main",attrs:{span:24}},[a("aside",{class:e.collapsed?"menu-collapsed":"menu-expanded"},[a("el-menu",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,"unique-opened":"",router:""},on:{open:e.handleopen,close:e.handleclose,select:e.handleselect}},[e._l(e.$router.options.routes,function(t,n){return t.hidden?e._e():[t.leaf?e._e():a("el-submenu",{attrs:{index:n+""}},[a("template",{slot:"title"},[a("i",{class:t.iconCls}),e._v(e._s(t.name))]),e._v(" "),e._l(t.children,function(t){return t.hidden?e._e():a("el-menu-item",{key:t.path,attrs:{index:t.path}},[e._v(e._s(t.name)+"\n                        ")])})],2),e._v(" "),t.leaf&&t.children.length>0?a("el-menu-item",{attrs:{index:t.children[0].path}},[a("i",{class:t.iconCls}),e._v(e._s(t.children[0].name)+"\n                    ")]):e._e()]})],2),e._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}],ref:"menuCollapsed",staticClass:"el-menu el-menu-vertical-demo collapsed"},e._l(e.$router.options.routes,function(t,n){return t.hidden?e._e():a("li",{staticClass:"el-submenu item"},[t.leaf?[a("div",{staticClass:"el-submenu"},[a("div",{staticClass:"el-submenu__title el-menu-item",class:e.$route.path==t.children[0].path?"is-active":"",staticStyle:{"padding-left":"20px",height:"56px","line-height":"56px",padding:"0 20px"},on:{click:function(a){e.$router.push(t.children[0].path)}}},[a("i",{class:t.iconCls})])])]:[a("div",{staticClass:"el-submenu__title",staticStyle:{"padding-left":"20px"},on:{mouseover:function(t){e.showMenu(n,!0)},mouseout:function(t){e.showMenu(n,!1)}}},[a("i",{class:t.iconCls})]),e._v(" "),a("ul",{staticClass:"el-menu submenu",class:"submenu-hook-"+n,on:{mouseover:function(t){e.showMenu(n,!0)},mouseout:function(t){e.showMenu(n,!1)}}},e._l(t.children,function(t){return t.hidden?e._e():a("li",{key:t.path,staticClass:"el-menu-item",class:e.$route.path==t.path?"is-active":"",staticStyle:{"padding-left":"40px"},on:{click:function(a){e.$router.push(t.path)}}},[e._v("\n                                "+e._s(t.name)+"\n                            ")])}))]],2)}))],1),e._v(" "),a("section",{staticClass:"content-container"},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[a("strong",{staticClass:"title"},[e._v(e._s(e.$route.name))]),e._v(" "),a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return a("el-breadcrumb-item",{key:t.path},[e._v("\n                            "+e._s(t.name)+"\n                        ")])}))],1),e._v(" "),a("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)])])],1)},staticRenderFns:[]}},968:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",staticStyle:{margin:"20px",width:"60%","min-width":"600px"},attrs:{model:e.form,"label-width":"80px"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"活动区域"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"活动时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"即时配送"}},[a("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"活动性质"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),a("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),a("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),a("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"特殊资源"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),a("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"活动形式"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"}},[e._v("立即创建")]),e._v(" "),a("el-button",{nativeOn:{click:function(e){e.preventDefault()}}},[e._v("取消")])],1)],1)},staticRenderFns:[]}},969:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-form-item",{attrs:{lable:"房间类型",prop:"room_type"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{chang:e.change},model:{value:e.filters.room_type,callback:function(t){e.$set(e.filters,"room_type",t)},expression:"filters.room_type"}},e._l(e.roomTypeArr,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{lable:"房间状态",prop:"room_state"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{chang:e.change},model:{value:e.filters.room_state,callback:function(t){e.$set(e.filters,"room_state",t)},expression:"filters.room_state"}},e._l(e.roomStateArr,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.loadData}},[e._v("查询")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.roomList,"highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"room_id",label:"房间ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"jushu",label:"局数",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"renshu",label:"人数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"play",label:"玩法",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{prop:"liudi",label:"留底"}}),e._v(" "),a("el-table-column",{attrs:{prop:"room_type_name",label:"游戏类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"room_state_name",label:"房间状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"homeowners",label:"房主游戏ID"}})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]}},970:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm login-container",attrs:{model:e.ruleForm2,rules:e.rules2,"label-position":"left","label-width":"0px"}},[a("h3",{staticClass:"title"},[e._v("系统登录")]),e._v(" "),a("el-form-item",{attrs:{prop:"account"}},[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.ruleForm2.account,callback:function(t){e.$set(e.ruleForm2,"account",t)},expression:"ruleForm2.account"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"checkPass"}},[a("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),a("el-checkbox",{staticClass:"remember",attrs:{checked:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住密码")]),e._v(" "),a("el-form-item",{staticStyle:{width:"100%"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},nativeOn:{click:function(t){return t.preventDefault(),e.handleSubmit2(t)}}},[e._v("\n                登录\n            ")])],1)],1)],1)},staticRenderFns:[]}},971:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"姓名"},model:{value:e.filters.unick,callback:function(t){e.$set(e.filters,"unick",t)},expression:"filters.unick"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.loadData}},[e._v("查询")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.users,"highlight-current-row":""},on:{"selection-change":e.selsChange}},[a("el-table-column",{attrs:{prop:"uid",label:"序号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"uuid",label:"游戏ID",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"unick",label:"用户昵称",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"uphone",label:"手机号",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"头像",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return["error"===e.row.uface?a("div",[a("img",{attrs:{src:"https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png",alt:"",height:"50px"}})]):a("div",[a("img",{attrs:{src:e.row.uface,alt:"",height:"50px"}})])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"uemail",label:"邮箱",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"usex",label:"性别",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"uvip",label:"vip等级",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"u_token",label:"游客key",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"u_type",label:"游客",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"用户状态",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"regist_ip",label:"注册地址",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"regist_time",label:"注册时间",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"login_ip",label:"登录ip",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"login_time",label:"登录时间",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ugold",label:"金币数量",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ubank",label:"保险柜(银行)金币数量",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ucard",label:"房卡数量",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"roomid",label:"当前所在房间",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleDel(t.$index,t.row)}}},[e._v("\n                    移除\n                ")])]}}])})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]}},972:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"chart-container"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"chartColumn"}})]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"chartBar"}})]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"chartLine"}})]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"chartPie"}})]),e._v(" "),a("el-col",{attrs:{span:24}},[a("a",{staticStyle:{float:"right"},attrs:{href:"http://echarts.baidu.com/examples.html",target:"_blank"}},[e._v("more>>")])])],1)],1)},staticRenderFns:[]}},973:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},staticRenderFns:[]}},974:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("section",[e._v("page5...\n")])},staticRenderFns:[]}}},[434]);
//# sourceMappingURL=app.2f485be9dff6bcd14068.js.map