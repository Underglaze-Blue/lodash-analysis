# getTag
## Func Name
`getTag`

## Description
通过 `Object.prototype.toString.call(value)` 来获取 `value` 的类型

## Param
`value`

## Return
`String` 
> ps: 
> 
> `[object Undefined]`
> 
> `[object Number]`
> 
> `[object String]`
> 
> ...
> 

## Code
```js
    const toString = Object.prototype.toString
    
    function getTag(value) {
      if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]'
      }
      return toString.call(value)
    }
```

## Analyze

1. 判断 `value == null`
2. 如果 `value == undefined` ， 返回 `[object Undefined]`, 否则返回 `[object Null]`
3. 调用 `toString.call(value)`，并返回结果

## Remark

```js
    undefined == null // true
    toString.call() // [object Undefined]
    toString.call(3) // [object Number]
    toString.call('3') // [object String]
    toString.call({}) // [object Object]
    toString.call([]) // [object Array]
    toString.call(null) // [object Null]
    toString.call(Symbol(1)) // [object Symbol]
    toString.call(()=>{}) // [object Function]
```

## Example

```js
    getTag('') // ‘[object String]’
    getTag(3) // ‘[object Number]’
```
