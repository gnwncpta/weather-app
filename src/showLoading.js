import { weatherGroup } from "./weather";

function showLoading(){
    let weatherDOM = `
    <section class="weather-result width-80">
        <div class="top">
            <div class="city">
                <p>Loading ..</p>
                <p>Loading ..</p>
            </div>

            <div class="celcius">
                <p>...</p>
                <p>loading ...</p>
            </div>
            
            <img src="" alt="">
        </div>

        <div class="bottom">

            <div class="temp-info">
                <div class="temp">
                    <p>Temp</p>
                    <p>...</p>
                </div>

                <div class="temp-min">
                    <p>Temp Min</p>
                    <p>...</p>
                </div>

                <div class="temp-max">
                    <p>Temp Max</p>
                    <p>...</p>
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
                        <p>...</p>
                    </div>
    
                    <div class="degree">
                        <p>Deg</p>
                        <p>...</p>
                    </div>
                </div>
            </div>

            <div class="phv">
                <p class="phv-name">PHV</p>

                <div class="phvs">
                    <div class="pressure">
                        <p>Pressure</p>
                        <p>...</p>
                    </div>
    
                    <div class="humidity">
                        <p>Humidity</p>
                        <p>...</p>
                    </div>
    
                    <div class="visibility">
                        <p>Visibility</p>
                        <p>...</p>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

    weatherGroup.innerHTML = weatherDOM;
}

export default showLoading;