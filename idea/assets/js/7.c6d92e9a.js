(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{189:function(e,t,i){"use strict";i.r(t);var n={name:"v-keymap",data:function(){return{selectFile:null,list:[{file:"keymap-cn.html",info:"windows/linux 快捷键映射表（中文翻译HTML版）"},{file:"keymap-mac-cn.html",info:"Mac快捷键映射表（中文翻译HTML版）"},{file:"keymap.html",info:"windows/linux官方快捷键映射表（英文HTML版）"}]}},components:{},computed:{},watch:{},created:function(){this.selectFile=this.list[0].file},mounted:function(){},methods:{}},l=i(0),a=Object(l.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h6",[e._v("单独页面打开查看大图")]),e._v(" "),i("ul",e._l(e.list,function(t){return i("li",[i("a",{attrs:{href:e.$site.base+"/"+t.file,target:"_blank"}},[e._v(e._s(t.info))])])}),0),e._v(" "),i("h6",[e._v("下图在iframe中查看，会有点拥挤")]),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectFile,expression:"selectFile"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectFile=t.target.multiple?i:i[0]}}},e._l(e.list,function(t){return i("option",{key:e.$index,domProps:{value:t.file}},[e._v(e._s(t.info))])}),0),e._v(" "),i("div",{staticStyle:{height:"10px"}}),e._v(" "),e.selectFile?i("iframe",{staticStyle:{width:"100%",height:"800px"},attrs:{src:e.$site.base+"/"+e.selectFile,frameborder:"0"}}):e._e(),e._v(" "),e._m(0)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h4",[this._v("idea官方快捷键映射表翻译文档来自 "),t("a",{attrs:{href:"https://github.com/gumutianqi",target:"_blank"}},[this._v("gumutianqi")]),this._v("童鞋，感谢他开源的"),t("a",{attrs:{target:"_blank",href:"https://github.com/gumutianqi/IntelliJIDEA_ReferenceCard_CN"}},[this._v("IntelliJIDEA_ReferenceCard_CN")]),this._v(" 开源仓库")])}],!1,null,null,null);t.default=a.exports}}]);