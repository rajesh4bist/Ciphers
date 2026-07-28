import { calc_d } from "./EEA";


export const charToNum = ((c: string) => {
    return BigInt(c.toLowerCase().charCodeAt(0));
});

export const numToChar = ((n: number) => {
    return String.fromCharCode(n);
});
console.log(numToChar(66));


export const modPow = (base: bigint, exp: bigint, mod: bigint) => {
    let res = 1n;
    base = BigInt(base) % BigInt(mod);
    exp = BigInt(exp);
    mod = BigInt(mod);

    while (exp > 0n) {
        if (exp % 2n === 1n) res = (res * base) % mod;
        base = (base * base) % mod;
        exp = exp / 2n;
    }
    return BigInt(res);
};



type EncryptionProps = {
    inputValue: string;
}


const p = 197n;
const q = 199n;
const n = BigInt(p * q);
let e = 53n;

const phi_n = (p - 1n) * (q - 1n);

const d = calc_d(e, phi_n);

let encrypted_arr: bigint[] = [];

export const Encryption = (({ inputValue }: EncryptionProps) => {

    const result: bigint[] = [];

    for (let i = 0; i < inputValue.length; i++) {

        let num: bigint = charToNum(inputValue[i]);
        let C: bigint = modPow(num, e, n);

        encrypted_arr.push(C);
        result.push(C);
    }
    console.log(encrypted_arr);
    return result;
})

let decrypted_arr = [];

export const Decryption = (() => {
    for (let i = 0; i < encrypted_arr.length; i++) {
        let num: bigint = encrypted_arr[i];

        let M = modPow(num, d, n);

        decrypted_arr.push(numToChar(Number(M)));
    }
    // console.log(encrypted_arr);
    // console.log("Decrypted text:", decrypted_arr.join(""));
    return decrypted_arr.join("");
    // console.log(decrypted_arr)
})