import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b78554c50ebc7ed6b4a1d9a03d416ec5";

    let getWeatherInfo = async () => {

        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce = await response.json();

        let result= {
            city: city,
            temp: jsonResponce.main.temp,
            tempMin: jsonResponce.main.temp_min,
            tempMax: jsonResponce.main.temp_max,
            humidity: jsonResponce.main.humidity,
            feelsLike: jsonResponce.main.feels_like,
            weather: jsonResponce.weather[0].description
        }
        console.log(result);
        return result;
        } catch(err) {
           throw err;
        }

        
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
        setError("")
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) {
             setError(true);
        }
        
    };

    return (
        <div className='SearchBox'>
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
                {error && <p style={{color: "red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}