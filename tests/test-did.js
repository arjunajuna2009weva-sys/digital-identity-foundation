import { test } from "node:test";
import assert from "node:assert";
import { generateKeypair } from "../src/crypto.js";
import { createDID, isValidDID } from "../src/did.js";

test("createDID returns valid did:weva:*", () => {
  const { publicKey } = generateKeypair();
  const did = createDID(publicKey);
  assert.ok(did.startsWith("did:weva:"), "DID must start with did:weva:");
  assert.ok(isValidDID(did), "DID must be base64url-safe");
});
