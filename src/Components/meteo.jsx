import React, { useState } from "react"
import axios from 'axios'
import Leftbar from "../Components/leftbar"
import '../Styles/meteo.css'

const Meteo = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=dccedc7eb27b0452b1152beab94e38c8`; 

    const searchLocation = (event) => {
        if(event.key === 'Enter'){
        
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
            })
        axios.get(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?${location}&appid={dccedc7eb27b0452b1152beab94e38c8}`).then((response) => {
                setData(response.data)
                console.log(response.data)
                })
        setLocation()   
        }
    }
    var date = new Date;
    let hour = date.getHours(); 
    return(
        <div id="page-meteo">
            <Leftbar></Leftbar>
            <div className="meteopage">
                <div className="contentmeteo">
                    <div className="top">
                        <input 
                                value={location} 
                                onChange={event => setLocation(event.target.value)} 
                                onKeyPress={searchLocation}
                                id="inputcity" 
                                className="inputcity"
                                type='text' 
                                placeholder="Entrez une ville">
                        </input>
                    </div>
                    <div className="location">
                        {data.main ? <p>{(data.name)}</p> : 'Enter a city'}
                    </div>
                    <div className="meteo">
                        <div className='boxmeteo' id="currentmeteo">
                            <div className="middlemeteo">
                                {data.main ? <p>{Math.floor(data.main.temp-273.15)}°C</p> : null}
                                {data.main ? <p>{data.weather[0].main}</p> : null}
                            </div>
                            <div className="feellike">
                                <p>Feel like :  </p>
                                {data.main ? <p>{Math.floor(data.main.feels_like-273.15)}°C</p> : null}
                            </div>
                        </div>
                        <div className='boxmeteo' id="airhumidity">
                            <div className="humidity">
                                <p className="banner">Humidity</p>
                                <div id="percentagehumidity">
                                {data.main ? <p>{data.main.humidity}%</p> : null}
                                </div>
                            </div>
                            <div className="pressure">
                                <p className="banner">Pressure</p>
                                <div id="percentagehumidity">
                                {data.main ? <p>{data.main.pressure} hpa</p> : null} 
                                </div>
                            </div>
                        </div>
                        <div className='boxmeteo' id="wind">
                        </div>
                        <div className='boxmeteo' id="airquality">

                        </div>
                        <div className='boxmeteo' id="soleil">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meteo;