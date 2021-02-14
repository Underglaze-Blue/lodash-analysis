# baseMerge 

## Description 
不支持多个源的`merge`的基本实现

merge 的解释
> 递归合并 sources 来源对象自身和继承的可枚举属性到 object 目标对象。如果目标值存在，被解析为 undefined 的 sources 来源对象属性将被跳过。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性。
>

## Params
`(object, source, srcIndex, customizer, stack)`
> {Object} object - 目标对象。
>
> {Object} source - 源对象。
>
> {number} srcIndex - “source”的索引。
>
> {Function} [customizer] - 自定义合并函数
>
> {Object} [stack] - Stack 实例，用来处理循环引用
>

## Depend
```js
import Stack from './Stack.js'
import assignMergeValue from './assignMergeValue.js'
import baseFor from './baseFor.js'
import baseMergeDeep from './baseMergeDeep.js'
import isObject from '../isObject.js'
import keysIn from '../keysIn.js'
```
> [Stack 源码分析](./stack.md)
> <br/>
> <br/>
> [assignMergeValue 源码分析](./assignMergeValue.md)
> <br/>
> <br/>
> [baseFor 源码分析](./baseFor.md)
> <br/>
> <br/>
> [baseMergeDeep 源码分析](./baseMergeDeep.md)
> <br/>
> <br/>
> [isObject 源码分析](../export/isObject.md)
> <br/>
> <br/>
> [keysIn 源码分析](../export/keysIn.md)

## Code
```js
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return
  }
  baseFor(source, (srcValue, key) => {
    if (isObject(srcValue)) {
      stack || (stack = new Stack)
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack)
    }
    else {
      let newValue = customizer
        ? customizer(object[key], srcValue, `${key}`, object, source, stack)
        : undefined

      if (newValue === undefined) {
        newValue = srcValue
      }
      assignMergeValue(object, key, newValue)
    }
  }, keysIn)
}
```
## Analyze

## Remark

## Example
