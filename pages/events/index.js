import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EventCalendar from '../../components/calendar'
import { setHeader } from "../../store/settings"

const Events = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setHeader("Events"))
    }, [dispatch])

    return (
        <div className='events__Wrapper'>
            <Head>
                <title>Events - deep</title>
            </Head>
            <EventCalendar />
        </div>
    )
}

export default Events