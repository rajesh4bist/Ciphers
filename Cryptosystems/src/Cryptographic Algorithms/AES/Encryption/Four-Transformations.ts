import { SBOX } from "./Constants";
import { mixSingleColumn } from "./Helpers";


//Substitution Bytes
export const Sub_Bytes = ((matrix: number[][]) => {
    let newMatrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            newMatrix[r][c] = SBOX[matrix[r][c]];
        }
    }
    return newMatrix;
});

//Shift Rows
export const Shift_rows = ((matrix: number[][]) => {
    let newMatrix = [
        [...matrix[0]],
        [...matrix[1]],
        [...matrix[2]],
        [...matrix[3]]
    ];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < i; j++) {
            newMatrix[i].push(newMatrix[i].shift()!);
        }
    }
    return newMatrix;
});

//Mix Columns

export const Mix_Columns = ((State_Matrix: number[][]) => {
    let new_Matrix = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    for (let i = 0; i < 4; i++) {
        let column = [State_Matrix[0][i], State_Matrix[1][i], State_Matrix[2][i], State_Matrix[3][i]];
        let mixed = mixSingleColumn(column);

        new_Matrix[0][i] = mixed[0];
        new_Matrix[1][i] = mixed[1];
        new_Matrix[2][i] = mixed[2];
        new_Matrix[3][i] = mixed[3];
    }
    return new_Matrix;
});

//add round keys
export const add_Round_Keys = ((State_Matrix:number[][], keys:number[][]) => {

    let new_Matrix = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            new_Matrix[j][i] = State_Matrix[j][i] ^ keys[i][j];
        }
    }
    return new_Matrix;
});

