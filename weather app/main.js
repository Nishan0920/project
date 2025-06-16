async function getData() {
      const location = document.getElementById("display").value;
      const apikey = "28fdf5c4e8c84323a4051647251406";
      const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}&aqi=yes`;

      if (!location) {
        document.getElementById("fifth").textContent = "Please enter a location";
        return;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          document.getElementById("fifth").textContent = "Location not found or API error";
          return;
        }

        const data = await response.json();
        console.log(data);

        document.getElementById("third").innerHTML = `
          <h2>Weather of</h2>
          <p>${data.location.name}, ${data.location.country}</p>
        `;
        document.getElementById("fourth").innerHTML = `
          <h2><strong>Condition:</strong> ${data.current.condition.text}</h2>
          <img src="${data.current.condition.icon}" alt="Icon" >
          <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
          <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
          <p><strong>Local Time:</strong> ${data.location.localtime}</p>
        `;
        document.getElementById("display").value = "";
        document.getElementById("fifth").textContent = "";
      
      } catch (error) {
        console.error(error);
        document.getElementById("fifth").textContent = "Error fetching weather data";
      }
    }