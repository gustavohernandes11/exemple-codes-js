class Person {
	constructor(name, lastName, age, phoneNumber, cep = null) {
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

const Maria = new Person(
	(name = "Maria"),
	(lastName = "Silva"),
	(age = 24),
	(phoneNumber = 000),
	(cep = 123123)
);
const Joao = new Person(
	(name = "Joao"),
	(lastName = "Andrade"),
	(age = 45),
	(phoneNumber = 001),
	(cep = 121212)
);

console.log([Maria, Joao]);
// [
// 	Person {
// 	  name: 'Maria',
// 	  lastName: 'Silva',
// 	  age: 24,
// 	  phoneNumber: 0,
// 	  cep: 123123
// 	},
// 	Person {
// 	  name: 'Joao',
// 	  lastName: 'Andrade',
// 	  age: 45,
// 	  phoneNumber: 1,
// 	  cep: 121212
// 	}
//   ]

console.log(Joao.lastName);
// Andrade
console.log(Joao.sayName());
// Hi! My name is Joao.
