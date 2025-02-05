import React from 'react'
import LeftCard from './LeftCard'
import RightCard from './RightCard'
function Hero() {
    return (
        <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start w-full max-w-6xl mx-auto p-6">
            {/* Left Card (Weather Info) */}
            <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
                <LeftCard />
            </div>

            {/* Right Card (Additional Data) */}
            <div className="w-full">
                <RightCard />
            </div>
        </div>
    )
}

export default Hero
