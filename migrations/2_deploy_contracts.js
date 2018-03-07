var Ownable = artifacts.require('./ownable.sol')
var ZombieBattle = artifacts.require('./zombiebattle.sol')
var ZombieFactory = artifacts.require('./zombiefactory.sol')
var ZombieFeeding = artifacts.require('./zombiefeeding.sol')
var ZombieHelper = artifacts.require('./zombiehelper.sol')

module.exports = deployer => deployer.deploy([
							  Ownable,
							  ZombieFactory,
							  ZombieFeeding,
							  ZombieHelper,							  
							  ZombieBattle
							]);


