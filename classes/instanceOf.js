class Animalia {
	constructor() {
		this.Kingdom = "Animalia";
	}
	move() {
		return "I'm moving";
	}
}

class Mammalia extends Animalia {
	constructor() {
		super();
		this.Class = "Mammalia";
	}
}
class PantheraLeo extends Mammalia {
	constructor() {
		super();
		this.Specie = "PantheraLeo";
	}
}
class Elephantidae extends Mammalia {
	constructor() {
		super();
		this.Specie = "Elephantidae";
	}
}

let leo = new PantheraLeo();
let dumbo = new Elephantidae();

console.log(leo);
// PantheraLeo {
//     Kingdom: 'Animalia',
//     Class: 'Mammalia',
//     Specie: 'PantheraLeo'
//   }
console.log(dumbo);
// Elephantidae {
// 	Kingdom: 'Animalia',
// 	Class: 'Mammalia',
// 	Specie: 'Elephantidae'
//   }

console.log(leo instanceof Animalia); // true
console.log(leo instanceof Mammalia); // true
console.log(leo instanceof PantheraLeo); // true
console.log(leo.move()); // I'm moving
