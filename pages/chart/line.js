import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setHeader } from '../../store/settings'
import Paper from "../../components/paper"
import MyResponsiveLine from '../../components/charts/NivoLineChart'

const Line = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setHeader("Charts"))
    }, [])

    return (
        <div>
            <Head>
                <title>Charts - deep</title>
            </Head>
            <Paper className="h-[88vh] mt-4">
                <MyResponsiveLine />
            </Paper>
        </div>
    )
}

export default Line