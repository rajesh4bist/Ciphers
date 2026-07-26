import { SBOX, RCON } from "./Constants.ts";

export const gFunction = ((word: Uint8Array, round: number) => {
    let round_number = round;
    let temp = new Uint8Array(word);


    const firstbyte = temp[0];
    temp[0] = temp[1];
    temp[1] = temp[2];
    temp[2] = temp[3];
    temp[3] = firstbyte;


    temp[0] = SBOX[temp[0]];
    temp[1] = SBOX[temp[1]];
    temp[2] = SBOX[temp[2]];
    temp[3] = SBOX[temp[3]];

    temp[0] = temp[0] ^ RCON[round_number];

    return temp;

});

//Key expansion for AES
export const keyExpansion = (() => {

    const word_0 = new Uint8Array([0x2b, 0x7e, 0x15, 0x16]);
    const word_1 = new Uint8Array([0x28, 0xae, 0xd2, 0xa6]);
    const word_2 = new Uint8Array([0xab, 0xf7, 0x15, 0x88]);
    const word_3 = new Uint8Array([0x09, 0xcf, 0x4f, 0x3c]);

    let roundKeys = [];
    roundKeys.push([Array.from(word_0), Array.from(word_1), Array.from(word_2), Array.from(word_3)]);

    for (let i = 1; i <= 10; i++) {

        let result = gFunction(word_3, i);

        for (let j = 0; j < 4; j++) {
            let byte = result[j] ^ word_0[j];
            word_0[j] = byte;
        }

        for (let j = 0; j < 4; j++) {
            let byte = word_0[j] ^ word_1[j];
            word_1[j] = byte;
        }

        for (let j = 0; j < 4; j++) {
            let byte = word_1[j] ^ word_2[j];
            word_2[j] = byte;
        }

        for (let j = 0; j < 4; j++) {
            let byte = word_2[j] ^ word_3[j];
            word_3[j] = byte;
        }

        roundKeys.push([Array.from(word_0), Array.from(word_1), Array.from(word_2), Array.from(word_3)]);

    }
    return roundKeys;

});