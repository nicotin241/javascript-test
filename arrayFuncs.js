//@ts-check

//map
let vals = [4, 8, 1, 2, 9];
console.log(vals);


function doubler(x) {
    return x * 2;
}

//let vals2 = vals.map(doubler);
let vals2 = vals.map(x => x * 2);
console.log(vals2);

//fill
vals.fill(0);
console.log(vals);

let array = Array(100).fill(0).map(() => Math.random());
console.log(array);

//reduce
vals = [5, 4, 9, 1, 2];
let sum = 0;

for (let val of vals) {
    sum += val;
}
console.log(sum);

let answer = vals.reduce((acc, val) => acc + val);
console.log(answer);

function findMax(acc, val) {
    if (val > acc) {
        acc = val;
    }
    return acc;
}

let biggest = vals.reduce((acc, val) => val > acc ? val : acc);
console.log(biggest);


//filter

let filtered = vals.filter(x => (x % 2) !== 0);
console.log(filtered);

//sort

let obs = [{
    name: "first",
    x: 2,
    y: 10
}, {
    name: "second",
    x: 5,
    y: 6
}]

function compare(a, b) {
    return a.x - b.x;
}

obs.sort(compare);

let names = obs.map(x => x.name);
console.log(names);


let s = "It was  a dark and stormy  night.";
let words = s.split(/\W+/).filter(word => word.length >= 3);
words.sort((a, b) => a.length - b.length);
console.log(words);

//classes

class User {

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;

        if (User.counter === undefined) {
            User.counter = 1;
        } else {
            User.counter++;
        }
    }

    static countUsers() {
        console.log("There are " + User.counter + " users");
    }

    register() {
        console.log(this.username + " is now registered");
    }
}

let bob = new User("bob", "bob@email.com", "1245");
let dave = new User("dave", "dave.mail.de", "asdfv");
bob.register();

User.countUsers();


class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage() {
        console.log(this.username + " is subscribed to the " + this.package);
    }
}

let mike = new Member("mike", "mike@mail.de", "234543", "standard");
mike.getPackage();
mike.register();



//working with dom and string methods

//document.addEventListener("DOMContentLoaded", function () {

function makeUpperCase(word){
    return word.toUpperCase();
}

let name = "John";

let template = `<h1>${makeUpperCase("Hello")}, ${name}</h1>
    <p>This is a simpel test ...</p>`;

//document.getElementById("template").innerHTML = template;
//});

//string methods

let theString  = "Hello, my name is Nico and I love Javascript";

//startsWith
console.log("startsWith Hello: "+theString.startsWith("Hello"));
console.log("startsWith ello: "+theString.startsWith("ello"));

//endsWith
console.log("endsWith Javascript: "+theString.endsWith("Javascript"));
console.log("endsWith Java: "+theString.endsWith("Java"));
//includes

console.log("includes Nico: "+theString.includes("Nico"));
console.log("includes Frank: "+theString.includes("Frank"));


//number methods

//Hex
console.log("Hex: "+0XFF);
//Bin
console.log("Bin: "+0b101011);
//octal
console.log("Octo: "+0o543);

console.log("isFinite: "+Number.isFinite(Infinity));

console.log("isNan: "+Number.isNaN(NaN));

console.log("isInteger: "+Number.isInteger(-2));

//default parameters

function greet(greeting = "Hello World"){
    console.log(greeting)
}

greet();
greet("Hi");


//spread operator

let args = [1,2,3];

function test(a,b,c){
    console.log(a+","+b+","+c);
}

test(...args)


//set

let myArray = [11,22,333,12,543];
let mySet = new Set(myArray);

mySet.add("string");
mySet.add({a: 1, b: 2});
mySet.delete(22);
//mySet.clear();

console.log("mySet: "+mySet.size);

mySet.forEach((val)=>console.log(val));

//map

let myMap = new Map([["a1","Hello"],["b2", "Goodbye"]]);
myMap.set("c3", "Foo");
myMap.delete("a1");

console.log("Map size: "+myMap.size);


//the weak counterparts allow garbage collection. When an object is created in a function and used as 
//a key for the weak map, the key will be lost when returning from the function

//weakSet
let carWeakSet = new WeakSet();
let car1 = {
    make: "Honda",
    model: "Civic"
};

carWeakSet.add(car1);

console.log("WeakSet: "+carWeakSet);


//weakMap

let carWeakMap = new WeakMap();

let key1 = {
    id: 1
}

let car2 = {
    make: "öasdf",
    mode: "civic"
};

carWeakMap.set(key1,car2);

//arrow functions

function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
    return arr.map((x) => {
        console.log(this.prefix + x);
    });
}

let pre = new Prefixer("Hello ");
pre.prefixArray(["Brad","Jeff"]);


//Promises (für Asynchrone sachen)

//Immediately Resolved
let myPromise = Promise.resolve("Foo");
myPromise.then((res) => console.log(res));

//after Timeout
let myPromise2 = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve(4), 2000);
});

myPromise2.then((res)=>{
    res += 3;
    console.log(res);
});

//fetching data from api
//has to be done in browser because xmlhttprequest is a build in object in the web browser
function getData(method, url){
    return new Promise((resolve, reject) =>{
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
            if(this.status >= 200 && this.status < 300){
                resolve(xhr.response);
            }else{
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function(){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

getData("GET","http://jsonplaceholder.typicode.com/todos").then(function(data){
    //console.log(data);
    let todos = JSON.parse(data);
    let output = "";
    for(let todo of todos){
        output += `
        <li>
            <h3>${todo.title}</h3>
            <p>Completed: ${todo.completed} </p>
        </li>
        `;
    }

    document.getElementById("template").innerHTML = output;
}).catch(function (err){
    console.log(err);
});

//Generators (* markiert als generator)
function *g1(){
    console.log("Generator: "+"Hello");
    yield "Yield 1 Ran..";
    console.log("Generator: "+"World");
    yield "Yield 2 Ran..";
    return "Returned ..";
}

//generator needs to be set to a variable
let g = g1();
/*
console.log(g.next().value);
console.log(g.next());
console.log(g.next());
*/

//for of doesnt include the return value!!
for(let val of g){
    console.log(val);
}

