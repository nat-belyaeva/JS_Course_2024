/*
Методы строк
s.length; - свойство
s[i];
s.charAt(0); или s[0]
s.charAt(s.length - 1);
извлечение подстроки:
s.substring(1, 4); 
s.substr(1, 3); 
s.slice(1, 4); 
s.slice(-3);
s.indexOf(‘l’); 
s.lastIndexOf(‘l’); 
s.split(‘, ’);
s.replace(“l”, “L”); 
s.replaceAll(“l”, “L”); 
s.toUpperCase();
s.toLowerCase(); 

Строка

String fromCharCode()
String charCodeAt()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()

String Search Methods

String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
String valueOf()

String
Объект String используется, чтобы представить и конструировать последовательность символов.

Доступ к символам***************************************
Существует два способа добраться до конкретного символа в строке. В первом способе используется метод charAt():
*/
let cat = "кот".charAt(-1); // вернёт "о"

console.log(cat);
/*
Другим способом (введённым в ECMAScript 5) является рассмотрение строки как массивоподобного объекта, в котором символы имеют соответствующие числовые индексы:
*/

let catSame = "кот"[-1]; // вернёт "о"
console.log(catSame);
/*
При доступе к символам посредством нотации с квадратными скобками, попытка удалить символ, или присвоить значение числовому свойству закончится неудачей, поскольку эти свойства являются 
незаписываемыми и 
ненастраиваемыми. Смотрите документацию по методу Object.defineProperty() для дополнительной информации.
*/
let кот = "кот"
кот[1] = "ро";

console.log(кот[1] = "ро");  // ро
console.log(кот);  // кот


/*
String.fromCharCode()
Возвращает строку, созданную из указанной последовательности значений Юникода.

String fromCharCode()

Этот метод возвращает примитивную строку, а не объект String.Статический метод String.fromCharCode() возвращает строку, созданную из указанной последовательности значений единиц кода UTF-16.
*/

let abc = String.fromCharCode(65, 66, 67); // "ABC"
console.log(abc);  // ABC
/*

String charCodeAt()

Метод charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу (за исключением кодовых точек Юникода, больших 0x10000).
Метод charCodeAt() возвращает NaN, если указанный индекс меньше нуля или больше длины строки.
*/

let charNumber = "ABC".charCodeAt(0); // вернёт 65

console.log(charNumber);
/*
String concat()

Метод concat() объединяет текст из двух или более строк и возвращает новую строку.
str.concat(string2, string3[, ..., stringN])
*/

let hello = "Привет, ";
console.log(hello.concat("Кевин", ", удачного дня."));

/* Привет, Кевин, удачного дня. */

/*
String trim()

Метод trim() удаляет пробельные символы с начала и конца строки. Пробельными символами в этом контексте считаются все собственно пробельные символы (пробел, табуляция, неразрывный пробел и прочие) и все символы конца строки (LF, CR и прочие).
str.trim()
*/
let  orig = "   foo  ";
console.log(orig.trim()); // 'foo'

// Другой пример, в котором .trim() убирает пробельные символы только с одной стороны.

let orig2 = "foo    ";
console.log(orig2.trim()); // 'foo'

/*
String trimStart()
Метод trimLeft() удаляет пробельные символы с левого конца строки. 
Не стандартно: Эта возможность не является стандартной и стандартизировать её пока никто не собирается. 
str.trimLeft()
*/

var str3 = "   foo  ";

console.log(str3.length); // 8

str3 = str3.trimLeft();
console.log(str3.length); // 5
console.log(str3); // 'foo  '

/*
String trimEnd()
Метод trimRight() удаляет пробельные символы с правого конца строки.
str.trimRight()
Метод trimRight() возвращает строку с вырезанными пробельными символами с её правого конца. Метод trimRight() не изменяет значение самой строки.
*/
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimRight();
console.log(str.length); // 5
console.log(str); // '   foo'

/*
String padStart()

Экспериментальная возможность: Это экспериментальная технология Так как спецификация этой технологии ещё не стабилизировалась.
Метод padStart() заполняет текущую строку другой строкой (несколько раз, если нужно) так, что итоговая строка достигает заданной длины. Заполнение осуществляется в начале (слева) текущей строки.

Синтаксис
str.padStart(targetLength [, padString])


Параметры
targetLength
Длина итоговой строки после дополнения текущей строки. Если значение меньше, чем длина текущей строки, текущая строка будет возвращена без изменений.


padString Необязательный
Строка для заполнения текущей строки. Если эта строка слишком длинная для заданной длины, она будет обрезана. Значение по умолчанию - " " (U+0020).

Возвращаемое значение
String заданной длины с заполнением строкой, выполненное в начале.
*/


console.log("abc".padStart(10)); // "       abc"
console.log("abc".padStart(10, "foo")); // "foofoofabc"
console.log("abc".padStart(6, "123465")); // "123abc"
console.log("abc".padStart(8, "0")); // "00000abc"
console.log("abc".padStart(1)); // "abc"


/*
String padEnd()

Экспериментальная возможность: Это экспериментальная технология Так как спецификация этой технологии ещё не стабилизировалась, 
Метод padEnd() дополняет текущую строку с помощью заданной строки (в конечном счёте повторяя), так чтобы результирующая строка достигла заданной длины. Дополнение применяется в конце (справа) текущей строки.

Синтаксис
str.padEnd(targetLength [, padString])

Параметры
targetLength
Длина результирующей строки, после того как текущая строка была дополнена. Если этот параметр меньше длины текущей строки, то будет возвращена текущая строка , как она есть.

padString Необязательный
Строка для дополнения текущей строки с. Если эта строка слишком длинная, она будет урезана и будет применяться её левая большая часть. " " (U+0020) - значение по умолчанию для этого параметра.

Возвращаемое значение
Строка указанной длинны дополненная с помощью дополнительной строки в конце текущей строки.

Примеры
*/

"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"

/*
String repeat()

Метод repeat() конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки, на которой он был вызван.

Синтаксис
str.repeat(count)

Параметры
count

Целое число от 0 до +∞: [0, +∞), определяющее число повторений строки во вновь создаваемой и возвращаемой строке.

Возвращаемое значение
Новая строка, содержащая указанное количество копий строки, для которой был вызван метод.

Исключения
RangeError: число повторений не должно быть отрицательным.
RangeError: число повторений должно быть меньше бесконечности и не должно превышать максимально допустимую длину строки.

Примеры
*/

// "абв".repeat(-1); // RangeError
console.log("абв".repeat(0)); // ''
console.log("абв".repeat(1)); // 'абв'
console.log("абв".repeat(2)); // 'абвабв'
console.log("абв".repeat(3.5)); // 'абвабвабв' (количество будет преобразовано в целое число)
// "абв".repeat(1 / 0); // RangeError

({ toString: () => "абв", repeat: String.prototype.repeat }).repeat(2);
// 'абвабв' (метод repeat() является обобщённым методом)

/*
String Search Methods

String search() - для регулярных выражений
Метод search() выполняет поиск сопоставления между регулярным выражением и этим объектом String.

Синтаксис
str.search([regexp])
Параметры
regexp
Необязательный параметр. Объект регулярного выражения. Если будет передан не объект регулярного выражения, он будет неявно преобразован в объект RegExp через вызов конструктора new RegExp(regexp).

Описание
При успехе метод search() возвращает индекс первого сопоставления с регулярным выражением внутри строки. В противном случае метод вернёт -1.

Если вы хотите узнать, находится ли шаблон в строке, используйте метод search() (он работает почти так же, как и метод test() регулярного выражения, но вместо наличия подстроки возвращает её индекс); для получения дополнительной информации (за счёт более медленного выполнения) используйте метод match() (работает так же, как метод exec() регулярного выражения).

Примеры
Пример: использование метода search()
В следующем примере в журнал попадает сообщение, зависящее от успешности или неуспешности прохождения проверки.

function testInput(re, str) {
  let midstring;
  if (str.search(re) != -1) {
    midstring = " содержит ";
  } else {
    midstring = " не содержит ";
  }
  console.log(str + midstring + re);
}

let testString = "hey JuDe";
let re = /[A-Z]/g;

testInput(re, testString); // выведет: hey Jude содержит /[A-Z]/g
*/

/*
String match() - для регулярных выражений

*/

/*
String matchAll() - для регулярных выражений


*/

/*
String includes()

Метод includes() проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно true или false.

Синтаксис
str.includes(searchString[, position])

Параметры
searchString
Строка для поиска в данной строке.

position Необязательный
Позиция в строке, с которой начинать поиск строки searchString, по умолчанию 0.

Возвращаемое значение
true, если искомая строка была найдена в данной строке; иначе false.

Описание
Этот метод позволяет вам определять, содержит ли строка другую строку.

Чувствительность к регистру символов
Метод includes() является регистрозависимым. Например, следующее выражение вернёт false:
*/

console.log("Синий кит".includes("синий")); // вернёт false

/*
Примеры
Использование includes()
*/
let str7 = "Быть или не быть вот в чём вопрос.";

console.log(str7.includes("Быть")); // true
console.log(str7.includes("вопрос")); // true
console.log(str7.includes("несуществующий")); // false
console.log(str7.includes("Быть", 1)); // false
console.log(str7.includes("БЫТЬ")); // false


/*
String startsWith()

Метод startsWith() помогает определить, начинается ли строка с символов указанных в скобках, возвращая, соответственно, true или false.

Синтаксис
str.startsWith(searchString[, position])

Параметры
searchString
Символы, искомые в начале данной строки.

position
Необязательный параметр. Позиция в строке, с которой начинать поиск searchString; по умолчанию 0.

Описание
Этот метод позволяет определять, начинается ли строка с указанных в скобках символов.

Примеры
Пример: использование метода startsWith()
*/
let str8 = "Быть или не быть, вот в чём вопрос.";

console.log(str8.startsWith("Быть")); // true
console.log(str8.startsWith("не быть")); // false
console.log(str8.startsWith("не быть", 9)); // true




/*
String endsWith()

Метод endsWith() позволяет определить, заканчивается ли строка символами указанными в скобках, возвращая, соответственно, true или false.

Синтаксис
str.endsWith(searchString[, length])

Параметры
searchString
Символы, искомые в конце строки.

length
Необязательный параметр. Позволяет искать внутри строки, обрезая её по диапазону; по умолчанию равен длине строки.

Возвращаемое значение
true если данные символы находятся в конце строки; в противном случае, false.

Описание
Этот метод позволяет определять, заканчивается ли строка искомыми символами. Метод чувствителен к регистру.

Примеры
Пример: использование метода endsWith()
*/

let str15 = "Быть или не быть, вот в чём вопрос.";

console.log(str15.endsWith("вопрос.")); // true
console.log(str15.endsWith("быть")); // false
console.log(str15.endsWith("быть", 16)); // true


/*
Метод valueOf() возвращает примитивное значение объекта String.

str.valueOf()

Метод valueOf() возвращает примитивное значение объекта String в виде строкового типа данных. Это значение эквивалентно значению вызова метода String.prototype.toString().

Этот метод обычно вызывается внутренними механизмами движка JavaScript, а не явно в коде.

Примеры
Пример: использование метода valueOf()
*/

let str = "Привет, мир";
console.log(typeof str);

let xStr = new String("Привет, мир");
console.log(xStr.valueOf()); // Отобразит 'Привет, мир'
console.log(typeof xStr);  // object
console.log(typeof xStr.valueOf());  // string