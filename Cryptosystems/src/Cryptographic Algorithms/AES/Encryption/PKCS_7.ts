
export const PKCS_7 = ((text: string) => {

    // let plaintext = "Hello";

    let plaintext = text;

    const encoder = new TextEncoder();
    const encoded_Bytes = encoder.encode(plaintext);

    const byteArray = Array.from(encoded_Bytes);
    const blockSize = 16;
    const paddingLength = blockSize - (byteArray.length % blockSize);

    for (let i = 0; i < paddingLength; i++) {
        byteArray.push(paddingLength);
    }

    return byteArray;
});