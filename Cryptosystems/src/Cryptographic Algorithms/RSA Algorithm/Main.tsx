import { UI } from "./main_ui";
import { useState } from "react";
import { Encryption, Decryption } from "./rsa_encryption";


export const Main = (() => {

    const [inputValue, setInputValue] = useState('');

    const [cipherText, setCipherText] = useState('');

    const [showDecrypt, setShowDecrypt] = useState(false);

    const [showPlainText, setShowPlainText] = useState('');

    const [showDecryptText, setshowDecryptContainer] = useState(false)

    const setValue = ((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    });

    const encryptBtnHandle = (() => {
        const encrypted_text = Encryption({ inputValue });
        setCipherText(encrypted_text.join(','));
        setShowDecrypt(true);
    });

    const HandleDecrypt = (() => {
        let plaintext = Decryption();
        setShowPlainText(plaintext);
        setshowDecryptContainer(true);
    })

    return (
        <>
            <UI setValue={setValue}
                cipherText={cipherText}
                encryptBtnHandle={encryptBtnHandle}
                showDecrypt={showDecrypt}
                HandleDecrypt={HandleDecrypt}
                PlainText={showPlainText}
                showDecryptText={showDecryptText}
            />
        </>
    )
})