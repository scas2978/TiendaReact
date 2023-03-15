import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Navegacion/Navegacion.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Medellin&appid=1c73360ae5f521ccbd196647f4d8865c`);
      setCity(result.data.name);
      setTemp(result.data.main.temp);
      setDescription(result.data.weather[0].description);
    };
    fetchData();
  }, []);

  return (
    <div className='Clima'>
      <h2> La Ciudad de {city} </h2>
      <p>Actualmente se encuentra a {temp} Kelvin Temperatura</p>
  
    </div>
  );
};

export default Weather;