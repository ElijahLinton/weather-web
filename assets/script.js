// function that gathers api information and displays it on the screen
function recieveData() {

    var nameOfCity = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.textContent = nameOfCity.value;

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + nameOfCity.value + '&units=imperial&appid=32ba0bfed592484379e51106cef3f204&cnt=5')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var allSections = document.querySelectorAll(".icons")
            var i=0
            // for each function that displays all  5 day forcast information on the webpage
            allSections.forEach(box =>{

                data.list.forEach(item =>{
                    var par = document.createElement('h2')
                    par.textContent ="Description: " + item.weather[0].description
                    box.appendChild(par)
                })


                data.list.forEach(item =>{
                    var p = document.createElement('h2')
                    p.textContent = "Temperature: " + item.main.temp
                    box.appendChild(p)
                })

                data.list.forEach(item =>{
                    var par = document.createElement('h2')
                    par.textContent ="Humidity: " + item.main.humidity + "%"
                    box.appendChild(par)
                })

                data.list.forEach(item =>{
                    var par = document.createElement('h2')
                    par.textContent ="Wind " + item.wind.speed + "km/h"
                    box.appendChild(par)
                })

                
                    document.getElementById("img1").src = "http://openweathermap.org/img/wn/"+
                    data.list[i].weather[0].icon
                    +".png";
                
                    

            })
         

          
var timeDate = moment();
                    $("#timeDate").text(timeDate.format("MMMM Do YYYY, HH:mm a"))






        })

}


//listener even that calls the recieveData function to the section of the html page
$("#searchButton").on("click", recieveData)