import { useState } from "react"
import { UI } from "./Main_interface"
import { encryption } from "./elgamal_encryption";
import { decryption } from "./elgamal_decryption";

export const Main = (() => {

    const [inputValue, setInputValue] = useState('');

    const [ciphertext, setCipherText] = useState<bigint[][]>([]);

    const [showDecrypt, setShowDecrypt] = useState(false);

    const [plaintext, setPlainText] = useState('')

    const handleChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    })

    const encryptText = (() => {
        if (!inputValue) {
            alert("no data to encrypt");
            return;
        }
        setCipherText(encryption(inputValue));
        setShowDecrypt(true);
    })

    const decryptText = (() => {
        setPlainText(decryption(ciphertext));
    })

    return (
        <UI handleChange={handleChange}
            encryptText={encryptText}
            ciphertext={ciphertext}
            showDecrypt={showDecrypt}
            decryptText={decryptText}
            plaintext={plaintext}
        />
    )
})