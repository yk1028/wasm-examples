import { cube } from "../config/config";

const query = async () => {
    const result = await cube.wasm.contractQuery(
        "xpla1zxgddxawnumwp5034aqjz6j79n4y46tkwfm4vf3m3vtj9ztdh52q2fe65p", // abi-storage contract
        {
            query_abi: { }
        }
    );

    console.log(result)
}

query()
