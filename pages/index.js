import { BanknotesIcon, CalendarIcon, CreditCardIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cards from "../components/cards";
import MyResponsiveBar from "../components/charts/NivoBarChart";
import MyResponsiveBump from "../components/charts/NivoBumpChart";
import MyResponsiveLine from "../components/charts/NivoLineChart";
import MyResponsivePie from "../components/charts/NivoPieChart";
import Paper from "../components/paper"
import { setHeader } from "../store/settings";

const cardsData = [
    { count: 299, name: "Meetings", percentage: 29, isDown: false, icon: <CreditCardIcon className='h-10 w-10 text-green-500' /> },
    { count: 20, name: "Events", percentage: 10, isDown: true, icon: <CalendarIcon className='h-10 w-10 text-red-500' /> },
    { count: 587, name: "Emails", percentage: 17, isDown: false, icon: <EnvelopeIcon className='h-10 w-10 text-blue-500' /> },
    { count: "188k", name: "Spendings", percentage: 50, isDown: true, icon: <BanknotesIcon className='h-10 w-10 text-yellow-500' /> },
]

const Index = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(setHeader("Good Morning, Rutuj!"))
    }, [dispatch])

    return <div>
        <Head>
            <title>Dashboard | deep</title>
        </Head>
        <main>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                {
                    cardsData.map((c, i)=>(<Cards key={i} count={c.count} name={c.name} percentage={c.percentage} isDown={c.isDown} icon={c.icon} />))
                }
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                <Paper className="h-[500px] col-span-2">
                    <MyResponsiveLine />
                </Paper>
                <Paper className="h-[500px]">
                    <MyResponsiveBar />
                </Paper>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                <Paper className="h-[500px]">
                    <MyResponsivePie />
                </Paper>
                <Paper className="h-[500px]">
                    <MyResponsiveBar layout="horizontal" />
                </Paper>
                <Paper className="h-[500px]">
                    <MyResponsiveBump  />
                </Paper>
            </div>
        </main>
    </div>;
};

export default Index;
