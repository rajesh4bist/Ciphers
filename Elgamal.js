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

const p = 337n;
const g = 241n;
let x = 55n;

const h = modPow(g, x, p);

console.log(`Private key: ${x}`);
console.log(`Public key: ${g}, ${h}, ${p}}`);

//Encryption
const charToNum = ((c) => {
    return c.charCodeAt(0);
});

const numToChar = ((n) => {
    return String.fromCharCode(n);
});
function randomBigInt() {
    return BigInt(Math.floor(Math.random() * 198) + 2);
}


let encryptbtn = document.getElementById("encryptbtn");
let C1, C2;
let encrypted_arr = [];

encryptbtn.addEventListener("click", (event) => {
    let plaintext = document.getElementById("inputbox").value;

    if (!plaintext) {
        alert("Please enter plaintext to encrypt!");
        return;
    }

    encrypted_arr = [];

    for (let i = 0; i < plaintext.length; i++) {

        let k = randomBigInt();

        let m = BigInt(charToNum(plaintext[i]));

        C1 = Number(modPow(g, k, p));
        C2 = ((m * modPow(h, k, p)) % p);

        encrypted_arr.push([C1, C2]);
    }

    const outputContainer = document.getElementById('output-container');
    const cipherTextDiv = document.getElementById('ciphertext');

    if (cipherTextDiv) {
        let displaytext = 'Ciphertext (List of (C1, C2) pairs):\n\n'
        encrypted_arr.forEach((elem, i) => {
            displaytext += `Char ${i + 1}:  C1 = ${elem[0]},   C2 = ${elem[1]}\n`
        })
        cipherTextDiv.innerText = displaytext;
        outputContainer.style.display = 'block';
    }
    const decryptContainer = document.getElementById('decrypt-output-container');
    if (decryptContainer) {
        decryptContainer.style.display = 'none';
    }
    console.log(encrypted_arr);
    showDecrypt();
});

//Decryption
const showDecrypt = (() => {

    if (encrypted_arr.length === 0) {
        alert("No data to decrypt!");
        return;
    }

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
        let decryptedtext = "";

        for (let i = 0; i < encrypted_arr.length; i++) {
            C1 = encrypted_arr[i][0];
            C2 = encrypted_arr[i][1];
            let m = Number((C2 % p * modPow(C1, (p - x - 1n), p)) % p);
            decrypted_arr.push(numToChar(m));
        }

        const outputContainer = document.getElementById('output-container');
        outputContainer.style.display = "none";

        const decryptContainer = document.getElementById('decrypt-output-container');
        const decryptedDiv = document.getElementById('decryptedtext');

        if (decryptContainer) {
            form.insertBefore(decryptBtn, decryptContainer);
        } else {
            form.appendChild(decryptBtn);
        }

        decryptedtext = decrypted_arr.join("");
        if (decryptedDiv && decryptContainer) {
            decryptedDiv.innerText = decryptedtext;
            decryptContainer.style.display = 'block';
        }

        console.log(decrypted_arr);
    });
});