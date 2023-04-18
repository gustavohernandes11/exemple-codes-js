let personInteractions = {
	introduceYourselfTo(personName) {
		return `Hello! I'm ${this.name}, nice to meet you ${personName}!`;
	},
};

class Person {
	constructor(name) {
		this.name = name;
	}
}

Object.setPrototypeOf(Person.prototype, personInteractions);

let andrew = new Person("Andrew");

console.log(andrew.introduceYourselfTo("Maria")); // Hello! I'm Andrew, nice to meet you Maria!
console.log(andrew instanceof Person); // true

// 	Warning: Changing the [[Prototype]] of an object is, by the nature of how modern JavaScript engines optimize property accesses,
// currently a very slow operation in every browser and JavaScript engine.
// 	In addition, the effects of altering inheritance are subtle and far-flung,
// and are not limited to the time spent in the Object.setPrototypeOf(...) statement,
// but may extend to any code that has access to any object whose [[Prototype]] has been altered.
