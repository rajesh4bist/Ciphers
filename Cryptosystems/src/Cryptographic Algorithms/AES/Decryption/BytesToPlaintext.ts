export const bytesToPlaintext = (byteArray: number[]) => {

    const paddingLength = byteArray[byteArray.length - 1];

    let cleanBytes = byteArray;
    if (paddingLength > 0 && paddingLength <= 16) {
        cleanBytes = byteArray.slice(0, byteArray.length - paddingLength);
    }

    const decoder = new TextDecoder('utf-8');
    return decoder.decode(new Uint8Array(cleanBytes));
};