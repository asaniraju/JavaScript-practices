function sayHello(message){
		return function(firstName, lastName){
			return  message+" "+firstName+" "+lastName;
		}
}

var sendWish =sayHello("Hello");

console.log(sendwish)

console.log(sendWish("raju","asani"))