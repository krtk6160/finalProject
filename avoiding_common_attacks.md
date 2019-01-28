The contract in this project doesn't transfer (accept or give out) ether, doesn't have external functions, doesn't make external function calls, and doesn't interact with other smart contracts.
For this reason, most of the common attacks on Solidity smart contracts are not possible here.
However, a few measures have been taken:
1. No one can forcibly (or mistakenly) send ether to the smart contract, since the fallback function reverts the transaction.
2. Integer Overflow is next to impossible since the only place where it's applicable is the `numProofs` variable, which is of type uint256 and can only be incremented by one at a time. 