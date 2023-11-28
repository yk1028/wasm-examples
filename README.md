# WASM-EXAMPLES

### Environment
- cargo 1.69.0
- rustc 1.69.0

### Cosmwasm project process
1. `cargo generate --git https://github.com/CosmWasm/cosmwasm-template.git --name {my-contract}`
2. Implement your code with templete.
3. `cargo build --target wasm32-unknown-unknown --release`
   - If a target error occurs, execute the command below:
   - `rustup target add wasm32-unknown-unknown`
4. store wasm file to blockchain.
   - wasm file path: `src/target/wasm32-unknown-unknown-release`

### Optimize
- If wasm file is so big, it is problem when you store to chain.
- Trade off: build time <-> file size
- https://github.com/johnthagen/min-sized-rust

### Trouble shooting
- Unknown opcode 192
  - change to rust version from `1.73.0` to `1.69.0`
    ```
    rustup install 1.69.0
    rustup default 1.69.0
    ```