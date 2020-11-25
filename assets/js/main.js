// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const dayofweek = document.getElementById('dayofweek');
const dayMonth = document.getElementById('daymonth');
const quotesResult = document.getElementById('quotes');
const quotesAuthor = document.getElementById('quotes-author');
const weatherIcon = document.querySelector('.weather-icon');
const weatherAbout = document.getElementById('weather__about');
const weatherTemperature = document.getElementById('weather__temperature');
const weatherHumidity = document.getElementById('weather__humidity');
const weatherWind = document.getElementById('weather__wind');
const weatherPressure = document.getElementById('weather__pressure');
const city = document.querySelector('.weather__city');
const cityId = document.getElementById('weather__city');
const refreshQuote = document.querySelector('.quotes-btn');
const errorCode = document.querySelector('.errors');

// Images
let night = './assets/images/night/';
let morning = './assets/images/morning/';
let day = './assets/images/day/';
let evening = './assets/images/evening/';
let imgAllDay = ['./assets/images/night/', './assets/images/morning/','./assets/images/day/','./assets/images/evening/'];
let imagesR = [];
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;
let chisla = imageRandom();

function imageRandom() {
  let arr = [];
     while (arr.length < 20) {
    let rnm = Math.round(Math.random(images.length)*19);
    if (arr.indexOf(rnm) == -1) {
          arr.push(rnm);    
    }
  }
   return arr;
}

function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  // console.log(src);
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
}

function getImage() {
  let today = new Date();
  let hour = today.getHours();
  const index = i % images.length;
  let imageSrc;
  if (hour >= 0 && hour < 6) {
    // Night 
    imageSrc = night + images[chisla[index]];
  } else if (hour >= 6 && hour < 12) {
    // Morning 
    imageSrc = morning + images[chisla[index]];
  } else if (hour >= 12 && hour < 18) {
    // Afternoon 
    imageSrc = day + images[chisla[index]];
  } else if (hour >= 18 && hour <= 23) {
    // Evening 
    imageSrc = evening + images[chisla[index]];
  }
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
} 

const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);
// quote refresh
refreshQuote.addEventListener('click', quotes);
// Show Time 
function showTime() {
  // let today = new Date(2020, 10, 22, 18, 05, 01);
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // Set AM or PM
  // const amPm = hour >= 12 ? 'PM' : 'AM';
  // 12hr Format
  // hour = hour % 12 || 12;

  // Changer Images Every Hour
  if (min < 1 && sec < 1) {
    setBgGreet()
}
  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;


  // ${showAmPm ? amPm : ''}
  setTimeout(showTime, 1000);
}

// Add Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Options
// ShowAmPm
const showAmPm = true;

// Set Background and Greeting
function setBgGreet() {
  let today = new Date();
  hour = today.getHours();

  if (hour >= 0 && hour < 6) {
    // Night Ночь
    // document.body.style.backgroundImage = "url('/assets/images/night/01.jpg')";
    getImage();
    greeting.textContent = 'Доброй ночи,';
    document.body.style.color = 'white';

  } else if (hour >= 6 && hour < 12) {
    // Morning Утро
    // document.body.style.backgroundImage = "url('/assets/images/morning/01.jpg')";
    getImage();
    greeting.textContent = 'Доброе утро,';
    document.body.style.color = 'white';

  } else if (hour >= 12 && hour < 18) {
    // Afternoon День
    // document.body.style.backgroundImage = "url('/assets/images/day/01.jpg')";
    getImage();
    greeting.textContent = 'Добрый день,';
    document.body.style.color = 'white';


  } else if (hour >= 18 && hour <= 23) {
    // Evening Вечер
    // document.body.style.backgroundImage = "url('/assets/images/Evening/02.jpg')";
    getImage();
    greeting.textContent = 'Добрый вечер';
    document.body.style.color = 'white';    
  }
}

// Get week day
function getWeekDay() {
  let today = new Date();
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  dayofweek.textContent = days[today.getDay()];
}

// Get Day Month
function getDayMonth() {
  let today2 = new Date();
  let Month = ['Января',
     'Февраля',
     'Марта',
     'Апреля',
     'Мая',
     'Июня',
     'Июля',
     'Августа',
     'Сентября',
     'Ноября',
     'Октября',
     'Декабря',
  ];
  let dayToday2 = today2.getDate();
  dayMonth.textContent = dayToday2 +" "+ Month[today2.getMonth()+1];
}

// CheckFocus
function checkFocus() {
  let n = name.textContent.trim().length;
  let f = focus.textContent.trim().length;
  if (f === 0) {
    focus.textContent = "Введите приоритетную цель";
  } 
}

function checkerStorage() {
  let ls = localStorage.getItem('name').trim().length;
  let ls2 = localStorage.getItem('focus').trim().length;
  if (ls === 0) {
    localStorage.setItem('name', 'Введите имя');
  }  
  // else if (ls2 === 0) {
  //   localStorage.setItem('focus', '[Введите приоритетную цель]');
  // }
}

// CheckName
function checkName() {
  let n = name.textContent.trim().length;
  let nstorage = localStorage.getItem('name');
  if (n === 0) {
    name.textContent = nstorage;
  } 
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null || !localStorage.getItem('name')) {
    name.textContent = 'Введите имя';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name 
function setName(e) {
  if (e.type === 'keypress') {
    if (e.key === 'Enter' && e.target.innerText !== '') {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
    }
    if (e.key === 'Enter' && e.target.innerText === '') {
      name.blur();
      name.textContent = localStorage.getItem('name');

    }
  } else if (e.type === 'click'){
    e.target.innerText = '';
    name.focus();
  } else {
  getName()
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null || !localStorage.getItem('focus')) {
    focus.textContent = 'Введите приоритетную цель';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus 

  function setFocus(e) {
    if (e.type === 'keypress') {
      if (e.key === 'Enter' && e.target.innerText !== '') {
          localStorage.setItem('focus', e.target.innerText);
          focus.blur();
      }
      if (e.key === 'Enter' && e.target.innerText === '') {
        focus.blur();
        focus.textContent = localStorage.getItem('focus');
  
      }
    } else if (e.type === 'click'){
      e.target.innerText = '';
      focus.focus();
    } else {
    getFocus()
    }
  }

// Get Town
function getTown() {
  if (localStorage.getItem('city') === null) {
    city.textContent = 'Введите город';
  } else {
    city.textContent = localStorage.getItem('city');
  }
}

// Set Town 
function setTown(e) {
  if (e.type === 'keypress') {
    if (e.key === 'Enter' && e.target.innerText !== '') {
        localStorage.setItem('city', e.target.innerText);
        getWeather();
        city.blur();
    }
    if (e.key === 'Enter' && e.target.innerText === '') {
        city.blur();
        getTown();
        city.textContent = localStorage.getItem('city');

    }
  } else if (e.type === 'click'){
    e.target.innerText = '';
    city.focus();
  } else {
  getTown()
  }
}

// Quotes
async function quotes() {
  const url = `https://type.fit/api/quotes`;
  const res = await fetch(url);
  const data = await res.json(); 
  let id = Math.floor(Math.random() * data.length);  
  quotesResult.textContent = `"${data[id].text}"`;
  quotesAuthor.textContent = `${data[id].author}`;
}

// Weather
async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=1ea2f346db9cb5228dbd44544c5cf4c6&units=metric`;
    const res = await fetch(url);
    const data = await res.json();     
    const errorMessage = data.cod;
    weatherIcon.className = 'weather-icon owf owf-5x';
    document.addEventListener('DOMContentLoaded', getWeather);
    city.addEventListener('keypress', setCity);
    if (errorMessage == 404) {
      //errorCode.textContent = "Проверьте правильность города";
      weatherAbout.textContent = "Город неверен" ;
      weatherTemperature.textContent = "";
      weatherHumidity.textContent = "";
      weatherWind.textContent = "";
      weatherPressure.textContent = "";

  } else {
      // errorCode.textContent = "";
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      let feelsLike = data.main.feels_like;
      let mmRs = Math.floor(data.main.pressure * 0.75006375541921);
      weatherAbout.textContent = `${data.weather[0].description},` ;
      weatherTemperature.textContent = `${Math.floor(data.main.temp)}℃`;
      weatherHumidity.textContent = `${data.main.humidity}%`;
      weatherWind.textContent = `${data.wind.speed} м/с`;
      weatherPressure.textContent = `${mmRs} мм рт. ст. `;
  };
}

function clearTextField() {
  this.textContent = '';
}

function setCity(e) {
  if (e.code === 'Enter') {
    if (e.which === 13 || e.keyCode === 13) {
      if (e.target.innerText !== '') {
        localStorage.setItem('city', e.target.innerText);
      } else {
        localStorage.setItem('city', '');
      }
      getWeather();
      city.blur();
      getTown();
      }
    } else {
      if (e.target.innerText !== '') {
        localStorage.setItem('city', e.target.innerText);
      } else {
        localStorage.setItem('city', '');
        getTown();
      }
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
city.addEventListener('keypress', setTown);
city.addEventListener('blur', setTown);
name.addEventListener('click', clearTextField);
focus.addEventListener('click', clearTextField);
city.addEventListener('click', clearTextField);
// RUN
showTime();
setBgGreet();
getName();
getFocus();
checkFocus();
getTown();
getWeekDay();
getDayMonth();
quotes();
getWeather();
checkerStorage();
