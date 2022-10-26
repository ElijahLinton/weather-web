
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
            allSections.forEach(box =>{
                box.textContent = "Min: " + Number(data.list[i].main.temp_min ).toFixed(1)+ "°";
                i++
                data.list.forEach(item =>{
                    var p = document.createElement('p')
                    p.textContent = item.main.temp
                    box.appendChild(p)
                })

                data.list.forEach(item =>{
                    var par = document.createElement('h2')
                    par.textContent ="Humidity: " + item.main.humidity
                    box.appendChild(par)
                })

                
                data.list.forEach(item =>{
                    var par = document.createElement('h2')
                    par.textContent ="Humidity: " + item.main.humidity
                    box.appendChild(par)
                })
            })
         









        })

}

function DefaultScreen() {
    document.getElementById("cityInput").defaultValue = "London";
    GetInfo();
}


var eachDate = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function siftforcast(day) {
    if (day + eachDate.getDay() > 6) {
        return day + eachDate.getDay() - 7;
    }
    else {
        return day + eachDate.getDay();
    }
}

// for (i = 0; i < 5; i++) {
//     document.getElementById("day" + (i + 1)).innerHTML = weekday[siftforcast(i)];
// }

$("#searchButton").on("click", recieveData)