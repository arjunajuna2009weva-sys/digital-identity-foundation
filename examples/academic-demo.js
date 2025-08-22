import { generateKeypair } from "../src/crypto.js";
import { createDID } from "../src/did.js";
import { issueCredential, verifyCredential } from "../src/vc.js";

console.log("=== Academic Credential Demo ===");

// 1) Universitas sebagai ISSUER
const uniKeys = generateKeypair();
const uniDID = createDID(uniKeys.publicKey);
console.log("Universitas DID:", uniDID);

// 2) Mahasiswa sebagai SUBJECT
const studentKeys = generateKeypair();
const studentDID = createDID(studentKeys.publicKey);
console.log("Mahasiswa DID:", studentDID);

// 3) Universitas menerbitkan ijazah
const degreeClaim = {
  degree: {
    type: "BachelorDegree",
    name: "Sarjana Teknik Informatika",
    gpa: "3.65"
  },
  university: "Universitas Nusantara"
};

const degreeVC = issueCredential({
  issuer: uniDID,
  subject: studentDID,
  claim: degreeClaim,
  secretKey: uniKeys.secretKey
});

console.log("VC Ijazah diterbitkan:");
console.log(JSON.stringify(degreeVC, null, 2));

// 4) HRD memverifikasi ijazah (pakai public key Universitas)
const isValid = verifyCredential(degreeVC, uniKeys.publicKey);
console.log("Hasil Verifikasi HRD:", isValid ? "✅ valid" : "❌ invalid");
