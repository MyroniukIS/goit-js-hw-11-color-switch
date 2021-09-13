const body = document.querySelector("body");
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

//генерация случайного цвета
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let btnIsActive = false;
let intervalId = null;
let colorsArrLength = colors.length;
let timeInterval = 1000;

//функція зміни кольору
function startСolorСhange () {
    if (btnIsActive) {
        return;
    }

    btnIsActive = true;

    btnStart.setAttribute('off', 'off')

    intervalId = setInterval(() => {
    body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colorsArrLength - 1)]}`
}, timeInterval)
}

//функція зупинки зміни кольору
function stopColorChange () {
    btnIsActive = false
    btnStart.removeAttribute('off')
    clearInterval(intervalId);
}


btnStart.addEventListener('click', startСolorСhange);
btnStop.addEventListener('click', stopColorChange);