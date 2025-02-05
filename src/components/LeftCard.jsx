import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../contexts/Mycontext';

function LeftCard() {
    const { bgColor, textColor } = useContext(MyContext)
    const [currentTime, setCurrentTime] = useState(new Date(Date.now()))
    const [check, setCheck] = useState(true)
    useEffect(() => {
        const interval = setInterval(() => {
            setCheck(prevCheck => !prevCheck);
        }, 60000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        setCurrentTime(new Date(Date.now()))
    }, [check])
    return (
        <div className={`flex flex-col gap-6 py-8 rounded-2xl text-${textColor} w-full max-w-xs md:max-w-sm lg:max-w-md text-center shadow-[0px_2px_9px_1px_black] ${bgColor}`}>
            <h1 className='text-3xl font-bold'>Hello,</h1>
            <div>
                <h1 className='text-6xl font-extrabold tracking-wide'> {currentTime.getHours() > 10 ? currentTime.getHours() : `0${currentTime.getHours()}`}:{currentTime.getMinutes() > 10 ? currentTime.getMinutes() : `0${currentTime.getMinutes()}`} </h1>
                <p className='text-lg font-light'>{(new Date).toLocaleDateString('en-US', { weekday: 'long' })}, {currentTime.getMonth() > 10 ? currentTime.getDate() : `0${currentTime.getDate()}`} {(new Date).toLocaleDateString("en-US", { month: "long" })} </p>
            </div>
        </div>
    )
}

export default LeftCard
