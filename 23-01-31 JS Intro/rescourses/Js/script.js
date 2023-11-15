//Nr.1 uzduotis
function getInitials(names) {
    let initials = '';
    for (let name of names) {
      initials += name[0].toUpperCase();
    }
    return initials;
  }
  
  const names = ['Simonas', 'Endriulaitis'];
  console.log(getInitials(names));
  

//Nr.2 uzduotis
var namess = "Simonas";
var lastNames = "Endriulaitis";
var birthYear = 2003;
var currentYear = 2023;

var age = currentYear - birthYear;

console.log("Aš esu " + namess + " " + lastNames + ". Man yra " + age + " metai(ų).");


//Nr.3 uzduotis
var name1 = "Johny"
var name2 = "Depp"

var name3 = name1.substring(name1.length - 3) + name2.substring(name2.length - 3);

console.log(name3);

//Nr.4 uzduotis
var text = "Once upon a time in hollywood"
var changedText = text.replace(/o/gi, "*");

console.log(changedText);


//Nr.5 uzduotis
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let n1 = rand(0, 2)
let n2 = rand(0, 2)
let n3 = rand(0, 2)
let n4 = rand(0, 2)

let c0 = 0;
let c1 = 0;
let c2 = 0;

if (n1 === 0) {
c0++;
} else if (n1 === 1) {
    c1++;
} else {
    c2++
}

if (n2 === 0) {
    c0++;
} else if (n2 === 1) {
    c1++;
} else {
    c2++;
}

if (n3 === 0) {
    c0++;
} else if (n3 === 1) {
    c1++;
} else {
    c2++;
}

if (n4 === 0) {
    c0++;
} else if (n4 === 1) {
    c1++;
} else {
    c2++;
}

console.log("Number of 0's:" + c0);
console.log("Number of 1's:" + c1);
console.log("Number of 2's:" + c2);