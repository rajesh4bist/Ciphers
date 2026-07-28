
export const modPow = (base: bigint, exp: bigint, mod: bigint) => {
    let res = 1n;
    base = base % mod;
    exp = exp;
    mod = mod;

    while (exp > 0n) {
        if (exp % 2n === 1n) (res = (res * base) % mod);
        base = (base * base) % mod;
        exp = exp / 2n;
    }
    return res;
};