(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{604:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"words"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#words"}},[t._v("#")]),t._v(" words")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("拆分字符串 "),a("code",[t._v("string")]),t._v(" 中的词为数组")]),t._v(" "),a("h2",{attrs:{id:"params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" Params")]),t._v(" "),a("p",[a("code",[t._v("(string, pattern)")])]),t._v(" "),a("blockquote",[a("p",[t._v("{string} [string=''] 要拆分的字符串")]),t._v(" "),a("p",[t._v("[pattern] 匹配模式")])]),t._v(" "),a("h2",{attrs:{id:"return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return"}},[t._v("#")]),t._v(" Return")]),t._v(" "),a("p",[a("code",[t._v("Array")])]),t._v(" "),a("h2",{attrs:{id:"depend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#depend"}},[t._v("#")]),t._v(" Depend")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" unicodeWords "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./.internal/unicodeWords.js'")]),t._v("\n")])])]),a("blockquote",[a("p",[a("RouterLink",{attrs:{to:"/internal/unicodeWords.html"}},[t._v("unicodeWords 源码分析")])],1)]),t._v(" "),a("h2",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hasUnicodeWord "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Used to match words composed of alphanumeric characters. */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reAsciiWord "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[^\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\x7f]+")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asciiWords")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reAsciiWord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("words")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasUnicodeWord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unicodeWords")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asciiWords")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"analyze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analyze"}},[t._v("#")]),t._v(" Analyze")]),t._v(" "),a("h4",{attrs:{id:"正则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则"}},[t._v("#")]),t._v(" 正则")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("hasUnicodeWord")])])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/reg_words_1.svg")}}),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[t._v("reAsciiWord")]),t._v(" -- 用于匹配由字母数字字符组成的单词")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/reg_words_2.svg")}}),t._v(" "),a("ol",[a("li",[t._v("定义 "),a("code",[t._v("asciiWords")]),t._v(" 方法，用于 "),a("code",[t._v("ascii")]),t._v(" 字符的分割， 基于 "),a("code",[t._v("reAsciiWord")]),t._v(" 正则")]),t._v(" "),a("li",[t._v("首先判断是否传入了 "),a("code",[t._v("pattern")]),t._v(" 校验规则， 用的是 "),a("code",[t._v("===")]),t._v("， 传 "),a("code",[t._v("null")]),t._v(" 的也会走自定义的逻辑")]),t._v(" "),a("li",[t._v("如果传入了则使用 "),a("code",[t._v("pattern")]),t._v(" 进行 "),a("code",[t._v("match")]),t._v(" ， 有结果时返回 结果数组，没有结果返回 空数组")]),t._v(" "),a("li",[t._v("如果没有传入则使用默认的正则进行 "),a("code",[t._v("match")])]),t._v(" "),a("li",[t._v("这里进行了 "),a("code",[t._v("hasUnicodeWord")]),t._v(" 的判断，这个正则判断的规则，满足以下条件的都会调用 "),a("code",[t._v("unicodeWords")]),t._v(" ，否则调用 "),a("code",[t._v("asciiWords")]),t._v(" "),a("ul",[a("li",[t._v("存在 小写字母后紧跟大写字母 "),a("code",[t._v("[a-z][A-Z]")]),t._v(", e.g: "),a("code",[t._v("aA")])]),t._v(" "),a("li",[t._v("存在 两个大写字母后跟小写字母 "),a("code",[t._v("[A-Z]{2}[a-z]")]),t._v(", e.g: "),a("code",[t._v("AAa")])]),t._v(" "),a("li",[t._v("存在 数字后跟字母 "),a("code",[t._v("[0-9][a-zA-Z]")]),t._v(", e.g: "),a("code",[t._v("0A")])]),t._v(" "),a("li",[t._v("存在 字母后跟数组 "),a("code",[t._v("[a-zA-Z][0-9]")]),t._v(", e.g: "),a("code",[t._v("A0")])]),t._v(" "),a("li",[t._v("不在 字母数字和空格之内 "),a("code",[t._v("[^a-zA-Z0-9 ]")]),t._v(", e.g: "),a("code",[t._v("|")])])])]),t._v(" "),a("li",[t._v("拿到 "),a("code",[t._v("match")]),t._v(" 的结果，如果存在就返回，否则返回空数组")])]),t._v(" "),a("h2",{attrs:{id:"remark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remark"}},[t._v("#")]),t._v(" Remark")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test",target:"_blank",rel:"noopener noreferrer"}},[t._v("test MDN"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality",target:"_blank",rel:"noopener noreferrer"}},[t._v("Strict equality (===) MDN"),a("OutboundLink")],1),t._v(" -- "),a("a",{attrs:{href:"https://262.ecma-international.org/5.1/#sec-11.9.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMA"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/%E7%9B%B8%E7%AD%89",target:"_blank",rel:"noopener noreferrer"}},[t._v("相等(==) MDN"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("==")]),t._v(" 和 "),a("code",[t._v("===")]),t._v(" 区别\n"),a("ul",[a("li",[t._v("如果操作数的类型不同，则返回 false。")]),t._v(" "),a("li",[t._v("如果两个操作数都是对象，只有当它们指向同一个对象时才返回 true。")]),t._v(" "),a("li",[t._v("如果两个操作数都为 null，或者两个操作数都为 undefined，返回 true。")]),t._v(" "),a("li",[t._v("如果两个操作数有任意一个为 NaN，返回 false。")]),t._v(" "),a("li",[t._v("否则，比较两个操作数的值：\n"),a("ul",[a("li",[t._v("数字类型必须拥有相同的数值。+0 和 -0 会被认为是相同的值。")]),t._v(" "),a("li",[t._v("字符串类型必须拥有相同顺序的相同字符。")]),t._v(" "),a("li",[t._v("布尔运算符必须同时为 true 或同时为 false。")])])])])])]),t._v(" "),a("p",[t._v("全等运算符与相等运算符（==）最显著的区别是，如果操作数的类型不同，"),a("code",[t._v("==")]),t._v(" 运算符会在比较之前尝试将它们转换为相同的类型")]),t._v(" "),a("table",{staticClass:"standard-table"},[a("thead",[a("tr",[a("th",{attrs:{scope:"row"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"7",scope:"col"}},[t._v("被比较值 B")])])]),t._v(" "),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}}),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Undefined")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Null")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Object")])]),t._v(" "),a("tr",[a("th",{attrs:{colspan:"1",rowspan:"6",scope:"row"}},[t._v(" 被比较值 A")]),t._v(" "),a("td",[t._v("Undefined")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IsFalsy(B)")])]),t._v(" "),a("tr",[a("td",[t._v("Null")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IsFalsy(B)")])]),t._v(" "),a("tr",[a("td",[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("A === B")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("A === ToNumber(B)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("A=== ToNumber(B) ")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("A== ToPrimitive(B)")])]),t._v(" "),a("tr",[a("td",[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ToNumber(A) === B")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("A === B")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ToNumber(A) === ToNumber(B)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ToPrimitive(B) == A")])]),t._v(" "),a("tr",[a("td",[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ToNumber(A) === B")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ToNumber(A) === ToNumber(B)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("A === B")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ToNumber(A) == ToPrimitive(B)")])]),t._v(" "),a("tr",[a("td",[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("font",{attrs:{face:"Consolas, Liberation Mono, Courier, monospace"}},[t._v("false")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("font",{attrs:{face:"Consolas, Liberation Mono, Courier, monospace"}},[t._v("false")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ToPrimitive(A) == B")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ToPrimitive(A) == B")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ToPrimitive(A) == ToNumber(B)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("p",[t._v("A === B")])])])])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasUnicodeWord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I want to go to sleep'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasUnicodeWord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I want to go to sleep.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("words")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I want to go to sleep'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [ 'I', 'want', 'to', 'go', 'to', 'sleep' ]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("words")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I want to go to sleep.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [ 'I', 'want', 'to', 'go', 'to', 'sleep' ]")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);