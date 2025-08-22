# Arsitektur Sistem: Digital Identity Foundation

## 🎯 Tujuan
Menyediakan kerangka kerja sederhana untuk:
- Pembuatan **DID** (Decentralized Identifier).
- Penerbitan & verifikasi **Verifiable Credential (VC)**.
- Fondasi untuk integrasi ke berbagai domain (academic, health, wallet, AI agent).

## 🏗️ Komponen Utama
1. **Crypto Module (`crypto.js`)**  
   - Generate keypair (Ed25519).  
   - Sign & verify pesan.  

2. **DID Module (`did.js`)**  
   - Format DID: `did:weva:<publicKey>`.  
   - Resolusi DID sederhana.  

3. **VC Module (`vc.js`)**  
   - Issue credential (JSON + signature).  
   - Verify credential.  

4. **Examples (`examples/`)**  
   - Demo cepat untuk generate DID & VC.  

5. **Tests (`tests/`)**  
   - Unit test crypto, DID, VC.  

## 🔗 Alur Kerja
1. User generate keypair.  
2. User membuat DID.  
3. Issuer menandatangani credential.  
4. Verifier memvalidasi credential.  

