import test from "ava";

const fakepromise = require("../src/fakepromise");

test("Calling await on fakepromise returns expected value", async (t) => {
  const expectedVal = "this is returned";
  const retval = await fakepromise.promise(2000, expectedVal);
  t.is(retval, expectedVal);
});

test("Calling await on fakepromise without a value works", async (t) => {
  const expectedVal = "";
  const retval = await fakepromise.promise(2000);
  t.is(retval, expectedVal);
});