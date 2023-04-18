class Animalia {
	constructor() {
		this.Kingdom = "Animalia";
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

let leo = new PantheraLeo();

console.log(leo);
// PantheraLeo {
//     Kingdom: 'Animalia',
//     Class: 'Mammalia',
//     Specie: 'PantheraLeo'
//   }
console.log(leo instanceof Animalia); // true
console.log(leo instanceof Mammalia); // true
console.log(leo instanceof PantheraLeo); // true
