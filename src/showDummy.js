import { weatherGroup } from './weather';

function showDummy() {
    weatherGroup.innerHTML = `
    <section class="weather-result width-80">
        <div class="top">
            <div class="city">
                <p><img src="../assets/location-vc.svg" class="location">Jakarta</p>
                <p>Thursday, 24 June 2021</p>
            </div>

            <div class="celcius">
                <p>25°C</p>
                <p>Haze</p>
            </div>
            
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Clouds" class="icon">
        </div>

        <div class="bottom">

            <div class="temp-info">
                <div class="temp">
                    <p>Temp</p>
                    <p>300 K</p>
                </div>

                <div class="temp-min">
                    <p>Temp Min</p>
                    <p>300 K</p>
                </div>

                <div class="temp-max">
                    <p>Temp Max</p>
                    <p>300 K</p>
                </div>
            </div>

            <div class="wind">
                <div class="wind-header">
                    <p class="wind-name">Wind</p>
                    <img src="../assets/wind.png">
                </div>

                <div class="winds">
                    <div class="speed">
                        <p>Speed</p>
                        <p>1.30</p>
                    </div>

                    <div class="degree">
                        <p>Deg</p>
                        <p>500</p>
                    </div>
                </div>
            </div>

            <div class="phv">
                <p class="phv-name">PHV</p>

                <div class="phvs">
                    <div class="pressure">
                        <p>Pressure</p>
                        <p>3000</p>
                    </div>

                    <div class="humidity">
                        <p>Humidity</p>
                        <p>5.78</p>
                    </div>

                    <div class="visibility">
                        <p>Visibility</p>
                        <p>6000</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

export default showDummy;