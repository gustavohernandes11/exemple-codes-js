class Person {
	constructor(name = null, lastName, age, phoneNumber, cep) {
		this.name = name;
		this.lastName = lastName;
		this.age = age;
		this.phoneNumber = phoneNumber;
		this.cep = cep;
	}
	sayName() {
		return "Hi! My name is " + this.name + ".";
	}
}

const maria = new Person("Maria", "Silva", 24, 123, 123123);
const joao = new Person("Joao", "Andrade", 45, 321, 121212);

console.log(joao, maria);
// Person {
// 	name: 'Joao',
// 	lastName: 'Andrade',
// 	age: 45,
// 	phoneNumber: 321,
// 	cep: 121212
//   }
//  Person {
// 	name: 'Maria',
// 	lastName: 'Silva',
// 	age: 24,
// 	phoneNumber: 123,
// 	cep: 123123
//   }

console.log(joao.lastName);
// Andrade
console.log(joao.sayName());
// Hi! My name is Joao.
