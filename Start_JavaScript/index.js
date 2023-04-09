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

