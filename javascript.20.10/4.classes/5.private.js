class CoffeeMachine {
	#waterAmount = 1;
	
	get waterAmount() {
		return this.#waterAmount;
	}
	
	set waterAmount(waterAmount) {
		this.#waterAmount = waterAmount;
	}
}

// SyntaxError: Private field '#waterAmount' must be declared in an enclosing class
class MagaMachine extends CoffeeMachine {
	print() {
		console.log(this.#waterAmount);
	}
}