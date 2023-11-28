import { cube } from "../config/config";

const query = async () => {
    const result = await cube.wasm.contractQuery(
        "xpla13k65ae450894vy45p65quuat6eevya2whpfr7phjl9hekfguvjtssulg9h", // hello-world contract
        {}
    );

    console.log(result)
}

query()
