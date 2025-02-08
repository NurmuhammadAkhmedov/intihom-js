// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini

// let qoldig = 5%2
// alert(qoldig)





// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini



// let son = Math.random()
// let number = Math.round(son*10)
// alert(number)




// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!


// let numbers = 12.510;
// let k = Math.floor(numbers)
// alert(k)





// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 


// let str = ("MARS IT SCHOOL")
// alert(str.length)




// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

// for (let i = 0; i < 10; i++) {
//     console.log("MARS IT SCHOOL");
// }


// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

// let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
// let ism = harflar[12] + harflar[19] + harflar[16] + harflar[11] + harflar[19]+ harflar[6] + harflar[0] + harflar[11] + harflar[11] + harflar[0]+harflar[2];
//  console.log(ism);




// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering

// let yosh = +prompt("Yoshingizni kiritng");

// if(yosh > 18) {
//     alert("Siz balog'atga yetgansiz")
// } else if(yosh < 18) {
//     alert("Siz balog'atga yetmagansiz")
// }





// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

//  function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// const userInput = prompt("Biror so'z kiriting:");
// if (userInput) {
//     alert("Teskari so'z: " + reverseString(userInput));
// }





// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring


// Javob:Kodini yozib bering


// let name = prompt("Ismingizni kiriting:");
// let age = prompt("Yoshingizni kiriting:");

// let result = document.createElement("p");
// result.textContent = Ismingiz: ${name}, Yoshingiz: ${age};
// result.style.color = "blue";
// result.style.fontSize = "20px";
// result.style.fontWeight = "bold";

// document.body.appendChild(result);











// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering


// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let juftsonlar = sonlar.filter((son) => son % 2 === 0)
// console.log(juftsonlar)
