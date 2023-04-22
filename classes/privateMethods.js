class Person {
	constructor(name) {
		this.name = name;
		this.phoneNumber = 123;
	}
	sayName = () => "I'm " + this.name;
	sayPhoneNumber = () => this.phoneNumber;
}

const ana = new Person("Ana");
console.log(ana.sayName());
console.log(ana.sayPhoneNumber());
