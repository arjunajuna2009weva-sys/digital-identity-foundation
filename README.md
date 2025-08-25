# WEVA – Digital Identity Foundation

## 🌍 Visi
WEVA hadir untuk membangun fondasi identitas digital yang **aman, terintegrasi, dan dapat diverifikasi**.  
Tujuan utama adalah memberikan kendali penuh atas data pribadi kepada pengguna, sekaligus membuka akses ke layanan sosial, finansial, dan digital secara lebih efisien.

## 🎯 Misi
- Memberdayakan individu agar memiliki **kendali penuh** atas identitas mereka.
- Menghubungkan ekosistem Web2, Web3, dan layanan pemerintahan tanpa mengorbankan privasi.
- Menjadi fondasi identitas digital bagi masyarakat Indonesia dan global.

## 🚀 Fitur Utama
- **Self-Sovereign Identity (SSI):** identitas sepenuhnya dimiliki pengguna, bukan server.
- **Data terenkripsi & off-chain:** informasi sensitif hanya disimpan di perangkat pengguna.
- **Selective Disclosure:** pengguna dapat berbagi data seperlunya (contoh: bukti valid tanpa membuka detail penuh).
- **Integrasi Modular:** mendukung berbagai sektor (fintech, healthcare, e-government, dll).
- **Keamanan Tingkat Tinggi:** hash + tanda tangan kriptografi tersimpan di blockchain.

## 📌 Manfaat
- **Pengguna:** tidak perlu isi ulang KYC berkali-kali, data aman, privasi terjaga.
- **Institusi/Perusahaan:** verifikasi cepat, tanpa simpan data sensitif.
- **Ekosistem:** jembatan antara identitas dunia nyata & layanan digital.

## 📅 Roadmap Singkat
Lihat [ROADMAP.md](./ROADMAP.md) untuk detail lebih lengkap.

- **Q4 2025:** MVP + integrasi awal (NPWP, rekening bank).
- **Q1 2026:** Dukungan KTP & BPJS.
- **Q2 2026:** Peluncuran token & airdrop tahap 1.
- **Q3 2026:** Integrasi dengan bank & exchange.
- **Q4 2026:** Ekspansi global + interoperabilitas lintas chain.

---


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

# Digital Identity Foundation  

![CI](https://github.com/arjunajuna2009weva-sys/digital-identity-foundation/actions/workflows/ci.yml/badge.svg)

Eksperimen fondasi ekosistem identitas digital terdistribusi (DID + VC)

---

## 📄 License

This project is licensed under the MIT License.  
See [LICENSE](./LICENSE) for details.
