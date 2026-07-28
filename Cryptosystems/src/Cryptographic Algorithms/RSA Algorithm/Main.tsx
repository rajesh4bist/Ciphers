import { UI } from "./main_ui";
import { useState } from "react";
import { Encryption } from "./rsa_encryption";


export const Main = (() => {

    const [inputValue, setInputValue] = useState('');

    const setValue = ((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    })

    return (
        <>
            <UI setValue={setValue} />
            <Encryption Value={inputValue} />
        </>
    )
})