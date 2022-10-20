import "./App.css";

import React, { useState } from "react";
import ShowTemp from "./ShowTemp";

export default function Weatherstack()
 {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    weather_descriptions: "",
    temp: 0,
    feelslike: 0,
    observation_time: 0,
    humidity: 0,
    visibility: 0,
    cloudcover: 0,
    country: "",
  });
  const handleClick = () => {
    fetch(`https://api.weatherstack.com/current?access_key=bb17532f207fd3fdfefd8630a6afc3a2&query=${city}`)
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        setData({
          weather_descriptions: data.current.weather_descriptions[0],
          temp: data.current.temperature,
          feelslike: data.current.feelslike,
          observation_time: new Date().toLocaleTimeString(),
          humidity: data.current.humidity,
          visibility: data.current.visibility,
          cloudcover: data.current.cloudcover,
          country:data.location.country,
        });
      })
      };
  

  return(
    <>
        <div className="container text-center my-2">
          <h1 className="toy">Weather App</h1>
          <br /> <br />
          <input
            className="design"
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            placeholder="ex. delhi"
          />
          <button
            className="btn btn-info mx-2"
            type="submit"
            onClick={handleClick}
          >
            find
          </button>
          <ShowTemp text={data} />
        </div>
      </>
  )
}
