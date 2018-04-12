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

let array = Array(100).fill().map(() => Math.random());
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