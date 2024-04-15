/**
 * Создание объектов
 * Creating Objects

 В JavaScript есть два способа создания объектов:

 ✓✓Написав объектный литерал

 ✓✓С помощью метода конструктора объектов

 Какой из них вы выберете, зависит от обстоятельств.  Узнаете о плюсах и минусах каждого из них, а также о том, когда один из них предпочтительнее другого.

 *********************************************************
 Defining objects with object literals
 Определение объектов с помощью объектных литералов

 Метод объектного литерала для создания объектов начинается со стандартного определения переменной с использованием ключевого слова let, за которым следует оператор присваивания:


 let person =

 Однако в правой части оператора вы будете использовать фигурные скобки с парами имя/значение, разделенными запятыми:
 */

let person = {eyes: 2, feet: 2, hands: 2, eyecolor:
        "blue"};

/*
Если вы не знаете, какие свойства будет иметь ваш объект при его создании, или если ваша программа требует добавления дополнительных свойств позже, вы можете создать объект с небольшим количеством свойств или даже без них, а затем добавить свойства к этому позже:
*/

let personBoy = {};
personBoy.eyes = 2;
personBoy.hair = "brown";

/*
Методы использовались для вывода текста:
 Document.write и
 console.log используют этот метод разделения свойств точкой, поэтому он может показаться вам знакомым. Точка между именем объекта и свойством указывает, что свойство принадлежит этому объекту. Обозначение через точку более подробно рассматривается в разделе «Получение и установка свойств объекта» далее.

Еще одна вещь, на которую следует обратить внимание в отношении объектов, заключается в том, что, как и массивы, объекты могут содержать несколько разных типов данных в качестве значений свойств.

Не очень тщательно охраняемый секрет настоящего понимания JavaScript заключается в знании того, что массивы и функции являются типами объектов и что
числовые, строковые и логические примитивные типы данных также могут использоваться в качестве объектов. Это означает, что они обладают всеми свойствами объектов и им можно назначать свойства так же, как и объектам.

Defining objects with an Object constructor
Определение объектов с помощью
Конструктор объекта

Второй способ определить объект — использовать конструктор Object.
Этот метод объявляет объект, используя новый объект, а затем заполняет его свойствами. Пример использования конструктора Object:
*/

let personGirl = new Object;

personGirl.feet = 2;
personGirl.name = "Sandy";
personGirl.hair = "black";

/*
Можно использовать метод создания объектов с помощью конструктора объектов, но обычно он считается худшим способом создания объектов. Основными причинами являются

✓✓ Он требует больше ввода, чем метод объектного литерала.

✓✓ Он не так хорошо работает в веб-браузерах.

✓✓ Его труднее читать, чем метод объектного литерала.
 */