import b64 from 'base64-transcoder'
import test from 'tap-esm'

test('padding bytes found inside base64 string', function (t) {
  // See https://github.com/beatgammit/base64-js/issues/42
  var str = 'SQ==QU0='
  t.arrayEqual(b64.decode(str), new Uint8Array([73]))
  t.equal(b64.byteLength(str), 1)
  t.end()
})
