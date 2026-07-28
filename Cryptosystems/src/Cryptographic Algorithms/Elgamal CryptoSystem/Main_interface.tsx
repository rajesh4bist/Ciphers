type UIprops = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    encryptText: () => void;
    ciphertext: bigint[][];
    showDecrypt: boolean;
}

export const UI = (({ handleChange, encryptText, ciphertext, showDecrypt }: UIprops) => {

    let displaytext = 'Ciphertext (List of (C1, C2) pairs):\n\n';

    return (
        <>
            <div id="maindiv">
                <form action="" id="form">
                    <label htmlFor="inputbox">Enter Plaintext:</label>
                    <input type="text" id="inputbox" placeholder="Type something to encrypt..." onChange={handleChange} />

                    <input type="button" value="Encrypt" id="encryptbtn" onClick={encryptText} />

                    <div id="output-container">
                        <div className="output-title">Ciphertext:</div>
                        <div id="ciphertext" className="output-text">
                            {ciphertext.map((elem, i) => (
                                <div key={i}>Char {i + 1}: C1 = {elem[0].toString()}, C2 = {elem[1].toString()}</div>
                            ))}
                        </div>
                    </div>

                    {showDecrypt && (
                        <input type="button" id="decryptbtn" className="decrypt-btn" value="Decrypt" />
                    )}

                    <div id="decrypt-output-container" style={{ display: showDecrypt ? "block" : "none" }}>
                        <div className="output-title">Decrypted Plaintext:</div>
                        <div id="decryptedtext" className="output-text"></div>
                    </div>
                </form>
            </div>
        </>
    )
})