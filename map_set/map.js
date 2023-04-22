const myMap = new Map();
myMap
	.set([1, 2, 3], "array")
	.set(() => {}, "function")
	.set(0n, "bigInt")
	.set("Hello world!", "string")
	.set({a: "a", b: "b"}, "object")
	.set(7.5, "float")
	.set(Infinity, "Infinity")
	.set(null, "nulo")
	.set(NaN, "not a number value")
	.set(undefined, "undefined value")
	.set(true, "booleano");

console.log(myMap.entries());
// [Map Entries] {
//     [ [ 1, 2, 3 ], 'array' ],
//     [ [Function (anonymous)], 'function' ],
//     [ 0n, 'bigInt' ],
//     [ 'Hello world!', 'string' ],
//     [ { a: 'a', b: 'b' }, 'object' ],
//     [ 7.5, 'float' ],
//     [ Infinity, 'Infinity' ],
//     [ null, 'nulo' ],
//     [ NaN, 'not a number' ],
//     [ undefined, 'undefined value' ],
//     [ true, 'booleano' ]
//   }

console.log(myMap.get([1, 2, 3])); // undefined *
console.log(myMap.get(() => {})); // undefined *
console.log(myMap.get(1n - 1n)); // bigInt
console.log(myMap.get("Hello world!")); // string
console.log(myMap.get({a: "a", b: "b"})); // undefined *
console.log(myMap.get(15 / 2)); // float
console.log(myMap.get(1 / 0)); // Infinity
console.log(myMap.get(null)); // nulo
console.log(myMap.get(Number("invalid format"))); // not a number value

let x;
console.log(myMap.get(x)); // undefined value

//

console.log((() => {}) === (() => {}));
console.log([1, 2, 3] === [1, 2, 3]);
console.log({a: "a", b: "b"} === {a: "a", b: "b"});

let obj = {a: "a", b: "b"};
console.log(obj === obj);

myMap.set(obj, "objeto referênciado");
console.log(myMap.get(obj));

//
let original = new Map([
	[1, "A"],
	[2, "B"],
]);

let cloned = new Map(original);
console.log(cloned.entries()); // [Map Entries] { [ 1, 'A' ], [ 2, 'B' ] }
console.log(original.entries()); // [Map Entries] { [ 1, 'A' ], [ 2, 'B' ] }
//
let firstMap = new Map([
	[1, "A"],
	[2, "B"],
]);
let secondMap = new Map([
	[2, "C"],
	[3, "D"],
]);
let merged = new Map([...firstMap, ...secondMap]);
let mergedWithArray = new Map([...firstMap, ...secondMap, ["Hello", "World!"]]);
// [Map Entries] {
//   [ 1, 'A' ],
//   [ 2, 'C' ],
//   [ 3, 'D' ],
//   [ 'Hello', 'World!' ]
// }

console.log(mergedWithArray.entries());
console.log(merged.entries());
