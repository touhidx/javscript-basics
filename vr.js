var variable = 60;
let letVariable = 90;
const constVariable = 130;

console.log(variable);
console.log(letVariable);
console.log(constVariable);
console.log(typeof variable);

let fruit = "mango";
console.log(fruit);
console.log(typeof fruit);

const isRich = true;
console.log(isRich);
console.log(typeof isRich);


const firstNumber = 0.1;
const secNumber = 0.2;
const totalNumber = firstNumber + secNumber ;
const toDecimal = totalNumber.toFixed(2);
const toNumber = parseFloat(toDecimal);
console.log(typeof toNumber);
console.log(toNumber);



// condition
const age = 33;
if (age >= 18)
{
    console.log('you are adult')
}else if (age >= 13)
{
    console.log('you are teenager')
}else {
    console.log('you are child')
};


const x = 200;
const y = 200;

if (x !== y){
    const z = x+y;
    console.log( 'we are going to see the value of z:', z);
}else {
    console.log(' have fun');
}



const money = 200;
const isRaining = false;
const hasUmbrella = true;

if (money <= 200 && isRaining && hasUmbrella !== true){
    console.log( ' its perfect to go out side now ')
}else{
    console.log('we wil go later')
}

if ((money === 200 || hasUmbrella) && isRaining){
    console.log('go out side without any worry')
}else {
console.log('its not a good idea to go outside now')
}


// more conditionals
// const shoppingAmount= 500;

// if (shoppingAmount >= 5000){
//     const discount= 30;
//     const discountAmount = (shoppingAmount/100)*discount;
//     const total= shoppingAmount - discountAmount;
//     console.log('please pay:',total);
// }else if(shoppingAmount = 5000){
//     const discount = 20;
//     const discountAmount = (shoppingAmount/100)*discount;
//     const total= shoppingAmount - discountAmount;

//     console.log('please pay:', total);
// }else  {
//     const total = shoppingAmount;
//     console.log('please pay:', total);
// }


// ternarry

const old = 19;
old >= 18 ? console.log('please vote') : console.log('you cant vote');


for (let count = 1; count < 10; count ++)
{
    console.log('do something')
};

for (let i=7 ; i<=15; i++){
    console.log('count i:', i)
};


let i=1;
while(i<10){
    console.log('its while', i);
    i++;
}


let sum = 1;
for (let i =1;i<=10;i++){
    total = sum + i;
    console.log(total,i)
}


for (let i=0; i<100; i++){
    if(i/2!=0){
        continue;
    }
    console.log("this number is uniqe", i);
}


let fruits = ['am','jan','kola'];
console.log(fruits);
fruits.push('apple');
console.log(fruits);

fruits.pop();
console.log(fruits);


fruits.includes('am');
fruits.indexOf('kola')
let flowers = ['golap' , 'koli']
let all = fruits.concat(flowers)
console.log(all);
fruits.slice(1,2)




// for of loop
let numbers = [20,23,10,52,24,14,15,65,95]
// for (const number of numbers){
//     console.log(number)
// }
let length = numbers.length
// for (let i =0; i<numbers.length; i++){
//     console.log(numbers[i])
// }

while(i<numbers.length){
    console.log(numbers[i])
    i++;
}