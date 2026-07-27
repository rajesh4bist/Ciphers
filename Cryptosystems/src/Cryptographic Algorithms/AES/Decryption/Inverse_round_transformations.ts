import { mul02 } from "../Encryption/Helpers";
import { inv_SBOX } from "./inv_constants";


//inverse sub bytes
export const inv_sub_bytes = ((cipherblock:number[][]) => {
    // let matrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            cipherblock[i][j] = inv_SBOX[cipherblock[i][j]];
        }
    }
    return cipherblock;
});

//inverse shift rows
export const inv_shift_rows = ((matrix:number[][]) => {
    let newMatrix = [
        [...matrix[0]],
        [...matrix[1]],
        [...matrix[2]],
        [...matrix[3]]
    ];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < i; j++) {
            newMatrix[i].unshift(newMatrix[i].pop()!);
        }
    }
    return newMatrix;
});



//inverse mix columns
const mul09 = (b:number) => mul02(mul02(mul02(b))) ^ b;
const mul0B = (b:number) => mul02(mul02(mul02(b))) ^ mul02(b) ^ b;
const mul0D = (b:number) => mul02(mul02(mul02(b))) ^ mul02(mul02(b)) ^ b;
const mul0E = (b:number) => mul02(mul02(mul02(b))) ^ mul02(mul02(b)) ^ mul02(b);

export const inv_mix_columns = ((State_Matrix:number[][]) => {
    let new_Matrix = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    for (let i = 0; i < 4; i++) {
        let col = [
            State_Matrix[0][i],
            State_Matrix[1][i],
            State_Matrix[2][i],
            State_Matrix[3][i]
        ];

        let t0 = mul0E(col[0]) ^ mul0B(col[1]) ^ mul0D(col[2]) ^ mul09(col[3]);
        let t1 = mul09(col[0]) ^ mul0E(col[1]) ^ mul0B(col[2]) ^ mul0D(col[3]);
        let t2 = mul0D(col[0]) ^ mul09(col[1]) ^ mul0E(col[2]) ^ mul0B(col[3]);
        let t3 = mul0B(col[0]) ^ mul0D(col[1]) ^ mul09(col[2]) ^ mul0E(col[3]);

        new_Matrix[0][i] = t0;
        new_Matrix[1][i] = t1;
        new_Matrix[2][i] = t2;
        new_Matrix[3][i] = t3;
    }
    return new_Matrix;
});
