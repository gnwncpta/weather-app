import './style.css';
import showDummy from './showDummy';
import showLoading from './showLoading';
import displayWeather from './displayWeather';
import emptyState from './emptyState';
const { appID } = require('./api-config.json');

const searchBtn = document.querySelector('section.search button');
const userInput = document.querySelector('section.search input');
const weatherGroup = document.querySelector('section.weather-group');

// weatherGroup.innerHTML = emptyState();
showDummy();

searchBtn.addEventListener('click', () => {
    if(userInput.value == ''){
        alert('Insert the City!');
    } else {
        showLoading();
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=${appID}`)
            .then(response => {
                if(response.status === 200){
                    return response.json()
                } else {
                    alert(`City ${response.statusText}`);
                    weatherGroup.innerHTML = emptyState();
                }
            })
            .then(response => displayWeather(response))
            .catch(err => console.log(err));
    }
});

userInput.addEventListener('keyup', (e) => { if(e.key == 'Enter'){ searchBtn.click(); } });

export { weatherGroup }