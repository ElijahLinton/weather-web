// function that gathers api information and displays it on the screen
var searchButton = document.getElementById('searchButton') 
var searchAgain = document.getElementById('searchagain')
//changed ther function to be declared once
searchButton.addEventListener("click", function(){
    var nameOfCity = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.textContent = nameOfCity.value;

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + nameOfCity.value + '&units=imperial&appid=32ba0bfed592484379e51106cef3f204&cnt=5')
        .then(response => response.json())
        .then(data => {
            console.log(data)

                const list =  data.list
                list.map((item)=> {
                 const description = item.weather[0].description
                 const Temperature =item.main.temp
                 const wind = item.wind.speed
                 const humidity = item.main.humidity
                 const icon = "http://openweathermap.org/img/wn/"+ item.weather[0].icon +".png";
                 
                 const forecast = ` <img src="${icon}"> <h3>description: ${description}</h3>
                 <h3>temperature: ${Temperature}</h3> 
                 <h3>wind: ${wind}</h3> <h3>humidity: ${humidity}</h3>`
                 document.querySelector('.searchDisplay').innerHTML += forecast
                  
                })
                 
               
            })
         
       
          
var timeDate = moment();
                    $("#timeDate").text(timeDate.format("MMMM Do YYYY, HH:mm a"))

const textArea = $(this).siblings('#cityInput').val();
                 localStorage.setItem('city', textArea);


searchAgain.style.display = "block"
$('#searchagain').on('click',function(){
    location.reload();
})
},{once:true})

window.onload = function(){
 $('#searches').text(localStorage.getItem('city'));

 
           
}
     
//listener even that calls the recieveData function to the section of the html page

$("#clearButton").on("click", function(){
localStorage.clear('city')
location.reload();
})

