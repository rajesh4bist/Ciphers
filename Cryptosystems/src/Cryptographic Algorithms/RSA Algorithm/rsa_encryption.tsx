
export const charToNum = ((c: string) => {
    return BigInt(c.toLowerCase().charCodeAt(0));
});

const numToChar = ((n: number) => {
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
    return Number(res);
};

type EncryptionProps = {
    Value: string;
}

export const Encryption = (({ Value }: EncryptionProps) => {

    const p = 197;
    const q = 199;
    const n = BigInt(p * q);

    let e = BigInt(53);

    let encrypted_arr = [];

    for (let i = 0; i < Value.length; i++) {

        let num: bigint = charToNum(Value[i]);
        let C = modPow(num, e, n);
        encrypted_arr.push(C);
    }
    console.log(encrypted_arr);
    return encrypted_arr;
})