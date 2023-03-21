//Тернарний спосіб вводу
/*
let name= 'Taras';

let result= name ='Taras' ? 'Hello Taras' : 'Hello man';
console.log(result);

Три модальні вікна
alert('hello user');

let result=confirm('Are you ready to go?');
console.log(result);

let name=prompt('Type your name, please');
console.log(name);

let name=prompt('Type your name, please');
alert('Hello '+ name);


let num =Number(prompt('Type your number'));
console.log(num+3);
*/

//Функції
/*
function sumTwoAndTwo(){
    let sum=2+2;
    console.log(sum);
    // console.log(2+2);
}

sumTwoAndTwo();


function sumTwoNumbers(arg1, arg2){
    let sum = arg1 + arg2;
    console.log(sum);
}
sumTwoNumbers(2, 3);
sumTwoNumbers(5, 7);

// console.log(sum);//не виводить

function something(a1, a2, a3, a4, a5){
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
    console.log(a5);
}

something(1, 2, 3);

function something2(){
    console.log('hello')
}
something2(1, 2, 3);


let num1 =Number(prompt('type first number'));
let num2 =Number(prompt('type second number'));

function getSumTwoNumber(num1, num2){
    let res=getSumTwoNumber(num1, num2);
    console.log(res);
}

function getBigger (num1, num2){
    return (num1>num2) ? num1 : num2;
}



function isEven(num){
    let rest = num % 2;
    if(rest===1){
        return fulse
    } else {
        return true
    }

    return (num % 2 === 0) ? true : false;
    return !Boolean(num % 2);



function toSquare (number){
    return number * number;
}
    console.log (toSquare(4));

    let userInput= prompt('Input your number');
    let userNumber = Number(userInput);

    console.log (toSquare(userNumber));



function sumTwoNumbers(num1, num2){
    return (num1 + num2)/2;
}
// sumTwoNumbers(4, 6);

let num1=4;
let num2=6;

let result = sum(num1, num2) /2;
console.log(result);



function getMenu() {
    let choice = prompt('Виберіть напій:1 - Чай, 2 - Кава, 3 - Сік');
    if (choice === '1') {
        alert("Ви обрали чай");
    }else if (choice === '2'){
        alert("Ви обрали каву");
    }else if (choice === '3'){
        alert("Ви обрали сік");
    }else{
        alert("Я не знаю такого напою");
    }    
    return choice;
    }
    getMenu();



function getDayWeek() {
    let choice = prompt("Виберіть день:\n1 - понеділок\n2 - вівторок\n3 - середа\n4 - четвер\n5 - п'ятниця\n6 - субота\n7 - неділя");
        switch (choice) {
        case "1":
            alert("Ви обрали понеділок");
            console.log('monday');
            break;
        case "2":
            alert("Ви обрали вівторок");
            console.log('tuesday');
            break;
        case "3":
            alert("Ви обрали середа");
            console.log('wednesday');
            break;
        case "4":
            alert("Ви обрали четвер");
            console.log('thursday');
            break;
        case "5":
            alert("Ви обрали п'тниця");
            console.log('friday');
            break;
        case "6":
            alert("Ви обрали субота");
            console.log('saturday');
            break;
        case "7":
            alert("Ви обрали неділя");
            console.log('sunday');
            break;
        default:
            alert("Я не знаю такого дня");
        }
    }
    getDayWeek();
*/

//Калькулятор
/*
    function calculator() {
        const num1 = parseFloat(prompt('Введіть перше число:'));
        const num2 = parseFloat(prompt('Введіть друге число:'));
        const operation = prompt(`Виберіть дію:
        + щоб скласти
        - щоб відняти
        * щоб перемножити
        / щоб поділити`);
        
        let result;
        
        switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            alert('Ви ввели неправильну операцію!');
            return;
        }
        
        console.log(`Результат: ${result}`);
        alert(`Результат: ${result}`);
        
        return result;
    }
    calculator();
    */
    

//Доопрацювати калькулятор
    function getCalc() {
    let a = Number(prompt('type first number'));
    let b = Number(prompt('type second number'));
    let action = prompt ('Choose operation');
        switch (action) {
        case '+':
            result = sum(a, b);
            break;
        case '-':
            result = sub(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;

        default:
            return false;
        }

        function sum(a, b){
            return alert (a + b);
        }
        function sub(a, b){
            return alert (a - b);
        }
        function multiply(a, b){
            return alert (a * b);
        }
        function divide(a, b){
            return alert (a / b);
        }
    }    

    getCalc();


/* ЦИКЛИ */
/* let myAge = 0;

myAge ++;
console.log(`I am ${myAge}`);
myAge ++;
console.log(`I am ${myAge}`);
myAge ++;
console.log(`I am ${myAge}`);

// або

for(let myAge = 0; myAge <= 5; myAge +=1){
    console.log(`I am ${myAge}`);
}







    let counter = 0;

while(counter <=10){
    if (counter % 2 === 0){
        console.log(counter)
    }
    counter++;
}



let number = 0;
while(number <=15){
    if ((number % 3 === 0)&&(number % 5 === 0)){
        console.log(number)
    }
    number++;
}


let sum = 0;
let counter = 0;
while(counter++ <=20){
    sum += counter;
    counter++;
}
console.log(sum);


do {
    
}while(gogi)

debugger;
for(let counter = 0;counter < 10; counter++){
    console.log(counter);
}


1. Написати функцію, яка приймає число і виводить результат обчислення множення 2 на 1...до цього числа
Цикл та шаблонний рядок

let i = 5;
let prod = 2*1;

function getSum() {
    console.log (`${i} + ${prod}`);
}
getSum()


const userPlane = {
    Mon: 'dantist',
    Tue: 'go to park',
    Wed: 'hard work',
    Thu: 'go party',
    Fri: 'read a book',
    Sat: 'stay in bad'

}
    const choiceDay = prompt('Який день тижня тебе цікавить?');
    alert (`${userPlane[choiceDay] ? userPlane[choiceDay]: 'Який день тижня тебе цікавить?'}`)
*/


//Функціїї конструктора 'this' 'new'
/*
    let car = {
        brrand: 'Ford',
        type: 'picup',
        engine: 3.5,
        capasity: 5
    }

    const isColor = 'color' in car;

    for (const key in car){
        console.log(key, car[key]);
    }


    const obj1 = {
        test: 'value',
        color: 'red',
        waight: 5
    } 

    const obj2 = {
        test: 'value',
        color: 'red',
        waight: 5
    }

    function isObjEquals(obj1, obj2){
        for(const key in obj1){
            if (obj1[key]===obj2[key]){
                continue
            }
            return true;
        }
    }

    const obj3 = {
        test: 'value',
        color: 'red',
        waight: 5
    } 

    const obj4 = {

    }
    function isObjEquals(obj1, obj2){
        for(const key in obj1){
            if (obj3[key])
                return false;
            
        }
        console.log();
    }

    const cat1 = {
        name: 'Murik',
        age: 5,
        color: 'red'
    }
    const cat2 = {
        name: 'Barsik',
        age: 3,
        color: 'black'
    }
    const cat3 = {
        name: 'Gogi',
        age: 2,
        color: 'grey'
    }

    function Cat(name, age, color){
        // new -> створюється {}
        this.name = name;
        this.age = age;
        this.color = color;
        this.sayMeow = function(){
            return 'MEOWWWW'
        }
    }
    

    const blackCat = new Cat('Thor',3,'violet')
    const topCat = new Cat('Chico',7,'pink')


    const cat5 = {
        name: 'Ramses',
        age: 7,
        color: 'grey',
        askForFood: function(){
            return `${this.name} wants to eat`;
        }
    }

    function User(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.sayHello = function(){
            return `${this.firstName} say:'Hello'`
        }
    }
    const u1 = new User('John', 'Doe', 23, 'doe@ls.com');
    const u2 = new User('Diana', 'Pig', 53, 'DP@tp.com');




    function Car(brand, maxSpeed=200){
        this.brand = brand;
        this.maxSpeed = maxSpeed;
        this.speed = 0;
        this.accelerate = function(value){
            this.speed += value;
            if (this.speed > maxSpeed){
                this.speed = maxSpeed;
            }
            return this.speed;
        }

        this.deaccelerate = function(value){
            this.speed -= value;
            if (this.speed < 0){
                this.speed = 0;
            }
        }

        this.stop = function(){
            this.speed = 0;
            return this.stop;
        }
    }
    const volvo = new Car('Volvo', 250);
*/


 //HomeWork 20-21.03
// function Worker(firstName, lastName, rate, days){
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.rate = rate;
//             this.days = days;   
//             this.getSalary = function(){             
                
//                 if (this.days<0 || this.rate<0){
//                     return 0;
//                 }               
//                 return this.days * this.rate;
//             }
//         }
//         const gastroler = new Worker('John', 'Doe', 55, 10);
//         console.log(gastroler.getSalary());
        
//         // console.log('Salary: ' + gastroler.getSalary());
//         // 2. Написати функцію-конструктор для країни Country
//         // Країна матиме властивості:
//         // - назва
//         // - площа
//         // - кількість населення
//         // Метод, що розраховує щільність населення (кількість населення / площу країни)
//         // */
//         function Country(countryName, area, population){
//             this.countryName = countryName;
//             this.area = area;
//             this.population = population;
//             this.populationDensity = function(){
//                 if (this.area < 0 || this.population < 0){
//                     return 0;
//                 }
//                 return this.area / this.population;
//             }
//         }
//         const Ukraine = new Country ('Ukraine', 603549000, 41167336);
//         console.log(Ukraine.populationDensity());

//         // 1. Написати функцію, яка приймає число і виводить результат обчислення множення 2 на 1...до цього числа
//         // Цикл та шаблонний рядок

        

//         function getSum(number) {
//             let result = 1;
//             for (let i = 1; i<=number; i++){
//                 result = 2 * i;
//                 console.log(`2 * ${i} = ${result}`);
                
//             }
//         }
//         getSum(10);


//         // 2. Написати функцію getBanned(), яка приймає об'єкт юзера і додає йому нову властивість - banned = true.
//         // В результаті повернути true.
//         // Задача на роботу з об'єктами.
//         // В якості перевірки зробіть декілька об'єктів юзерів і послідовно їх "забаньте".

//         const user1 = {
//             name: 'Nate',
//             lastName: 'Lasthune',
//             age: 28
//         }
//         const user2 = {
//             name: 'ramsan',
//             lastName: 'puylo',
//             age: 50
//         }
//         const user3 = {
//             name: 'Don',
//             lastName: 'Sanchos',
//             age: 44
//         }

//         function getBanned(obj){
//                 obj.banned = true;
//                 return obj.banned;
//             }
//         console.log(getBanned(user1));
//         console.log(getBanned(user2));
//         console.log(getBanned(user3));

