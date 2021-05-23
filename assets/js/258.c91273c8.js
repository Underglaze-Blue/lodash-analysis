(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{618:function(a,t,s){"use strict";s.r(t);var r=s(42),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"arrayincludeswith"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arrayincludeswith"}},[a._v("#")]),a._v(" arrayIncludesWith")]),a._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),s("p",[a._v("和 includes 类似，只不过需要传入 比较函数")]),a._v(" "),s("h2",{attrs:{id:"params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[a._v("#")]),a._v(" Params")]),a._v(" "),s("p",[s("code",[a._v("(array, target, comparator)")])]),a._v(" "),s("blockquote",[s("p",[a._v("comparator - 每个元素调用的比较器。")])]),a._v(" "),s("h2",{attrs:{id:"return"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return"}},[a._v("#")]),a._v(" Return")]),a._v(" "),s("p",[s("code",[a._v("Boolean")])]),a._v(" "),s("h2",{attrs:{id:"code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[a._v("#")]),a._v(" Code")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("arrayIncludesWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" comparator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("array "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" value "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("of")]),a._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("comparator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"analyze"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#analyze"}},[a._v("#")]),a._v(" Analyze")]),a._v(" "),s("ol",[s("li",[a._v("如果没有传入 "),s("code",[a._v("array")]),a._v(" 或者 "),s("code",[a._v("array")]),a._v(" 为 "),s("code",[a._v("null")]),a._v(" ，则返回 "),s("code",[a._v("false")])]),a._v(" "),s("li",[a._v("使用 "),s("code",[a._v("for...of")]),a._v(" 循环遍历数组，如果 "),s("code",[a._v("comparator")]),a._v(" 处理结果为真值，则返回 "),s("code",[a._v("true")]),a._v("，"),s("code",[a._v("comparator")]),a._v(" 接受两个参数，分别为 需要比较的值和当前循环到的值")]),a._v(" "),s("li",[a._v("如果循环完成后都没有返回结果，则返回 "),s("code",[a._v("false")])])]),a._v(" "),s("h2",{attrs:{id:"remark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remark"}},[a._v("#")]),a._v(" Remark")]),a._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",target:"_blank",rel:"noopener noreferrer"}},[a._v("Array.prototype.includes() MDN"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of",target:"_blank",rel:"noopener noreferrer"}},[a._v("for...of MDN"),s("OutboundLink")],1),a._v(" 语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句")])]),a._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("arrayIncludesWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("===")]),a._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);