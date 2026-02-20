import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b78554c50ebc7ed6b4a1d9a03d416ec5";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponce = await response.json();
        console.log(jsonResponce);

        let result= {
            temp: jsonResponce.main.temp,
            tempMin: jsonResponce.main.temp_min,
            tempMax: jsonResponce.main.temp_max,
            tempMax: jsonResponce.main.temp_max,
            humidity: jsonResponce.main.humidity,
            feelsLike: jsonResponce.main.feels_like,
            weather: jsonResponce.weather[0].description
        }
        console.log(result);
        
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    };

    return (
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form>
                <TextField 
                id="city" 
                label="city name" 
                variant="outlined" required
                value={city}
                onChange={handleChange} />
                <br /> <br />
                <Button 
                variant="contained" 
                type='Submit' 
                onClick={handleSubmit}
                >Search</Button>
            </form>
        </div>
    )
}