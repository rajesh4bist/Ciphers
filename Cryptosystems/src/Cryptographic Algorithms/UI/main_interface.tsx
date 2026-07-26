export const UI = () => {
  return (
    <>
      <div id="maindiv">
        <form action="" id="form">
          <label htmlFor={"inputbox"}>Enter Plaintext:</label>
          <input
            type="text"
            id="inputbox"
            placeholder="Type something to encrypt..."
          />

          <input type="button" value="Encrypt" id="encryptbtn" />

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
  );
};
