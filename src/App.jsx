import React, { useEffect, useState } from 'react'
import MyContext from './contexts/Mycontext'
import Header from './components/Header'
import Hero from './components/Hero'
import axios from 'axios'
function App() {
  const [bgColor, setBgColor] = useState("#464646")
  const [textColor, setTextColor] = useState("white")
  const [cityName, setCityName] = useState("")
  // States for images.....
  const [humidityImg, setHumidityImg] = useState("/icons/humidity.png")
  const [pressureImg, setPressureImg] = useState("/icons/pressure.png")
  const [windImg, setWindImg] = useState("/icons/wind.png")
  const [cloudImg, setCloudImg] = useState("/icons/cloud.png")
  // States for response....
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [weather, setWeather] = useState("")
  const [temp, setTemp] = useState("")
  const [feelsTemp, setFeelsTemp] = useState("")
  const [sunRise, setSunRise] = useState("")
  const [sunSet, setSunSet] = useState("")
  const [humidity, setHumidity] = useState("")
  const [pressure, setPressure] = useState("")
  const [windSpeed, setWindSpeed] = useState("")
  const [cloud, setCloud] = useState("")

  const fetchData = async (API_KEY) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName || "New York"}&appid=${API_KEY}`)
    const data = response.data
    setCity(data.name)
    setCountry(data.sys.country)
    setWeather(data.weather[0].main)
    setTemp(Math.round(((data.main.temp) - 273.15)))
    setFeelsTemp(Math.round(((data.main.feels_like) - 273.15)))
    setSunRise((new Date(data.sys.sunrise * 1000)).toLocaleTimeString())
    setSunSet((new Date(data.sys.sunset * 1000)).toLocaleTimeString())
    setHumidity(data.main.humidity)
    setPressure(data.main.pressure)
    setWindSpeed(Math.round((data.wind.speed / 1000) * 3600))
    setCloud(data.clouds.all)
  }
  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY
    fetchData(apiKey)
  }, [])
  return (
    <>
      <MyContext.Provider value={{ bgColor, setBgColor, textColor, setTextColor, cityName, setCityName, city, country, weather, temp, feelsTemp, sunRise, sunSet, humidity, pressure, windSpeed, cloud, humidityImg, setHumidityImg, pressureImg, setPressureImg, windImg, setWindImg, cloudImg, setCloudImg }}>
        <Header fetchData={fetchData} />
        <Hero />
      </MyContext.Provider>
    </>
  )
}

export default App