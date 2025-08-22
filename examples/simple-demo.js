import { generateKeypair } from "../src/crypto.js";
import { createDID } from "../src/did.js";
import { issueCredential, verifyCredential } from "../src/vc.js";

console.log("=== Simple Demo: DID & VC ===");
const { publicKey, secretKey } = generateKeypair();
const issuer = createDID(publicKey);
console.log("Issuer DID:", issuer);

const vc = issueCredential({
  issuer,
  subject: "did:weva:user123",
  claim: { verifiedEmail: true },
  secretKey
});

console.log("VC issued:");
console.log(vc);

const ok = verifyCredential(vc, publicKey);
console.log("Verification:", ok ? "✅ valid" : "❌ invalid");
