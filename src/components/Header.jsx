import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../contexts/Mycontext'
import axios from 'axios'

function Header({ fetchData }) {
    const [apiKey, setApiKey] = useState("")
    // context states...
    const { bgColor, setBgColor, textColor, setTextColor, cityName, setCityName, city, country, setHumidityImg, setPressureImg, setWindImg, setCloudImg } = useContext(MyContext)
    const [shadow, setShadow] = useState("shadow-[0px_2px_9px_1px_black] rounded-full bg-gray-800 hover:bg-gray-900 transition-all duration-200")
    const [check, setCheck] = useState(true)
    const [loading, setLoading] = useState("scale-0")
    const [inputValue, setInputValue] = useState("")
    const enableLightMode = () => {
        setCheck(prveCheck => !prveCheck)
        setBgColor("bg-white")
        setTextColor("black")
        document.body.style.background = "#fff0"
        setHumidityImg("/icons/humidity_black.png")
        setPressureImg("/icons/pressure_black.png")
        setWindImg("/icons/wind_black.png")
        setCloudImg("/icons/cloud_black.png")
    }
    const enableDarkMode = () => {
        setCheck(prveCheck => !prveCheck)
        setBgColor("bg-gray-800")
        setTextColor("white")
        document.body.style.background = "#1e2939"
        setHumidityImg("/icons/humidity.png")
        setPressureImg("/icons/pressure.png")
        setWindImg("/icons/wind.png")
        setCloudImg("/icons/cloud.png")
    }


    useEffect(() => {
        setApiKey(import.meta.env.VITE_API_KEY)
    }, [])


    const modifyInput = () => {
    }

    const [suggestionArr, setSuggestionArr] = useState([])
    const [visibility, setVisibility] = useState("hidden")

    useEffect(() => {
        const specialCharacters = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~\\1234567890";
        for (const element of specialCharacters) {
            setCityName(prevIput => prevIput.split(element).join(""))
        }
    }, [cityName])

    const handleOnChange = async (event) => {
        setCityName((event.target.value).trim())
        let suggestedData = await axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${cityName}`)
        let suggestedArr = suggestedData.data[1];
        setSuggestionArr([...suggestedArr])
        setVisibility("block")
    }
    return (
        <>
            <span className={`absolute left-0 top-0 bg-green-500 w-full py-0.5 ${loading} transition-all duration-500 origin-left`}></span>
            <header className="flex flex-col gap-2 md:flex-row items-center justify-between text-white p-4">
                <div className="flex items-center gap-2 w-full md:w-auto mt-3 md:mt-0">
                    <div className='relative'>
                        <input
                            className={`w-full md:w-64 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400  outline-none ${shadow}`}
                            placeholder="Search City"
                            type="text"
                            value={cityName}
                            onChange={(event) => handleOnChange(event)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    modifyInput()
                                    fetchData(apiKey)
                                    setLoading("scale-100");
                                    setTimeout(() => {
                                        setLoading("scale-0")
                                    }, 600);
                                }
                            }}
                        />
                        <ul className={`absolute ${visibility} left-0 top-10 w-64 border-none rounded-t-2xl -z-0 rounded-b-4xl shadow-[0px_1px_2px_1px_black] p-4 bg-gray-900`}> {suggestionArr.map(suges => (
                            <li key={suges} className='cursor-pointer' onClick={(e) => { setCityName(suges); setVisibility("hidden") }}> {suges} </li>
                        ))} </ul>

                    </div>
                    <button
                        className={`px-5 py-2 cursor-pointer ${shadow}`}
                        type="button"
                        onClick={() => {
                            modifyInput();
                            fetchData(apiKey); setLoading("scale-100"); setTimeout(() => {
                                setLoading("scale-0")
                            }, 600);
                            setCityName("")
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <div className="flex gap-2">
                        <button
                            className={`${check ? "block" : "hidden"} bg-gray-800 px-5 py-2 rounded-full cursor-pointer hover:bg-gray-900 transition-all duration-200 ${shadow}`}
                            onClick={enableLightMode}
                        >
                            Light Mode
                        </button>
                        <button
                            className={`${check ? "hidden" : "block"} bg-gray-700 px-5 py-2 rounded-full cursor-pointer hover:bg-gray-600 transition-all duration-200 ${shadow}`}
                            onClick={enableDarkMode}
                        >
                            Dark Mode
                        </button>
                    </div>
                    <div className="mt-3 md:mt-0 text-sm text-white font-bold bg-green-500 px-6 py-2 rounded-full">
                        {country} , {city}
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header