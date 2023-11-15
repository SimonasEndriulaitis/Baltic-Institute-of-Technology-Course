console.log("opa");
let skaicius = 10;

console.log('Kintamojo tipas: ' + typeof skaicius);
console.log('Kintamojo tipas:', typeof skaicius);

skaicius += 22;

console.log("nauja skaiciaus reiksme", skaicius);

//kodicine logika
//Du lygybes zenklai nurodo tik reikminiu lyginima
//Trys lybybes zenklai nurodo reiksmiu ir duomens tipu lyginima
if (skaicius === 32) {
    console.log('kitamojo reiksme yra lygi 32');
} else if(skaicius === 34){
//else if kodiciju nera ribojamas
}else {
    console.log('skaicius nera lygus 32');
}
//tikriname kuris kintamasis yra didesnis
let pirmas = 10;
let antras = 11;

if(pirmas > antras) {
    console.log('Pirmasis kitamasis yra didesnis uz antra');
}else if(pirmas === antras) {
    console.log('kintamieji yra lygus');
} 
else {
    console.log('pirmasis kintamasis yra mazesnis uz antraji');
}

//tikrinimas ar kintamasis nelygus

let reiksme = 'labas';

//vienas lygybes zenklas nurodo tik reiksmes tikrinima
//Du lygybes zenklai nurodo reikmes ir duomens tikrinima
if (reiksme != 'Sveiki') {
    console.log('kitamojo reiksme nera stringas "Sveiki".');
}

//Atsitiktinio skaiciaus generavimui nuo 10 iki 50
let randomnumber = rand(10, 50);

console.log(randomnumber);

//replace metodas
//Skirtas pakeisti norima zodi ar simboli stringe
stringas = 'labas vakaras'
