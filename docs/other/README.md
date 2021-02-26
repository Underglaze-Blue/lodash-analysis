# Other
除 **Lodash** 源码分析外其他的一些 **js** 相关的知识点，如 `this` 指向等

1. [运算符优先级 MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)
2. [MIME type MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
3. [JavaScript 编程语言](https://github.com/javascript-tutorial/zh.javascript.info)
4. <a download target="_blank" :href="$withBase('/assets/JavaScript正则表达式迷你书（1.1版）.pdf')">JavaScript正则表达式mini 1.1</a>
5. <a download target="_blank" :href="$withBase('/assets/ECMA-262.pdf')">ECMA 262</a>

6. [逻辑空赋值 (??=)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)
7. [现代 JavaScript 教程](https://zh.javascript.info/)
8. [结构化克隆算法 MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/API/DOM/The_structured_clone_algorithm)
9. [Truthy（真值）MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)
10. [Falsy（虚值）MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)
11. [微任务与 Javascript 运行时环境](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
12. [并发模型与事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)
13. [Event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
14. [JavaScript 运行机制详解：再谈 Event Loop 阮一峰](https://www.ruanyifeng.com/blog/2014/10/event-loop.html)
15. [can i use](https://caniuse.com/)

## == 和 ===

`===`
- 如果操作数的类型不同，则返回 false。
 - 如果两个操作数都是对象，只有当它们指向同一个对象时才返回 true。
 - 如果两个操作数都为 null，或者两个操作数都为 undefined，返回 true。
 - 如果两个操作数有任意一个为 NaN，返回 false。
 - 否则，比较两个操作数的值：
     - 数字类型必须拥有相同的数值。+0 和 -0 会被认为是相同的值。
     - 字符串类型必须拥有相同顺序的相同字符。
     - 布尔运算符必须同时为 true 或同时为 false。
     
全等运算符与相等运算符（==）最显著的区别是，如果操作数的类型不同，`==` 运算符会在比较之前尝试将它们转换为相同的类型
 
<table class="standard-table">
 <thead>
  <tr>
   <th scope="row"></th>
   <th colspan="7" scope="col" style="text-align: center;">被比较值 B</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row"></th>
   <td></td>
   <td style="text-align: center;">Undefined</td>
   <td style="text-align: center;">Null</td>
   <td style="text-align: center;">Number</td>
   <td style="text-align: center;">String</td>
   <td style="text-align: center;">Boolean</td>
   <td style="text-align: center;">Object</td>
  </tr>
  <tr>
   <th colspan="1" rowspan="6" scope="row"> 被比较值 A</th>
   <td>Undefined</td>
   <td style="text-align: center;">true</td>
   <td style="text-align: center;">true</td>
   <td style="text-align: center;">false</td>
   <td style="text-align: center;">false</td>
   <td style="text-align: center;">false</td>
   <td style="text-align: center;">IsFalsy(B)</td>
  </tr>
  <tr>
   <td>Null</td>
   <td style="text-align: center;">true</td>
   <td style="text-align: center;">true</td>
   <td style="text-align: center;">false</td>
   <td style="text-align: center;">false</td>
   <td style="text-align: center;">false</td>
   <td style="text-align: center;">IsFalsy(B)</td>
  </tr>
  <tr>
   <td>Number</td>
   <td style="text-align: center;">false</td>
   <td style="text-align: center;">false</td>
   <td style="text-align: center;">A === B</td>
   <td style="text-align: center;">A === ToNumber(B)</td>
   <td style="text-align: center;">A=== ToNumber(B) </td>
   <td style="text-align: center;">A== ToPrimitive(B)</td>
  </tr>
  <tr>
   <td>String</td>
   <td style="text-align: center;">false</td>
   <td style="text-align: center;">false</td>
   <td style="text-align: center;">ToNumber(A) === B</td>
   <td style="text-align: center;">A === B</td>
   <td style="text-align: center;">ToNumber(A) === ToNumber(B)</td>
   <td style="text-align: center;">ToPrimitive(B) == A</td>
  </tr>
  <tr>
   <td>Boolean</td>
   <td style="text-align: center;">false</td>
   <td style="text-align: center;">false</td>
   <td style="text-align: center;">ToNumber(A) === B</td>
   <td style="text-align: center;">ToNumber(A) === ToNumber(B)</td>
   <td style="text-align: center;">A === B</td>
   <td style="text-align: center;">ToNumber(A) == ToPrimitive(B)</td>
  </tr>
  <tr>
   <td>Object</td>
   <td style="text-align: center;"><font face="Consolas, Liberation Mono, Courier, monospace">false</font></td>
   <td style="text-align: center;"><font face="Consolas, Liberation Mono, Courier, monospace">false</font></td>
   <td style="text-align: center;">ToPrimitive(A) == B</td>
   <td style="text-align: center;">ToPrimitive(A) == B</td>
   <td style="text-align: center;">ToPrimitive(A) == ToNumber(B)</td>
   <td style="text-align: center;">
    <p>A === B</p>
   </td>
  </tr>
 </tbody>
</table>
