type UIProps = {
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    cipherText: string;
    encryptBtnHandle: () => void;
    showDecrypt: Boolean;
    HandleDecrypt: () => void;
    PlainText: string;
    showDecryptText: Boolean;
}

export const UI = (({ setValue, cipherText, encryptBtnHandle, showDecrypt, HandleDecrypt, PlainText, showDecryptText }: UIProps) => {

    return (
        <>
            <div id="maindiv">
                <form action="" id="form">
                    <label htmlFor="inputbox">Enter Plaintext:</label>
                    <input type="text" id="inputbox" placeholder="Type something to encrypt..." onChange={setValue} />

                    <input type="button" value="Encrypt" id="encryptbtn" onClick={encryptBtnHandle} />

                    <div id="output-container" style={{ display: showDecrypt ? "block" : "none" }} >
                        <div className="output-title">Ciphertext:</div>
                        <div id="ciphertext" className="output-text">{cipherText}</div>
                    </div>
                    {showDecrypt && (
                        <input type="button" id="decryptbtn" className="decrypt-btn" value="Decrypt" onClick={HandleDecrypt} />
                    )}
                    <div id="decrypt-output-container" style={{ display: showDecrypt ? "block" : "none" }} >
                        <div className="output-title">Decrypted Plaintext:</div>
                        <div id="decryptedtext" className="output-text" >{PlainText}</div>
                    </div>
                </form >
            </div >
        </>
    )
})