let vals = [4,8,1,2,9];
console.log(vals);


function doubler(x){
        return x * 2;
}

//let vals2 = vals.map(doubler);
let vals2 = vals.map(x => x * 2);
console.log(vals2);

vals.fill(0);
console.log(vals);

let array = Array(100).fill().map(() => Math.random());
console.log(array);

vals = [5, 4, 9, 1, 2];
let sum = 0;

for(let val of vals){
    sum += val;
}
console.log(sum);

let answer = vals.reduce((acc, val) =>  acc + val);
console.log(answer);

function findMax(acc, val){
    if(val > acc){
        acc = val;
    }
    return acc;
}

let biggest = vals.reduce((acc, val) => val > acc ? val : acc);
console.log(biggest);




let filtered = vals.filter(x => (x % 2) !== 0);
console.log(filtered);


let obs = [{
    name: "first",
    x: 2,
    y: 10
}, {
name: "second",
    x: 5,
    y: 6
}]

function compare(a, b){
    return a.x - b.x;
}

obs.sort(compare);

let names = obs.map(x => x.name);
console.log(names);


let s = "It was  a dark and stormy  night.";
let words = s.split(/\W+/).filter(word => word.length >= 3);
words.sort((a,b) => a.length - b.length);
console.log(words);

//new test line