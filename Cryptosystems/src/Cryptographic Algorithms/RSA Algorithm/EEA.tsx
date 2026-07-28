export const EEA = ((e: number, phi_n: number) => {

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

export const calc_d = ((e: number, phi: number) => {

    let [gcd, y] = EEA(e, phi);

    if (gcd !== 1) {
        throw new Error("No inverse");
    }

    return (y % phi + phi) % phi;
});
