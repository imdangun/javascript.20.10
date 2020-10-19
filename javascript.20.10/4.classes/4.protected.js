/** public **/
class CoffeeMachine {
	waterAmount = 0;
	
	constructor(power) {
		this.power = power;
	}
}

let machine = new CoffeeMachine(220);

console.log(machine.waterAmount); // 0
console.log(machine.power);       // 220

machine.waterAmount = 100;
console.log(machine.waterAmount); // 100

machine.power = 110;
console.log(machine.power); // 110


/** protected **/
CoffeeMachine = class {	
	_waterAmount = 0;
	
	constructor(power) {
		this._power = power;
	}
	
	set waterAmount(waterAmmount) {		
		this._waterAmount = waterAmmount + 1;
	}
	
	get waterAmount() {
		return this._waterAmount;
	}
	
	get power() {
		return this._power;
	}
}

console.log();
machine = new CoffeeMachine(220);

// get waterAmount() 추가 전: undefined, 추가 후 100
console.log(machine.waterAmount); // 0
machine.waterAmount = 100;
console.log(machine.waterAmount); // 101

// get power() 추가 전: undefined, 추가 후: 220
console.log(machine.power); // 220
machine.power = 110; // 무시
console.log(machine.power); // 220

//
class MegaMachine extends CoffeeMachine {
	print() {
		console.log(this._waterAmount, this._power);
	}
}

new MegaMachine(220).print(); // 0 220