import { test } from "node:test";
import assert from "node:assert";
import { generateKeypair } from "../src/crypto.js";
import { createDID } from "../src/did.js";
import { issueCredential, verifyCredential } from "../src/vc.js";

test("issue & verify VC succeeds", () => {
  const { publicKey, secretKey } = generateKeypair();
  const issuer = createDID(publicKey);
  const subject = "did:weva:student123";
  const claim = { degree: "Bachelor of Computer Science" };

  const vc = issueCredential({ issuer, subject, claim, secretKey });
  assert.strictEqual(verifyCredential(vc, publicKey), true);
});

test("verify VC fails if tampered", () => {
  const { publicKey, secretKey } = generateKeypair();
  const issuer = createDID(publicKey);
  const vc = issueCredential({
    issuer,
    subject: "did:weva:abc",
    claim: { level: "Gold" },
    secretKey
  });
  // Tamper
  vc.credentialSubject.claim.level = "Platinum";
  assert.strictEqual(verifyCredential(vc, publicKey), false);
});
