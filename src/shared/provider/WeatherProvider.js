import React, { useState, createContext } from "react"

//Provider for weatherinfo

export const WeatherContext = createContext()

export const WeatherProvider = (props) => {
  const [weather, setWeather] = useState([])

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      {props.children}
    </WeatherContext.Provider>
  )
}
