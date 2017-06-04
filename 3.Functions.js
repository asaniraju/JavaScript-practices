/*********creating functions*******/

// /****1.regular function *****/

console.log(sayHello())

function sayHello(){
	console.log("Hello world!!")

}

// var message=sayHello();
// console.log(message)

// /********2.anonymus function ****/

var sayAgain= function(){
	return "Hello again !!!!"
}

console.log(sayAgain())

/*******3.Constructor function******/

// function Person(){
// 	this.firstName="Sundar",
// 	this.lastName="Urs",
// 	this.fullName=function(){

// 		return this.firstName+" "+this.lastName;

// 	}
// }

// var newPerson=new Person();
// console.log(newPerson.fullName())

	function Person(firstName, lastName){
		this.firstName=firstName;
		this.lastName=lastName;
	}
	Person.prototype.fullName=function(){
		return this.firstName+" "+this.lastName;
	}

var newPerson1=new Person("raju","asani");
var newPerson2=new Person("Surender","Urs");
var newPerson3=new Person("raj","kumar");

console.log(newPerson1.fullName())
console.log(newPerson2.fullName())
console.log(newPerson3.fullName())

/********4.self invoking function******/


// (function(name){
// 	console.log('Hello '+name);
// })("raju")