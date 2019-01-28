No major design patterns were used to write the smart contract, due to the limited functionality and size of the contract.
Most of the common design patterns are relevant when interacting with other smart contracts, transfering ether and so on.
The smart contract for this project doesn't interact with other contracts and doesn't offer ether transfer functionality.

A few patterns that the smart contract does use:
1. Using `msg.sender` instead of `tx.origin`.
2. Using fixed pragma version.
3. Using a simple fallback function that calls `revert()` when any ether is sent to the contract.

An economic design pattern that could've been implemented for this project, but wasn't due to time-constraint:

1. Tight variable packing.
Since this project makes use of IPFS, and IPFS hashes are stored on the chain, gas consumption can be reduced while storing IPFS hashes.
The IPFS hash is actually a multihash, with the first two bytes denoting the type of hash function used and length of the digest. It uses base58 encoding.
At this point in time, almost all IPFS hashes start with `Qm`, which when decoded into hex starts with 1220. 0x12 indicates sha-2 and 0x20 means 256-bits long.
So, although the IPFS hash in hex is 34 bytes long, we can chop of the first two bytes to make it 32 bytes long, and store it efficiently in a bytes32 array.