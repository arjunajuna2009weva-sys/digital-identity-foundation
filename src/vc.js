// Issue & verify Verifiable Credential sederhana (PoC)
// Catatan: ini bukan implementasi penuh W3C VC — fokus ke fondasi PoC.
import { signMessage, verifyMessage } from "./crypto.js";

export function issueCredential({ issuer, subject, claim, secretKey }) {
  const unsigned = {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential"],
    issuer,
    issuanceDate: new Date().toISOString(),
    credentialSubject: {
      id: subject,
      claim
    }
  };
  const signature = signMessage(JSON.stringify(unsigned), secretKey);
  return { ...unsigned, proof: { type: "Ed25519Signature", signature } };
}

export function verifyCredential(vc, issuerPublicKey) {
  if (!vc || !vc.proof || !vc.proof.signature) return false;
  const { proof, ...unsigned } = vc;
  return verifyMessage(JSON.stringify(unsigned), proof.signature, issuerPublicKey);
}
