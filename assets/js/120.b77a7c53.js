(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{480:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"istypedarray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#istypedarray"}},[t._v("#")]),t._v(" isTypedArray")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("检查 "),s("code",[t._v("value")]),t._v(" 是否是 TypedArray。")]),t._v(" "),s("h2",{attrs:{id:"params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" Params")]),t._v(" "),s("p",[s("code",[t._v("value")])]),t._v(" "),s("h2",{attrs:{id:"return"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return"}},[t._v("#")]),t._v(" Return")]),t._v(" "),s("p",[s("code",[t._v("Boolean")])]),t._v(" "),s("h2",{attrs:{id:"depend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#depend"}},[t._v("#")]),t._v(" Depend")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" getTag "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./.internal/getTag.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" nodeTypes "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./.internal/nodeTypes.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" isObjectLike "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./isObjectLike.js'")]),t._v("\n")])])]),s("blockquote",[s("p",[s("RouterLink",{attrs:{to:"/internal/getTag.html"}},[t._v("getTag 源码分析")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("RouterLink",{attrs:{to:"/internal/nodeTypes.html"}},[t._v("nodeTypes")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("RouterLink",{attrs:{to:"/export/isObjectLike.html"}},[t._v("isObjectLike")])],1)]),t._v(" "),s("h2",{attrs:{id:"code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Used to match `toStringTag` values of typed arrays. */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reTypedTag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^\\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\\]$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Node.js helper references. */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nodeIsTypedArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nodeTypes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" nodeTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isTypedArray\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isTypedArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nodeIsTypedArray\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nodeIsTypedArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isObjectLike")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" reTypedTag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"analyze"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#analyze"}},[t._v("#")]),t._v(" Analyze")]),t._v(" "),s("p",[s("code",[t._v("reTypedTag")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/reg_isTypedArray.svg")}}),t._v(" "),s("ol",[s("li",[t._v("判断 "),s("code",[t._v("nodeTypes")]),t._v(" 是否存在，也就是 "),s("code",[t._v("node")]),t._v(" 下 "),s("code",[t._v("util.types")]),t._v(" 是否可用")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("util.types")]),t._v(" 可用，则使用 "),s("code",[t._v("util.types.isTypedArray")]),t._v(" 方法来进行判断")]),t._v(" "),s("li",[t._v("否则 判断 "),s("code",[t._v("value")]),t._v(" 是不是一个不为 "),s("code",[t._v("null")]),t._v(" 的 "),s("code",[t._v("object")]),t._v("，同时正则匹配 "),s("code",[t._v("value")]),t._v(" 的 "),s("code",[t._v("toString")]),t._v(" 的值")])]),t._v(" "),s("h2",{attrs:{id:"remark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remark"}},[t._v("#")]),t._v(" Remark")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypedArray MDN"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://nodejs.cn/api/util.html#util_util_types_istypedarray_value",target:"_blank",rel:"noopener noreferrer"}},[t._v("isTypedArray Node.js"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTypedArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Uint8Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTypedArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);