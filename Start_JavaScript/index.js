// Start JS with Kyrylo

//Object

const obj = {
    display: 'flex',
    justifyContent: 'center',
    lineHaight:1.5,
};

const vykladach = {
    name : 'Kyrylo',
    height: 1.8,
    weight: 80,
    isMale: true,
    ps: {
        cpu:{
            manufacturer: 'AMD',
            model: 'Ryzen 2700'
        },
        ram:16,
    },
    password: 'admin',
    email: 'test@test.ua'
};

const phone = {
    color: 'black',
    price: 11000,
    call: function (somebody) {
    console.log('calling'+ somebody) 
    },

}

const obj1 = {};
const obj2 = Object();
const obj3 = new Object();

const dog = {
    color: 'grey',
    weight: 11,
    breed: 'French bulldog',
    nickname: 'Lusy',
    age: 3,
    isSleeping: false,
}
console.log('Dog '+ dog.nickname + ' '+ dog.age+ 'year');

//зміна властивостей обєкту
let age = 5;
age+=2;

dog.age++;
dog.color = 'black';
//додавання властивостуй обєкту
dog.isFemale = true;

//видалення даних обєкта
delete dog.isFemale;
dog.isSleeping = undefined;


//CW
console.log(dog);
dog.isFemale = true;
dog.color = 'blue-tiger';
dog.age -= 0.5;
console.log(dog);

const Dog = function (nickname, age, color,weight) {
//debugger;
this.nickname=nickname;
this.age=age;
this.color=color;
this.weight=weight;

this.gav = function () {
    console.log('gav');
}
};
const constructedDog = new Dog ('test', 2, 'black', 7);

//HW 12.04
// Функція конструктора для об'єктів користувачів
function User(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;

    // Метод speak
    this.speak = function() {
    console.log("Привіт, мене звати " + this.firstName + " " + this.lastName + "!");
    };

    // Властивість повного імені
    Object.defineProperty(this, 'fullName', {
    get: function() {
        return this.firstName + " " + this.lastName;
    }
    });
}

  // Приклад використання
let user1 = new User("Іван", "Петров", "чоловіча", 25);
  console.log("Ім'я: " + user1.firstName); // Ім'я: Іван
  console.log("Прізвище: " + user1.lastName); // Прізвище: Петров
  console.log("Стать: " + user1.gender); // Стать: чоловіча
  console.log("Вік: " + user1.age); // Вік: 25
  console.log("Повне ім'я: " + user1.fullName); // Повне ім'я: Іван Петров
  user1.speak(); // Привіт, мене звати Іван Петров!


//CW 13.04

  // functional expression
const sum1 = function (num1, num2){
    return num1 + num2;
}
// functional declaration
function sum2 (num1, num2){
    return num1 + num2;
}

//Шаблоний рядок
let a = 10;
let b = 15;
alert(`${a} + ${b} = ${a+b}`);

const pan = {
    firstName: 'test',
    lastName: 'Testetko',
    age:99,
    isMale: true
}
function hello (pan){
    console.log(`'Hello' ${pan.firstName} + ${pan.lastName}}`);
    return `'Hello' ${pan.firstName}  ${pan.lastName} `;
}

const testObject = {
    100: 'secret text',
    abc: true,
    'some text': 525252,
  };
  
  // console.log(testObject);
  // console.log(testObject.100);
  
  // console.log(testObject[100]);
  // console.log(testObject['100']);
  
  // console.log(testObject['abc']);
  // console.log(testObject['some text']);
  
  const myKey = 'some text';
  
  console.log(testObject[50 + 50]);
  
  // const userKey = prompt('Введіть назву ключу');
  // const userValue = prompt('Введіть значення');
  
  // testObject[userKey] = userValue;
  // // testObject.promptValue = userValue;

  const user = {
    firstName: 'Test',
    lastName: 'Testenko',
    age: 125,
    isMale: true,
  };
  
  console.log(user);
  // console.log(user[field]);
  
  let field = 'age';
  user[field] = false;
  user.age = false;
  
  // alert()
  // window.alert()
  // window['alert']()