import { modPow } from "./modPow";


const p = 337n;
const g = 241n;
let x = 55n;

const h = modPow(g, x, p);

const charToNum = ((c: string) => {
    return c.charCodeAt(0);
});

const numToChar = ((n: bigint) => {
    return String.fromCharCode(Number(n));
});
function randomBigInt() {
    return BigInt(Math.floor(Math.random() * 198) + 2);
}


let C1: bigint;
let C2: bigint;
let encrypted_arr = [];


export const encryption = ((plaintext: string) => {
    encrypted_arr = [];

    for (let i = 0; i < plaintext.length; i++) {

        let k = randomBigInt();

        let m = BigInt(charToNum(plaintext[i]));

        C1 = (modPow(g, k, p));
        C2 = ((m * modPow(h, k, p)) % p);

        encrypted_arr.push([C1, C2]);
    }

    return encrypted_arr;

})