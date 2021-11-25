const Blackbox = artifacts.require("Blackbox");

module.exports = function(deployer) {
  deployer.deploy(Blackbox);
};