var ProofOfExistence = artifacts.require("./ProofOfExistence.sol");
var SafeMath = artifacts.require("./SafeMath.sol")

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, ProofOfExistence);
  deployer.deploy(ProofOfExistence);
};
