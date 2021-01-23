# same 

## [SameValueNonNumber](https://262.ecma-international.org/7.0/#sec-samevaluenonnumber) 
这个规范规定比较的值 x 和 y 都不为 Number 类型，规范如下：

1. x 的类型不为 Number 类型
2. y 的类型与 x 的类型一致
3. 如果 x 的类型为 Undefined ，返回 true
4. 如果 x 的类型为 Null ，返回 true
5. 如果 x 的类型为 String，并且 x 和 y 完全相同的代码单元序列 (相同的长度和相应索引处相同的代码单元) ，则返回 true; 否则返回 false
6. 如果 x 的类型为 Boolean ，并且 x 和 y 同为 true 或同为 false ，返回 true，否则返回 false
7. 如果 x 的类型为 Symbol ，并且 x 和 y 具有相同的 Symbol 值，返回 true，否则返回 false
8. 如果 x 和 y 指向同一个对象，返回 true， 否则返回 false

## [Strict Equality Comparison](https://262.ecma-international.org/7.0/#sec-strict-equality-comparison)
JavaScript 中的全等（===）遵循这个规范，：

1. 如果 x 和 y 的类型不同，返回 false
2. 如果 x 的为 Number 类型：
    a. 如果 x 为 NaN ，返回 false
    b. 如果 y 为 NaN ，返回 false
    c. 如果 x 和 y 的数值一致，返回 true
    d. 如果 x 为 +0 并且 y 为 -0 ，返回 true
    e. 如果 x 为 -0 并且 y 为 +0 ，返回 true
    f. 返回 false
3. 按照 SameValueNonNumber 的结果返回

## [SameValue](https://262.ecma-international.org/7.0/#sec-samevalue)
内部比较抽象操作 SameValue (x，y) ，其中 x 和 y 是 ECMAScript 语言值，生成 true 或 false。规范如下：

1. 如果 x 和 y 的类型不同，返回 false
2. 如果 x 的类型为 Number
    a. 如果 x 为 NaN 并且 y 为 NaN ，返回 true
    b. 如果 x 为 +0 并且 y 为 -0 ，返回 false
    c. 如果 x 为 -0 并且 y 为 +0 ， 返回 false
    d. 如果 x 和 y 的数值一致，返回 true
    e. 返回 false
3. 按照 SameValueNonNumber 的结果返回

## [SameValueZero](https://262.ecma-international.org/7.0/#sec-samevaluezero)
1. 如果 x 和 y 的类型不同，返回 false
2. 如果 x 的类型为 Number
    a. 如果 x 为 NaN 并且 y 为 NaN ，返回 true
    b. 如果 x 为 +0 并且 y 为 -0 ，返回 true
    c. 如果 x 为 -0 并且 y 为 +0 ， 返回 true
    d. 如果 x 和 y 的数值一致，返回 true
    e. 返回 false
3. 按照 SameValueNonNumber 的结果返回
> SameValueZero 与 SameValue 的区别仅在于它对 + 0 和 - 0 的处理

## [Abstract Equality Comparison](https://262.ecma-international.org/7.0/#sec-abstract-equality-comparison)
1. 如果 x 和 y 的类型相同，会返回 Strict Equality Comparison 的执行结果
2. 如果 x 为 null ， y 为 undefined ，返回 true
3. 如果 x 为 undefined， y 为 null ，返回 true
4. 如果 x 是 Number，y 是 String，则将 y 转为 Number，x y 进行比较，返回比较结果
5. 如果 x 是 String，y 是 Number，则将 x 转为 Number，x y 进行比较，返回比较结果
6. 如果 x 是 Boolean，则将 x 转为 Number，x y 进行比较，返回比较结果
7. 如果 y 是 Boolean，则将 y 转为 Number，x y 进行比较，返回比较结果
8. 如果 x 是 String、 Number 或 Symbol，y 是 Object，将 y 转为原始类型，x y 进行比较，返回比较结果
9. 如果 x 是 Object，y 是 String、 Number 或 Symbol，将 x 转为原始类型，x y 进行比较，返回比较结果
10. 返回 false

