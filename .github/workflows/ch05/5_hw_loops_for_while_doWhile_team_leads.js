/**
 * Loops (for(;;), for in, for of, while, do while). Nested loops. break, continue.
 * 3_2_arrayLoopFor.js, 
 * 
 * for([initialization]; [condition]; [iteration]) {
 *      [loop body]
 * }
 * 
 * Loop for numbers
 * 
 * Циклы в JavaScript могут работать с числами потому, что в JavaScript числа часто используются для управления итерациями циклов. Вот несколько основных причин, по которым циклы могут работать с числами в JavaScript:

1. Условия циклов: Циклы в JavaScript, такие как `for`, `while`, и `do...while`, используют числовые значения для определения количества итераций. Например, вы можете использовать цикл `for` для выполнения определенного блока кода определенное количество раз:
*/
   
   for (let i = 0; i < 5; i++) {
     console.log(i); // Выведет числа от 0 до 4
   }

/*
2. Индексы массивов и строк: В JavaScript числовые значения часто используются для доступа к элементам массивов и символам строк по их индексу. Это позволяет циклам эффективно перебирать элементы массивов и символы строк.

3. Математические операции: Циклы могут использоваться для выполнения математических операций, таких как сложение, вычитание, умножение и деление чисел, итерационно изменяя числовые значения внутри цикла.

4. Итерация по числовым данным: JavaScript предоставляет возможность итерироваться по числовым данным с помощью циклов `for...of` и `forEach`, что позволяет работать с числовыми данными в контексте циклов.

5. Использование счетчиков и флагов: Числовые значения могут использоваться в циклах в качестве счетчиков, флагов или условий проверки, что обеспечивает гибкость и управляемость в поведении циклов.

Эти причины объясняют, почему циклы могут эффективно работать с числовыми данными в JavaScript и как числа используются в контексте циклов для управления итерациями и выполнения различных операций.
 * 
 * Loop for strings******************************************************************************************************
 * 
 * Строка в JavaScript представляет собой последовательность символов, которая может содержать буквы, цифры, специальные символы и пробелы. Строки могут быть созданы с использованием одинарных (`'`) или двойных (`"`), или косых кавычек (``) кавычек. Например:
*/

let str1 = 'Пример строки';
let str2 = "Еще один пример строки";

/*
Строки также могут быть созданы с помощью конструктора `String()`:
*/

let str3 = new String('Строка, созданная с помощью конструктора String');

/*
Строки в JavaScript являются неизменяемыми, что означает, что после создания строки ее нельзя изменить. Однако вы можете создать новую строку на основе существующей, применив к ней операции конкатенации или другие методы строкового объекта.

 * В JavaScript циклы могут работать со строками так же, как и с массивами. Это происходит потому, что строки в JavaScript по сути являются последовательностью символов, и каждый символ имеет свой индекс, как и элементы массива. Вот несколько способов, как циклы могут быть использованы для работы со строками в JavaScript:

1. Цикл `for`:
   Цикл `for` часто используется для перебора всех символов в строке:
*/
{
   let str = "Hello";
   for (let i = 0; i < str.length; i++) {
     console.log(str[i]); // Выведет каждый символ строки
   }
}


/*
2. Цикл `for...of`:
   Цикл `for...of` может быть использован для перебора символов в строке напрямую:
*/
  
   let str = "Hello";
   for (let char of str) {
     console.log(char); // Выведет каждый символ строки
   }
  
   let newStr = str.toUpperCase();
   console.log(newStr);
   
str = "Привет";
console.log(str);
/*
3. Цикл `forEach` (для массивов):
   Хотя строки не являются массивами, вы можете преобразовать строку в массив символов и использовать цикл `forEach`:
*/
  {
   let str = "Hello";
   Array.from(str).forEach(function(char) {
     console.log(char); // Выведет каждый символ строки
   });
}
/*
4. Другие методы для работы со строками:
   В JavaScript есть множество методов для работы со строками, таких как `charAt()`, `substring()`, `slice()`, `split()` и т. д., которые могут использоваться в циклах для обработки строковых данных.

Таким образом, циклы в JavaScript могут легко работать со строками благодаря тому, что строки в JavaScript являются итерируемыми последовательностями символов.
 * 
 * Loop for arrays**********************************************************************************************************
 * Работаем с массивом - важно помнить о нумерации элементов: индексы с 0, количество - с 1.
 * Массивы могут хранить данные любого типа.
 */

const element = [];  // Хорошей практикой считается объявлять массив с const, а не let.

element[0] = "apple";
element[1] = 4+8;
element[2] = 3;
element[3] = element[2] * element[1];

 console.log(element);  // [ 'apple', 12, 3, 36 ]

 // могут присутствовать пустые элементы

 element[5] = NaN;

 console.log(element);  // [ 'apple', 12, 3, 36, <1 empty item>, NaN ]

 console.log(element[4]); // undefined

 // можем управлять длиной массива через свойство длина массива - увеличивать, сокращать

 console.log(element.length);  // 6
element.length = 10;
console.log(element.length);   // 10
console.log(element);    // [ 'apple', 12, 3, 36, <1 empty item>, NaN, <4 empty items> ] 
element.length = 5;
console.log(element);   // [ 'apple', 12, 3, 36, <1 empty item> ]

// вложенные массивы 3_17_multidimensionalArrays.js, 3_18_accessingArrayElements.js

// 3_19_loopingThroughArrays.js


let alphabet = [];

alphabet[0] = 'a';

console.log(`alphabet with alphabet[0]: ${alphabet}`);

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(`alphabet with letters: ${alphabet}`);

// используем цикл ASCII 

alphabet = []
for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
    // console.log(`alphabet with for-loop: ${alphabet}`);  // выводит наполненность массива на каждой итерации цикла.
}

console.log(`alphabet with for-loop: ${alphabet}`);  // выводит готовый массив букв.

// 3_22_branchingOutFor.js,
/*
Цикл for обычно используется для запуска кода заданное количество раз.
*/

for (let i = 1; i < 10; i++) {
    console.log(i);
};

/*
Вкратце, вот как работает предыдущий пример цикла for:

1. Новая переменная, в данном случае i, инициируется со значением 1.

2. Проводится тест, чтобы определить, меньше ли i 10 (i < 10).

Если это так, выполняются операторы внутри цикла (в данном случае оператор console.log (i)).

3. Если нет, значение i увеличивается с помощью оператора приращения (++). i = i + 1

4. Проверка выполняется еще раз, чтобы определить, меньше ли i 10 (i<10). Если это так, выполняются инструкции внутри цикла.

5. Проверка повторяется до тех пор, пока выражение условия не перестанет быть истинным.

*/

/*
++	Increment
--	Decrement
*/

for (let j = 1; j < 10; ++j) {
    console.log(j);
};

// for (let k = 1; k < 10; k--) {  // зацикливание до бесконечности
//     console.log(k);
// };


for (let k = 15; k > 10; k--) {
    console.log(k);
};

for (let k = 15; k > 10; --k) {
    console.log(k);
};

// проверить с i <= 10

/*
Циклический перебор массива

Вы можете использовать циклы for для вывода списка содержимого массива, сравнивая значение счетчика со значением свойства длины массива. Обязательно помните, что массивы JavaScript имеют нулевой индекс и что значение любого array.length будет на единицу больше, чем элемент с самым высоким индексом в массиве. Вот почему мы добавляем ‐1 
Различные коды городов:
*/

let areaCodes = ["770", "404", "718", "202", "901",
"305", "312", "313", "215", "803"];

for (let i=0; i <= areaCodes.length - 1; i++){ 
    console.log("Different Area Code:" + areaCodes[i]);
};
/*
Different Area Code:770
Different Area Code:404
Different Area Code:718
Different Area Code:202
Different Area Code:901
Different Area Code:305
Different Area Code:312
Different Area Code:313
Different Area Code:215
Different Area Code:803
*/

/*
3_24_forInLoop.js
Операторы for ... in циклически перебирают свойства объекта. Вы также можете использовать оператор for ... in для перебора значений массива.

Цикл for...in имеет интересную особенность (причуда). Ему не важен порядок свойств или элементов, через которые он проходит. По этой причине, а также потому, что использование цикла for ... in выполняется медленнее, гораздо лучше использовать стандартный цикл for для перебора элементов массива.

*/
/*
Цикл for...in: Этот цикл используется для перебора свойств объекта, идет по индексам массива.
*/

const numbersArr = [1,2,3,4];

for (let index in numbersArr) {
  console.log(index); // Выведет 0,1,2,3
}

/*
Цикл for...of: Этот цикл используется для перебора элементов массива или других итерируемых объектов.
*/

const smallArr = [1, 2, 3];
for (let value of smallArr) {
  console.log(value); // Выведет числа 1, 2, 3
}

/*
3_25_whileLoops.js
Оператор while создает цикл, который выполняется до тех пор, пока условие принимает значение true. 
например,  
*/

{
let key = 5;
while(key >= 15) {
    console.log(key++);
}; // не выполнится ни разу

let line = 25;
while(line >= 15) {
    console.log(line--);
    console.log(--line);
}
}
/*
Цикл do ... while работает во многом так же, как цикл while, за исключением того, что операторы помещаются перед выражением для проверки. В результате операторы внутри цикла do... while всегда будут выполняться хотя бы один раз.
*/


let key = 5;
do {
    console.log(++key);
} while(key >= 15) ; //  выполнится один  разу

let line = 25;
do {
    console.log(line--);
} while(line >= 15); 


let arrNan = [1, 3]
arrNan[2] = arrNan[0], 
arrNan[5] = arrNan[8]*3;

console.log(arrNan);

console.log("Loop or Recursion*****************************************");

/**
 * Рекурсия может заменить цикл - нужно придумать только условия прекращения вызова функции самой себя. 4_7_doItAgainWithRecursion.js

Базовый случай — это условие, при котором работа рекурсивной функции выполнена и она должна остановиться. Каждая рекурсивная функция должна иметь базовый вариант.

Подсчитаем квадрат числа
*/

function squareItUp(startingNumber) {
    let square = startingNumber * startingNumber;
    
    if (square > 1000000) {
        console.log(square);
    } else {
        squareItUp(square);  
    }
};

squareItUp(6);  // 1679616

// переделаем это с циклом

let number = 6;
let numberSquare = number * number;

for (numberSquare ; numberSquare <= 1000000;   /*numberSquare *= numberSquare*/) {
    numberSquare *= numberSquare
}
console.log(numberSquare);   // 1679616

for (numberSquare ; numberSquare <= 1000000;   numberSquare *= numberSquare) {
    // numberSquare *= numberSquare
}
console.log(numberSquare);   // 1679616

/*
Вложенные циклы в JavaScript - это когда один цикл находится внутри другого. Такие конструкции используются для обработки многомерных данных, таких как двумерные массивы или матрицы, а также для выполнения повторяющихся операций, которые требуют доступа к каждому элементу вложенной структуры данных.

пример вложенного цикла `for` в JavaScript: Найди пару:
*/
const dit = [1, 2,3,4];
1 // 1, 2, 3, 4
2 // 1, 2, 3, 4
3 // 1, 2, 3, 4
4 // 1, 2, 3, 4

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
let max = dit[0];
for (let i = 0; i <= 3; i++) {
    for (let j = i + 1; j <= 3; j++) {
       if (dit[i] < dit[j]) {
        max = dit[j];
       }
    }
}

console.log(max);

/*
Этот код создает два вложенных цикла `for`. Первый цикл перебирает значения `i` от 0 до 2, а внутренний цикл перебирает значения `j` от 0 до 2 для каждого значения `i`. В результате на консоль будет выведено:


i: 0, j: 0
i: 0, j: 1
i: 0, j: 2
i: 1, j: 0
i: 1, j: 1
i: 1, j: 2
i: 2, j: 0
i: 2, j: 1
i: 2, j: 2


Вложенные циклы часто используются для обработки многомерных массивов, перебора таблиц и матриц, генерации комбинаций или перестановок элементов и выполнения других сложных операций, где каждый элемент внутреннего цикла должен быть обработан для каждого элемента внешнего цикла.

Однако стоит помнить, что вложенные циклы могут быть затратными по времени выполнения, особенно если внутренний цикл выполняется много раз. Поэтому при использовании вложенных циклов важно оптимизировать код и минимизировать сложность алгоритма.
*/


// Избегайте бесконечных циклов. Убедитесь, что условие в цикле в конечном итоге становится false— иначе цикл никогда не завершится! Операторы в следующем whileцикле выполняются навсегда, поскольку условие никогда не становится false:

// Infinity loops are bad!

// while (true) {
//     console.log("Hello World!");
// }
// Когда завершится этот цикл? Никогда.
/*
labeled statement
помеченное заявление
A labelпредоставляет оператору идентификатор, который позволяет вам ссылаться на него в другом месте вашей программы. Например, вы можете использовать метку для идентификации цикла, а затем с помощью операторов breakили continueуказать, должна ли программа прервать цикл или продолжить его выполнение.

Синтаксис помеченного оператора выглядит следующим образом:

label: 
    statement

    Значением label может быть любой идентификатор JavaScript, не являющийся зарезервированным словом. То statement, что вы идентифицируете с помощью ярлыка, может быть любым утверждением. Примеры использования помеченных операторов см. в примерах breakи continueниже.
*/

// break statement

/**
 * Используйте этот break оператор для завершения цикла switch или в сочетании с помеченным оператором.

При использовании break без метки он завершает самый внутренний включающий while, do-while, for или switch немедленно и передает управление следующему оператору.

Когда вы используете breakwith label, он завершает указанный помеченный оператор.
Синтаксис оператора break выглядит следующим образом:

break;
break label;
Первая форма синтаксиса завершает самый внутренний охватывающий цикл или switch.
Вторая форма синтаксиса завершает указанный включающий помеченный оператор. 

Пример 1

В следующем примере выполняется перебор элементов массива, пока не будет найден индекс элемента, значение которого равно theValue:

*/

const a = [1,2,3,4,5];
let theValue = 3;

for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
        break;
    }
}

// Пример 2: переход к метке
/*
условие задачи 

Антон и Петр отправились в путешествие по лесу. Они решили исследовать разные районы леса. Антон начинает исследовать один участок (внешний цикл), а затем вместе с Петром исследует его окрестности (внутренний цикл). Они продолжают исследования до тех пор, пока не посетят 10 различных участков леса и не исследуют их окрестности по 10 раз. Когда они достигнут этого числа, им необходимо прекратить исследования и вернуться в лагерь.


В этой версии условия задачи, цифры 10 используются для определения количества участков леса и количества раз, которые они должны исследовать. Использование метки позволяет им немедленно прекратить исследования и вернуться в лагерь, как только выполнены оба условия: они посетили 10 различных участков леса и исследовали их окрестности по 10 раз.

Есть два вложенных цикла while. Внешний цикл выполняется, пока переменная x меньше 10. Внутренний цикл выполняется, пока переменная z меньше 10. Каждая итерация внутреннего цикла увеличивает переменную z на 1. Однако, если x и z достигнут значения 10, оба цикла должны быть прерваны с использованием метки.
*/

let x = 0; 
let z = 0

labelCancelLoops: while (true) {
    // Код внешнего цикла
    console.log("Outer loops:", x);
    x += 1;
    z = 1;

    while (true) {
        // Код внутреннего цикла
        console.log("Inner Loops: ", z);
        z += 1
        if (z === 10 && x === 10) {
            break labelCancelLoops; // Прерывание работы внешнего цикла по метке
        } else if ( z=== 10) {
            break;  // // Прерывание работы внутреннего цикла
        }
    }
}
/*
 `labelCancelLoops` в примере не является зарезервированным словом. 

Это просто идентификатор, который придумали для метки, чтобы использовать его в операторе `break` для прерывания выполнения внешнего цикла. Вы можете выбирать любое имя для метки, которое соответствует идентификатору в JavaScript, но обычно лучше выбирать осмысленные имена, которые отражают назначение метки.

Метка (label) в JavaScript - это идентификатор, который можно присвоить оператору for, while, или do...while. Это позволяет управлять потоком выполнения кода, особенно при использовании вложенных циклов.

В примере используется метка labelCancelLoops, которая привязана к циклу while (true) внешнего цикла. Когда код встречает оператор break с указанием метки, он сразу же выходит из цикла, на который ссылается метка.

Когда условие if (z === 10 && x === 10) выполняется, происходит прерывание работы внешнего цикла while (true) с помощью оператора break и метки labelCancelLoops. Это приводит к выходу из обоих циклов и завершению выполнения кода. Без метки labelCancelLoops оператор break просто прервал бы выполнение внутреннего цикла.

Внутренний цикл завершается, как только условие `z === 10` становится истинным, и выполнится оператор `break` без метки. 


        if (z === 10 && x === 10) {
            break labelCancelLoops; // Прерывание работы внешнего цикла по метке
        } else if ( z=== 10) {
            break; // Прерывание работы внутреннего цикла
        }


Когда `z` достигнет 10, внутренний цикл будет прерван, так как условие `z === 10` станет истинным, и выполнится оператор `break` без метки. Внешний цикл продолжит свою работу, так как это условие остановки работает только внутри внутреннего цикла.

 Одним из ключевых отличий между использованием оператора `break` с меткой и без нее является область действия оператора `break`.

Когда оператор `break` используется без метки, он прерывает выполнение только самого внутреннего цикла, в котором он находится. Это означает, что внешний цикл будет продолжать выполнение после того, как внутренний цикл завершится.

Когда оператор `break` используется с меткой, он прерывает выполнение цикла, на который указывает метка, независимо от того, в каком месте он был вызван в коде. Таким образом, использование `break` с меткой позволяет прервать выполнение внешнего цикла изнутри вложенного цикла.

В данном случае, использование `break` с меткой `labelCancelLoops` приводит к прерыванию выполнения внешнего цикла `while (true)`, тогда как использование `break` без метки прерывает только внутренний цикл.
*/


// continue statement

/*
continue statement
продолжить заявление
Этот continue оператор можно использовать для перезапуска оператора while, do-while, forили label .

Когда вы используете continueбез метки, он завершает текущую итерацию самого внутреннего включающего оператора while, do-whileили forили и продолжает выполнение цикла со следующей итерации. В отличие от breakоператора, continueне прекращает выполнение цикла полностью. В whileцикле он возвращается к состоянию. В forцикле он переходит к increment-expression.
Когда вы используете continueметку, это применяется к оператору цикла, определенному этой меткой.
Синтаксис оператора continueвыглядит следующим образом:

continue;
continue label;

Пример 1
В следующем примере показан whileцикл с continue оператором, который выполняется, когда значение i равно 3. Таким образом, nпринимает значения 1, 3, 7, и 12.
*/
{
let i = 0;
let n = 0;

while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    n += i;
    console.log(n);
}
}
/*
Если вы закомментируете continue;, цикл будет выполняться до конца, и вы увидите 1,3,6,10,15.

Пример 2

Оператор с меткой checkiandj содержит оператор с меткой checkj. Если continueон встречается, программа завершает текущую итерацию checkj и начинает следующую итерацию. Каждый раз, continue когда встречается, checkj повторяется до тех пор, пока его условие не вернется false. Когда false возвращается, оставшаяся часть оператора checkiandj завершается и checkiandj повторяется до тех пор, пока не вернется условие false. Когда false возвращается, программа продолжает работу с оператора, следующего за checkiandj.

Если continue бы была метка checkiandj, программа продолжила бы работу в верхней части оператора checkiandj.
*/
let i = 0;
let j = 10;

checkiandj: while (i < 4) {
    console.log(i);
    i += 1;

    checkj: while (j > 4) {
        console.log(j);
        j -= 1;
        if (j % 2 === 0) {
            continue checkj;
        }
        console.log(j, "is odd.");
    }
    console.log("i = ", i);
    console.log("j = ", j);
}

