No major design patterns were used to write the smart contract, due to the limited functionality and size of the contract.
Most of the common design patterns are relevant when interacting with other smart contracts, transfering ether and so on.
The smart contract for this project doesn't interact with other contracts and doesn't offer ether transfer functionality.

A few patterns that the smart contract does use:
1. Using `msg.sender` instead of `tx.origin`.
2. Using fixed pragma version.
3. Using a simple fallback function that calls `revert()` when any ether is sent to the contract.
