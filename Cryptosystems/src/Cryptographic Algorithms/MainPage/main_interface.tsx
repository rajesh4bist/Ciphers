import { useState } from "react"

export const UI = (() => {

    const [inputValue, setInputValue] = useState('');

    const takeInputValue = ((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        console.log(inputValue);
    })

    const outputValue = (() => {
        console.log(inputValue)
    })

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