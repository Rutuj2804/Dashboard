import { Badge, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { BellIcon, Cog6ToothIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline"
import { BoltIcon, MoonIcon, SunIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid"
import { Fullscreen } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDisplayMode } from "../../store/settings"

const notificationData = [
    { name:"Jon Snow", message: "Posted on his social media" },
    { name:"Cersie Lannister", message: "Earned 140k today" },
    { name:"Aarya Stark", message: "Posted her insights" },
    { name:"Jon Snow", message: "Sent you a message" },
    { name:"Rutuj Bokade", message: "Schedule a event with you" },
]

const Navbar = () => {

    const [settingsPanel, setSettingsPanel] = useState(false)
    const [notificationPanel, setNotificationPanel] = useState(false)

    const header = useSelector(state=>state.settings.header)
    const darkMode = useSelector(state=>state.settings.darkMode)

    const dispatch = useDispatch()

    return (
        <div className='navbar__Wrapper flex justify-between items-center p-4'>
            <div className='left'>
                <h4 className=' hidden md:flex sm:hidden lg:flex'>{header}</h4>
            </div>
            <div className='right flex justify-between items-center gap-6'>
                <form className='hidden md:hidden sm:hidden lg:flex'>
                    <MagnifyingGlassIcon className='h-6 w-6 text-black' />
                    <input type="text" placeholder='Search...' />
                    <code>Ctr + K</code>
                </form>
                <div className='dropdown'>
                    <IconButton>
                        <Fullscreen className='h-6 w-6 text-black' />
                    </IconButton>
                </div>
                <div className='dropdown'>
                    <IconButton onClick={()=>setSettingsPanel(v=>!v)}>
                        <Cog6ToothIcon className='h-6 w-6 text-black' />
                    </IconButton>
                    {settingsPanel && <div className='menu'>
                        <div className='item' onClick={()=>dispatch(toggleDisplayMode())}>
                            <h6>Dark mode</h6>
                            {darkMode === "light" ? <MoonIcon className='h-5 w-5 ' /> : <SunIcon className='h-5 w-5 ' />}
                        </div>
                        <div className='item'>
                            <h6>Access mode</h6>
                            <BoltIcon className='h-5 w-5 text-balck' />
                        </div>
                        <div className='item'>
                            <h6>Display Settings</h6>
                            <WrenchScrewdriverIcon className='h-5 w-5 text-balck' />
                        </div>
                    </div>}
                </div>
                <div className='dropdown'>
                    <IconButton onClick={()=>setNotificationPanel(v=>!v)}>
                        <Badge badgeContent={4} color="error">
                            <BellIcon className='h-6 w-6 text-black' />
                        </Badge>
                    </IconButton>
                    {notificationPanel && <div className='menu'>
                        {
                            notificationData.map((n,i)=>(
                                <div className='notification' key={i} >
                                    <h4>{n.name}</h4>
                                    <p>{n.message}</p>
                                </div>
                            ))
                        }
                        
                    </div>}
                </div>
                <div className='dropdown'>
                    <IconButton>
                        <Badge badgeContent={4} color="error">
                            <UserIcon className='h-6 w-6 text-black' />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Navbar