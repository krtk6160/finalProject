var ProofOfExistence = require("./ProofOfExistence.sol");

contract('ProofOfExistence', function(accounts) {
	const owner = accounts[0];
	const alice = accounts[1];


	//check to make sure that the numProof value is correct, since the frontend depends on its correctness in order to display user history correctly
	it("should return correct number of proofs value", async () => {
		let poe = await ProofOfExistence.deployed();
		await poe.methods.addProof("QmRand0mStr1ng", ["0x6c6f", "0x66a9fe8bc"]);
		await poe.methods.addProof("Qm4notherStr1ng", ["0x14ab8", "0x884abc", "0x12abee"])
		var numProofs = await poe.getNumProofs(alice);
		assert.equal(numProofs, 2, "numProofs not updated in contract storage");
	});

	//check that ipfs hash is getting stored on chain correctly
	it("should return correct ipfsHash back", async () => {
		ProofOfExistence.deployed().then((instance) => {
			await poe.addProof("Qm4notherStr1ng", ["0x14ab8", "0x884abc", "0x12abee"], {from:alice});
			let hash = (await poe.getProof(alice, 0))[0];
			assert.equal(hash, "Qm4notherStr1ng", "Incorrect IPFS hash returned");
		});
	});

	//check that the tags being stored on chain by first getting converted into hex are returned back correctly and decoded into their original form
	it("should return the correct tags back", async () => {
		ProofOfExistence.deployed().then((instance) => {
			let tagArr = ["testTag1", "anotherTag", "anotherOne"];
			hexTagArr = tagArr.map(tag => web3.utils.asciiToHex(tag));
			await poe.addProof("Qm4notherStr1ng", hexTagArr, {from:alice});
			let returnedHexArr = (await poe.getProof(alice, 0))[1];
			let returnedArr = returnedHexArr.map(tag => web3.utils.hexToAscii(tag));
			assert.equal(tagArr, actualArr, "Incorrect tags returned");
		});
	});

	it("should throw if ether is sent", function(accounts) {
    return ProofOfExistence.deployed()
        .then(function(instance) {
            return instance.send(10, {from:alice});
         })
         .then((val) => assert(false, "ProofOfExistence was supposed to throw when sent ether, but didn't"));
         .catch(function(error) {
         		// if the error is something else (e.g., the assert from previous promise), then we fail the test
                if(error.toString().indexOf("invalid JUMP") == -1) {
        			assert(false, error.toString());
      			}
         });
	});


})