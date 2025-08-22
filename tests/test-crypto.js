import { test } from "node:test";
import assert from "node:assert";
import { generateKeypair, signMessage, verifyMessage } from "../src/crypto.js";

test("generateKeypair returns base64 keys", () => {
  const { publicKey, secretKey } = generateKeypair();
  assert.match(publicKey, /^[A-Za-z0-9+/=]+$/);
  assert.match(secretKey, /^[A-Za-z0-9+/=]+$/);
});

test("sign/verify works for valid message", () => {
  const { publicKey, secretKey } = generateKeypair();
  const msg = "hello weva";
  const sig = signMessage(msg, secretKey);
  assert.strictEqual(verifyMessage(msg, sig, publicKey), true);
});

test("verify fails when message is tampered", () => {
  const { publicKey, secretKey } = generateKeypair();
  const sig = signMessage("original", secretKey);
  assert.strictEqual(verifyMessage("tampered", sig, publicKey), false);
});
