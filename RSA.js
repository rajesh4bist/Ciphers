const p = 197;
const q = 199;
const n = p * q;


const phi_n = (p - 1) * (q - 1);

let e = 53;


//GCD and coeff. of phi for "d"

const EEA = ((e, phi_n) => {

    let x1 = 1, y1 = 0;
    let x2 = 0, y2 = 1;;

    if (e == 0) {
        return [phi_n, 1, 0];
    }

    while (e != 0) {
        let r = phi_n % e;
        let q = Math.floor(phi_n / e);

        phi_n = e;
        e = r;

        let x = x1 - q * x2;
        let y = y1 - q * y2;

        x1 = x2;
        x2 = x;

        y1 = y2;
        y2 = y;
    }
    return [phi_n, y1];
});


//calculating d

const calc_d = ((e, phi) => {

    let [gcd, y] = EEA(e, phi);

    if (gcd !== 1) {
        throw new Error("No inverse");
    }

    return (y % phi + phi) % phi;
});

const d = calc_d(e, phi_n);
console.log(d);

const public_key = { e, n };
const private_key = { d, n };

console.log(public_key);
console.log(private_key);


//Encryption

const charToNum = ((c) => {
    return c.toLowerCase().charCodeAt(0);
});

const numToChar = ((n) => {
    return String.fromCharCode(n);
});
console.log(numToChar(66));


let encrypted_arr = [];

let C;
let encrytbtn = document.getElementById("encryptbtn");
let decryptbtn = document.getElementById("decryptbtn");

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
    return Number(res);
};

encrytbtn.addEventListener("click", () => {

    let m = document.getElementById("inputbox").value;
    for (let i = 0; i < m.length; i++) {

        let num = charToNum(m[i]);

        let C = modPow(num, e, n);

        encrypted_arr.push(C);
    }

    const newdiv = document.createElement("h4");
    newdiv.textContent = "Ciphertext: " + encrypted_arr.join(", ");
    decryptbtn.parentNode.insertBefore(newdiv, decryptbtn);

    console.log(encrypted_arr);
});


// decryption
let decrypted_arr = [];

decryptbtn.addEventListener("click", () => {

    for (let i = 0; i < encrypted_arr.length; i++) {
        let num = encrypted_arr[i];

        let M = modPow(num, d, n);

        decrypted_arr.push(numToChar(M));
    }

    const newdiv = document.createElement("h4");
    newdiv.textContent = "Ciphertext: " + decrypted_arr.join("");
    document.getElementById("maindiv").append(newdiv);

    console.log("Decrypted text:", decrypted_arr.join(""));
    // console.log(decrypted_arr)
});



