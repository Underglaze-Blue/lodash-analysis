(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{720:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hasunicode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hasunicode"}},[t._v("#")]),t._v(" hasUnicode")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("检查 "),a("code",[t._v("string")]),t._v(" 是否包含 "),a("code",[t._v("Unicode")]),t._v(" 符号")]),t._v(" "),a("h2",{attrs:{id:"params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" Params")]),t._v(" "),a("p",[a("code",[t._v("{String} string")]),t._v(" -- 要检查的字符串")]),t._v(" "),a("h2",{attrs:{id:"return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return"}},[t._v("#")]),t._v(" Return")]),t._v(" "),a("p",[a("code",[t._v("Boolean")])]),t._v(" "),a("h2",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Used to compose unicode character classes. */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rsAstralRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\ud800-\\\\udfff'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rsComboMarksRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\u0300-\\\\u036f'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reComboHalfMarksRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\ufe20-\\\\ufe2f'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rsComboSymbolsRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\u20d0-\\\\u20ff'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rsComboMarksExtendedRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\u1ab0-\\\\u1aff'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rsComboMarksSupplementRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\u1dc0-\\\\u1dff'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rsComboRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rsComboMarksRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" reComboHalfMarksRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rsComboSymbolsRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rsComboMarksExtendedRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rsComboMarksSupplementRange\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rsVarRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\ufe0e\\\\ufe0f'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Used to compose unicode capture groups. */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rsZWJ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\u200d'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reHasUnicode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("rsZWJ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rsAstralRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rsComboRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rsVarRange"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasUnicode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" reHasUnicode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"analyze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analyze"}},[t._v("#")]),t._v(" Analyze")]),t._v(" "),a("ol",[a("li",[t._v("其实整个代码一点都不复杂，就是正则测试，返回结果")]),t._v(" "),a("li",[t._v("难点在于所有的 Unicode , 匹配符合以下\n"),a("code",[t._v("/[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff\\ufe0e\\ufe0f]/")])])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/reg_hasUnicode_1.svg")}}),t._v(" "),a("h2",{attrs:{id:"remark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remark"}},[t._v("#")]),t._v(" Remark")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Unicode",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicode on Wikipedia"),a("OutboundLink")],1),t._v(" "),a("br"),t._v(" "),a("br")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("U+200D")])]),t._v(": "),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%9B%B6%E5%AE%BD%E8%BF%9E%E5%AD%97",target:"_blank",rel:"noopener noreferrer"}},[t._v("零宽连字 on Wikipedia"),a("OutboundLink")],1),t._v(" (zero-width\njoiner，ZWJ）是一个控制字符，放在某些需要复杂排版语言（如阿拉伯语、印地语）的两个字符之间，使得这两个本不会发生连字的字符产生了连字效果\n"),a("br"),t._v(" "),a("br")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("U+D800-U+DFFF")])]),t._v(": "),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/UTF-16#%E4%BB%8EU+D800%E5%88%B0U+DFFF%E7%9A%84%E7%A0%81%E4%BD%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTF-16 on Wikipedia"),a("OutboundLink")],1),t._v(" ,Unicode 标准规定 U+D800...U+DFFF 的值不对应于任何字符。但是在使用 UCS-2 的时代，U+D800...U+DFFF 内的值被占用，用于某些字符的映射。但只要不构成代理对，许多 UTF-16 编码解码还是能把这些不符合 Unicode 标准的字符映射正确的辨识、转换成合规的码元。按照 Unicode 标准，这种码元序列本来应算作编码错误。\n"),a("br"),t._v(" "),a("br")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("U+0300–U+036F")])]),t._v(": "),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%B5%84%E5%90%88%E9%99%84%E5%8A%A0%E7%AC%A6%E8%99%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("组合附加符号 on Wikipedia"),a("OutboundLink")],1),t._v(" ,（Combining Diacritical Marks、组合用附加符号、组合变音符、结合变音标记、组合音标附加符号）是一个包含最常见组合字符的 Unicode 区段。 它还包含字符的组合字位结合符，可以防止组合字符的规范重新排序；尽管在实际的表示法上、字符与附加符号是分开独立的，但该组合附加符号之字符在给定的上下文中将被视为单一的字位。\n"),a("br"),t._v(" "),a("br")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("U+FE20–U+FE2F")])]),t._v(": "),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%B5%84%E5%90%88%E7%94%A8%E5%8D%8A%E7%AC%A6E8%99%9F_(Unicode%E5%8D%80%E6%AE%B5)",target:"_blank",rel:"noopener noreferrer"}},[t._v("组合用半符号 on Wikipedia"),a("OutboundLink")],1),t._v(" 是一个 Unicode 区段，其中收录了可用于多种书写系统的变音符号\n"),a("br"),t._v(" "),a("br")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("U+20D0-U+20FF")])]),t._v(": "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols",target:"_blank",rel:"noopener noreferrer"}},[t._v("组合符号的变音符号 on Wikipedia"),a("OutboundLink")],1),t._v(" , 组合符号的变音符号是一个Unicode块，其中包含箭头，点，附件和用于修改符号字符的覆盖图\n"),a("br"),t._v(" "),a("br")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("U+1AB0–U+1AFF")])]),t._v(": "),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%B5%84%E5%90%88%E8%AE%8A%E9%9F%B3%E6%A8%99%E8%A8%98%E6%93%B4%E5%B1%95_(Unicode%E5%8D%80%E6%AE%B5)",target:"_blank",rel:"noopener noreferrer"}},[t._v("组合变音标记扩展 on Wikipedia"),a("OutboundLink")],1),t._v(" ,是一个 Unicode 区段，收录了德语方言学中使用的变音符号 “Teuthonista”\n"),a("br"),t._v(" "),a("br")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("U+1DC0-U+1DFF")])]),t._v(": "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_Supplement",target:"_blank",rel:"noopener noreferrer"}},[t._v("结合变音符号补充 on Wikipedia"),a("OutboundLink")],1),t._v(" , 组合变音标记补编是一个Unicode块，其中包含用于乌拉尔语拼音字母，Medievalist表示法和德语方言（Teuthonista）的组合字符。 它是在组合变音标记块中找到的变音符号的扩展\n"),a("br"),t._v(" "),a("br")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("U+FE0E")]),t._v(" / "),a("code",[t._v("U+FE0F")])]),t._v(": Emoji variation sequences contain VS16 (U+FE0F) for emoji-style (with color) or VS15 (U+FE0E) for text style (monochrome) (表情符号变体序列包含VS16（U + FE0F）（用于表情符号样式（带有颜色））或VS15（U + FE0E）（用于文本样式（单色））)\n"),a("br"),t._v(" "),a("br")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://unicode-table.com/cn/blocks/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicode 查询"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://util.unicode.org/UnicodeJsps/character.jsp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicode 查询"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://home.unicode.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicode"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasUnicode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasUnicode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasUnicode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'😊'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasUnicode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🇨🇳'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);