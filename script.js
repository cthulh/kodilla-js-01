'use strict';
var celc_temp;
var farnh_temp;
// Buttons
var button_celc_to_farnh = document.getElementById("celc_to_farnh");
var button_farnh_to_celc = document.getElementById("farnh_to_celc");
// Temp calculation divs
var farnh_output = document.getElementById("farnh_temp");
var celc_output = document.getElementById("celc_temp");
// Info divs
var water_form = document.getElementById("water_form");
var weather_clothing = document.getElementById("weather_clothing");
var temp_trivia = document.getElementById("temp_trivia");

// Display with two decimal places
function decimal_format(num,dec){
  return parseFloat(num).toFixed(dec)
}

// Water form
function update_water_form(temp){
  console.log("Water form in : " + temp);
  if (temp <= 0) {
    water_form.innerHTML = "WATER FORM: Water in " + decimal_format(celc_temp,2) + " C is frozen solid!";
  } else if (temp > 0 && temp <= 99) {
    water_form.innerHTML = "WATER FORM: Water in " + decimal_format(celc_temp,2) + " C is liquid!";
  } else {
    water_form.innerHTML = "WATER FORM: Water in " + decimal_format(celc_temp,2) + " C is in gas form!";
  }
}

// Weather clothing
function update_weather_clothing(temp){
  console.log("Weather clothing in : " + temp);
  if (temp > -40 && temp <= 0) {
    weather_clothing.innerHTML = "DRESS FOR THE WEATHER: If it's " + decimal_format(celc_temp,2) + " C, you need warm winter jacket and gloves!";
  } else if (temp > 0 && temp <= 10) {
    weather_clothing.innerHTML = "DRESS FOR THE WEATHER: If it's " + decimal_format(celc_temp,2) + " C, you need a hat and extra layers!";
  } else if (temp > 10 && temp <= 18) {
    weather_clothing.innerHTML = "DRESS FOR THE WEATHER: If it's " + decimal_format(celc_temp,2) + " C, you can wear a t shirt and trousers";
  } else if (temp > 18 && temp <= 30) {
    weather_clothing.innerHTML = "DRESS FOR THE WEATHER: If it's " + decimal_format(celc_temp,2) + " C, you can wear a t shirt and shorts";
  } else if (temp >= 30 && temp <= 41) {
    weather_clothing.innerHTML = "DRESS FOR THE WEATHER: If it's " + decimal_format(celc_temp,2) + " C, it's time to hide in shade!";
  } else {
    weather_clothing.innerHTML = "DRESS FOR THE WEATHER: If it's " + decimal_format(celc_temp,2) + " C, you need to stay indoors or you will die...";
  }
}

// Temp trivia
function update_temp_trivia(temp){
  console.log("Temp trivia in : " + temp);
  temp_trivia.innerHTML = "<br>Temperature trivia:<br><ul>";
  if (temp < -31.00) {
    temp_trivia.innerHTML += "<li>Temperature is lower than -31C, the lowest operating temperaturte of a most resistant mobile phone!"
  }
  if (temp < -39.00) {
    temp_trivia.innerHTML += "<li>Temperature is lower than -39C, the melting temperature of mercury!"
  }
  if (temp < -216.00) {
    temp_trivia.innerHTML += "<li>Temperature is lower than -216C, the coldest planet in the Solar System, Uranus!"
  }
  if (temp === 0.00) {
    temp_trivia.innerHTML += "<li>Temperature is 0C, the melting temperature of ice"
  }
  if (temp < 13.70) {
    temp_trivia.innerHTML += "<li>Temperature below 13.7C, the lowest body temperature recorded in a human!"
  }
  if (temp < 37.00) {
    temp_trivia.innerHTML += "<li>Temperature below 37C, the normal body temperature in a human!"
  }
  if (temp === 37.00) {
    temp_trivia.innerHTML += "<li>Temperature is 37C, the normal body temperature in a human!"
  }
  if (temp > 37.00) {
    temp_trivia.innerHTML += "<li>Temperature over 37C, the normal body temperature in a human!"
  }
  if (temp > 46.50) {
    temp_trivia.innerHTML += "<li>Temperature over 46.5C, the highest body temperature in a human!"
  }
  if (temp > 71.00) {
    temp_trivia.innerHTML += "<li>Temperature over 71C, the highest surface temperature on Earth, recorded in Iran in 2005!"
  }
  if (temp > 101.00) {
    temp_trivia.innerHTML += "<li>Temperature over 101C, the average surface temperature on the Moon during the day!"
  }

  temp_trivia.innerHTML +="</ul>"
}

// Update temperatures
function update_temperatures(celc_temp, farnh_temp){
  celc_output.innerHTML = "Temperature in C: " + decimal_format(celc_temp,2);
  farnh_output.innerHTML = "Temperature in F: " + decimal_format(farnh_temp,2);
}

// Updater
function update_all(celc_temp, farnh_temp){
  update_temperatures(celc_temp, farnh_temp);
  update_water_form(celc_temp);
  update_weather_clothing(celc_temp);
  update_temp_trivia(celc_temp);
}


// Buttons

button_celc_to_farnh.addEventListener('click', function() {
	celc_temp = window.prompt("What is the temperature in C?");
  console.log("Input: " + celc_temp);
  if (!(isNaN(celc_temp) || celc_temp == null)) {
    farnh_temp = celc_temp * 1.8 + 32;
    update_all(celc_temp, farnh_temp);
  }
});

button_farnh_to_celc.addEventListener('click', function() {
	farnh_temp = window.prompt("What is the temperature in F?");
  console.log("Input: " + farnh_temp);
  if (!(isNaN(farnh_temp) || farnh_temp == null)) {
    celc_temp = (farnh_temp - 32)/1.8;
    update_all(celc_temp, farnh_temp);
  }
});
