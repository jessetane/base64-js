# base64-transcoder
Base64 transcoding in pure JS. Forked from [base64-js](https://github.com/beatgammit/base64-js). Note that for compatibility with node, this module's default alphabet will decode base64 AND base64-url.

## Methods
Three methods are exposed: `encode`, `decode` and `byteLength`. Each requires a single argument, `encode` and `decode` also accept an optional `alphabet` argument (see `alphabets` property below).

### `encode`
Takes a byte array and returns a base64 string.

### `decode`
Takes a base64 string and returns a byte array.

### `byteLength`
Takes a base64 string and returns length of byte array.

## Properties

### `alphabets`
Use this property to do base64 transcoding with arbitrary alphabets. For example it is possible to implement [base64-url](https://tools.ietf.org/html/rfc4648#section-5) using this interface:
```
b64.alphabets.url = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
var a = b64.toByteArray('aa+/')
var b = b64.fromByteArray(a, 'url')
console.log(b === 'aa-_') // true
```

## Prior art
https://github.com/beatgammit/base64-js

## License
MIT
