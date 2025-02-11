/*
Задача 19. Строковые типы данных в массиве.
Что вернет вызов findLongestString(['apple', ['banana', 'orange', 'strawberry'], ['grape', ['kiwi', 'pear']]])?
*/

console.log(findLongestString(['apple', ['banana', 'orange', 'strawberry'], ['grape', ['kiwi', 'pear']]]));

function findLongestString(arr) {
    let longest = '';
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            let nestedLongest = findLongestString(arr[i]);
            if (nestedLongest.length > longest.length) {
                longest = nestedLongest;
            }
        } else if (typeof arr[i] === 'string') {
            if (arr[i].length > longest.length) {
                longest = arr[i];
            }
        }
    }
    return longest;
}

/*
Варианты ответов: 

Вариант ответа 1:
Результатом будет ошибка, так как функция findLongestString не определена внутри цикла.

Вариант ответа 2:
Результатом будет 'banana', так как это самая длинная строка во втором вложенном массиве.

Вариант ответа 3:
Результатом будет 'kiwi', так как это самая длинная строка во втором вложенном массиве.

Вариант ответа 4:
Результатом будет 'strawberry', так как это самая длинная строка в массиве.


Выберите один ответ:
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
:one:   :two:   :three:   :four:

*/



/*
 функция `findLongestString` проверяет только строки и находит самую длинную из них в массиве и его вложенных массивах.
*/

/**
 * Верный ответ: Вариант ответа 4.

Результатом будет 'strawberry', так как это самая длинная строка в массиве. Функция `findLongestString` рекурсивно проходится по всем элементам массива и его вложенных массивов, ищет самую длинную строку среди всех элементов и возвращает её. В данном случае, 'strawberry' имеет наибольшую длину среди всех строк, поэтому она и будет возвращена функцией.

Функция `findLongestString` рекурсивно проходится по всем элементам массива и его вложенных массивов. 

1. На каждом шаге она проверяет тип текущего элемента. Если текущий элемент является строкой (`typeof arr[i] === 'string'`), то функция сравнивает длину этой строки с длиной строки `longest`, которая хранит самую длинную строку, найденную до этого момента. Если текущая строка длиннее, чем `longest`, то `longest` обновляется.

2. Если текущий элемент является массивом (`typeof arr[i] === 'object'`), то функция рекурсивно вызывает саму себя для обработки вложенного массива. После этого она снова сравнивает длину найденной строки во вложенном массиве с длиной строки `longest` и обновляет `longest` при необходимости.

Таким образом, функция проходится по всем элементам массива и его вложенных массивов, ищет самую длинную строку среди всех элементов и возвращает её. В данном случае, 'strawberry' имеет наибольшую длину среди всех строк, поэтому она и будет возвращена функцией.
 */
