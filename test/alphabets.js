import b64 from 'base64-transcoder'
import test from 'tap-esm'

test('unknown alphabet', function (t) {
  try {
    b64.encode([], 'bogus')
  } catch (err) {
    t.equal(err.message, 'Unknown alphabet bogus')
    t.end()
  }
})

test('custom alphabets', function (t) {
  b64.alphabets.custom = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?'
  var a = b64.decode('aa+/')
  var b = b64.encode(a, 'custom')
  t.arrayEqual(b, 'aa!?')
  t.end()
})
