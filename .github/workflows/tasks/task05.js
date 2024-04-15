 /*
 вопрос-тест на тему JavaScript с использованием операторов || (логическое "или"), && (логическое "и") и ! (логическое "не"):
*/
 /*
Задача 4
Какое значение будет возвращено в следующем выражении?
*/

let x = 5;
let y = 10;
let z = 15;
let result = (x > y || y < z) && !(z === x);

/*
1) true  
2) false  
3) undefined  
4) null  
*/

/*
Ответы:

a) true  
b) false 
c) undefined  
d) null  
*/
/*
1) true (верный ответ)  
Объяснение:  
Выражение `(x > y || y < z)` оценивается как true, потому что хотя `x > y` является false, `y < z` является true, и оператор || (логическое "или") возвращает true, если хотя бы один из его операндов true. Затем выражение `!(z === x)` оценивается как true, потому что `z === x` является false, и оператор ! (логическое "не") инвертирует это значение на true. Наконец, выражение `(true && true)` оценивается как true, потому что оба операнда равны true.
*/
console.log(result);