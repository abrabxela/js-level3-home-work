// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

// findBiggestWord(str)
const str = "Это строка,разделенная,по запятым! И пробелам";

function findBiggestWord(str) {
  const wordsArray = str.split(/[ ,.!?-]+/);
  const longestWord = wordsArray.reduce((max, current) => {
    //return max.lenght < current.length ? current : max; Для Коли, Обьясни что не так? для всех.
    if (max.length < current.length) 
    {
      return current;
    } 
    else 
    {
      return max;
    }
  });
  console.log(longestWord);
}

// 2. написать функцию которая принимает число и возвращает перевернутое число

// function reverseNumber(number)

const number = 1234;
function reverseNumber(number) {
  const nString = number.toString();
  const revenString = nString.split("").reverse().join("");
  const reveNumber = parseInt(revenString);
  return reveNumber;
}

// 3.написать функцию которая будет принимать стринг значение
// и возвращать новое стринг значение только с уникальными символами
// function unique(str)
function unique(str) {
  const leter = str.split("");
  const result = new Array();
  leter.forEach((el) => {
    if (result.includes(el) === false) 
    {
      return result.push(el);
    } 
    else 
    {
      return result;
    }
  });
  console.log(result.join(''));
}

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды
// ( победа 3 очка, ничья 1 очко, поражение 0 )

// function calcPoints(win, draw, loss)

function calcPoints(win, draw, loss) {
  return win * 3 + draw;
}

// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение,
// минимальное значение,
// количество элементов,
// среднее арифметическое.

// function statisctics(arr);
const arr = [2, 32, 4, 5432, 67, 765, 2];
const stat = new Array();
function statisctics(arr) {
  const maxValue = arr.reduce((max, current) => {
    if (max < current) 
    {
      return current;
    } 
    else 
    {
      return max;
    }
  });
  const minValue = arr.reduce((min, current) => {
    //max < current ? current : max;
    if (min < current) 
    {
      return min;
    } 
    else 
    {
      return current;
    }
  });
  const amountValue = arr.length;
  let sum = 0;
  arr.forEach((el) => {
    sum = sum + el;
    return sum;
  });
  let avarageValue = sum / amountValue;
  stat.push({
    maxvalue: maxValue,
    minvalue: minValue,
    amountvalue: amountValue,
    avaragevalue: avarageValue,
  });
  console.log(stat);
}

// 6.Написать функцию которая принимает массив работников компании

// const workers = [
//   { name: "Jimm", salary: 40000, department: "IT" },
//   { name: "Bob", salary: 60300, department: "HR" },
//   { name: "Stacy", salary: 15000, department: "IT" },
//   { name: "Tom", salary: 55200, department: "DEVOPS" },
//   { name: "Kate", salary: 25000, department: "IT" },
//   { name: "John", salary: 40000, department: "HR" },
//   { name: "Billy", salary: 60000, department: "DEVOPS" },
// ];

// Функция должна вернуть объект
// {department: ‘Some department’, avarage: ‘some avarage value’}.
// В этом объекте будет department с самой большой стредней зарплатой из всех departments.

const workers = [
  { name: "Jimm", salary: 40000, department: "IT" },
  { name: "Bob", salary: 60300, department: "HR" },
  { name: "Stacy", salary: 15000, department: "IT" },
  { name: "Tom", salary: 55200, department: "DEVOPS" },
  { name: "Kate", salary: 25000, department: "IT" },
  { name: "John", salary: 40000, department: "HR" },
  { name: "Billy", salary: 60000, department: "DEVOPS" },
];

function maxAverDep(workers) {
  const result = {};
    
for (let i of workers) {
  if (!result[i.department]) 
  {
    result[i.department] = {
      totalSum: 0,
      count: 0,
    };
  }
  result[i.department].totalSum += i.salary;
  result[i.department].count++;
}
let maxSum = 0;
let dep;
for (let i in result) {
    result[i].totalSum = result[i].totalSum / result[i].count
    if(result[i].totalSum > maxSum)
    {
        maxSum = result[i].totalSum
        dep = i;
    }
}
return {
    department: dep,
    avarage: maxSum
};
}
