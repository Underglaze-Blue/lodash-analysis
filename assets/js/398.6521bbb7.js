(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{758:function(a,t,s){"use strict";s.r(t);var n=s(42),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"连续赋值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连续赋值"}},[a._v("#")]),a._v(" 连续赋值")]),a._v(" "),s("p",[a._v("以下代码， 会输出什么")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("假设将上述代码改为")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),s("p",[a._v("那么问题会简单很多，答案是 a、b 都是 1")]),a._v(" "),s("p",[a._v("可是如果 a 是一个引用类型呢，这个时候赋值运算是怎么处理的")]),a._v(" "),s("h2",{attrs:{id:"赋值运算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#赋值运算"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators",target:"_blank",rel:"noopener noreferrer"}},[a._v("赋值运算"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("基本的赋值运算符是等号（=），"),s("strong",[a._v("该运算符把它右边的运算值赋给左边")]),a._v("。即，"),s("code",[a._v("x = y")]),a._v(" 把 "),s("code",[a._v("y")]),a._v(" 的值赋给 "),s("code",[a._v("x")])]),a._v(" "),s("p",[a._v("那么 对于 "),s("code",[a._v("a = b = 1")]),a._v("，就是 把 1 赋值给 b ，然后再把 b 赋值给 a ，在这个过程中 1 只使用了一次，就是赋值给 b 的时候")]),a._v(" "),s("p",[a._v("我们接着来分析一开始的例子")]),a._v(" "),s("ol",[s("li",[a._v("首先 定义 a, 并且在堆内存中开辟一个空间 ，创建一个新对象 {n: 1} 将一个对象 {n: 1} 的地址赋值给 a")]),a._v(" "),s("li",[a._v("定义 b ， 将 a 的引用地址 赋值给 b")]),a._v(" "),s("li",[s("code",[a._v("a.x = a = {n: 2}")]),a._v(" "),s("ul",[s("li",[a._v("首先取 a.x ，但是 a.x 并不存在，所以 js 在堆内存中新增一个 x ，值为 undefined")]),a._v(" "),s("li",[a._v("然后 将 a 的指针指向了 {n: 2} 的堆内存空间，此时 a 已经不在使用之前的堆内存了，而是一个新的堆内存，原来的只有 b 在使用")]),a._v(" "),s("li",[a._v("然后 再将 a 指向的堆内存，赋值给 刚刚新增的 x")]),a._v(" "),s("li",[a._v("此时 a = {n: 2} , b = {n: 1, x: {n: 2}}")])])]),a._v(" "),s("li",[a._v("在调用 a.x 时，因为 a 为对象，所以 x 的初始值为 undefined")])]),a._v(" "),s("h3",{attrs:{id:"关键点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关键点"}},[a._v("#")]),a._v(" 关键点")]),a._v(" "),s("ol",[s("li",[a._v("对象中，不存在的属性，值为 undefined")]),a._v(" "),s("li",[a._v("对象的成员在等待赋值的时候，锁定的是成员，而不是对象")]),a._v(" "),s("li",[a._v("对象重新赋值时，并不是更改之前的堆内存，而是会重新开辟一片内存空间赋值，会更改栈中的指针指向，之前的内存空间，如果还有栈的指针指向它，则不会消失。（对应例子，就是 b 还指向之前的内存空间）")])]),a._v(" "),s("h3",{attrs:{id:"答案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#答案"}},[a._v("#")]),a._v(" 答案")]),a._v(" "),s("p",[a._v("所以， 最终答案为")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("===")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("undefined")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);