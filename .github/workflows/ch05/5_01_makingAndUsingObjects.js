/**
 «Мы ничего не можем сделать с объектом, у которого нет имени».
 — Морис Бланшо «Литература и право на смерть»

 Узнаем, почему следует использовать объекты, как их использовать и какими особыми возможностями они обладают для создания программ и улучшения программирования.
 *******************************************************
 Object of My Desire
 Объект моего желания

 В дополнение к пяти примитивным типам данных в JavaScript также есть тип данных, называемый объектом. Объекты JavaScript инкапсулируют данные и функциональность в повторно используемых компонентах.

 Чтобы понять, что такое объекты и как они работают, полезно сравнить объекты JavaScript с физическими объектами из реальной жизни. Возьмем, к примеру, гитару.


 У гитары есть вещи, которые составляют ее суть, и есть вещи, которые она делает. Вот несколько фактов о гитаре, которую мы используем в этом примере:

 ✓✓ Имеет шесть струн.
 ✓✓ Это черно-белое изображение.
 ✓✓ Он электрический.
 ✓✓Его тело твердое.

 Некоторые вещи, которые может делать эта гитара (или которые можно сделать с гитарой):

 ✓✓Звучание струны

 ✓✓Увеличьте громкость

 ✓✓Уменьшить громкость

 ✓✓Натяните струны

 ✓✓Отрегулируйте тон

 ✓✓Ослабьте струны

 Если бы эта гитара была объектом JavaScript, а не реальным объектом, то то, что она делает, называлось бы ее методами,
 а вещи, составляющие гитару, такие как ее струны и тип корпуса, были бы ее свойствами.

 Методы и свойства объектов пишутся одинаково; в виде пар имя-значение, с двоеточием, разделяющим имя и значение. Когда свойство имеет в качестве значения функцию, оно называется методом.

 На самом деле все внутри объекта является свойством. Мы просто вызываем свойство со значением функции под другим именем: методом.

 Так могут выглядеть свойства нашей гитары как объекта JavaScript.
 */

let guitar = {
    bodyColor: "black",
    scratchPlateColor: "white",
    numberOfString: 6,
    brand: "Yamaha",
    bodyType: "solid",
    strum: function () { },
    tune: function () { }
};