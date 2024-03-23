// weather.js
fetch('https://api.openweathermap.org/data/2.5/weather?q=Mangalore&appid=ac957e7fce5bdeb2a05b8fcce0935f34&units=metric')
  .then(response => response.json())
  .then(data => {
    const weatherDiv = document.getElementById('weather');
    const date = new Date(data.dt * 1000); // Convert Unix timestamp to milliseconds
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    weatherDiv.innerHTML = `
      <h2>Weather in ${data.name}</h2>
      <p>Date: ${date.toDateString()}</p>
      <p>Temperature: ${temperature}°C</p>
      <p>Weather: ${weatherDescription}</p>
    `;
  })
  .catch(error => {
    console.error('Error:', error);
  });
