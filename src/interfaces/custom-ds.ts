import { Asset, Struct } from "@metalblockchain/pulsevm-js";

@Struct.type("accounts")
export class TokenAccount extends Struct {
    @Struct.field(Asset) balance!: Asset
}

// Alternative way to define the class using static properties
// export class TokenAccount extends Struct {
//     static abiName = "accounts";
//     static abiFields = [
//         {name: "balance", type: Asset}
//     ];
//     balance!: Asset
// }
