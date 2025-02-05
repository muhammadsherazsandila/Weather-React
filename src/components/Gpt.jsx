import { useState, useEffect } from "react";

const Gpt = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "#222" : "#fff";
    }, [darkMode]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <label className="flex items-center space-x-2 cursor-pointer">
                <span className="text-lg font-semibold">{darkMode ? "Dark Mode" : "Light Mode"}</span>
                <input
                    type="checkbox"
                    className="hidden"
                    checked={darkMode}
                    onChange={() => setDarkMode(prev => !prev)}
                />
                <div className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 ${darkMode ? 'bg-gray-700' : ''}`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform duration-300 ${darkMode ? 'translate-x-6' : ''}`}></div>
                </div>
            </label>
            <p className="mt-4 text-lg text-gray-800 dark:text-gray-200">
                {darkMode ? "Welcome to Dark Mode!" : "Welcome to Light Mode!"}
            </p>
        </div>
    );
};

export default Gpt;
