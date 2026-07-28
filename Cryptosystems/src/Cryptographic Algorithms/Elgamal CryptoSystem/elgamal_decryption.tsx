import { modPow } from "../RSA Algorithm/rsa_encryption";
import { numToChar } from "./elgamal_encryption";

export const decryption = ((ciphertext: bigint[][]) => {

    const p = 337n;
    let x = 55n;

    let decrypted_arr = [];

    for (let i = 0; i < ciphertext.length; i++) {
        let C1 = ciphertext[i][0];
        let C2 = ciphertext[i][1];
        let m = BigInt((C2 % p * modPow(C1, (p - x - 1n), p)) % p);
        decrypted_arr.push(numToChar(m));
    }
    return decrypted_arr.join('')
})