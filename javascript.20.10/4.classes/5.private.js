class CoffeMachine {
	#waterAmount = 1;
	
	get waterAmount() {
		return this.#waterAmount + 100;
	}
	
	set waterAmount(waterAmount) {
		this.#waterAmount = waterAmount + 5;
	}
}

let machine = new CoffeMachine();

console.log(machine.waterAmount); // 101

machine.waterAmount = 11;
console.log(machine.waterAmount); // 116

//console.log(machine.#waterAmount); // SyntaxError: Private field '#waterAmount'
// machine.#waterAmount = 1; // SyntaxError: Private field '#waterAmount'


//
class MegaMachine extends CoffeMachine {
	print() {
		console.log(this.#waterAmount);
	}
}

// new MegaMachine().print(); // SyntaxError: Private field '#waterAmount'