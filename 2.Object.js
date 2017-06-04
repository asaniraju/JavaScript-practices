//creating Empty Object

//using new keyword
var obj1=new Object();
console.log(obj1)

//using Object literals
var obj2={};
console.log(obj2)

//
var obj3=Object.create(null);
console.log(obj3)


function Person(){

}
var obj4=new Person();
console.log(obj4)


//adding properties using objects

var obj={};

obj["name"]="asha";
obj.city="Bangalore";

Object.defineProperty(obj,'state',{
	value:'Ka'
})

delete obj.city;
console.log(obj)


//modifying Object

//1.prevent extensions

//allow to modify existing property
//allow to delete existing property
//won't allow to add new property

var person1={name:"John galt", age:'35'}

Object.preventExtensions(person1)
person1.name="uma";
person1.city="Bangalore";

delete person1.age;
console.log(person1);

//2.seal()

//allow to modify existing property
//won't allow to delete existing property
//won't allow to add new property

var person2={name:"raju asani", age:'25'}

Object.seal(person2)
person2.name="raaz";
person2.city="Bangalore";

delete person2.age;
console.log(person2);

//3.freeze() --> won't allow to do anything

//won't allow to modify existing property
//won't allow to delete existing property
//won't allow to add new property

var person3={name:"raju asani", age:'25'}

Object.freeze(person3)
person3.name="raaz";
person3.city="Bangalore";

delete person3.age;
console.log(person3);

/************* adding properties and methods to Object *************/

var person={
	firstName: "scott",
	lastName: "desatnick",
	fullname:function(){
		return this.firstName+" "+this.lastName;
	}
}
var firstName=person.firstName;
var fullName=person.fullname();
console.log(firstName)
console.log(fullName)

/************* get keys and values from object *************/

var customer={
	name:"tuan bui",
	city:"boston",
	role:"tech bose",
	age :37
}

var keys=Object.keys(customer);
console.log(keys);

var values=Object.values(customer);
console.log(values);