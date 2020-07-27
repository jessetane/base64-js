import b64 from 'base64-transcoder'
import test from 'tap-esm'

test('convert big data to base64', function (t) {
  var b64str, arr, i, length
  var big = new Uint8Array(64 * 1024 * 1024)
  for (i = 0, length = big.length; i < length; ++i) {
    big[i] = i % 256
  }
  b64str = b64.encode(big)
  arr = b64.decode(b64str)
  t.ok(equal(arr, big))
  t.equal(b64.byteLength(b64str), arr.length)
  t.end()
})

function equal (a, b) {
  var i
  var length = a.length
  if (length !== b.length) return false
  for (i = 0; i < length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}
