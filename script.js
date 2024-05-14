const tempBlock = document.getElementById("temp");
const icon = document.getElementById("symbol");
const date = new Date();


let long = -74.23459491665001;
let lat = 40.737779561874405;
let celcius;
let farenhiet;

let fetchTemperature = async () =>{
    const link = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=73a52b63cc1377df2155255e597e77b6`;
    let result = await fetch(link);
    let data = await result.json();
    let temperature = [data.list[0].main.temp, data.list[0].weather[0].main];
    return temperature;
}
fetchTemperature().then(
    temperature => {
        celcius = Math.round(temperature[0] - 273.15);
        farenhiet = Math.round((celcius * 1.8) + 32);
        tempBlock.innerText += `${celcius}°C / ${farenhiet}°F`;
        return temperature
    }
).then(
    temperature =>{
        iconName = temperature[1];
        console.log(iconName + "" + date.getHours());
        if(date.getHours() > 6 && date.getHours() < 18)
            icon.src = `./Images/${iconName}d.png`
        else if(date.getHours() < 6 || date.getHours() > 18)
            icon.src = `./Images/${iconName}n.png`
    }
)
