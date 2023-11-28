import { isTxError,  MsgInstantiateContract } from "@xpla/xpla.js";
import { cube_wallet01, cube } from "../config/config";

const instantiate = async () => {

    const instantiateContract = new MsgInstantiateContract(
        cube_wallet01.key.accAddress,
        cube_wallet01.key.accAddress,
        1055,
        { },
        { },
        "ab-storage contract"
    )

    const instantiateTx = await cube_wallet01.createAndSignTx({
        msgs: [instantiateContract],
    })

    const instantiateTxResult = await cube.tx.broadcast(instantiateTx);
    
    console.log(JSON.stringify(instantiateTxResult, null, 4));

    if (isTxError(instantiateTxResult)) {
        throw new Error(
            `instantiate failed. code: ${instantiateTxResult.code}, codespace: ${instantiateTxResult.codespace}, raw_log: ${instantiateTxResult.raw_log}`
        );
    }

    const {
        instantiate: { _contract_address },
    } = instantiateTxResult.logs[0].eventsByType;

    console.log(_contract_address)
    
}

instantiate()