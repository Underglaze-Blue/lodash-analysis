(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{416:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"findlastkey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#findlastkey"}},[t._v("#")]),t._v(" findLastKey")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("这个方法类似于findKey，不同之处在于它以相反的顺序遍历集合中的元素。")]),t._v(" "),s("h2",{attrs:{id:"params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" Params")]),t._v(" "),s("p",[s("code",[t._v("(object, predicate)")])]),t._v(" "),s("h2",{attrs:{id:"return"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return"}},[t._v("#")]),t._v(" Return")]),t._v(" "),s("p",[s("code",[t._v("string | undefined")])]),t._v(" "),s("h2",{attrs:{id:"depend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#depend"}},[t._v("#")]),t._v(" Depend")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" baseFindKey "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./.internal/baseFindKey.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" baseForOwnRight "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./.internal/baseForOwnRight.js'")]),t._v("\n")])])]),s("blockquote",[s("p",[s("RouterLink",{attrs:{to:"/internal/baseFindKey.html"}},[t._v("baseFindKey 源码分析")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("RouterLink",{attrs:{to:"/internal/baseForOwnRight.html"}},[t._v("baseForOwnRight 源码分析")])],1)]),t._v(" "),s("h2",{attrs:{id:"code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findLastKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" predicate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("baseFindKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" predicate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baseForOwnRight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"analyze"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#analyze"}},[t._v("#")]),t._v(" Analyze")]),t._v(" "),s("p",[t._v("调用 "),s("code",[t._v("baseFindKey")]),t._v(" 方法进行查找，使用 "),s("code",[t._v("baseForOwnRight")]),t._v(" 作为遍历函数，也就是从右到左")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findLastKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);