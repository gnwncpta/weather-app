import iconURL from './iconURL';
import { weatherGroup } from './weather';
import displayDate from './displayDate';

function displayWeather(data) {
    const { 
        name,
        dt,
        main: { temp, temp_min, temp_max, pressure, humidity }, visibility, 
        wind: { speed, deg, },
        weather: [{id, main, description, icon}]
    } = data;

    let weatherDOM = '';
    weatherDOM += `
    <section class="weather-result width-80">
        <div class="top">
            <div class="city">
                <p><img src="../assets/location-vc.svg" class="location">${name}</p>
                <p>${displayDate()}</p>
            </div>

            <div class="celcius">
                <p>${Math.floor(temp - 273.15)}°C</p>
                <p>${main}</p>
            </div>
            
            <img src="${iconURL(icon)}" alt="${description}" class="icon">
        </div>

        <div class="bottom">

            <div class="temp-info">
                <div class="temp">
                    <p>Temp</p>
                    <p>${Math.floor(temp)} K</p>
                </div>

                <div class="temp-min">
                    <p>Temp Min</p>
                    <p>${Math.floor(temp_min)} K</p>
                </div>

                <div class="temp-max">
                    <p>Temp Max</p>
                    <p>${Math.floor(temp_max)} K</p>
                </div>
            </div>

            <div class="wind">
                <div class="wind-header">
                    <p class="wind-name">Wind</p>
                    <img src="../assets/wind2.png">
                </div>

                <div class="winds">
                    <div class="speed">
                        <p>Speed</p>
                        <p>${speed}</p>
                    </div>
    
                    <div class="degree">
                        <p>Deg</p>
                        <p>${deg}</p>
                    </div>
                </div>
            </div>

            <div class="phv">
                <p class="phv-name">PHV</p>

                <div class="phvs">
                    <div class="pressure">
                        <p>Pressure</p>
                        <p>${pressure}</p>
                    </div>
    
                    <div class="humidity">
                        <p>Humidity</p>
                        <p>${humidity}</p>
                    </div>
    
                    <div class="visibility">
                        <p>Visibility</p>
                        <p>${visibility}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
    weatherGroup.innerHTML = '';
    weatherGroup.innerHTML = weatherDOM;
}

export default displayWeather;