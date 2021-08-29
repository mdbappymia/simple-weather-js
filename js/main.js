const API_KEY = `2a7ede358d66a72b0bf262d0ae8aca04`;
const BASE_URL = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
const iconList = `http://openweathermap.org/img/wn/10d@2x.png`

const loadData = () => {
    const cityName = document.getElementById('city-input').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName || 'kushtia'}&appid=2a7ede358d66a72b0bf262d0ae8aca04`)
        .then(res => res.json())
        .then(data => {

            return domUpdate(data)
        })
}
loadData()

function domUpdate(data) {

    const dataContainer = document.getElementById('container')
    dataContainer.textContent = ''
    const div = document.createElement('div')
    div.innerHTML = `
    <h1>City Name:${data.name}</h1>
    <h4>Condition: ${data.weather[0].main}</h4>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" srcset="">
    <div>
    <h3>Temprature: ${(data.main.temp - 273).toFixed(3)} &deg;C</h3>
    <h3>Pressure: ${data.main.pressure}</h3>
    </div>
    
    `
    dataContainer.appendChild(div)
    document.getElementById('city-input').value = ''
}

