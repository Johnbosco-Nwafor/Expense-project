import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Info from './components/Info'
import Start from './components/Start'
import Chart from './components/Chart'
import Doughnut from './components/Doughnut'
import Transactions from './components/Transactions'
import Accounts from './components/Accounts'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMenu, setIsMenu] = useState(true)

  const toggleTheme = ()=>{
    setIsDarkMode((prev)=> !prev)
  }

  const toggleMenu = ()=>{
    setIsMenu((prev)=> !prev)
  }

  return (
    <main className={isDarkMode ? "dark" : "light"}>
      <div className={`w-full px-0 md:px-20 2xl:px-20 bg-white dark:bg-slate-900 ${isDarkMode && "dark"}`}>
        <Navbar 
         isDarkMode={isDarkMode}
         isMenu={isMenu}
         toggleMenu={toggleMenu}
         toggleTheme={toggleTheme}
        />

        <div className='px-5 md:px-5' id='dashboard'>
          <Info title="Dashboard" subTitle="Monitor your financial activities"/>
          <Start />

          <div className='w-full flex flex-col-reverse md:flex-row gap-6 justify-between py-12'>
            <Chart />
            <Doughnut />
          </div>

          <div className='w-full flex flex-col-reverse md:flex-row gap-10 justify-between py-12'>
            <Transactions />
            <Accounts />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
