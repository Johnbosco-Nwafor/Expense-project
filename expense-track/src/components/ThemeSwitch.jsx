import React from 'react'

const ThemeSwitch = ({isDarkMode, toggleTheme}) => {
  return (
    <div
     onClick={toggleTheme}
     className={`w-14 h-7 rounded-full transition-colors duration-300 p-1
        ${isDarkMode ? "bg-slate-700" : "bg-slate-300"}`}
    >
        <div className={`h-5 w-5 transform transition-transform bg-white rounded-full
            ${isDarkMode ? "translate-x-7" : "translate-x-0"}
        `}/>
    </div>
  )
}

export default ThemeSwitch