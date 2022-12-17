import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setHeader } from "../../store/settings"
import Paper from "../../components/paper"
import MyResponsiveChoropleth from '../../components/charts/GeographyChart'

const Insights = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setHeader("Insights"))
    }, [dispatch])

    return (
        <div>
            <Head>
                <title>Insights - deep</title>
            </Head>
            <main>
                <Paper className="h-[85vh] mt-4">
                    <MyResponsiveChoropleth />
                </Paper>
            </main>
        </div>
    )
}

export default Insights