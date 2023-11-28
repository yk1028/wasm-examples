import { isTxError, MsgStoreCode } from "@xpla/xpla.js";
import { cube, cube_wallet01 } from "../config/config";
import * as fs from 'fs'
import * as path from 'path'

const store = async () => {

    const storeCode = new MsgStoreCode(
        cube_wallet01.key.accAddress,
        fs.readFileSync(path.resolve(__dirname, 'wasm/abi_storage.wasm'), 'base64')
    )

    const storeCodeTx = await cube_wallet01.createAndSignTx({
        msgs: [storeCode],
    });

    const storeCodeTxResult = await cube.tx.broadcast(storeCodeTx);

    console.log(storeCodeTxResult);

    if (isTxError(storeCodeTxResult)) {
        throw new Error(
            `store code failed. code: ${storeCodeTxResult.code}, codespace: ${storeCodeTxResult.codespace}, raw_log: ${storeCodeTxResult.raw_log}`
        );
    }

    const {
        store_code: { code_id },
    } = storeCodeTxResult.logs[0].eventsByType;

    console.log(code_id)
}

store();