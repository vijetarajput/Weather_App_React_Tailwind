// const api_key = "26f3e7107c8814ac76834b6e8bcdc220";
// let city_name ="london";
// const base_url ="https://api.openweathermap.org/data/2.5/";

// const getWeatherData = (infoType,searchParams) =>{
//     const url = new URL(base_url + infoType);
//     url.search = new URLSearchParams({...searchParams, appid: api_key});

//     return fetch(url)
//     .then((response) => response.json())
//     .then((data)=>data);
// };

// const getFormatedWeatherData = (searchParams) =>{
//     const getFormatedWeather = getWeatherData(`weather`,searchParams).then();
// };