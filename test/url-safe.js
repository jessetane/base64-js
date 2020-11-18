import b64 from 'base64-transcoder'
import test from 'tap-esm'

test('default alphabet should also decode url-safe style base64 strings', function (t) {
  var expected = [0xff, 0xff, 0xbe, 0xff, 0xef, 0xbf, 0xfb, 0xef, 0xff]

  var str = '//++/++/++//'
  var actual = b64.decode(str)
  for (var i = 0; i < actual.length; i++) {
    t.equal(actual[i], expected[i])
  }

  t.equal(b64.byteLength(str), actual.length)

  str = '__--_--_--__'
  actual = b64.decode(str)
  for (i = 0; i < actual.length; i++) {
    t.equal(actual[i], expected[i])
  }

  t.equal(b64.byteLength(str), actual.length)

  t.end()
})

test('decode base64url', function (t) {
  t.arrayEqual(
    b64.decode('--__', 'url'),
    [251, 239, 255]
  )
  t.end()
})

test('encode base64url', function (t) {
  t.arrayEqual(
    b64.encode([251, 239, 255], 'url'),
    '--__'
  )
  t.end()
})
