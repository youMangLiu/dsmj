webpackJsonp([1],{123:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(434),l=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={getUser:function(t,e){return l.default.get("/api/user",{params:t}).then(e)},delUser:function(t,e){return l.default.delete("/api/delete/"+t).then(e)},getRoomList:function(t,e){return l.default.get("/api/room",{params:t}).then(e)},getReg:function(t,e){return l.default.get("/api/reg",{params:t}).then(e)},editReg:function(t,e,a){return l.default.put("/api/reg/"+t,e).then(a)},getSign:function(t,e){return l.default.get("/api/sign",t).then(e)},editSign:function(t,e,a){return l.default.put("/api/sign/"+t,e).then(a)},delSign:function(t,e){return l.default.delete("/api/sign/delete/"+t).then(e)},addSign:function(t,e){return l.default.post("/api/sign/add",t).then(e)}}},243:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getUserList=e.requestLogin=void 0;var n=a(167),l=function(t){return t&&t.__esModule?t:{default:t}}(n);e.requestLogin=function(t){return l.default.post("/api/simplelogin",t).then(function(t){return t.data})},e.getUserList=function(t){return l.default.get("/user/list",{params:t})}},244:function(t,e,a){"use strict";function n(t,e){for(var e=e-(t+"").length,a=0;a<e;a++)t="0"+t;return t}Object.defineProperty(e,"__esModule",{value:!0});var l=/([yMdhsm])(\1*)/g;e.default={getQueryStringByName:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(e),n="";return null!=a&&(n=a[2]),e=null,a=null,null==n||""==n||"undefined"==n?"":n},formatDate:{format:function(t,e){return e=e||"yyyy-MM-dd",e.replace(l,function(e){switch(e.charAt(0)){case"y":return n(t.getFullYear(),e.length);case"M":return n(t.getMonth()+1,e.length);case"d":return n(t.getDate(),e.length);case"w":return t.getDay()+1;case"h":return n(t.getHours(),e.length);case"m":return n(t.getMinutes(),e.length);case"s":return n(t.getSeconds(),e.length)}})},parse:function(t,e){var a=e.match(l),n=t.match(/(\d)+/g);if(a.length==n.length){for(var r=new Date(1970,0,1),o=0;o<a.length;o++){var i=parseInt(n[o]);switch(a[o].charAt(0)){case"y":r.setFullYear(i);break;case"M":r.setMonth(i-1);break;case"d":r.setDate(i);break;case"h":r.setHours(i);break;case"m":r.setMinutes(i);break;case"s":r.setSeconds(i)}}return r}return null}},formatDates:function(t){var e=t.getMonth()+1;e=e<10?"0"+e:e;var a=t.getDate();return a=a<10?"0"+a:a,t.getFullYear()+"-"+e+"-"+a}}},378:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=a(971),r=n(l),o=a(969),i=n(o),s=a(970),u=n(s),c=a(978),d=n(c),m=a(977),f=n(m),p=a(979),h=n(p),v=a(976),g=n(v),b=a(975),_=n(b),y=a(973),x=n(y),w=a(974),k=n(w),C=a(972),F=n(C),$=[{path:"/login",component:r.default,name:"",hidden:!0},{path:"/404",component:i.default,name:"",hidden:!0},{path:"/",component:u.default,name:"用户中心",iconCls:"el-icon-message",children:[{path:"/table",component:d.default,name:"用户管理"},{path:"/form",component:f.default,name:"金币管理"},{path:"/user",component:h.default,name:"房卡管理"}]},{path:"/",component:u.default,name:"房间管理",iconCls:"fa fa-id-card-o",children:[{path:"/room",component:g.default,name:"房间信息"},{path:"/page5",component:_.default,name:"战绩信息"}]},{path:"/",component:u.default,name:"系统设置",iconCls:"fa fa-id-card-o",children:[{path:"/Reg",component:x.default,name:"注册配置"},{path:"/Sign",component:k.default,name:"签到配置"}]},{path:"/",component:u.default,name:"Charts",iconCls:"fa fa-bar-chart",children:[{path:"/echarts",component:F.default,name:"echarts"}]},{path:"*",hidden:!0,redirect:{path:"/404"}}];e.default=$},379:function(t,e,a){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(48),o=l(r),i=a(993),s=l(i),u=a(436),c=n(u),d=a(437),m=n(d);o.default.use(s.default);var f={count:10},p={INCREMENT:function(t){t.count++},DECREMENT:function(t){t.count--}};e.default=new s.default.Store({actions:c,getters:m,state:f,mutations:p})},381:function(t,e){},382:function(t,e){},383:function(t,e,a){a(965);var n=a(41)(a(424),a(990),null,null);t.exports=n.exports},424:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",components:{}}},425:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{sysName:"后台管理",collapsed:!1,sysUserName:"",sysUserAvatar:"",form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")},handleopen:function(){},handleclose:function(){},handleselect:function(t,e){},logout:function(){var t=this;this.$confirm("确认退出吗?","提示",{}).then(function(){localStorage.removeItem("token"),t.$router.push("/login")}).catch(function(){})},collapse:function(){this.collapsed=!this.collapsed},showMenu:function(t,e){this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-"+t)[0].style.display=e?"block":"none"}},mounted:function(){localStorage.getItem("token")&&(this.sysUserName="admin",this.sysUserAvatar="https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png")}}},426:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(243),l=a(167),r=function(t){return t&&t.__esModule?t:{default:t}}(l);e.default={data:function(){return{logining:!1,ruleForm2:{account:"",checkPass:""},rules2:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],checkPass:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked:!0}},methods:{handleSubmit2:function(){var t=this;this.$refs.ruleForm2.validate(function(e){if(!e)return t.logining=!1,t.$notify({message:"error submit!!"}),!1;t.logining=!1;var a={username:t.ruleForm2.account,password:t.ruleForm2.checkPass};(0,n.requestLogin)(a).then(function(e){console.log(e),t.logining=!1;var a=e.msg,n=e.code,l=e.token;"SUCCESS"!==n?(t.logining=!1,t.$notify({message:a,type:"error"})):(t.logining=!1,localStorage.setItem("token",l),r.default.defaults.headers.common.Authorization=l,t.$router.push({path:"/table"}))})})}}}},427:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(685),l=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={data:function(){return{chartColumn:null,chartBar:null,chartLine:null,chartPie:null}},methods:{drawColumnChart:function(){this.chartColumn=l.default.init(document.getElementById("chartColumn")),this.chartColumn.setOption({title:{text:"Column Chart"},tooltip:{},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]})},drawBarChart:function(){this.chartBar=l.default.init(document.getElementById("chartBar")),this.chartBar.setOption({title:{text:"Bar Chart",subtext:"数据来自网络"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["2011年","2012年"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["巴西","印尼","美国","印度","中国","世界人口(万)"]},series:[{name:"2011年",type:"bar",data:[18203,23489,29034,104970,131744,630230]},{name:"2012年",type:"bar",data:[19325,23438,31e3,121594,134141,681807]}]})},drawLineChart:function(){this.chartLine=l.default.init(document.getElementById("chartLine")),this.chartLine.setOption({title:{text:"Line Chart"},tooltip:{trigger:"axis"},legend:{data:["邮件营销","联盟广告","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"搜索引擎",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}]})},drawPieChart:function(){this.chartPie=l.default.init(document.getElementById("chartPie")),this.chartPie.setOption({title:{text:"Pie Chart",subtext:"纯属虚构",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})},drawCharts:function(){this.drawColumnChart(),this.drawBarChart(),this.drawLineChart(),this.drawPieChart()}},mounted:function(){this.drawCharts()},updated:function(){this.drawCharts()}}},428:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(123),l=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={data:function(){return{labelPosition:"right",data:{id:"",init_gold:"",init_bank:"",init_card:""}}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this,e={};this.listLoading=!0,l.default.getReg(e,function(e){t.data=e.data.data,t.listLoading=!1}).catch(function(e){t.$notify({message:e.message})})},editHandle:function(t){var e=this,a={id:this.data.id,init_gold:this.data.init_gold,init_bank:this.data.init_bank,init_card:this.data.init_card};this.listLoading=!0,l.default.editReg(t,a,function(t){e.listLoading=!1,e.$notify({message:t.data.msg}),e.loadData()})}}}},429:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=a(245),r=n(l),o=a(123),i=n(o);e.default={data:function(){return{list:[{}],editFormVisible:!1,editLoading:!1,editFormRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}]},editForm:{id:0,glod:0,card:0,days:0},addFormVisible:!1,addLoading:!1,addFormRules:{unick:[{required:!0,message:"请输入姓名",trigger:"blur"}]},addForm:{id:0,glod:0,card:0,days:0}}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this,e={page:this.page};this.listLoading=!0,i.default.getSign(e,function(e){t.list=e.data.list,t.total=e.data.total,t.listLoading=!1}).catch(function(e){t.$notify({message:e})})},handleSign:function(t,e){this.editFormVisible=!0,this.editForm=(0,r.default)({},e)},editSubmit:function(){var t=this;this.$refs.editForm.validate(function(e){e&&t.$confirm("确认提交吗？","提示",{}).then(function(){t.editLoading=!0;var e=(0,r.default)({},t.editForm);i.default.editSign(t.editForm.id,e).then(function(e){t.editLoading=!1,t.$message({message:"提交成功",type:"success"}),t.$refs.editForm.resetFields(),t.editFormVisible=!1,t.loadData()})})})},deleteSign:function(t){var e=this;this.$confirm("确认删除该记录吗？","提示",{type:"waring"}).then(function(){e.listLoading=!0,i.default.delSign(t.id,function(t){e.listLoading=!1,e.$notify({message:t.data.msg}),e.loadData()})}).catch(function(){e.$notify({message:"删除失败"})})},handleAdd:function(){this.addFormVisible=!0,this.addForm={glod:0,card:0,days:0}},addSubmit:function(){var t=this;this.$refs.addForm.validate(function(e){e&&t.$confirm("确认提交吗？","提示",{}).then(function(){t.addLoading=!0;var e=(0,r.default)({},t.addForm);i.default.addSign(e).then(function(e){t.addLoading=!1,t.$message({message:"提交成功",type:"success"}),t.$refs.addForm.resetFields(),t.addFormVisible=!1,t.loadData()})})})},handleCurrentChange:function(t){this.page=t,this.loadData()}}}},430:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=a(244),r=(n(l),a(123)),o=n(r);e.default={data:function(){return{filters:{room_type:"",room_state:""},roomList:[],roomTypeArr:[],roomStateArr:[],total:0,page:1,listLoading:!1}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this,e={page:this.page};""!==this.filters.room_type&&(e.room_type=this.filters.room_type),""!==this.filters.room_state&&(e.room_state=this.filters.room_state),this.listLoading=!0,o.default.getRoomList(e,function(e){t.roomList=e.data.list,t.roomTypeArr=e.data.room_type,t.roomStateArr=e.data.room_state,t.total=parseInt(e.data.count),t.listLoading=!1}).catch(function(e){t.$notify({message:e})})},handleCurrentChange:function(t){this.page=t,this.loadData()},change:function(){this.filter()}}}},431:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")}}}},432:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=a(444),r=n(l),o=a(244),i=n(o),s=a(123),u=n(s);e.default={data:function(){return{uTypeArr:[{value:"",label:"全部"},{value:"0",label:"游客"},{value:"1",label:"QQ"},{value:"2",label:"微信"}],typeArr:[{value:"3",label:"全部"},{value:"2",label:"注册"},{value:"1",label:"登陆"}],pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},filters:{unick:"",uuid:"",u_type:"",type:"",start_time:"",end_time:""},users:[],daterange:[],total:0,page:1,listLoading:!1,sels:[]}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this,e={page:this.page,uuid:this.filters.uuid,u_type:this.filters.u_type,type:this.filters.type,start_time:this.filters.start_time,end_time:this.filters.end_time};""!==this.filters.unick&&(e.unick=this.filters.unick),this.listLoading=!0,u.default.getUser(e,function(e){t.users=e.data.list,t.total=parseInt(e.data.count),t.listLoading=!1}).catch(function(t){console.log(t)})},handleCurrentChange:function(t){this.page=t,this.loadData()},handleDel:function(t,e){var a=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){a.listLoading=!0,u.default.delUser(e.uid,function(t){a.listLoading=!1,a.$notify({message:t.data.msg}),a.loadData()})}).catch(function(){a.$notify({message:"删除失败"})})},dateChange:function(){if(null!==this.daterange&&this.daterange.length>0){var t=(0,r.default)(this.daterange,2),e=t[0],a=t[1];null!=e&&(this.filters.start_time=i.default.formatDates(e)),null!=a&&(this.filters.end_time=i.default.formatDates(a))}else this.filters.start_time="",this.filters.end_time=""},selsChange:function(t){this.sels=t}}}},433:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(243);e.default={data:function(){return{filters:{name:""},loading:!1,users:[]}},methods:{formatSex:function(t,e){return 1==t.sex?"男":0==t.sex?"女":"未知"},getUser:function(){var t=this,e={name:this.filters.name};this.loading=!0,(0,n.getUserList)(e).then(function(e){t.users=e.data.users,t.loading=!1})}},mounted:function(){this.getUser()}}},434:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=a(441),r=n(l),o=a(167),i=n(o),s=a(966),u=n(s),c=a(942);i.default.defaults.headers.common.Authorization=localStorage.getItem("token"),i.default.interceptors.request.use(function(t){return u.default.start(),t},function(t){return r.default.reject(t)}),i.default.interceptors.response.use(function(t){return u.default.done(),"/api/simplelogin"===t.config.url?t:"SUCCESS"!==t.data.code?(c.Notification.error("["+t.data.code+"]"+t.data.msg),"NEED_LOGGED"===t.data.code&&(window.location.href="/#/login"),r.default.reject(t)):t},function(t){return t.response.data=t.response.data.match("<title>([^<>]+)</title>"),c.Notification.error(t.response.data[1]),u.default.done(),401===t.response.status&&(window.location.href="/#/login"),r.default.reject(t)}),e.default=i.default},435:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var l=a(380),r=(n(l),a(383)),o=n(r);a(381);var i=a(379),s=n(i),u=a(378),c=n(u);a(382);var d=new VueRouter({routes:c.default});d.beforeEach(function(t,e,a){if(t.meta&&t.meta.deny)a({path:"/403"});else if("/login"===t.path)a();else{var n=localStorage.getItem("token");n||"/login"===t.path?a():a({path:"/login"})}}),new Vue({router:d,store:s.default,render:function(t){return t(o.default)}}).$mount("#app")},436:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.increment=function(t){(0,t.commit)("INCREMENT")},e.decrement=function(t){(0,t.commit)("DECREMENT")}},437:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getCount=function(t){return t.count}},956:function(t,e){},957:function(t,e){},958:function(t,e){},959:function(t,e){},960:function(t,e){},961:function(t,e){},962:function(t,e){},963:function(t,e){},964:function(t,e){},965:function(t,e){},969:function(t,e,a){a(957);var n=a(41)(null,a(981),"data-v-0f02ba32",null);t.exports=n.exports},970:function(t,e,a){a(960);var n=a(41)(a(425),a(984),"data-v-57bf35f5",null);t.exports=n.exports},971:function(t,e,a){a(962);var n=a(41)(a(426),a(987),"data-v-83e7217a",null);t.exports=n.exports},972:function(t,e,a){a(964);var n=a(41)(a(427),a(989),"data-v-ce436f94",null);t.exports=n.exports},973:function(t,e,a){a(956);var n=a(41)(a(428),a(980),"data-v-00724a9d",null);t.exports=n.exports},974:function(t,e,a){a(959);var n=a(41)(a(429),a(983),"data-v-4cb64e84",null);t.exports=n.exports},975:function(t,e,a){var n=a(41)(null,a(991),null,null);t.exports=n.exports},976:function(t,e,a){a(961);var n=a(41)(a(430),a(986),"data-v-6bfed484",null);t.exports=n.exports},977:function(t,e,a){var n=a(41)(a(431),a(985),null,null);t.exports=n.exports},978:function(t,e,a){a(963);var n=a(41)(a(432),a(988),"data-v-922b67a4",null);t.exports=n.exports},979:function(t,e,a){a(958);var n=a(41)(a(433),a(982),"data-v-2fbaaefb",null);t.exports=n.exports},980:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticStyle:{margin:"20px"}}),t._v(" "),a("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"80px",model:t.data}},[a("el-form-item",{attrs:{label:"初始化的玩家金币","label-width":"180px"}},[a("el-input",{staticStyle:{width:"230px"},model:{value:t.data.init_gold,callback:function(e){t.$set(t.data,"init_gold",e)},expression:"data.init_gold"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"初始化的玩家银行资产","label-width":"180px"}},[a("el-input",{staticStyle:{width:"230px"},model:{value:t.data.init_bank,callback:function(e){t.$set(t.data,"init_bank",e)},expression:"data.init_bank"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"初始化的玩家房卡数量","label-width":"180px"}},[a("el-input",{staticStyle:{width:"230px"},model:{value:t.data.init_card,callback:function(e){t.$set(t.data,"init_card",e)},expression:"data.init_card"}})],1)],1),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(e){t.editHandle(t.data.id)}}},[t._v("保存")])],1)},staticRenderFns:[]}},981:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"page-container"},[t._v("404 page not found")])},staticRenderFns:[]}},982:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:t.filters}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"姓名"},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.getUser}},[t._v("查询")])],1)],1)],1),t._v(" "),[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.users,"highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"100",formatter:t.formatSex,sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"100",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"birth",label:"生日",width:"120",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"addr",label:"地址","min-width":"180",sortable:""}})],1)]],2)},staticRenderFns:[]}},983:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("新增")])],1)],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{prop:"card",label:"奖励的房卡数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"glod",label:"奖励的金币数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"days",label:"连续签到的天数"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteSign(e.row)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleSign(e.$index,e.row)}}},[t._v("编辑")])]}}])})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑","close-on-click-modal":!1},model:{value:t.editFormVisible,callback:function(e){t.editFormVisible=e},expression:"editFormVisible"}},[a("el-form",{ref:"editForm",attrs:{model:t.editForm,"label-width":"80px",rules:t.editFormRules}},[a("el-form-item",{attrs:{label:"奖励的房卡数",prop:"card"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editForm.card,callback:function(e){t.$set(t.editForm,"card",e)},expression:"editForm.card"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"奖励的金币数"}},[a("el-input",{model:{value:t.editForm.glod,callback:function(e){t.$set(t.editForm,"glod",e)},expression:"editForm.glod"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"连续签到的天数"}},[a("el-input",{model:{value:t.editForm.days,callback:function(e){t.$set(t.editForm,"days",e)},expression:"editForm.days"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.editFormVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.editLoading},nativeOn:{click:function(e){t.editSubmit()}}},[t._v("提交")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"新增","close-on-click-modal":!1},model:{value:t.addFormVisible,callback:function(e){t.addFormVisible=e},expression:"addFormVisible"}},[a("el-form",{ref:"addForm",attrs:{model:t.addForm,"label-width":"80px",rules:t.addFormRules}},[a("el-form-item",{attrs:{label:"奖励的房卡数",prop:"card"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.card,callback:function(e){t.$set(t.addForm,"card",e)},expression:"addForm.card"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"奖励的金币数"}},[a("el-input",{model:{value:t.addForm.glod,callback:function(e){t.$set(t.addForm,"glod",e)},expression:"addForm.glod"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"连续签到的天数"}},[a("el-input",{model:{value:t.addForm.days,callback:function(e){t.$set(t.addForm,"days",e)},expression:"addForm.days"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.addFormVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.addLoading},nativeOn:{click:function(e){return t.addSubmit(e)}}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]}},984:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"container"},[a("el-col",{staticClass:"header",attrs:{span:24}},[a("el-col",{staticClass:"logo",class:t.collapsed?"logo-collapse-width":"logo-width",attrs:{span:10}},[t._v("\n            "+t._s(t.collapsed?"":t.sysName)+"\n        ")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("div",{staticClass:"tools",on:{click:function(e){return e.preventDefault(),t.collapse(e)}}},[a("i",{staticClass:"fa fa-align-justify"})])]),t._v(" "),a("el-col",{staticClass:"userinfo",attrs:{span:4}},[a("el-dropdown",{attrs:{trigger:"hover"}},[a("span",{staticClass:"el-dropdown-link userinfo-inner"},[a("img",{attrs:{src:this.sysUserAvatar}}),t._v(" "+t._s(t.sysUserName))]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[t._v("我的消息")]),t._v(" "),a("el-dropdown-item",[t._v("设置")]),t._v(" "),a("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("退出登录")])],1)],1)],1)],1),t._v(" "),a("el-col",{staticClass:"main",attrs:{span:24}},[a("aside",{class:t.collapsed?"menu-collapsed":"menu-expanded"},[a("el-menu",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}],staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.$route.path,"unique-opened":"",router:""},on:{open:t.handleopen,close:t.handleclose,select:t.handleselect}},[t._l(t.$router.options.routes,function(e,n){return e.hidden?t._e():[e.leaf?t._e():a("el-submenu",{attrs:{index:n+""}},[a("template",{slot:"title"},[a("i",{class:e.iconCls}),t._v(t._s(e.name))]),t._v(" "),t._l(e.children,function(e){return e.hidden?t._e():a("el-menu-item",{key:e.path,attrs:{index:e.path}},[t._v(t._s(e.name)+"\n                        ")])})],2),t._v(" "),e.leaf&&e.children.length>0?a("el-menu-item",{attrs:{index:e.children[0].path}},[a("i",{class:e.iconCls}),t._v(t._s(e.children[0].name)+"\n                    ")]):t._e()]})],2),t._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.collapsed,expression:"collapsed"}],ref:"menuCollapsed",staticClass:"el-menu el-menu-vertical-demo collapsed"},t._l(t.$router.options.routes,function(e,n){return e.hidden?t._e():a("li",{staticClass:"el-submenu item"},[e.leaf?[a("div",{staticClass:"el-submenu"},[a("div",{staticClass:"el-submenu__title el-menu-item",class:t.$route.path==e.children[0].path?"is-active":"",staticStyle:{"padding-left":"20px",height:"56px","line-height":"56px",padding:"0 20px"},on:{click:function(a){t.$router.push(e.children[0].path)}}},[a("i",{class:e.iconCls})])])]:[a("div",{staticClass:"el-submenu__title",staticStyle:{"padding-left":"20px"},on:{mouseover:function(e){t.showMenu(n,!0)},mouseout:function(e){t.showMenu(n,!1)}}},[a("i",{class:e.iconCls})]),t._v(" "),a("ul",{staticClass:"el-menu submenu",class:"submenu-hook-"+n,on:{mouseover:function(e){t.showMenu(n,!0)},mouseout:function(e){t.showMenu(n,!1)}}},t._l(e.children,function(e){return e.hidden?t._e():a("li",{key:e.path,staticClass:"el-menu-item",class:t.$route.path==e.path?"is-active":"",staticStyle:{"padding-left":"40px"},on:{click:function(a){t.$router.push(e.path)}}},[t._v("\n                                "+t._s(e.name)+"\n                            ")])}))]],2)}))],1),t._v(" "),a("section",{staticClass:"content-container"},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[a("strong",{staticClass:"title"},[t._v(t._s(t.$route.name))]),t._v(" "),a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},t._l(t.$route.matched,function(e){return a("el-breadcrumb-item",{key:e.path},[t._v("\n                            "+t._s(e.name)+"\n                        ")])}))],1),t._v(" "),a("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)])])],1)},staticRenderFns:[]}},985:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"form",staticStyle:{margin:"20px",width:"60%","min-width":"600px"},attrs:{model:t.form,"label-width":"80px"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"活动区域"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"活动时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.date1,callback:function(e){t.$set(t.form,"date1",e)},expression:"form.date1"}})],1),t._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[t._v("-")]),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:t.form.date2,callback:function(e){t.$set(t.form,"date2",e)},expression:"form.date2"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"即时配送"}},[a("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:t.form.delivery,callback:function(e){t.$set(t.form,"delivery",e)},expression:"form.delivery"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"活动性质"}},[a("el-checkbox-group",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),t._v(" "),a("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),t._v(" "),a("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),t._v(" "),a("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"特殊资源"}},[a("el-radio-group",{model:{value:t.form.resource,callback:function(e){t.$set(t.form,"resource",e)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"线上品牌商赞助"}}),t._v(" "),a("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"活动形式"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"}},[t._v("立即创建")]),t._v(" "),a("el-button",{nativeOn:{click:function(t){t.preventDefault()}}},[t._v("取消")])],1)],1)},staticRenderFns:[]}},986:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:t.filters}},[a("el-form-item",{attrs:{lable:"房间类型",prop:"room_type"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{chang:t.change},model:{value:t.filters.room_type,callback:function(e){t.$set(t.filters,"room_type",e)},expression:"filters.room_type"}},t._l(t.roomTypeArr,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{lable:"房间状态",prop:"room_state"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{chang:t.change},model:{value:t.filters.room_state,callback:function(e){t.$set(t.filters,"room_state",e)},expression:"filters.room_state"}},t._l(t.roomStateArr,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.loadData}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.roomList,"highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"room_id",label:"房间ID"}}),t._v(" "),a("el-table-column",{attrs:{prop:"jushu",label:"局数",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"renshu",label:"人数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"play",label:"玩法",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"liudi",label:"留底"}}),t._v(" "),a("el-table-column",{attrs:{prop:"room_type_name",label:"游戏类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"room_state_name",label:"房间状态"}}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"homeowners",label:"房主游戏ID"}})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]}},987:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm login-container",attrs:{model:t.ruleForm2,rules:t.rules2,"label-position":"left","label-width":"0px"}},[a("h3",{staticClass:"title"},[t._v("系统登录")]),t._v(" "),a("el-form-item",{attrs:{prop:"account"}},[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:t.ruleForm2.account,callback:function(e){t.$set(t.ruleForm2,"account",e)},expression:"ruleForm2.account"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"checkPass"}},[a("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:t.ruleForm2.checkPass,callback:function(e){t.$set(t.ruleForm2,"checkPass",e)},expression:"ruleForm2.checkPass"}})],1),t._v(" "),a("el-checkbox",{staticClass:"remember",attrs:{checked:""},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("记住密码")]),t._v(" "),a("el-form-item",{staticStyle:{width:"100%"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:t.logining},nativeOn:{click:function(e){return e.preventDefault(),t.handleSubmit2(e)}}},[t._v("\n                登录\n            ")])],1)],1)],1)},staticRenderFns:[]}},988:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:t.filters}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"姓名"},model:{value:t.filters.unick,callback:function(e){t.$set(t.filters,"unick",e)},expression:"filters.unick"}})],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"游戏账号ID"},model:{value:t.filters.uuid,callback:function(e){t.$set(t.filters,"uuid",e)},expression:"filters.uuid"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"房间类型",prop:"room_type"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择用户类型"},model:{value:t.filters.u_type,callback:function(e){t.$set(t.filters,"u_type",e)},expression:"filters.u_type"}},t._l(t.uTypeArr,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"查询时间"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions2},on:{change:t.dateChange},model:{value:t.daterange,callback:function(e){t.daterange=e},expression:"daterange"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"room_type"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择查询时间类型"},model:{value:t.filters.type,callback:function(e){t.$set(t.filters,"type",e)},expression:"filters.type"}},t._l(t.typeArr,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.loadData}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.users,"highlight-current-row":""},on:{"selection-change":t.selsChange}},[a("el-table-column",{attrs:{prop:"uid",label:"序号",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"uuid",label:"UUID",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unick",label:"用户昵称",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"uphone",label:"手机号",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"头像",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return["error"===t.row.uface?a("div",[a("img",{attrs:{src:"https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png",alt:"",height:"50px"}})]):a("div",[a("img",{attrs:{src:t.row.uface,alt:"",height:"50px"}})])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"uemail",label:"邮箱",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"usex",label:"性别",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"uvip",label:"vip等级",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"u_token",label:"OpenId",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"u_type",label:"登陆类型",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"用户状态",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"regist_ip",label:"注册IP",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"regist_time",label:"注册时间",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"login_ip",label:"登录IP",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"login_time",label:"登录时间",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ugold",label:"金币数量",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ubank",label:"保险柜(银行)金币数量",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ucard",label:"房卡数量",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"roomid",label:"当前所在房间",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleDel(e.$index,e.row)}}},[t._v("\n                    移除\n                ")])]}}])})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]}},989:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"chart-container"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"chartColumn"}})]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"chartBar"}})]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"chartLine"}})]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"chartPie"}})]),t._v(" "),a("el-col",{attrs:{span:24}},[a("a",{staticStyle:{float:"right"},attrs:{href:"http://echarts.baidu.com/examples.html",target:"_blank"}},[t._v("more>>")])])],1)],1)},staticRenderFns:[]}},990:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},staticRenderFns:[]}},991:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",[t._v("page5...\n")])},staticRenderFns:[]}}},[435]);
//# sourceMappingURL=app.1026decc45ebcd8452d8.js.map