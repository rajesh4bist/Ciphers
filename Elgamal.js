console.log("Elgamal CryptoSystem...");

// let plaintext = document.getElementById("inputbox").value;

const p = 7;
const g = 5;
let x = 5;

const h = (Math.pow(g, x)) % 7;

console.log(`Private key: ${x}`);
console.log(`Public key: ${g, h, p}`);

//Encryption
let k = 3;
const C1 = (Math.pow(g, k)) % p;
const C2 = (m * (Math.pow(h, k))) % p;

console.log(C1,C2);

//Decryption


