var ProofOfExistence = require("../contracts/ProofOfExistence.sol");

contract('ProofOfExistence', function(accounts) {
	const owner = accounts[0];
	const alice = accounts[1];

	it("should return correct number of proofs value", async () => {
		let poe = await ProofOfExistence.deployed();
		await poe.methods.addProof("QmRand0mStr1ng", ["0x6c6f", "0x66a9fe8bc"]);
		await poe.methods.addProof("Qm4notherStr1ng", ["0x14ab8", "0x884abc", "0x12abee"])
		var numProofs = await poe.getNumProofs(alice);
		assert.equal(numProofs, 2, "numProofs not updated in contract storage");
	});

	it("should return correct ipfsHash back", async () => {
		ProofOfExistence.deployed().then((instance) => {
			await poe.addProof("Qm4notherStr1ng", ["0x14ab8", "0x884abc", "0x12abee"], {from:alice});
			let hash = await poe.methods.getProof(alice, 0);
			assert.equal(hash, "Qm4notherStr1ng", "Incorrect IPFS hash returned");
		});
	});
})