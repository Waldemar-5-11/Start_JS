// let num=2+true;
// console.log(num);//3



// let userInput = '12345';
// console.log(userInput);
// let conv= Number(userInput);
// console.log(conv);



// let cat='cat';
// console.log(cat); 

// let dog='dog';
// console.log(dog);

// let result = 'cat' > 'dog';
// console.log(result);



// let appleColor= 'green';

// if (appleColor==='red'){
//     console.log('apple red');
// } else {
//     console.log('apple color not red');
// }



// let cat= 1;
// console.log(cat); 

// let dog= 2;
// console.log(dog); 

// let rat= 4;
// console.log(rat);

// let animal=cat+dog+rat;

// console.log(animal);

// if (animal>2){
//     alert('animal');
// }


// let cat = 1 ; 
// let dog = 2 ; 
// let rat = 4 ; 
// let animals = 0; 
// if(cat>2){ 
// animals += cat; 
// } 
// if(dog>2){ 
// animals += dog; 
// } 
// if(rat>2){ 
// animals += rat; 
// } 
// alert(animals);



// let a = 1 ; 
// let b = 2 ;
// console.log(a+b);



// let age=18;
// let result;

// if (age > 18){
//     result = 'Adult';
// } else {
//     result = 'Not adult';
// }

//Тернарний спосіб вводу
// let name= 'Taras';

// let result= name ='Taras' ? 'Hello Taras' : 'Hello man';
// console.log(result);

//Три модальні вікна
// alert('hello user');

// let result=confirm('Are you ready to go?');
// console.log(result);

// let name=prompt('Type your name, please');
// console.log(name);

// let name=prompt('Type your name, please');
// alert('Hello '+ name);


// let num =Number(prompt('Type your number'));
// console.log(num+3);



//Функції

// function sumTwoAndTwo(){
//     let sum=2+2;
//     console.log(sum);
//     // console.log(2+2);
// }

// sumTwoAndTwo();


// function sumTwoNumbers(arg1, arg2){
//     let sum = arg1 + arg2;
//     console.log(sum);
// }
// sumTwoNumbers(2, 3);
// sumTwoNumbers(5, 7);

// // console.log(sum);//не виводить

// function something(a1, a2, a3, a4, a5){
//     console.log(a1);
//     console.log(a2);
//     console.log(a3);
//     console.log(a4);
//     console.log(a5);
// }

// something(1, 2, 3);

// function something2(){
//     console.log('hello')
// }
// something2(1, 2, 3);


// let num1 =Number(prompt('type first number'));
// let num2 =Number(prompt('type second number'));

// function getSumTwoNumber(num1, num2){
//     let res=getSumTwoNumber(num1, num2);
//     console.log(res);
// }

// function getBigger (num1, num2){
//     return (num1>num2) ? num1 : num2;
// }

// function isEven(num){
//     let rest = num % 2;
//     if(rest===1){
//         return fulse
//     } else {
//         return true
//     }

    // return (num % 2 === 0) ? true : false;
    // return !Boolean(num % 2);

// function toSquare (number){
//     return number * number;
// }
//     console.log (toSquare(4));

//     let userInput= prompt('Input your number');
//     let userNumber = Number(userInput);

//     console.log (toSquare(userNumber));



// function sumTwoNumbers(num1, num2){
//     return (num1 + num2)/2;
// }
// // sumTwoNumbers(4, 6);

// let num1=4;
// let num2=6;

// let result = sum(num1, num2) /2;
// console.log(result);



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

      

//Доопрацювати калькулятор
    // function getCalc() {
    // let choice = Number(prompt('type first number'));
    // let choice2 = Number(prompt('type second number'));
    // let action = prompt ('Choose operation');
    //     switch (action) {
    //     case '+':
    //         result = sum(num1, num2);
    //         break;
    //     case '-':
    //         result = sub(num1, num2);
    //         break;
    //     case '*':
    //         result = multiply(num1, num2);
    //         break;
    //     case '/':
    //         result = divide(num1, num2);
    //         break;

    //     default:
    //         return false;
    //     }

    //     function sum(a, b){
    //         return a + b;
    //     }
    //     function sub(a, b){
    //         return a - b;
    //     }
    //     function multiply(a, b){
    //         return a * b;
    //     }
    //     function divide(a, b){
    //         return a / b;
    //     }
    // }    

    // getCalc();

 


/* ЦИКЛИ */


//     let counter = 0;

// while(counter <=10){
//     if (counter % 2 === 0){
//         console.log(counter)
//     }
//     counter++;
// }



// let number = 0;
// while(number <=15){
//     if ((number % 3 === 0)&&(number % 5 === 0)){
//         console.log(number)
//     }
//     number++;
// }


// let sum = 0;
// let counter = 0;
// while(counter++ <=20){
//     sum += counter;
//     counter++;
// }
// console.log(sum);


// do {
    
// }while(gogi)

// debugger;
// for(let counter = 0;counter < 10; counter++){
//     console.log(counter);
// }