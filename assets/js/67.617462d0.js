(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{427:function(a,t,r){"use strict";r.r(t);var e=r(42),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"foreach"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#foreach"}},[a._v("#")]),a._v(" forEach")]),a._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),r("p",[a._v("调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用 3 个参数： (value, index|key, collection)。 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。")]),a._v(" "),r("p",[a._v('注意: 与其他 "集合" 方法一样，类似于数组，对象的 "length" 属性也会被遍历。想避免这种情况，可以用 forIn 或者 forOwn 代替。')]),a._v(" "),r("h2",{attrs:{id:"params"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[a._v("#")]),a._v(" Params")]),a._v(" "),r("p",[r("code",[a._v("(collection, iteratee)")])]),a._v(" "),r("h2",{attrs:{id:"return"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#return"}},[a._v("#")]),a._v(" Return")]),a._v(" "),r("p",[r("code",[a._v("{Array|Object}")])]),a._v(" "),r("h2",{attrs:{id:"depend"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#depend"}},[a._v("#")]),a._v(" Depend")]),a._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" arrayEach "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./.internal/arrayEach.js'")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" baseEach "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./.internal/baseEach.js'")]),a._v("\n")])])]),r("blockquote",[r("p",[r("RouterLink",{attrs:{to:"/internal/arrayEach.html"}},[a._v("arrayEach 源码分析")]),a._v(" "),r("br"),a._v(" "),r("br"),a._v(" "),r("RouterLink",{attrs:{to:"/internal/baseEach.html"}},[a._v("baseEach 源码分析")])],1)]),a._v(" "),r("h2",{attrs:{id:"code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[a._v("#")]),a._v(" Code")]),a._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("forEach")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("collection"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" iteratee")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" func "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Array"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("isArray")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("collection"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" arrayEach "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" baseEach\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("func")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("collection"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" iteratee"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),r("h2",{attrs:{id:"analyze"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#analyze"}},[a._v("#")]),a._v(" Analyze")]),a._v(" "),r("p",[a._v("会判断传入的 "),r("code",[a._v("collection")]),a._v(" 是不是 "),r("code",[a._v("array")]),a._v("，如果是 "),r("code",[a._v("array")]),a._v("，则使用 "),r("code",[a._v("arrayEach")]),a._v("，否则使用 "),r("code",[a._v("baseEach")])]),a._v(" "),r("h2",{attrs:{id:"remark"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remark"}},[a._v("#")]),a._v(" Remark")]),a._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",target:"_blank",rel:"noopener noreferrer"}},[a._v("Array.prototype.forEach() MDN"),r("OutboundLink")],1),a._v(" 方法对数组的每个元素执行一次给定的函数。")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList/forEach",target:"_blank",rel:"noopener noreferrer"}},[a._v("NodeList.prototype.forEach() MDN"),r("OutboundLink")],1),a._v(" 接口的 forEach() 方法按插入顺序为列表中的每个值对调用一次参数中给定的回调。")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach",target:"_blank",rel:"noopener noreferrer"}},[a._v("TypedArray.prototype.forEach() MDN"),r("OutboundLink")],1),a._v(" 方法对类型化数组的每个元素调用提供的函数。 这个方法的算法和 Array.prototype.forEach()相同。 TypedArray 是这里的 类型化数组类型 之一。")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach",target:"_blank",rel:"noopener noreferrer"}},[a._v("Set.prototype.forEach() MDN"),r("OutboundLink")],1),a._v(" 方法会根据集合中元素的插入顺序，依次执行提供的回调函数。")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach",target:"_blank",rel:"noopener noreferrer"}},[a._v("Map.prototype.forEach() MDN"),r("OutboundLink")],1),a._v(" 方法按照插入顺序依次对 Map 中每个键 / 值对执行一次给定的函数")])]),a._v(" "),r("h2",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[a._v("console"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("forEach")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("v"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" arr")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" arr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v("v"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// [ 2, 3, 4, 5, 6 ]")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);