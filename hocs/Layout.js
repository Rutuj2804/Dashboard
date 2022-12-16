import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import { toggleDisplayMode } from "../store/settings"

const Layout = ({ children }) => {

    const sidebar = useSelector(state=>state.settings.sidebar)

    const darkMode = useSelector(state=>state.settings.darkMode)

    const dispatch = useDispatch()

    useEffect(()=>{
        const mode = localStorage.getItem("mode")
        if(mode === null) localStorage.setItem("mode", "light")

        else dispatch(toggleDisplayMode(mode))
    }, [])

    useEffect(()=>{
        if(darkMode === "dark")
        document.getElementsByTagName('body')[0].classList.add("dark")
        else document.getElementsByTagName('body')[0].classList.remove("dark")
    }, [darkMode])
console.log(darkMode);
    return (
        <div className={sidebar ? 'layout': 'toggle-layout'}>
            <Sidebar />
            <div className={darkMode ? 'dark main': 'main'}>
                <Navbar />
                {children}
            </div>
            <div className='others'></div>
        </div>
    )
}

export default Layout