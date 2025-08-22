// Kriptografi dasar berbasis Ed25519 (tweetnacl)
import nacl from "tweetnacl";

// helper base64
const toBase64 = (u8) => Buffer.from(u8).toString("base64");
const fromBase64 = (b64) => new Uint8Array(Buffer.from(b64, "base64"));

export function generateKeypair() {
  const { publicKey, secretKey } = nacl.sign.keyPair();
  return {
    publicKey: toBase64(publicKey),
    secretKey: toBase64(secretKey)
  };
}

export function signMessage(message, secretKeyB64) {
  const secretKey = fromBase64(secretKeyB64);
  const msg = new TextEncoder().encode(message);
  const sig = nacl.sign.detached(msg, secretKey);
  return toBase64(sig);
}

export function verifyMessage(message, signatureB64, publicKeyB64) {
  const publicKey = fromBase64(publicKeyB64);
  const signature = fromBase64(signatureB64);
  const msg = new TextEncoder().encode(message);
  return nacl.sign.detached.verify(msg, signature, publicKey);
}
