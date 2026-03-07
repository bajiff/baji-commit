import assert from "node:assert";
import test from "node:test";
import sum from "./index.js";

test("Berjalan", () => {
  assert.strictEqual(sum(10,30),40);
  assert.strictEqual(sum(null,null),0);
});