import assert from "assert"
import { a as aa, b as ab } from "../fixture/cycle/star/a.mjs"
import { a as ba, b as bb } from "../fixture/cycle/star/b.mjs"
import * as ans from "../fixture/cycle/star/a.mjs"
import * as bns from "../fixture/cycle/star/b.mjs"

export default () => {
  assert.strictEqual(aa, "a")
  assert.strictEqual(ab, "b")
  assert.strictEqual(ba, "a")
  assert.strictEqual(bb, "b")
  assert.deepEqual(ans, { a: "a", b: "b" })
  assert.deepEqual(ans, bns)
}