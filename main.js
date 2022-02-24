'use strict';

let firstNumber = Number(prompt('Введите первое число'));
let secondNumber = Number(prompt('Введите второе число'));

function slozhenie() {
    let summa = firstNumber + secondNumber;
    console.log( 'Результат: ' +  firstNumber + ' + ' + secondNumber +  ' = ' + summa);
}

slozhenie();

function vychitanie() {
    let raznitsa = firstNumber - secondNumber;
    console.log( 'Результат: ' +  firstNumber + ' - ' + secondNumber +  ' = ' + raznitsa);

}

vychitanie();

function umnozhenie() {
    let umnozh = firstNumber * secondNumber;
    console.log( 'Результат: ' +  firstNumber + ' * ' + secondNumber +  ' = ' + umnozh);
}

umnozhenie();

function delenie() {
    let chastnoe = firstNumber / secondNumber;
    console.log( 'Результат: ' +  firstNumber + ' / ' + secondNumber +  ' = ' + chastnoe);
}

delenie();