import { LCDClient, MnemonicKey } from "@xpla/xpla.js"
import * as key from "./.key.json"

export const cube = new LCDClient({
    chainID: 'cube_47-5',
    URL: 'https://cube-lcd.xpla.dev',
    gasPrices: "850000000000axpla"
})

//xpla1x84k5p457dm86updz74lan9dsxnxl8ruj46qvp
export const cube_wallet01 = cube.wallet(
    new MnemonicKey({
        mnemonic: key.MNEMONIC01
    })
) 