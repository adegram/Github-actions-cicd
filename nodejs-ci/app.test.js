const test = require("node:test");
const assert = require("node:assert/strict");
const { status } = require("./app");
test("status endpoint payload is stable", () => { assert.deepEqual(status(), { service: "actions-node-ci", status: "ok" }); });
