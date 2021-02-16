# lodash@5.0.0 的一些问题

## [cloneBuffer](../internal/cloneBuffer.md)
```js
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice()
  }
  const length = buffer.length
  const result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length)

  buffer.copy(result)
  return result
}
```
`lodash` `cloneBuffer` 的第二个参数 `isDeep`，这里有点问题

判断如果传入了 isDeep ，并且为 truly，则调用 buffer.slice
- 这里有一点疑问，因为 buffer.slice 中说明 **buffer.slice 返回一个新的 Buffer，它引用与原始的 Buffer 相同的内存，但是由 start 和 end 索引进行偏移和裁剪。**
- 若要复制切片，则使用 Uint8Array.prototype.slice()。

```js
const isBuffer = nativeIsBuffer || (() => false)

const a = Buffer.from([1,2,3,4,5])
const b = a.slice()
const c = Uint8Array.prototype.slice.call(a)

a[0]++

console.log(a) // <Buffer 02 02 03 04 05>
console.log(b) // <Buffer 02 02 03 04 05>
console.log(c) // <Buffer 01 02 03 04 05>
```

- 所以如果是使用深拷贝，应该使用 Uint8Array.prototype.slice.call

参考：[Buffer Node.js](http://nodejs.cn/api/buffer.html#buffer_buffer) ， [Buffer.slice](http://nodejs.cn/api/buffer.html#buffer_buf_slice_start_end)

## [orderBy](../export/orderBy.md)
```js
function orderBy(collection, iteratees, orders) {
  if (collection == null) {
    return []
  }
  if (!Array.isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees]
  }
  if (!Array.isArray(orders)) {
    orders = orders == null ? [] : [orders]
  }
  return baseOrderBy(collection, iteratees, orders)
}
```

在 `orderBy` 的官方示例中
```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
 
// 以 `user` 升序排序 再  `age` 以降序排序。
orderBy(users, ['user', 'age'], ['asc', 'desc']);
```

如果 按照官方示例，调用 会报错 ，这里报错在 `baseOrderBy` 中
```js
TypeError: iteratee is not a function
```

这里是因为，在 `baseOrderBy` 中，`iteratee` 是一个函数形式，而且在一开始 处理 `iteratees` 时，如果 `iteratee` 不是数组，则会直接返回当前 `iteratee` ，并不会做任何处理

```js
const criteria = iteratees.map((iteratee) => iteratee(value))
```
所以导致，在这里，会报错

修改如下
```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
 
// 以 `user` 升序排序 再  `age` 以降序排序。
orderBy(users, [['user'], ['age']], ['asc', 'desc']);

```
此时就可以正常返回结果，因为 每一个 iteratee 为数组，在 baseOrderBy 中 
```js
  if (Array.isArray(iteratee)) {
    return (value) => baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee)
  }
```
这里是数组，则会调用 `baseGet` 获取值，此时就不会报错，会正确返回结果

或者自己定义函数，iteratee 每次会返回当前的值
```js
orderBy(users, [(val) => val['user'], (val) => val['age']], ['asc', 'desc'])
```
这样也会返回正确的结果
