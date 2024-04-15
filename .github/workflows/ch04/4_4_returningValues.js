/*
Returning Values
Возвращаемые значения

В примере из предыдущего файла 4_3 мы создаем функцию, которая просто печатает строку в консоль/ в браузер. После выполнения единственного оператора console.log / document.write операторов для выполнения больше не требуется, поэтому программа выходит из функции и переходит к следующему оператору после вызова функции.

Большинство функций возвращают значение (кроме неопределенного) после завершения своей работы. Затем вы можете использовать это значение в остальной части программы.Создадим функцию, возвращающую значение. Возвращаемое значение функции затем присваивается переменной и выводится на консоль.

Возврат значения из функции
*/
function getHello() {
    return 'Hello!'
    };
    
    let helloText = getHello();
    
    console.log(helloText);  // Hello!
    
    /*
    Оператор return обычно является последним оператором в функции. При выполнении функция завершается. Вы можете использовать оператор return для отправки литерального значения любого типа (например, «Привет!» или 3) за пределы функции или для возврата значения переменной, выражения, массива или объекта или даже другой функции! 
    */
    
    function getCircumference() {
        let radius = 12;
        return 2 * Math.PI * radius;
    };
    
    console.log(getCircumference());  // 75.39822368615503
    
    //
    
    /*
    Passing and Using Arguments
    Передача и использование аргументов
    
    Чтобы функции могли делать одно и то же с разными входными данными, им нужен способ, которым программисты могли бы предоставлять им входные данные. 
    */
    
    function addNumbers(numbersToAdd) {
        let sum = 0;
        for (oneNumber in numbersToAdd) {
            sum = sum + numbersToAdd[oneNumber];
        }
        return sum;
    }
    
    let myNumbers1 = [2, 4, 2, 7];
    let myNumbers2 = [3333, 222, 111];
    let myNumbers3 = [777, 555, 777, 555];
    
    let sum1 = addNumbers(myNumbers1);
    let sum2 = addNumbers(myNumbers2);
    let sum3 = addNumbers(myNumbers3);
    
    console.log(`sum1 = ${sum1}`);
    console.log(`sum2 = ${sum2}`);
    console.log(`sum3 = ${sum3}`);
    
    
    /*
    В функции addNumbers(numbersToAdd) круглые скобки после имени функции в ее объявлении используются для указания параметров функции. 
    
    Разница между параметрами и аргументами поначалу может сбить с толку.
    
    Вот как это работает:
    
    ✓✓Параметры — это имена, которые вы указываете в определении функции.
    
    ✓✓Аргументы — это значения, которые вы передаете функции. Они принимают имена параметров при их передаче.
    
    Когда вы вызываете функцию, вы включаете данные (аргументы) в те места, где определение функции имеет параметры. Обратите внимание, что аргументы, передаваемые функции, должны быть перечислены в том же порядке, что и параметры в определении функции.
    
    В следующей функции мы определяем два параметра для функции myTacos:
    */
    
    function myTacos(meat, produce) {
        // your code here
    };
    
    /*
    Когда вы вызываете эту функцию, вы включаете данные (аргументы) в те места, где определение функции имеет параметры. Обратите внимание, что аргументы, передаваемые функции, должны быть перечислены в том же порядке, что и параметры в определении функции:
    */
    
    myTacos("beef", "onions");
    
    /*
    Значения, переданные в функцию, станут значениями локальных переменных внутри функции, и им будут присвоены имена параметров функции.
    равнозначно, будто мы делаем присваивание:
    */
     
    let meat = "beef";
    let produce = "onions";
    
    /*
    расширим функцию myTacos  и это позволяет выводить на консоль значения двух аргументов. Передача аргумента аналогична использованию оператора let внутри функции, за исключением того, что значения могут поступать извне функции.
    */
    function myTacos(meat, produce) {
        console.log(meat);  // writes 'beef'
        console.log(produce);  // writes 'onions'
    };
    
    myTacos('beef', 'onions');
    
    myTacos(meat, produce);
    
    myTacos();
    // undefined
    // undefined
    // переменные и аргументы функции для передачи данных параметрам не одно и то же.
    
    // если функция переопределена несколько раз, то будет выполняться последняя версия
    
    /*
    В определении функции можно указать до 255 параметров. Однако крайне необычно писать функцию, которая принимает такое количество параметров! Просто ради того, чтобы ваш код был чистым и понятным, если вы обнаружите, что вам нужно много параметров, вам следует подумать, есть ли лучший способ сделать это.
    */
    
    /*
    Passing arguments by value
    Передача аргументов по значению
    
    Если вы используете переменную с одним из примитивных типов данных для передачи аргумента, аргумент передается по значению. 
    Это означает, что новая переменная, созданная внутри функции, полностью отделена от переменной, используемой для передачи аргумента, и что бы ни случилось после того, как значение попадет в функцию, переменная вне функции не изменится.
    
    Примитивными типами данных в JavaScript являются строковые, числовые, логические, неопределенные и нулевые.
    string, number, Boolean, undefined, and null.
    Создадим несколько переменных, которым присваиваются значения, а затем они передаются в функцию. В этом случае параметры функции имеют те же имена, что и переменные, используемые для передачи аргументов. Несмотря на то, что значения переменных внутри функции изменяются, значения исходных переменных остаются прежними.
    */
    
    function addToMyNumbers(number1, number2) {
        number1++;
        number2++;
        console.log(`number 1: ${number1}`);
        console.log(`number 2: ${number2}`);
    };
    
    let number1 = 3;
    let number2 = 12;
    
    addToMyNumbers(number1, number2);  // вызвали функцию и передали аргументы
    console.log(`original number1: ${number1}`)
    console.log(`original number2: ${number2}`);
    
    // number 1: 4
    // number 2: 13
    // original number1: 3
    // original number2: 12
    
    /*
    Passing arguments by reference
    Передача аргументов по ссылке
    
    В то время как примитивные переменные JavaScript (строки, числа, логические значения, неопределенное значение undefined и значение null) передаются функциям по значению, объекты JavaScript передаются по ссылке. Это означает, что если вы передаете объект в качестве аргумента функции, любые изменения этого объекта внутри функции также изменят значение вне функции. Последствия и использование передачи по ссылке выходят сейчас за рамки, но рассматриваются позже.
    */
    
    
    /*
    Вызов функции без всех аргументов
    Calling a function without all the arguments
    Вам не нужно всегда вызывать функцию с тем же количеством параметров, которое указано в определении функции. Если определение функции содержит три параметра, но вы вызываете его только с двумя, третий параметр создаст в функции переменную со значением undefined.
    */
    
    addToMyNumbers(number1);  // вызвали функцию и передали не все аргументы
    // number 1: 4
    // number 2: NaN
    
    /*
    Setting default parameter values
    Установка значений параметров по умолчанию
    
    Если вы хотите, чтобы аргументы по умолчанию имели значение, отличное от неопределенного, вы можете установить значения по умолчанию. Наиболее широко поддерживаемый и общепринятый способ сделать это — проверить аргументы внутри значения функции и установить значения по умолчанию, если тип данных аргумента не определен.
    */
    
    function welcome(yourName) {
        if (typeof yourName === 'undefined') {
            yourName = 'friend';
        };
        console.log(`Hello, ${yourName}`);
    };
    
    welcome();  // Hello, friend
    
    // аналогично
    
    function welcomeFriend(yourName = 'Друг') {
        console.log(`Привет, ${yourName}`);
    };
    
    welcomeFriend();  // Привет, Друг
    
    /*
    Calling a function with more argument than parameters
    Вызов функции с большим количеством аргументов, чем параметров
    
    Если вы вызываете функцию с количеством аргументов, превышающим количество параметров, локальные переменные не будут созданы для дополнительных аргументов, поскольку функция не знает, как их вызывать.
    
    Существует хитрый трюк, который можно использовать для получения значений аргументов, которые передаются функции, но не имеют соответствующего параметра: объект Argument- аргумент в виде объекта 
    */
    
    welcomeFriend('Дуня', 'Федот', 'Параша', 'Митрофан');  // Привет, Дуня
    
    /*
    Getting into arguments with the arguments object
    Передача аргументов с помощью объекта аргументов
    
    Если вы не знаете, сколько аргументов будет передано в функцию, вы можете использовать объект аргумента, встроенный в функции в JavaScript, чтобы получить все аргументы и использовать их.
    
    Объект Arguments содержит массив всех аргументов, передаваемых функции. Проходя цикл по массиву (с помощью цикла for или for ... in), вы можете использовать каждый аргумент, даже если количество аргументов может меняться при каждом вызове функции.
    
    Создадим функцию объекта Arguments для представления приветственного сообщения кому-то с двумя вторыми именами, а также кому-то с одним вторым именем.
    */
    
    function flexibleWelcome() {
        let welcome = "Welcome, ";
        for (let i = 0; i < arguments.length; i++) {
            welcome = welcome + arguments[i] + ' ';
        };
    return welcome;
    };
    
    console.log(flexibleWelcome("Митрофанов", "Митрофан", "Митрофанович"));  // Welcome, Митрофанов Митрофан Митрофанович
    
    console.log(flexibleWelcome("Дуняша", "Федотовна"));  // Welcome, Дуняша Федотовна 
    
    /*
    `arguments` - это встроенный объект в JavaScript, который доступен внутри каждой функции и содержит все переданные ей аргументы в виде массивоподобного объекта.
    
    В нашей функции `flexibleWelcome`, она не определяет явно параметры. Вместо этого она использует `arguments`, чтобы получить доступ к всем переданным ей аргументам независимо от их количества. Таким образом, функция может принимать переменное количество аргументов и формировать строку приветствия на основе этих аргументов.
    
    К примеру, если вызвать `flexibleWelcome("Митрофанов", "Митрофан", "Митрофанович")`, то `arguments` будет содержать три значения: "Митрофанов", "Митрофан", "Митрофанович".
    
    Используем цикл `for`, чтобы перебирать все аргументы в `arguments` и объединять их в строку приветствия `welcome`.
    
    Когда функция вызывается с `console.log(flexibleWelcome("Митрофанов", "Митрофан", "Митрофанович"))`, она вернет "Welcome, Митрофанов Митрофан Митрофанович".
    
    Таким образом, `arguments` предоставляет возможность создавать функции с переменным количеством аргументов, что делает функцию более гибкой и универсальной. Однако, следует учитывать, что использование `arguments` может усложнить чтение и понимание кода, и в современном JavaScript его использование не рекомендуется в связи с появлением возможности использовать rest параметры.
    */
    
    /*
    функция с использованием синтаксиса rest параметров:
    */
    
    function flexibleWelcomeRest(...names) {
        let welcome = "Welcome, ";
        for (let i = 0; i < names.length; i++) {
            welcome = welcome + names[i] + ' ';
        }
        return welcome;
    }
    
    console.log(flexibleWelcomeRest("Митрофанова", "Дуняша", "Митрофановна"));  
    // Выведет: Welcome, Митрофанова Дуняша Митрофановна
    
    console.log(flexibleWelcomeRest("Митрофан", "Федотович"));  
    // Выведет: Welcome, Митрофан Федотович
    
    /*
    Здесь мы определяем функцию `flexibleWelcome` с параметром `...names`, который является rest параметром. Этот параметр собирает все переданные аргументы в массив `names`, который можно легко использовать внутри функции.
    
    Этот подход более современный и предпочтительный в сравнении с использованием объекта `arguments`, так как rest параметры предоставляют более явное и читаемое объявление функции с переменным количеством аргументов.
    */
    /*
    
    Вы можете использовать метод `join()` для объединения всех элементов массива в одну строку без использования цикла `for`. Вот как это можно сделать:
    */
    
    function flexibleWelcomeJoin(...names) {
        let welcome = "Welcome, " + names.join( ' ' );
    
        return welcome;
    };
    
    console.log(flexibleWelcomeJoin("Дунин", "Митрофан",  "Митрофанович"));  
    // Welcome, Дунин Митрофан Митрофанович
    
    /*
    Этот код создает строку, начинающуюся с "Welcome," и затем объединяет все элементы массива `names` с помощью пробела с помощью метода `join()`.
    */