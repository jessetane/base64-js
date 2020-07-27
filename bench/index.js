import b64 from 'base64-transcoder'
import crypto from 'crypto'

var r = crypto.randomBytes(0x10000)
var data = typeof window === 'undefined'
  ? r.toString('base64')
  : btoa(Array.from(r).map(c => String.fromCharCode(c)).join(''))

var start = Date.now()
var raw = b64.decode(data)
var middle1 = Date.now()
data = b64.encode(raw)
var middle2 = Date.now()
var len = b64.byteLength(data)
var end = Date.now()

console.log(
  'decode ms, decode ops/ms, encode ms, encode ops/ms, length ms, length ops/ms'
)
console.log(
  middle1 - start, data.length / (middle1 - start),
  middle2 - middle1, data.length / (middle2 - middle1),
  end - middle2, len / (end - middle2)
)
