var searchInput = document.getElementById("searchInput");
var cardOne = document.getElementById("cardOne");
var cardTwo = document.getElementById("cardTwo");
var cardThree = document.getElementById("cardThree");
var searchBtn = document.getElementById('searchBtn');
var day = document.getElementById('day');
var dayThree = document.getElementById('dayThree');
var dayTwoTemp = document.getElementById('dayTwoTemp');
var dayTwoMinTemp = document.getElementById('dayTwoMinTemp');
var dayTwoIcon = document.getElementById('dayTwoIcon')
var statusDayTwo = document.getElementById('statusDayTwo')
var dayThree = document.getElementById('dayThree')
var dayThreeTemp = document.getElementById('dayThreeTemp')
var dayThreeMinTemp = document.getElementById('dayThreeMinTemp')
var dayThreeIcon = document.getElementById("dayThreeIcon")
var statusDayThree = document.getElementById('statusDayThree')
var allData;

``
  searchBtn.addEventListener('click', function(){
    getWather(searchInput.value);
    displaySecondDay()
    displayThirdDay()
  })


async function getWather(term){
 let x = await fetch (`https://api.weatherapi.com/v1//forecast.json?key=697a78fe79b9453dad1101031251604&q=${term}&days=3`)
 if(x.ok == true){
  let data = await x.json();
  allData = data
  console.log(data);
  dispaly(data.location , data.current)
 }
}

// getTheDayToday
    let today = new Date();
    let dayName = today.toLocaleDateString("en-US", { weekday: "long" });

// getTomorrow
let tomorrow = new Date(today); 
tomorrow.setDate(tomorrow.getDate() + 1);
let tomorrowName = tomorrow.toLocaleDateString("en-US", { weekday: "long" });
day.innerHTML = tomorrowName


//getAfterTomorrow
let afterTomorrow = new Date(today);
afterTomorrow.setDate(afterTomorrow.getDate() + 2);
let afterTomorrowName = afterTomorrow.toLocaleDateString("en-US", { weekday: "long" });
dayThree.innerHTML = afterTomorrowName
    


getWather('cairo');

function dispaly (arr , arr2){
    cartona = "";
        cartona += `
        <div class="card text-white card_1 h-100">
                        <div class="d-flex w-100 justify-content-between card-header text-secondary">
                            <p>Today</p>
                            <p>${arr.localtime}</p>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title text-secondary">${arr.country}</h4>
                            <h6 class="card-title text-secondary">${arr.name}</h6>
                            <h1 class="temp">${arr2.temp_c} C</h1>
                            <img src="${arr2.condition.icon}" alt="">
                            <p class="mb-3 text-primary over">forcast</p>
                        </div>
                        <div class="d-flex gap-4 position-absolute bottom-0 start-0 w-100 p-2 text-secondary">
                            <div class="d-flex umbrela align-items-center">
                            <i class="fa-solid fa-umbrella me-1 p-0 m-0"></i>
                                <p class="p-0 m-0">${arr2.cloud}</p>
                            </div>
                            <div class="d-flex  align-items-center">
                                <i class="fa-solid fa-wind me-1 p-0 m-0"></i>
                                <p class="p-0 m-0">${arr2.wind_kph}</p>
                            </div>
                            <div class="d-flex  align-items-center">
                                <i class="fa-solid fa-compass me-1 p-0 m-0"></i>
                                <p class="p-0 m-0">20%</p>
                            </div>
                        </div>
                    </div>

                    
        `
    cardOne.innerHTML = cartona;
}


function displaySecondDay(){
    dayTwoTemp.innerHTML =  allData.forecast.forecastday[1].day.maxtemp_c
    dayTwoMinTemp.innerHTML =  allData.forecast.forecastday[1].day.mintemp_c
    dayTwoIcon.innerHTML = allData.forecast.forecastday[1].day.condition.icon
    statusDayTwo.innerHTML = allData.forecast.forecastday[1].day.condition.text
}
function displayThirdDay(){
    dayThreeTemp.innerHTML =  allData.forecast.forecastday[2].day.maxtemp_c
    dayThreeMinTemp.innerHTML =  allData.forecast.forecastday[2].day.mintemp_c
    dayThreeIcon.innerHTML = allData.forecast.forecastday[2].day.condition.icon
    statusDayThree.innerHTML = allData.forecast.forecastday[2].day.condition.text
}