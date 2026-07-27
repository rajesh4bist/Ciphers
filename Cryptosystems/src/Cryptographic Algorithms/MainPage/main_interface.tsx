import { AES_main } from "../AES/Encryption/AES_main";

type UIprops = {
    takeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    outputValue: () => void;
}

export const UI = (({ takeInputValue, outputValue }: UIprops) => {

    // let let ciphertext = AES_main

    return (
        <>
            <div id="maindiv">
                <form action="" id="form">
                    <label htmlFor="inputbox">Enter Plaintext:</label>
                    <input type="text" id="inputbox" placeholder="Type something to encrypt..." onChange={takeInputValue} />

                    <input type="button" value="Encrypt" id="encryptbtn" onClick={outputValue} />

                    <div id="output-container" style={{ display: "none" }}>
                        <div className="output-title">Ciphertext:</div>
                        <div id="ciphertext" className="output-text"></div>
                    </div>
                    <div id="decrypt-output-container">
                        <div className="output-title">Decrypted Plaintext:</div>
                        <div id="decryptedtext" className="output-text"></div>
                    </div>
                </form>
            </div>
        </>
    )
})