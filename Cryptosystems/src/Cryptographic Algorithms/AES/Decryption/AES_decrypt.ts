import { keyExpansion } from "../Encryption/gFunc&keyExp";
import { convertTo2D, flattenMatrix } from "../Encryption/Helpers";
import { add_Round_Keys } from "../Encryption/Four_Transformations";
import { inv_shift_rows, inv_sub_bytes, inv_mix_columns } from "./Inverse_round_transformations";


export const decrypt_block = ((ciphertext: number[], IV: number[]) => {

    let keys = keyExpansion();
    let previousBlock = IV.slice();
    let chainedBlock = [];

    for (let i = 0; i < ciphertext.length; i += 16) {

        let Block = ciphertext.slice(i, i + 16);

        let currentBlock = convertTo2D(Block);

        //round 1 of decryption
        currentBlock = add_Round_Keys(currentBlock, keys[keys.length - 1]);

        //round 2 to 9
        for (let i = 9; i > 0; i--) {
            currentBlock = inv_shift_rows(currentBlock);
            currentBlock = inv_sub_bytes(currentBlock);
            currentBlock = add_Round_Keys(currentBlock, keys[i]);
            currentBlock = inv_mix_columns(currentBlock);
        }

        //Final Round
        currentBlock = inv_shift_rows(currentBlock);
        currentBlock = inv_sub_bytes(currentBlock);
        currentBlock = add_Round_Keys(currentBlock, keys[0]);

        let newCurrentBlock:number[] = flattenMatrix(currentBlock);
        for (let j = 0; j < 16; j++) {
            chainedBlock.push(newCurrentBlock[j] ^ previousBlock[j]);
        }
        previousBlock = Block;
    }
    return chainedBlock;
});