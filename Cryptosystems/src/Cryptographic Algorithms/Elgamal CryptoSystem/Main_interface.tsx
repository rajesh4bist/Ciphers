type UIprops = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    encryptText: () => void;
    ciphertext: bigint[][];
    showDecrypt: boolean;
    decryptText: () => void;
    plaintext: string;
}

export const UI = (({ handleChange, encryptText, ciphertext, showDecrypt, decryptText, plaintext }: UIprops) => {

    return (
        <>
        
            <div id="maindiv">
                <h1>Elgamal</h1>
                <form action="" id="form">
                    <label htmlFor="inputbox">Enter Plaintext:</label>
                    <input type="text" id="inputbox" placeholder="Type something to encrypt..." onChange={handleChange} />

                    <input type="button" value="Encrypt" id="encryptbtn" onClick={encryptText} />

                    <div id="output-container">
                        <div className="output-title">Ciphertext:</div>
                        <div id="ciphertext" className="output-text" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                            <pre>
                                {ciphertext.map((elem, i) => (
                                    `Char ${i + 1}: C1 = ${elem[0].toString().padStart(3)}  , C2 = ${elem[1].toString().padStart(3)}\n`
                                ))}
                            </pre>
                        </div>
                    </div>

                    {showDecrypt && (
                        <input type="button" id="decryptbtn" className="decrypt-btn" value="Decrypt" onClick={decryptText} />
                    )}

                    <div id="decrypt-output-container" style={{ display: showDecrypt ? "block" : "none" }}>
                        <div className="output-title">Decrypted Plaintext:</div>
                        <div id="decryptedtext" className="output-text">{plaintext}</div>
                    </div>
                </form>
            </div>
        </>
    )
})