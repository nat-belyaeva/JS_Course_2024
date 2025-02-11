/*
 несколько вопросов с использованием цикла `for` и операторов сравнения в JavaScript:

1. Что произойдет при выполнении следующего кода?

```javascript
let count = 0;

for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

console.log(count);
```

   a) Выведет в консоль число 3.
   b) Выведет в консоль число 2.
   c) Выведет в консоль число 5.
   d) Выведет в консоль число 4.

2. Какие числа будут выведены в результате выполнения следующего кода?

```javascript
for (let i = 0; i <= 10; i++) {
    if (i > 3 && i < 8) {
        console.log(i);
    }
}
```

   a) 0, 1, 2, 3
   b) 4, 5, 6, 7
   c) 1, 2, 3, 4
   d) 3, 4, 5, 6

3. Какая строка кода изменит значение переменной `total` на сумму всех чисел от 1 до 10 включительно?

   a) `total += i`
   b) `total = i`
   c) `total =+ i`
   d) `total = total + i`

4. Как можно перебрать элементы массива `myArray` с использованием цикла `for`?

   a) `for (let i = 0; i < myArray.length(); i++)`
   b) `for (let i = 1; i <= myArray.length(); i++)`
   c) `for (let i = 0; i <= myArray.length(); i++)`
   d) `for (let i = 0; i < myArray.length; i++)`
*/

// Задача 07. Что произойдет при выполнении следующего кода?

let numbers = [1, 2, 3, 4, 5];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        count++;
    }
}

console.log(count);


/*
1) Выведет в консоль число 3.
2) Выведет в консоль число 5.
3) Выведет в консоль число 2.
4) Выведет в консоль число 4.

Выберите один ответ:
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить.
:one:   :two:   :three:   :four: 
*/
/*
верный ответ :

3) Выведет в консоль число 2.

Посмотрим, как работает код:

1. Мы создаем массив `numbers`, содержащий числа от 1 до 5.

2. Затем мы инициализируем переменную `count` с нулем.

3. Мы используем цикл `for`, чтобы пройти по каждому элементу массива.

4. Внутри цикла мы проверяем, делится ли текущее число (элемент массива) на 2 без остатка. Если да, то увеличиваем значение переменной `count` на 1.

5. В массиве `numbers` есть два числа, которые делятся на 2 без остатка: 2 и 4. Таким образом, переменная `count` будет увеличена на 1 за каждое из этих чисел.

Таким образом, сумма 2 и 4 равна 2. Но не забывайте, что у нас здесь идет подсчет количества четных чисел в массиве, а не их сумма. Поэтому правильный ответ - c) Выведет в консоль число 2.
*/