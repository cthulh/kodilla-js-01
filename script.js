'use strict';

(function(){
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

  // Write to an element
  function writeTo(element, content){
    element.innerHTML = content;
  }

  // Append element
  function appendElement(element, content){
    element.innerHTML += content;
  }

  // Listify string
  function listify(str){
    return "<li>" + str + "</li>"
  }

  // Water form
  function updateWaterForm(temp){
    console.log("Water form in : " + temp);
    if (temp <= 0) {
      writeTo(waterForm,"WATER FORM: Water in " + decimalFormat(celcTemp,2) + " C is frozen solid!");
    } else if (temp > 0 && temp <= 99) {
      writeTo(waterForm,"WATER FORM: Water in " + decimalFormat(celcTemp,2) + " C is liquid!");
    } else {
      writeTo(waterForm,"WATER FORM: Water in " + decimalFormat(celcTemp,2) + " C is in gas form!");
    }
  }

  // Weather clothing
  function updateWeatherClothing(temp){
    console.log("Weather clothing in : " + temp);
    if (temp > -40 && temp <= 0) {
      writeTo(weatherClothing,"DRESS FOR THE WEATHER: If it's " + decimalFormat(celcTemp,2) + " C, you need warm winter jacket and gloves!");
    } else if (temp > 0 && temp <= 10) {
      writeTo(weatherClothing,"DRESS FOR THE WEATHER: If it's " + decimalFormat(celcTemp,2) + " C, you need a hat and extra layers!");
    } else if (temp > 10 && temp <= 18) {
      writeTo(weatherClothing,"DRESS FOR THE WEATHER: If it's " + decimalFormat(celcTemp,2) + " C, you can wear a t shirt and trousers");
    } else if (temp > 18 && temp <= 30) {
      writeTo(weatherClothing,"DRESS FOR THE WEATHER: If it's " + decimalFormat(celcTemp,2) + " C, you can wear a t shirt and shorts");
    } else if (temp >= 30 && temp <= 41) {
      writeTo(weatherClothing,"DRESS FOR THE WEATHER: If it's " + decimalFormat(celcTemp,2) + " C, it's time to hide in shade!");
    } else {
      writeTo(weatherClothing,"DRESS FOR THE WEATHER: If it's " + decimalFormat(celcTemp,2) + " C, you need to stay indoors or you will die...");
    }
  }

  // Temp trivia
  function updateTempTrivia(temp){
    console.log("Temp trivia in : " + temp);
    // Temp trivia array
    var tempTriviaArr = [
      ["<", -31, "Temperature is lower than -31C, the lowest operating temperaturte of a most resistant mobile phone!"],
      ["<", 39, "Temperature is lower than -39C, the melting temperature of mercury!"],
      ["<", -216, "Temperature is lower than -216C, the coldest planet in the Solar System, Uranus!"],
      ["==", 0, "Temperature is 0C, the melting temperature of ice"],
      ["<", 13.70, "Temperature below 13.7C, the lowest body temperature recorded in a human!"],
      ["<", 37, "Temperature below 37C, the normal body temperature in a human!"],
      ["==", 37, "Temperature is 37C, the normal body temperature in a human!"],
      [">", 37, "Temperature over 37C, the normal body temperature in a human!"],
      [">", 46.5, "Temperature over 46.5C, the highest body temperature in a human!"],
      [">", 71, "Temperature over 71C, the highest surface temperature on Earth, recorded in Iran in 2005!"],
      [">", 101, "Temperature over 101C, the average surface temperature on the Moon during the day!"]
    ]

    var comparisonSign;
    var comparisonTemp;
    var output;

    writeTo(tempTrivia,"<br>Temperature trivia:<br><ul>");

    for(var i = 0; i < tempTriviaArr.length; i++){
      comparisonSign = tempTriviaArr[i][0];
      comparisonTemp = tempTriviaArr[i][1];
      output = tempTriviaArr[i][2];
      console.log("----------------------------------");
      console.log(comparisonSign);
      console.log(comparisonTemp);
      console.log(output);

      if ((comparisonSign === "<" && temp < comparisonTemp) || (comparisonSign === "==" && temp === comparisonTemp) || (comparisonSign === ">" && temp > comparisonTemp)){
        appendElement(tempTrivia,listify(output));
      }

    }

    appendElement(tempTrivia,"</ul>");
  }

  // Update temperatures
  function updateTemperatures(celcTemp, farnhTemp){
    writeTo(celcOutput,"Temperature in C: " + decimalFormat(celcTemp,2));
    writeTo(farnhOutput,"Temperature in F: " + decimalFormat(farnhTemp,2));
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

})();
