// Task1
let numbers = []
for (let i = 10; i <= 20; i++ ) {
    numbers.push(i);
}
console.log(numbers.join(', '))

// Task2
let squares = []
for (let i = 10; i <= 20; i++ ) {
    squares.push(i * i);
}
console.log(squares.join(', '))

// Task3
for (let i = 1; i <= 10; i++ ) {
    console.log( i * 7 );
}

// Task4
let sum = 0
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log('Сума чисел от 1 до 15: ' + sum);

// Task5
let mult = 1
for (let i = 15; i <= 35; i++) {
    mult *=i;
}
console.log('Произведение чисел от 15 до 35: ' + mult)

// Task6
let sum1 = 0
for (let i = 1; i <= 500; i++) {
    sum1 += i / 500;
}
console.log('Среднее арифметическое всех целых чисел от 1 до 500' +sum1 );

// Task7
let sum2 = 0
for (let i = 30; i <= 80; i++) {
    if(i % 2 === 0) { 
        sum2 += i;
    }
}
console.log('Сумма всех парных чисел в диапозоне от 30 до 80:' + sum2);

// Task8
let divis = []
for (let i = 100; i <=200; i++) {
    if(i % 3 === 0) {
        divis.push(i)
    }
}
console.log(divis.join(', '));

// Task9
let number = 14;
let divis1 = []
for (let i = 1; i <= number; i++) {
    if (number % 1 === 0) {
        divis1.push(i);
    }
}
console.log('Делители числа' + number + '=' + divis1.join(', '));

// Task 10 + Task 11
let number1 = 14;
let parn = 0;
let parnsum = 0;
for (let i = 1; i <= number; i++) {
    if(number % i === 0){
        if (i % 2 === 0){
            parn++
            parnsum+= i
        }
    }
}
console.log('Количество парных делителей = ' + parn);
console.log('Сумма парных делителей = ' +parnsum) ;

// Task 12
for (let i = 1; i <= 10; i++) {
    console.log('Таблица умножения для ' + i + ':');
    for (let j = 1; j <= 10; j++) {
      console.log(i + ' * ' + j + ' = ' + (i * j));
    }
}




