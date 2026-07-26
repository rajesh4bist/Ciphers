export const convertTo2D = ((block: number[]) => {
    let matrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (let c = 0; c < 4; c++) {
        for (let r = 0; r < 4; r++) {
            matrix[r][c] = block[c * 4 + r];
        }
    }
    return matrix;
});

export const mul02 = (b: number) => {
    let res = b << 1;
    if (b & 0x80) {
        res ^= 0x11b;
    }
    return res & 0xFF;
};

export const mul03 = ((b: number) => {
    return mul02(b) ^ b;
});

export const mixSingleColumn = ((col: number[]) => {

    let s0 = col[0], s1 = col[1], s2 = col[2], s3 = col[3];

    let t0 = mul02(s0) ^ mul03(s1) ^ s2 ^ s3;
    let t1 = s0 ^ mul02(s1) ^ mul03(s2) ^ s3;
    let t2 = s0 ^ s1 ^ mul02(s2) ^ mul03(s3);
    let t3 = mul03(s0) ^ s1 ^ s2 ^ mul02(s3);

    return [t0, t1, t2, t3];
});

export const flattenMatrix = ((matrix:number[][]) => {
    let flat = [];
    for (let c = 0; c < 4; c++) {
        for (let r = 0; r < 4; r++) {
            flat.push(matrix[r][c]);
        }
    }
    return flat;
});