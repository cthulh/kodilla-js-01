'use strict';
var celcTemp;
var farnhTemp;
// Buttons
var buttonCelcToFarnh = document.getElementById("celc_to_farnh");
var buttonFarnhToCelc = document.getElementById("farnh_to_celc");
// Temp calculation divs
var farnhOutput = document.getElementById("farnh_temp");
var celcOutput = document.getElementById("celc_temp");
// Info divs
var waterForm = document.getElementById("water_form");
var weatherClothing = document.getElementById("weather_clothing");
var tempTrivia = document.getElementById("temp_trivia");

// Display with two decimal places
function decimalFormat(num,dec){
  return parseFloat(num).toFixed(dec)
}

// Water form
function updateWaterForm(temp){
  console.log("Water form in : " + temp);
  if (temp <= 0) {
    waterForm.innerHTML = "WATER FORM: Water in " + decimalFormat(celcTemp,2) + " C is frozen solid!";
  } else if (temp > 0 && temp <= 99) {
    waterForm.innerHTML = "WATER FORM: Water in " + decimalFormat(celcTemp,2) + " C is liquid!";
  } else {
    waterForm.innerHTML = "WATER FORM: Water in " + decimalFormat(celcTemp,2) + " C is in gas form!";
  }
}

// Weather clothing
function updateWeatherClothing(temp){
  console.log("Weather clothing in : " + temp);
  if (temp > -40 && temp <= 0) {
    weatherClothing.innerHTML = "DRESS FOR THE WEATHER: If it's " + decimalFormat(celcTemp,2) + " C, you need warm winter jacket and gloves!";
  } else if (temp > 0 && temp <= 10) {
    weatherClothing.innerHTML = "DRESS FOR THE WEATHER: If it's " + decimalFormat(celcTemp,2) + " C, you need a hat and extra layers!";
  } else if (temp > 10 && temp <= 18) {
    weatherClothing.innerHTML = "DRESS FOR THE WEATHER: If it's " + decimalFormat(celcTemp,2) + " C, you can wear a t shirt and trousers";
  } else if (temp > 18 && temp <= 30) {
    weatherClothing.innerHTML = "DRESS FOR THE WEATHER: If it's " + decimalFormat(celcTemp,2) + " C, you can wear a t shirt and shorts";
  } else if (temp >= 30 && temp <= 41) {
    weatherClothing.innerHTML = "DRESS FOR THE WEATHER: If it's " + decimalFormat(celcTemp,2) + " C, it's time to hide in shade!";
  } else {
    weatherClothing.innerHTML = "DRESS FOR THE WEATHER: If it's " + decimalFormat(celcTemp,2) + " C, you need to stay indoors or you will die...";
  }
}

// Temp trivia
function updateTempTrivia(temp){
  console.log("Temp trivia in : " + temp);
  tempTrivia.innerHTML = "<br>Temperature trivia:<br><ul>";
  if (temp < -31.00) {
    tempTrivia.innerHTML += "<li>Temperature is lower than -31C, the lowest operating temperaturte of a most resistant mobile phone!"
  }
  if (temp < -39.00) {
    tempTrivia.innerHTML += "<li>Temperature is lower than -39C, the melting temperature of mercury!"
  }
  if (temp < -216.00) {
    tempTrivia.innerHTML += "<li>Temperature is lower than -216C, the coldest planet in the Solar System, Uranus!"
  }
  if (temp === 0.00) {
    tempTrivia.innerHTML += "<li>Temperature is 0C, the melting temperature of ice"
  }
  if (temp < 13.70) {
    tempTrivia.innerHTML += "<li>Temperature below 13.7C, the lowest body temperature recorded in a human!"
  }
  if (temp < 37.00) {
    tempTrivia.innerHTML += "<li>Temperature below 37C, the normal body temperature in a human!"
  }
  if (temp === 37.00) {
    tempTrivia.innerHTML += "<li>Temperature is 37C, the normal body temperature in a human!"
  }
  if (temp > 37.00) {
    tempTrivia.innerHTML += "<li>Temperature over 37C, the normal body temperature in a human!"
  }
  if (temp > 46.50) {
    tempTrivia.innerHTML += "<li>Temperature over 46.5C, the highest body temperature in a human!"
  }
  if (temp > 71.00) {
    tempTrivia.innerHTML += "<li>Temperature over 71C, the highest surface temperature on Earth, recorded in Iran in 2005!"
  }
  if (temp > 101.00) {
    tempTrivia.innerHTML += "<li>Temperature over 101C, the average surface temperature on the Moon during the day!"
  }

  tempTrivia.innerHTML +="</ul>"
}

// Update temperatures
function updateTemperatures(celcTemp, farnhTemp){
  celcOutput.innerHTML = "Temperature in C: " + decimalFormat(celcTemp,2);
  farnhOutput.innerHTML = "Temperature in F: " + decimalFormat(farnhTemp,2);
}

// Updater
function updateAll(celcTemp, farnhTemp){
  updateTemperatures(celcTemp, farnhTemp);
  updateWaterForm(celcTemp);
  updateWeatherClothing(celcTemp);
  updateTempTrivia(celcTemp);
}


// Buttons

buttonCelcToFarnh.addEventListener('click', function() {
	celcTemp = window.prompt("What is the temperature in C?");
  console.log("Input: " + celcTemp);
  if (!(isNaN(celcTemp) || celcTemp == null)) {
    farnhTemp = celcTemp * 1.8 + 32;
    updateAll(celcTemp, farnhTemp);
  }
});

buttonFarnhToCelc.addEventListener('click', function() {
	farnhTemp = window.prompt("What is the temperature in F?");
  console.log("Input: " + farnhTemp);
  if (!(isNaN(farnhTemp) || farnhTemp == null)) {
    celcTemp = (farnhTemp - 32)/1.8;
    updateAll(celcTemp, farnhTemp);
  }
});
