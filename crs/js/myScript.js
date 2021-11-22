var hi = confirm("Привет, узнаем стоймость твоего сайта?");
if (hi){
    let choice = prompt("Выбери тип сайта: 1-Сайт-визитка, 2-Лендинг, 3-Интернет-магазин, 4-Другой тип сайта. Введите нужную цифру.");
    let choice_2 = prompt("Выбери дизайн сайта: 1-Классический, 2-Минимализм, 3-Реализм, 4-Другой дизайн сайта. Введите нужную цифру.");
    let choice_3 = prompt("Нужна ли вам адаптивность сайта: 1-Да или 2_Нет. Введите нужную цифру.")
var i = allOtvet(choice);
var j = allOtvet_2(choice_2);
var t = allOtvet_3(choice_3);
function allOtvet (i){
    i = Number (i);
     if(i < 5) {
         switch (i) {
        case 1: i = 1500;
            break;
        case 2: i = 3000;
            break;
        case 3: i = 5000;
            break;
        case 4: i = 2000;
            break;
     } 
    }  else {
        i = prompt("Выбери тип сайта: 1-Сайт-визитка, 2-Лендинг, 3-Интернет-магазин, 4-Другой тип сайта. Введите нужную цифру.");
       allOtvet (i);
    }
    return i;
}
function allOtvet_2 (j){
    j = Number(j);
     if(j < 5){
         switch(j) {
        case 1: j = 1500;
            break;
        case 2: j = 3000;
            break;
        case 3: j = 5000;
            break;
        case 4: j = 2000;
            break;
     } 
    }  else{
        j = prompt("Выбери дизайн сайта: 1-Классический, 2-Минимализм, 3-Реализм, 4-Другой дизайн сайта. Введите нужную цифру.");
       allOtvet_2 (j);
    }
    return j;}
function allOtvet_3 (t){
    t = Number(t);
     if(t < 3){
         switch(t) {
        case 1: t = 2500;
            break;
        case 2: t = 0;
            break;
     } 
    }  else{
        t = prompt("Нужна ли вам адаптивность сайта: 1-Да или 2_Нет. Введите нужную цифру.");
       allOtvet_3 (t);
    }
    return j;}
    alert("Общая стоймость: " + (i + j +t) + "." + " Приятно пользоваться сайтом))))))")
}
else{
    alert("Хорошо,приятно посмотреть сайт)))))")
}
console.log(i);
console.log(j);
console.log(t);