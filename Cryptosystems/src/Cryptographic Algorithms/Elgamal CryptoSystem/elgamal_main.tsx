import { useState } from "react"
import { UI } from "./Main_interface"
import { encryption } from "./elgamal_encryption";

export const Main = (() => {

    const [inputValue, setInputValue] = useState('');

    const [ciphertext, setCipherText] = useState<bigint[][]>([]);

    const [showDecrypt, setShowDecrypt] = useState(false);

    const handleChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    })

    const encryptText = (() => {
        setCipherText(encryption(inputValue));
        setShowDecrypt(true);
        console.log(ciphertext);
    })




    return (
        <UI handleChange={handleChange}
            encryptText={encryptText}
            ciphertext={ciphertext}
            showDecrypt={showDecrypt} />
    )
})