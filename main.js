function main() {

  function getWeather(cityName) {
 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=50a897e65a7d7b43992cff37f353db7b`;
  
    // Show loading
    const messageEl = document.getElementById('message');
    messageEl.innerText = 'Loading ...';
    messageEl.style.color = '#4b386990';
  
  
    // Make a request for a user with a given ID
    axios.get(url)
  
      .then(function (response) {
        // handle success
        console.log(response);
  
        const locationEl = document.getElementById('city');
        locationEl.innerText = `Current Weather in ${cityName.charAt(0).toUpperCase() + cityName.slice(1)}, ${response.data.sys.country}`;
  
        const messageEl = document.getElementById('message');
        messageEl.innerHTML = `
                              <p>Temperature: ${response.data.main.temp}°C</p>
                              <p>Humidity: ${response.data.main.humidity}%</p>
                              <p>Winds: ${response.data.wind.speed} km/h</p>
                              <p>Sky: ${response.data.weather[0].main}</p>
                              <p>Visibility: ${(response.data.visibility)/1000} km</p>
                              <p>Pressure: ${(response.data.main.pressure)} mb</p>
                              `;
        messageEl.style.color = '#4B3869';
      })
  
      .catch(function (error) {
        // handle error
        const messageEl = document.getElementById('message');
        messageEl.innerText = error;
        messageEl.style.color = 'red';
      })
  }
  
  window.onload = function() {
    document.getElementById('sendBtn').onclick = function () {
      // Get the city name from the txt field
      const cityName = document.getElementById('cityTextInput').value;
  
      // Call getWeather function
      getWeather(cityName);
    }
  }
}

main();