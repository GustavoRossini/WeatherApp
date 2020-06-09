const apiKey = "dbd7b0db1f754da892e45e98bca2f4f5";

const cities = [];
cities.push({
    name: "Barcelona",
    latitude: 41.41,
    longitude: 2.19,
});
cities.push({
    name: "Madrid",
    latitude: 40.41,
    longitude: -3.70,
});
cities.push({
    name: "Sevilla",
    latitude: 37.38,
    longitude: -5.98,
});
cities.push({
    name: "Valencia",
    latitude: 39.47,
    longitude: -0.38,
});

const get = (latitude, longitude) => {

    

   fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${apiKey}`)

    .then(response => response.json())
    .then(weatherInfo => render(weatherInfo));

        //console.log(weatherInfo.data[0].temp));
        //render(weatherInfo));
        //console.log(weatherInfo));

 
}

for(var i=0; i < cities.length; i++) {
    get (cities[i].latitude,cities[i].longitude);
}

const render = (apiInfo) => {

    let accessInfo = apiInfo.data[0];

    let body = document.querySelector("body");
    
    let cityContainer = document.createElement("div");
    
    let cityNameDiv = document.createElement("div");
    let cityNameDivParagraph = document.createElement("p");

    let cityNotificationDiv = document.createElement("div");
    
    let cityWeatherContainerDiv = document.createElement("div");
    let cityWeatherIconDiv = document.createElement("div");
    let cityWeatherIconDivImg = document.createElement("img");
    
    let cityTemperatureValueDiv = document.createElement("div");
    let cityTemperatureValueDivParagraph = document.createElement("p");
    let cityTemperatureValueDivParagraphSpan = document.createElement("span");
    
    let cityTemperatureDescriptionDiv = document.createElement("div");
    let cityTemperatureDescriptionDivParagraph = document.createElement("p");
    
    let cityLocationDiv = document.createElement("div");
    let cityLocationDivParagraph = document.createElement("div");

    cityContainer.className = "container";
    
    cityNameDiv.className = "app-title";
    
    cityNotificationDiv.className = "notification";
    
    cityWeatherContainerDiv.className = "weather-container";
    cityWeatherIconDiv.className = "weather-icon";

    cityTemperatureValueDiv.className = "temperature-value";

    cityTemperatureDescriptionDiv.className = "temperature-description";
    

    cityNameDivParagraph.innerText = accessInfo.city_name + ", " + accessInfo.country_code;
    
    
    let linkicon = `https://www.weatherbit.io/static/img/icons/${accessInfo.weather.icon}.png`;

    //let linkicon = "<img src='"+linkicon+"'>";
    
    cityWeatherIconDivImg.src = linkicon;


    cityTemperatureValueDivParagraph.innerText = accessInfo.temp + " °";
    //cityTemperatureValueDivParagraph.innerText = "- °";
    cityTemperatureValueDivParagraphSpan.innerText = "C";
    cityTemperatureDescriptionDivParagraph.innerText = accessInfo.weather.description;
    //cityLocationDivParagraph.innerText = "-";

    body.appendChild(cityContainer);
    
    cityContainer.appendChild(cityNameDiv);
    cityNameDiv.appendChild(cityNameDivParagraph);

    cityContainer.appendChild(cityNotificationDiv);
    
    cityContainer.appendChild(cityWeatherContainerDiv);
    cityWeatherContainerDiv.appendChild(cityWeatherIconDiv);
    cityWeatherIconDiv.appendChild(cityWeatherIconDivImg);

    cityWeatherContainerDiv.appendChild(cityTemperatureValueDiv);
    cityTemperatureValueDiv.appendChild(cityTemperatureValueDivParagraph);
    cityTemperatureValueDivParagraph.appendChild(cityTemperatureValueDivParagraphSpan);

    cityWeatherContainerDiv.appendChild(cityTemperatureDescriptionDiv);
    cityTemperatureDescriptionDiv.appendChild(cityTemperatureDescriptionDivParagraph);

    cityWeatherContainerDiv.appendChild(cityLocationDiv);
    cityLocationDiv.appendChild(cityLocationDivParagraph);
    
}



