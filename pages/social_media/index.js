import { ChatBubbleBottomCenterIcon, RocketLaunchIcon, Square2StackIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { DataGrid } from '@mui/x-data-grid'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cards from '../../components/cards'
import MyResponsiveLine from '../../components/charts/NivoLineChart'
import MyResponsivePie from '../../components/charts/NivoPieChart'
import Paper from '../../components/paper'
import { setHeader } from "../../store/settings"
import data from "../../assets/data/socialmedia.json"
import { Avatar } from '@mui/material'
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs"

const cardsData = [
    { count: 299, name: "Followers", percentage: 29, isDown: false, icon: <UserGroupIcon className='h-10 w-10 text-green-500' /> },
    { count: 20, name: "Posts", percentage: 10, isDown: true, icon: <Square2StackIcon className='h-10 w-10 text-red-500' /> },
    { count: 587, name: "Direct Messages", percentage: 17, isDown: false, icon: <ChatBubbleBottomCenterIcon className='h-10 w-10 text-blue-500' /> },
    { count: "188k", name: "Traffic", percentage: 50, isDown: true, icon: <RocketLaunchIcon className='h-10 w-10 text-yellow-500' /> },
]

const valueGetter = (params) => {
    return `${params.row.first_name} ${params.row.last_name}`
}

const columns = [
    { field: "id", headerName: "ID", width: 90, disableColumnMenu: true },
    {
        field: "first_name",
        headerName: "Full name",
        width: 200,
        valueGetter: valueGetter,
        disableColumnMenu: true,
        renderCell: (params=><><Avatar src={params.row.avatar} /> {params.value}</>),
        flex: 1
    },,
    {
        field: "username",
        headerName: "Username",
        width: 300,
        disableColumnMenu: true,
        valueGetter: params=>(`@${params.row.username}`)
    },
    {
        field: "isDown",
        headerName: "Progress",
        width: 200,
        disableColumnMenu: true,
        renderCell: (params=><>{params.value ? <div className='text-red-500'><BsCaretDownFill /></div>: <div className='text-green-500'><BsCaretUpFill /></div>}&nbsp;&nbsp;{Math.floor(Math.random()*50)}% </>)
    },
    {
        field: "followers",
        headerName: "Followers",
        width: 200,
        disableColumnMenu: true,
        flex: 1
    },
    {
        field: "following",
        headerName: "Following",
        width: 200,
        disableColumnMenu: true
    },
];

const SocialMedia = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setHeader("Social Media"))
    }, [dispatch])

    return (
        <div>
            <Head>
                <title>Social Media - deep</title>
            </Head>
            <main>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4'>
                    {
                        cardsData.map((c, i)=>(<Cards key={i} count={c.count} name={c.name} percentage={c.percentage} isDown={c.isDown} icon={c.icon} />))
                    }
                </div>
                <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                    <Paper className="h-[500px] col-span-3 md:col-span-3 lg:col-span-2">
                        <MyResponsiveLine />
                    </Paper>
                    <Paper className="h-[500px] col-span-3 md:col-span-3 lg:col-span-1">
                        <MyResponsivePie />
                    </Paper>
                </div>
                <Paper className="h-[800px] mt-4">
                    <DataGrid columns={columns} rows={data} checkboxSelection rowsPerPageOptions={[]} />
                </Paper>
            </main>
        </div>
    )
}

export default SocialMedia