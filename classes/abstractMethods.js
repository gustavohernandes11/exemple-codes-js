class Warrior {
	constructor(id, healthPoints, damagePoints) {
		this.id = id;
		this.healthPoints = healthPoints;
		this.damagePoints = damagePoints;
	}

	wayCry() {
		throw new Error("Implement the battle cry for the warrior!");
	}
}

const archer = new Warrior(1, 150, 50);
console.log(archer);
// Warrior { id: 1, healthPoints: 150, damagePoints: 50 }

// console.log(archer.wayCry());
// throw new Error("Implement the battle cry for the warrior!");
// ^

// Error: Implement the battle cry for the warrior!

archer.wayCry = () => {
	return "One shot! One kill!";
};
console.log(archer.wayCry());
