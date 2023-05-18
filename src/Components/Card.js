import React, { useState } from 'react';
import Form from './Form';
import Tarjeta from './Tarjeta';

const Card = () => {
    const APIkey = "50fc9695be508f210afad9ede2bd07cc";

    // URL para obtener el clima actual
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?&appid=" + APIkey + "&lang=es";

    const cityURL = "&q=";

    // URL para obtener el pronóstico
    let urlPrediccion = "https://api.openweathermap.org/data/2.5/forecast?&appid=" + APIkey + "&lang=es";

    // Declaración de estados utilizando el hook useState
    const [weather, setWeather] = useState([]); // Estado para almacenar los datos del clima actual
    const [forecast, setForecast] = useState([]); // Estado para almacenar los datos del pronóstico

    const [loading, setLoading] = useState(false); // Estado para indicar si se está cargando la información
    const [show, setShow] = useState(false); // Estado para indicar si se muestra la información

    let [location, setLocation] = useState(""); // Estado para almacenar la ubicación ingresada en el formulario

    // Función asincrónica para obtener la ubicación
    const getLocation = async (searchCity) => {
        setLoading(true);
        setLocation(searchCity);

        // Construir la URL completa para obtener el clima actual
        urlWeather = urlWeather + cityURL + searchCity;

        // Realizar la solicitud GET para obtener el clima actual
        await fetch(urlWeather)
            .then((response) => {
                if (!response.ok) throw { response };
                return response.json();
            })
            .then((weatherData) => {
                console.log(weatherData);
                setWeather(weatherData);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                setShow(false);
            });

        // Construir la URL completa para obtener el pronóstico
        urlPrediccion = urlPrediccion + cityURL + searchCity;

        // Realizar la solicitud GET para obtener el pronóstico
        await fetch(urlPrediccion)
            .then((response) => {
                if (!response.ok) throw { response };
                return response.json();
            })
            .then((prediccionData) => {
                console.log(prediccionData);
                setForecast(prediccionData);

                setLoading(false);
                setShow(true);

            }).catch(error => {
                console.log(error);
                setLoading(false);
                setShow(false);
            });
    };

    return (
        <React.Fragment>
            <Form
                newLocation={getLocation} // Proporcionar la función getLocation al componente Form
            />

            <Tarjeta
                showDate = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />
        </React.Fragment>
    );
}

export default Card;

