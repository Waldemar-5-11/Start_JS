// Start JS with Kyrylo

//HW 07/04
/*Завдання на if ... else
Користувач придбав товар у магазині, у якому діє наступна система знижок: при загальній сумі покупок більше ніж 500 грн. застосовується знижка 5%, а якщо чек більше ніж 1500 то знижка складатиме 10%. Запитайте у користувача ціню його покупки та виведіть йому підсумкову ціну з урахуванням можливої знижки.

Завдання на switch
Покупець хоче купити продукт з магазину. В магазині за кожним продуктом закріплена ціна за одиницю. Запитайте у користувача який саме товар і в якій кількості він хоче придбати та поверніть вартість покупки. Ціни товарів зберігайте у окремих змінних

Bonus task
після виконання завдань зробіть функції, які мають містити логіку завдань, але замість простого виводу результати розрахунків потрібно повертати з функцій 
*/


//Завдання на if ... else
function calculateTotalPrice(userBuy) {
    let discount;

    if (userBuy > 1500) {
      discount = userBuy * 0.1;
    } else if (userBuy > 500) {
      discount = userBuy * 0.05;
    } else {
    discount = 0;
    }

    let totalPrice = userBuy - discount;
    
    return totalPrice;
}

let userBuy = prompt('Enter your purchase price');
let totalPrice = calculateTotalPrice(userBuy);

alert(totalPrice);
console.log(totalPrice);

//Завдання на switch
function calculateTotalPrice2(product, quantity) {
    let price;

    switch (product) {
    case 'apple':
        price = 10;
        break;
    case 'milk':
        price = 15;
        break;
    case 'fish':
        price = 25;
        break;
    default:
        console.log('Invalid product');
    }

    if (price) {
      let total = price * quantity;
    return `Total price for ${quantity} ${product}(s) is ${total}`;
    }
}

let product = prompt('Enter product name');
let quantity = +prompt('Enter quantity');
let totalPrice2 = calculateTotalPrice2(product, quantity);

if (totalPrice2) {
    console.log(totalPrice2);
}



const getSumTwoNumbers = function(namber1, namber2){
    if(
    typeof namber1 !== 'namber' ||
    typeof namber1 !== 'namber' ||
    isNaN(namber1) ||
    isNaN(namber2) 
    ){
        return null;
    }

    const result = namber1 + namber2;

    return result;
}
    const res = getSumTwoNumbers();
    console.log(res);



//HW 10.04
//   1 створити функцію, яка буде повертати найбільше число з двох
//   2* створити функцію яка приймає число та перевіряє його на парність (четность)

function getMaxNumber(number1, number2) {
    if (number1 > number2) {
    return number1;
    } else {
    return number2;
    }
}

  // Приклад використання:
let number1 = 10;
let number2 = 20;

let maxNumber = getMaxNumber(number1, number2);
console.log("Max number: " + maxNumber);

//2*

function checkParity(number) {
    if (number % 2 === 0) {
    return "Number " + number + " is even.";
    } else {
    return "Number " + number + " is odd.";
    }
}

  // Приклад використання:
let number = 10;

let result = checkParity(number);
console.log(result);


//за допомогою циклу вивести у console.log() парні числа від 0 до 10
let i = 0;
while (i <= 10) {
if (i % 2 === 0) {
    console.log(i);
}
i++;
}
//цикл за допомогою for
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
    console.log(i);
    }
}


const SAVED_PASSWORD = 'mypassword'; // Збережений пароль
let attempts = 5; // Кількість спроб
let userAnswer;

for (let i = attempts; i > 0; i--) {
    userAnswer = prompt("Enter your password"); // Запит користувачу на введення паролю
    if (userAnswer === SAVED_PASSWORD) {
        alert('Ви впорались за '+ (attempts + 1)+ ' спроб');
        console.log("Password correct!");
        break; // Вийти з циклу, якщо пароль правильний
    } else {
        alert('Ви не впорались за '+ (attempts + 1)+ ' спроб');
        console.log("Password incorrect. Attempts left: " + (i - 1));
        if (i === 1) {
            console.log("You've reached the maximum number of attempts.");
        }
    }
}

//HW 11.04
//зробіть наступні завдання за допомогою усіх циклів:
//виведіть числа від 30 до 0 (у порядку зменшення)
//знайдіть суму всіх чисел від 0 до 100 (1+2+3+...+99+100)

// //Цикл "while":
// let i = 30;
// while (i >= 0) {
// console.log(i);
// i--;
// }
// //
// let sum = 0;
// let i = 0;
// while (i <= 100) {
// sum += i;
// i++;
// }
// console.log(sum);


// //Цикл "do...while":
// let i = 30;
// do {
// console.log(i);
// i--;
// } while (i >= 0);
// //
// let sum = 0;
// let i = 0;
// do {
// sum += i;
// i++;
// } while (i <= 100);
// console.log(sum);

// //Цикл "for":
// for (let i = 30; i >= 0; i--) {
//     console.log(i);
// }
// //
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
// sum += i;
// }
// console.log(sum);




