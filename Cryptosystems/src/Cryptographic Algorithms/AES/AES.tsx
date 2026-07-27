import { useState } from "react";
import { UI } from "../MainPage/main_interface"
import { AES_main } from "./Encryption/AES_main";
import { decrypt_block } from "./Decryption/AES_decrypt";
import { bytesToPlaintext } from "./Decryption/BytesToPlaintext";

export const AES = (() => {


    const [inputValue, setInputValue] = useState('');

    const takeInputValue = ((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        // console.log(inputValue);
    })

    const outputValue = (() => {
        console.log(inputValue);
        let ciphertext = AES_main(inputValue);
        console.log(ciphertext);
        let IV = [0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f];
        let output = decrypt_block(ciphertext, IV);
        let plaintext = bytesToPlaintext(output);
        console.log(plaintext);

    })


    return (
        <>
            <UI takeInputValue={takeInputValue} outputValue={outputValue} />
        </>

    )
})