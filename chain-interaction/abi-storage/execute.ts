import { MsgExecuteContract } from "@xpla/xpla.js";
import { cube, cube_wallet01 } from "../config/config";

const exec = async () => {

    const contractAddress = "xpla1zxgddxawnumwp5034aqjz6j79n4y46tkwfm4vf3m3vtj9ztdh52q2fe65p"

    const testData = require("./data/test40.json")

    const testExec = new MsgExecuteContract(
        cube_wallet01.key.accAddress,
        contractAddress,
        {
           store_abi: {
                abi: JSON.stringify(testData)
           }
        }
    );

    const tx = await cube_wallet01.createAndSignTx({
        msgs: [testExec],
    });

    const result = await cube.tx.broadcast(tx);

    console.log(result);
}

exec()