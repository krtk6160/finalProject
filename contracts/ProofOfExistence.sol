pragma solidity 0.5.0;
import "./SafeMath.sol";

contract ProofOfExistence {
	using SafeMath for uint256;

	struct userStorage {
		//maps integer key to ipfs Hash of a file
		mapping(uint => string) ipfsHashes;

		//keeps track of number of proofs uploaded by each user
		uint256 numProofs;

		//maps integer key to a byte-array of tags
		mapping(uint => bytes32[]) tags;
	}

	//maps address of user to a userStorage struct
	mapping(address => userStorage) private userToProofs; 

	function() external payable {
		revert();
	}

	//
	function addProof(string memory _ipfsHash, bytes32[] memory _tags) public {
		address _user = msg.sender;
		uint key = userToProofs[_user].numProofs++;
		userToProofs[_user].ipfsHashes[key] = _ipfsHash;
		userToProofs[_user].tags[key] = _tags;
	}
	
	function getProof(address _user, uint256 _key) public view returns(string memory, bytes32[] memory) {
	    userStorage storage uS = userToProofs[_user];
	    return (uS.ipfsHashes[_key], uS.tags[_key]);
	}

	function getNumProofs(address _user) public view returns(uint256) {
		return userToProofs[_user].numProofs;
	}


}