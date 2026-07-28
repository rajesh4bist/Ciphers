export const EEA = ((e: bigint, phi_n: bigint): [bigint, bigint] => {

    let x1 = 1n, y1 = 0n;
    let x2 = 0n, y2 = 1n;

    if (e == 0n) {
        return [phi_n, y1];
    }

    while (e != 0n) {
        let r = phi_n % e;
        let q = (phi_n / e);

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
export const calc_d = ((e: bigint, phi: bigint): bigint => {

    let [gcd, y] = EEA(e, phi);

    if (gcd !== 1n) {
        throw new Error("No inverse");
    }

    return (y % phi + phi) % phi;
});