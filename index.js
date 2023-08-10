//1. Создайте пустой массив с именем `grades` и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию `Math.random()`.
let grades = [];
const generateArray = (length, max) => (
    [...new Array(length)]
    .map(() => Math.round(Math.random() * max))
);
grades = generateArray(12, 100);
console.log(grades);

const gradesContainer = document.createElement('ol');

grades.forEach(item => {
    const gradesItem = document.createElement('li');
    gradesItem.textContent = `Оценка студента: ${item}`;
    gradesContainer.append(gradesItem);
});

average = document.getElementById('average');
document.body.insertBefore(gradesContainer, average);
//2. Рассчитайте и выведите средний балл студентов, используя методы массивов.
const getAverage = (grades) => {
    const sum = grades.reduce((acc, gradesItem) => acc + gradesItem, 0);
    const length = grades.length;
    return sum / length;
};
console.log(getAverage(grades));

const averageGrade = document.createElement('div');
averageGrade.textContent = `Средний балл студентов: ${Math.round(getAverage(grades))}`;

max = document.getElementById('max');
document.body.insertBefore(averageGrade, max);
//3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
const maxGrade = Math.max(...grades);

const maximumGrade = document.createElement('div');
maximumGrade.textContent = `Максимальный балл студентов: ${maxGrade}`;

min = document.getElementById('min');
document.body.insertBefore(maximumGrade, min);
//4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
const minGrade = Math.min(...grades);

const minimumGrade = document.createElement('div');
minimumGrade.textContent = `Минимальный балл студентов: ${minGrade}`;

positive = document.getElementById('positive');
document.body.insertBefore(minimumGrade, positive);
// 5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
function moreThan60(value) {
    return value >= 60;
}
const posGrade = grades.filter(moreThan60);
console.log(posGrade);

const posGradeNumber = posGrade.length;

const positiveGrades = document.createElement('div');
positiveGrades.textContent = `Положительные баллы студентов: ${posGrade}, количество: ${posGradeNumber}`;

negative = document.getElementById('negative');
document.body.insertBefore(positiveGrades, negative);
//6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
function lessThan60(value) {
    return value < 60;
}
const negGrade = grades.filter(lessThan60);
console.log(negGrade);

const negGradeNumber = negGrade.length;

const negativeGrades = document.createElement('div');
negativeGrades.textContent = `Отрицательные баллы студентов: ${negGrade}, количество: ${negGradeNumber}`;

letters = document.getElementById('letters');
document.body.insertBefore(negativeGrades, letters);
//7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
    //- Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
    //- Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
    //- Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
    //- Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
    //- Если оценка ниже 20, преобразуйте её в "E"
const letterGrades = grades.map(function(gradesItem) {
    let letterGrade;
    if (gradesItem >= 80) {
        return letterGrade = 'A';
    } else if (gradesItem < 80 && gradesItem >= 60) {
        return letterGrade = 'B';
    } else if (gradesItem < 60 && gradesItem >= 40) {
        return letterGrade = 'C';
    } else if (gradesItem < 40 && gradesItem >= 20) {
        return letterGrade = 'D';
    } else {
        return letterGrade = 'E';
    }
});

console.log(letterGrades);

const letterGradesContainer = document.createElement('ol');

letterGrades.forEach(item => {
    const letterGradesItem = document.createElement('li');
    letterGradesItem.textContent = `Оценка студента: ${item}`;
    letterGradesContainer.append(letterGradesItem);
});

document.body.appendChild(letterGradesContainer);

//Выведите все найденные значения на экран