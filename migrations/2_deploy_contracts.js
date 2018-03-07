var Ownable = artifacts.require('./Ownable.sol')
var ZombieBattle = artifacts.require('./ZombieBattle.sol')
var ZombieFactory = artifacts.require('./ZombieFactory.sol')
var ZombieFeeding = artifacts.require('./ZombieFeeding.sol')
var ZombieHelper = artifacts.require('./ZombieHelper.sol')

module.exports = deployer => deployer.deploy([
							  Ownable,
							  ZombieFactory,
							  ZombieFeeding,
							  ZombieHelper,							  
							  ZombieBattle
							]);


