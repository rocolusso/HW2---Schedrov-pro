'use strict';

let firstNumber = Number(prompt('Введите первое число'));
let secondNumber = Number(prompt('Введите второе число'));

function slozhenie() {
    let summa = firstNumber + secondNumber;
    console.log( 'Сумма чисел : ' + summa);
}

slozhenie();

function vychitanie() {
    let raznitsa = firstNumber - secondNumber;
    console.log( 'Разница чисел : ' + raznitsa);
}

vychitanie();

function umnozhenie() {
    let umnozh = firstNumber * secondNumber;
    console.log( 'Произведение чисел : ' + umnozh);
}

umnozhenie();

function delenie() {
    let chastnoe = firstNumber / secondNumber;
    console.log( 'Частное чисел : ' + chastnoe);
}

delenie();