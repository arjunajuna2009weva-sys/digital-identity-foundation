# Spesifikasi Teknis (PoC)

## DID
Format: `did:weva:<base64url(pubKey)>`
- `pubKey`: Ed25519 public key (32-byte) di-encode base64url.

## VC (PoC)
```json
{
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  "type": ["VerifiableCredential"],
  "issuer": "did:weva:...",
  "issuanceDate": "ISO-8601",
  "credentialSubject": {
    "id": "did:weva:...",
    "claim": {}
  },
  "proof": {
    "type": "Ed25519Signature",
    "signature": "<base64(signature)>"
  }
}
