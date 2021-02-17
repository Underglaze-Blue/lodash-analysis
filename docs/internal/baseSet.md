# baseSet 

## Description 
将 value 值 设置到 object path 路径的 key 上
## Params
`(object, path, value, customizer)`
> {Object} object - 要修改的对象。
>
> {Array|string} path - 要设置的属性的路径。
>
> {Function} [customizer] - 自定义创建路径。
>

## Return
`Object`
## Depend
```js
import assignValue from './assignValue.js'
import castPath from './castPath.js'
import isIndex from './isIndex.js'
import isObject from '../isObject.js'
import toKey from './toKey.js'
```
> [assignValue 源码分析](./assignValue.md)
> <br/>
> <br/>
> [castPath 源码分析](./castPath.md)
> <br/>
> <br/>
> [isIndex 源码分析](./isIndex.md)
> <br/>
> <br/>
> [isObject 源码分析](../export/isObject.md)
> <br/>
> <br/>
> [toKey 源码分析](./toKey.md)

## Code
```js
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object
  }
  path = castPath(path, object)

  const length = path.length
  const lastIndex = length - 1

  let index = -1
  let nested = object

  while (nested != null && ++index < length) {
    const key = toKey(path[index])
    let newValue = value

    if (index != lastIndex) {
      const objValue = nested[key]
      newValue = customizer ? customizer(objValue, key, nested) : undefined
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {})
      }
    }
    assignValue(nested, key, newValue)
    nested = nested[key]
  }
  return object
}
```
## Analyze

## Remark

## Example
