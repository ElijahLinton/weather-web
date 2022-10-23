var searchButton = document.getElementById('search')


const weatherInformation = {
    apiKey: "ebc84e838233b6f53875618cba3cc34d",
     retrieveData:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city
             + "&units=metric&appid=" 
             + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.showWeather(data));

    },
    showWeather: function(data) {
         const { name } = data;
         const { icon, description } = data.weather[0];
         const { temp, humidity } = data.main;
         const { speed } = data.wind;
         console.log(name, icon, description, temp, humidity, speed)
         document.querySelector('#city').innerText = "current weather " + name;
         document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
         document.querySelector(".description").innerText = description;

    }

}



