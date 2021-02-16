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


