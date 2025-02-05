import React, { useContext } from 'react'
import MyContext from '../contexts/Mycontext'

function RightCard() {
    const { bgColor, textColor, weather, temp, feelsTemp, sunRise, sunSet, humidity, pressure, windSpeed, cloud, humidityImg, pressureImg, windImg, cloudImg } = useContext(MyContext)
    return (
        <div className={`rounded-2xl shadow-[0px_2px_9px_1px_black] text-${textColor} w-full max-w-5xl place-items-center ${bgColor}`}>
            <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-6 `}>
                <div className='text-center flex flex-col gap-3 '>
                    <div>
                        <p className='text-5xl font-bold'>
                            {temp}&deg;C
                        </p>
                        <div>
                            <span className='mr-1'>Feels Like:</span>
                            <span >{feelsTemp}&deg;C</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 items-center '>
                        <div className='flex items-center justify-between text-center'>
                            <img src="/icons/arrow_up.png" className='h-7 w-7' alt="icons" />
                            <div className='flex flex-col'>
                                <span>Sunrize</span>
                                <span>{sunRise}</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-between text-center'>
                            <img src="/icons/arrow_up.png" className='h-7 w-7 rotate-180' alt="icons" />
                            <div className='flex flex-col'>
                                <span>Sunset</span>
                                <span>{sunSet}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center '>
                    <img src="/icons/sun.png" alt="icons" />
                    <h1 className='font-bold text-xl -tracking-tighter'> {weather} </h1>
                </div>
                <div className='flex items-center flex-col gap-5 text-[14px]'>
                    <div className='flex flex-col items-center'>
                        <img src={humidityImg} className='w-12 h-10' alt="icons" />
                        <span>{humidity}%</span>
                        <span>Humidity</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={pressureImg} className='w-12 h-10' alt="icons" />
                        <span>{pressure} hpa</span>
                        <span>Pressure</span>
                    </div>
                </div>
                <div className='flex items-center flex-col gap-5 text-[14px]'>
                    <div className='flex flex-col items-center'>
                        <img src={windImg} className='w-12 h-10' alt="icons" />
                        <span>{windSpeed} km/h</span>
                        <span>Wind Speed</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={cloudImg} className='w-12 h-10' alt="icons" />
                        <span>{cloud}%</span>
                        <span>Clouds</span>
                    </div>
                </div>
            </div>
            <p className='text-gray-300 py-2'>Designed By : <span className='text-blue-300'>Muhammad Sheraz</span></p>
        </div>
    )
}

export default RightCard
