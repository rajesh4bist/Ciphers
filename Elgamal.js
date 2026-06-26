console.log("Elgamal CryptoSystem...");

//To handle large numbers
const modPow = (base, exp, mod) => {
    let res = 1n;
    base = BigInt(base) % BigInt(mod);
    exp = BigInt(exp);
    mod = BigInt(mod);

    while (exp > 0n) {
        if (exp % 2n === 1n) res = (res * base) % mod;
        base = (base * base) % mod;
        exp = exp / 2n;
    }
    return res;
};

const p = 197n;
const g = 199n;
let x = 55n;

const h = modPow(g, x, p);

console.log(`Private key: ${x}`);
console.log(`Public key: ${g, h, p}`);

//Encryption
let k = 91n;

const charToNum = ((c) => {
    return c.toLowerCase().charCodeAt(0);
});

const numToChar = ((n) => {
    return String.fromCharCode(n);
});

let encrypted_arr = [];
let encryptbtn = document.getElementById("encryptbtn");
let C1, C2;

encryptbtn.addEventListener("click", (event) => {
    let plaintext = document.getElementById("inputbox").value;
    const outputContainer = document.getElementById('output-container');
    const cipherTextDiv = document.getElementById('ciphertext');
    C1 = modPow(g, k, p);

    for (let i = 0; i < plaintext.length; i++) {
        let m = BigInt(charToNum(plaintext[i]));
        C2 = (m * modPow(h, k, p)) % p;
        encrypted_arr.push([C1, C2]);
    }
    if (cipherTextDiv) {
        cipherTextDiv.innerText = C2;
        outputContainer.style.display = 'block';
    }
    console.log(encrypted_arr);
    showDecrypt();
});

//Decryption
const showDecrypt = (() => {

    let existing = document.getElementById("decryptbtn");
    if (existing) existing.remove();

    const decryptBtn = document.createElement("input");
    decryptBtn.type = "button";
    decryptBtn.value = "Decrypt";
    decryptBtn.id = "decryptbtn";
    decryptBtn.classList.add("decrypt-btn");

    const form = document.getElementById("form");
    form.appendChild(decryptBtn);

    decryptBtn.addEventListener("click", () => {
        let decrypted_arr = [];
        for (let i = 0; i < encrypted_arr.length; i++) {
            let m = Number((encrypted_arr[i][1] % p * modPow(encrypted_arr[i][0], (p - x - 1n), p)) % p);
            decrypted_arr.push(numToChar(m));
        }
        console.log(decrypted_arr);
    });
});


