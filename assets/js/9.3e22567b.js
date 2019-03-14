(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{171:function(s,e,t){"use strict";t.r(e);var n=t(0),a=Object(n.a)({},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),t("p",[s._v("Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 "),t("a",{attrs:{href:"https://caniuse.com/#feat=es5",target:"_blank",rel:"noopener noreferrer"}},[s._v("ECMAScript 5"),t("OutboundLink")],1),s._v(" 的浏览器。同理，Wox.js 的兼容性取决于 Vue 的兼容性。")]),s._v(" "),s._m(2),s._v(" "),t("p",[s._v("在使用 Vue 时，我们推荐在你的浏览器上安装 "),t("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue Devtools"),t("OutboundLink")],1),s._v("。它允许你在一个更友好的界面中审查和调试 Vue 应用。")]),s._v(" "),s._m(3),s._v(" "),t("p",[s._v("使用Wox.js架构的时候，推荐通过 "),t("router-link",{attrs:{to:"/cli/"}},[s._v("CLI")]),s._v(" 工具创建项目，不建议通过引入原始文件自行创建。")],1),s._v(" "),s._m(4),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读 "),t("strong",[t("router-link",{attrs:{to:"/guide/"}},[s._v("指南")])],1),s._v("，在熟悉 wox.js 本身之后再使用 CLI。\n"),t("code",[s._v("vue.config.js")]),s._v("与"),t("code",[s._v("babel.config.js")]),s._v("的配置，请查看"),t("a",{attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://cli.vuejs.org/zh/"),t("OutboundLink")],1)])]),s._v(" "),s._m(5),s._v(" "),t("p",[s._v("使用 CLI 工具创建一个新的项目：")]),s._v(" "),s._m(6),s._m(7),s._v(" "),s._m(8),s._m(9),s._v(" "),s._m(10),s._v(" "),s._m(11),s._v(" "),s._m(12),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),s._v(" "),t("p",[s._v("本项目需要一些自定义的配置，那么我们可以通过配置此文件夹下的文件内容来改变：")]),s._v(" "),s._m(16)])},[function(){var s=this.$createElement,e=this._self._c||s;return e("h1",{attrs:{id:"渐进式开发指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渐进式开发指南","aria-hidden":"true"}},[this._v("#")]),this._v(" 渐进式开发指南")])},function(){var s=this.$createElement,e=this._self._c||s;return e("h2",{attrs:{id:"兼容性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#兼容性","aria-hidden":"true"}},[this._v("#")]),this._v(" 兼容性")])},function(){var s=this.$createElement,e=this._self._c||s;return e("h2",{attrs:{id:"vue-devtools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-devtools","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue Devtools")])},function(){var s=this.$createElement,e=this._self._c||s;return e("h2",{attrs:{id:"cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli","aria-hidden":"true"}},[this._v("#")]),this._v(" CLI")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装脚手架")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g @evio/cli \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装脚手架插件")]),s._v("\ncli "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @wox/cli \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装Vue脚手架")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g @vue/cli\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h2",{attrs:{id:"创建项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建项目")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新项目")]),s._v("\ncli wox:new "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("project"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入项目目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("project"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始编码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h2",{attrs:{id:"目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录结构")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(".\n├─ README.md\n├─ package.json\n├─ vue.config.js\n├─ babel.config.js\n├─ app.vue\n├─ app.js\n├─ app\n│  ├─ controller\n│  │  └─ index.js\n│  ├─ middleware\n│  ├─ vue\n│  │  ├─ component\n│  │  ├─ directive\n│  │  ├─ filter\n│  │  └─ mixin\n│  ├─ webview\n│  │  └─ index.vue\n│  └─ service\n└─ config\n   ├─ plugin.json\n   ├─ config.development.json\n   ├─ config.production.json\n   ├─ plugin.development.json\n   └─ plugin.production.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h3",{attrs:{id:"主项目目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主项目目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 主项目目录")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("文件夹"),e("code",[this._v("/app/")]),this._v("下为主要的项目文件目录。主要有以下目录结构：")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ul",[t("li",[t("code",[s._v("controller/")]),s._v(" controller文件存放")]),s._v(" "),t("li",[t("code",[s._v("middleware/")]),s._v(" middleware中间件文件存放")]),s._v(" "),t("li",[t("code",[s._v("service/")]),s._v(" service model层文件存放")]),s._v(" "),t("li",[t("code",[s._v("webview/")]),s._v(" 同步页面文件存放")]),s._v(" "),t("li",[t("code",[s._v("vue/component/")]),s._v(" 组件文件存放")]),s._v(" "),t("li",[t("code",[s._v("vue/directives/")]),s._v(" 指令文件存放")]),s._v(" "),t("li",[t("code",[s._v("vue/filter/")]),s._v(" filter存放文件")]),s._v(" "),t("li",[t("code",[s._v("vue/mixin/")]),s._v(" mixin文件存放")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h3",{attrs:{id:"插件配置目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件配置目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 插件配置目录")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("文件夹 "),e("code",[this._v("/config/")]),this._v("下为主要的插件配置文件存放目录。主要有以下文件：")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ul",[t("li",[t("code",[s._v("plugin.json")]),s._v(" 插件列表文件")]),s._v(" "),t("li",[t("code",[s._v("plugin.development.json")]),s._v(" 开发环境插件配置文件")]),s._v(" "),t("li",[t("code",[s._v("plugin.production.json")]),s._v(" 生产环境插件配置文件")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h3",{attrs:{id:"本项目配置目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本项目配置目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 本项目配置目录")])},function(){var s=this.$createElement,e=this._self._c||s;return e("ul",[e("li",[e("code",[this._v("config.development.js")]),this._v(" 开发环境配置文件")]),this._v(" "),e("li",[e("code",[this._v("config.production.js")]),this._v(" 生产环境配置文件")])])}],!1,null,null,null);e.default=a.exports}}]);