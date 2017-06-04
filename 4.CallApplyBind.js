var person1={name:"raju asani", age:24}

var person2={name:"manu asani", age:22}

function sayHello(message,wish){
	return message+" "+this.name+" "+this.age+" "+wish;
}


var msg1 = sayHello.bind(person1);

console.log(msg1("Hello"))

var msg2 = sayHello.bind(person2);

console.log(msg2("Hello"))

var msg3 = sayHello.call(person2,"Hello");

console.log(msg3)

var msg4 = sayHello.apply(person2,["Hello","Be happy"]);

console.log(msg4)


