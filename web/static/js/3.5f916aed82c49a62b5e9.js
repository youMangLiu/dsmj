webpackJsonp([3],{520:function(e,t,a){a(975);var r=a(136)(a(714),a(981),"data-v-2fbaaefb",null);e.exports=r.exports},714:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(213);t.default={data:function(){return{filters:{name:""},loading:!1,users:[]}},methods:{formatSex:function(e,t){return 1==e.sex?"男":0==e.sex?"女":"未知"},getUser:function(){var e=this,t={name:this.filters.name};this.loading=!0,(0,r.getUserList)(t).then(function(t){e.users=t.data.users,e.loading=!1})}},mounted:function(){this.getUser()}}},716:function(e,t,a){t=e.exports=a(511)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"user.vue",sourceRoot:""}])},975:function(e,t,a){var r=a(716);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(512)("70e896af",r,!0)},981:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"姓名"},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getUser}},[e._v("查询")])],1)],1)],1),e._v(" "),[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.users,"highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"100",formatter:e.formatSex,sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"100",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"birth",label:"生日",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"addr",label:"地址","min-width":"180",sortable:""}})],1)]],2)},staticRenderFns:[]}}});
//# sourceMappingURL=3.5f916aed82c49a62b5e9.js.map