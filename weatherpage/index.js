const apiKey = "8d5f1eb7102594069493f84acc26bdcf";
let city;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";


document.getElementById("search-icon").addEventListener("click",()=>{
    city=document.getElementById("citytext").value;
    document.querySelector(".weather").style.display="block";
    checkWeather();
});


async function checkWeather(){
    const resp = await fetch(apiUrl+"&appid="+apiKey+"&q="+city);
    var data= await resp.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    document.querySelector(".weather-icon").setAttribute("src",`./images/${data.weather[0].main}.png`);
    document.getElementById("citytext").value="";
}


