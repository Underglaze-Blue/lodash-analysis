# slice 

## Description 
裁剪数组 array，从 start 位置开始到 end 结束，但不包括 end 本身的位置。

> 这个方法用于代替 [Array#slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 来确保数组正确返回。 `lodash` 在处理时 会当做 稠密数组来处理

## Params
`(array, start, end)`
> {Array} array: 要裁剪数组
>
> {Number} start: 起始位置
>
> {Number} end： 结束位置
>

## Return
`Array` -- 裁剪部分的新数组

## Code
```js
function slice(array, start, end) {
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  start = start == null ? 0 : start
  end = end === undefined ? length : end

  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}
```
## Analyze
#### 对于传入数组的处理
```js
let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
```
1. 首先判断传入的 `array` 是否 `== null` （兼容 `undefined`），如果是 则 `length` 为 0， 否则为 `array.length`
2. 如果 `length` 为 0， 则直接返回 空数组 （`[]`）
#### 对于 `start` 的处理
MDN
> 提取起始处的索引（从 0 开始），从该索引开始提取原数组元素。
  如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
  如果省略 begin，则 slice 从索引 0 开始。
  如果 begin 超出原数组的索引范围，则会返回空数组。
>

```js
start = start == null ? 0 : start
```
如果没有传入 `start` ， 则 `start` 默认为 0

```js
if (start < 0) {
  start = -start > length ? 0 : (length + start)
}
```
如果 `start` 小于 0，则对 `start` 取反， 如果 取反后 大于 数组的 `length` ， 则取 0 ， 否则取 `length + start` （倒数）
```js
start >>>= 0
```
使用右移运算符取整 

对于传入的 array 并没有进行 Array.isArray 的判断， 所以有可能出现类对象(Array-Like)，右移为了保证 start 的准确性

#### 对于 `end` 的处理

```js
end = end === undefined ? length : end
```
如果没有传入 `end` 则 取数组的 `length`

```js
if (end < 0) {
    end += length
}
```
如果 end 为负数，则从数组结尾开始倒数
```js
length = start > end ? 0 : ((end - start) >>> 0)
```
获取返回数组的长度， 这里用到了判断 `start > end` 时取 0 （ps：假设 在 `end` 的判断中，`end` 小于0，并且倒数时，`end` 依旧小于0，此时就取返回数组的长度为 0）,否则取 `end - start` 的值，使用右移确保为 整数或 0

#### 处理结果并返回数组
```js
let index = -1
const result = new Array(length)
while (++index < length) {
  result[index] = array[index + start]
}
return result
```
1. 定义 `index` 为 -1 ，使用 `++index` , 这里应该也是考虑的新能问题， 具体可参考 [baseAt 源码分析](../internal/baseAt.md) 中 **Remark**
2. 定义有长度的数组
3. `while` 循环遍历通过索引为新数组赋值，如果碰到稀疏数组时，通过索引设置的值为 `undefined`
4. 返回最终结果数组
## Remark
1. [Array 描述 MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#%E6%8F%8F%E8%BF%B0)
2. [Array.prototype.slice MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
3. [JavaScript: sparse arrays vs. dense arrays](https://2ality.com/2012/06/dense-arrays.html)
4. [无符号右移赋值预算 MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators
/Unsigned_right_shift_assignment)
5. 对于 稀疏数组 和 稠密数组
```js
var a = new Array(3);
// a 在遍历时，并不会打印任何值，此时为稀疏数组
a.forEach(function (x, i) { console.log(i+". "+x) }) 

var b = new Array(3).fill(undefined)
b.forEach(function (x, i) { console.log(i+". "+x) }) // 0. undefined ; 1. undefined; 2. undefined;
```
区别在于遍历时，稀疏数组会跳过不存在的元素，但是稠密数组可以打印出来，虽然都为 `undefined`
## Example
```js
// 对比 Array#slice
const a = new Array(5)
a[4] = 1
const b = slice(a)
console.log(b) // [ undefined, undefined, undefined, undefined, 1 ]
const c = a.slice() 
console.log(c) // [ <4 empty items>, 1 ]


const arr = [1,2,3,4]
slice(arr, 1, 3) // [ 2, 3 ]
slice(arr, 1) //  [ 2, 3, 4 ]
slice(arr, -1) // [ 4 ]
slice(arr, -1, -2) // []
slice(arr, -3, -2) //  [ 2 ]
```
