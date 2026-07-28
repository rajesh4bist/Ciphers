
type UIprops = {
    takeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    outputValue: (e: React.MouseEvent<HTMLInputElement>) => void;
    ciphertext: string;
    showValue: boolean;
    decyptBtnEvent: () => void;
    PlainText: string;
}

export const UI = (({ takeInputValue, outputValue, ciphertext, showValue, decyptBtnEvent, PlainText }: UIprops) => {

    return (
        <>
            <div id="maindiv">
                <form action="" id="form">
                    <label htmlFor="inputbox">Enter Plaintext:</label>
                    <input type="text" id="inputbox" placeholder="Type something to encrypt..." onChange={takeInputValue} />

                    <input type="button" value="Encrypt" id="encryptbtn" onClick={outputValue} />

                    <div id="output-container" style={{ display: showValue ? "block" : "none" }}>
                        <div className="output-title">Ciphertext:</div>
                        <div id="ciphertext" className="output-text">{ciphertext}</div>
                    </div>
                    {showValue && (
                        <input type="button" id="decryptbtn" className="decrypt-btn" value="Decrypt" onClick={decyptBtnEvent} />
                    )}
                    <div id="decrypt-output-container" style={{ display: showValue ? "block" : "none" }}>
                        <div className="output-title">Decrypted Plaintext:</div>
                        <div id="decryptedtext" className="output-text">{PlainText}</div>
                    </div>
                </form>
            </div>
        </>
    )
})