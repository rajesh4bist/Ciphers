import { Sub_Bytes, Shift_rows, Mix_Columns, add_Round_Keys } from "./Four_Transformations";

export const encrypt_block = ((plainblock: number[][], roundKeys: number[][][]) => {
    let currentBlock = plainblock;

    //pre-round transformation
    currentBlock = add_Round_Keys(currentBlock, roundKeys[0]);

    for (let i = 1; i <= 9; i++) {
        currentBlock = Sub_Bytes(currentBlock);
        currentBlock = Shift_rows(currentBlock);
        currentBlock = Mix_Columns(currentBlock);
        currentBlock = add_Round_Keys(currentBlock, roundKeys[i]);
    }
    //10th round
    currentBlock = Sub_Bytes(currentBlock);
    currentBlock = Shift_rows(currentBlock);
    currentBlock = add_Round_Keys(currentBlock, roundKeys[10]);

    return currentBlock;
});