// ЗАДАЧА № 1
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
 // Текущая дата в Unix Timestamp и запись в переменную now;
  const now = +new Date();
// Создание экземпляра Date с датой рождения пользователя и получение Unix Timestamp даты рождения пользователя
  birthday = +new Date(birthday);
// Подсчет разницы между birthday и now в миллисекундах, сохранив в переменную diff;
  const diff = now - birthday
//Переменная с количеством миллисекунд в году 
  const millisecondsYear = 24 * 60 * 60 * 1000 * 365;
// Определение возраста пользователя, разделив diff на количество миллисекунд в году 
  const age = diff / millisecondsYear;
// Возврат в качестве результата работы функции, анализ age, является ли клиент совершеннолетним ( > 18 лет).
  return (age > 18);

}


// ЗАДАЧА № 2

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
// Создание переменной sound, с присвоением ей значения поля sound объекта animal;
  const sound = animal.sound
// Вывод резултата в зависимости от условий
   if (typeof sound == "undefined") {
     animal = null;
     return animal;
   } else {
     return sound;
   }
}

// ЗАДАЧА № 3

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
  let sumResult = 0;
  // Подсчит среднего балла ученика average;
  for (let i = 0; i < marks.length; i++) {
      sumResult = sumResult + +marks[i];
    }
  const average = sumResult / marks.length;
  // Округление среднего бала average до ближайшего целого
  const roundedAverage = Math.round(average);
  
  return roundedAverage;
}