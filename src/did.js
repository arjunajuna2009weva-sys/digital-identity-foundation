// DID sederhana: did:weva:<base64url(publicKey)>
// Base64URL aman untuk URI (tanpa +/ dan =)
const b64ToB64Url = (b64) =>
  b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");

export function createDID(publicKeyBase64) {
  const b64url = b64ToB64Url(publicKeyBase64);
  return `did:weva:${b64url}`;
}

// Validasi minimal format DID
export function isValidDID(did) {
  return /^did:weva:[A-Za-z0-9\-_]+$/.test(did);
}
