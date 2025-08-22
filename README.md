# 🌐 Digital Identity Ecosystem (WEVA) — Fondasi

Repo ini adalah **fondasi kokoh** ekosistem identitas digital mandiri: user-owned, aman, portabel, dan interoperable. Fokus MVP: **DID + Verifiable Credential** untuk kasus **akademik** (ijazah/sertifikat) — pondasi ini akan menjadi rujukan repo lanjutan (wallet, medis, komunikasi, AI agent).

> ⚠️ **PoC Warning:** Implementasi kripto & VC di sini **sederhana** untuk edukasi. **Jangan** gunakan langsung untuk produksi. Tahap lanjut akan menambah selective disclosure, ZKP, revocation registry, key management yang aman, dsb.

## 🎯 Tujuan
- **User-Owned Identity** — kunci & identitas dipegang pengguna.
- **Pondasi Ekosistem** — siap dikembangkan ke pendidikan, kesehatan, ekonomi, sosial, game, AI agent.
- **Interoperable** — mengikuti standar global (W3C DID/VC) secara bertahap.

## 🚀 Fitur MVP
- Generate keypair (Ed25519)
- Bentuk DID: `did:weva:<base64url(publicKey)>`
- Issue & Verify Verifiable Credential sederhana (JSON + signature)

## ⚡ Quickstart
```bash
git clone <url-repo-anda>
cd digital-identity-ecosystem
npm install

# Demo singkat
npm start

# Demo akademik (issuer universitas -> verifikasi HRD)
npm run demo:academic

# Jalankan test
npm test

![CI](https://github.com/arjunajuna2009weva-sys/digital-identity-foundation/actions/workflows/ci.yml/badge.svg)

