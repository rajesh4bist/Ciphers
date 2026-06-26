console.log("Elgamal CryptoSystem...");
const p = 7;
const g = 5;
let x = 5;

const h = (Math.pow(g,x)) % 7;

console.log(`Private key: ${x}`);
console.log(`Public key: ${g,h,p}`);

