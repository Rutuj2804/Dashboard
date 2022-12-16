import { BanknotesIcon, CreditCardIcon, CurrencyDollarIcon, FunnelIcon } from '@heroicons/react/24/solid'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cards from '../../components/cards'
import Paper from '../../components/paper'
import { setHeader } from "../../store/settings"
import data from "../../assets/data/mockdata.json";
import { DataGrid } from '@mui/x-data-grid'
import { Avatar } from '@mui/material'
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs"
import MyResponsiveBump from '../../components/charts/NivoBumpChart'
import MyResponsiveBar from '../../components/charts/NivoBarChart'
import MyResponsivePie from '../../components/charts/NivoPieChart'

const cardsData = [
    { count: "180k", name: "Earned", percentage: 29, isDown: false, icon: <CreditCardIcon className='h-10 w-10 text-green-500' /> },
    { count: "20k", name: "Extras", percentage: 10, isDown: true, icon: <CurrencyDollarIcon className='h-10 w-10 text-red-500' /> },
    { count: "50k", name: "Dues", percentage: 17, isDown: false, icon: <FunnelIcon className='h-10 w-10 text-blue-500' /> },
    { count: "90k", name: "Spendings", percentage: 50, isDown: true, icon: <BanknotesIcon className='h-10 w-10 text-yellow-500' /> },
]

const columns = [
    { field: "id", headerName: "ID", width: 90, disableColumnMenu: true },
    {
        field: "first_name",
        headerName: "Full name",
        width: 200,
        disableColumnMenu: true,
        valueGetter: (params=>`${params.row.first_name} ${params.row.last_name}`),
        renderCell: (params=>(<><Avatar src={params.row.avatar} />&nbsp;&nbsp;{params.value}</>)),
        flex: 1
    },
    {
        field: "isDown",
        headerName: "Performance",
        width: 150,
        disableColumnMenu: true,
        renderCell: (params=><>{params.value ? <div className='text-red-500'><BsCaretDownFill /></div>: <div className='text-green-500'><BsCaretUpFill /></div>}&nbsp;&nbsp;{Math.floor(Math.random()*50)}% </>)
    },
    {
        field: "phone",
        headerName: "Phone",
        width: 150,
        disableColumnMenu: true
    },
    {
        field: "country",
        headerName: "Country",
        width: 150,
        disableColumnMenu: true
    },
    {
        field: "currency",
        headerName: "Currency",
        width: 150,
        disableColumnMenu: true
    },
];

const Spendings = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setHeader(""))
        dispatch(setHeader("Spendings"))
    }, [])

    return (
        <div>
            <Head>
                <title>Spendings - deep</title>
            </Head>
            <main>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
                    {
                        cardsData.map(c=>(<Cards count={c.count} name={c.name} percentage={c.percentage} isDown={c.isDown} icon={c.icon} />))
                    }
                </div>
                <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mt-4 gap-4'>
                    <Paper className="col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2 h-[500px]">
                        <DataGrid columns={columns} rows={data} checkboxSelection rowsPerPageOptions={[]} />
                    </Paper>
                    <Paper className="h-[500px] col-span-3 lg:col-span-1">
                        <MyResponsiveBar />
                    </Paper>
                </div>
                <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mt-4 gap-4'>
                    <Paper className="h-[500px] col-span-3 lg:col-span-1">
                        <MyResponsivePie />
                    </Paper>
                    <Paper className="col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2 h-[500px]">
                        <MyResponsiveBump  />
                    </Paper>
                </div>
            </main>
        </div>
    )
}

export default Spendings