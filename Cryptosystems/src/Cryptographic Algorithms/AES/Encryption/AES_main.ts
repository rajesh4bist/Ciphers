import { PKCS_7 } from "./PKCS_7";
import { keyExpansion } from "./gFunc&keyExp";
import { convertTo2D, flattenMatrix } from "./Helpers";
import { encrypt_block } from "./Encrypt_block";

export const AES_main = ((text: string) => {
    const plaintext = PKCS_7(text);
    let currentBlock;

    let keys = keyExpansion();
    let ciphertext = [];

    let IV = [0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f];
    let previousBlock = [...IV];

    for (let i = 0; i < plaintext.length; i += 16) {
        currentBlock = plaintext.slice(i, i + 16);

        let chainedBlock = [];
        for (let j = 0; j < 16; j++) {
            chainedBlock.push(currentBlock[j] ^ previousBlock[j]);
        }

        let matrixBlock = convertTo2D(chainedBlock);

        let encrypted_block = encrypt_block(matrixBlock, keys);

        let flatBlock = flattenMatrix(encrypted_block);
        previousBlock = [...flatBlock];
        ciphertext.push(...flatBlock);
    }
    console.log("Final Encrypted Block:", ciphertext);
    return ciphertext;
});