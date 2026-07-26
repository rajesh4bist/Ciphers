import { SBOX,RCON } from "./Encryption/Constants.ts";
import { gFunction,keyExpansion } from "./Encryption/gFunc&keyExp.ts";
import { PKCS_7 } from "./Encryption/PKCS_7.ts";
import { convertTo2D,mul02,mul03,mixSingleColumn,flattenMatrix } from "./Encryption/Helpers.ts";
import { Sub_Bytes,Shift_rows,Mix_Columns,add_Round_Keys } from "./Encryption/Four-Transformations.ts";
import { encrypt_block } from "./Encryption/encrypt_block.ts";
import { AES_encryption } from "./Encryption/AES_encryption.ts";
import { UI } from "../UI/main_interface.tsx";
import '../../CSS files/main.css'

export const AES =(()=>{
    
    return(
     <>
       <UI/>
    </>
    )
})

