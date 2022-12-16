import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import data from "../../assets/data/mockdata.json";
import { setHeader } from "../../store/settings";
import { ChartBarIcon, ChartPieIcon } from "@heroicons/react/24/solid"

const columns = [
    { field: "id", headerName: "ID", width: 90, disableColumnMenu: true },
    {
        field: "first_name",
        headerName: "First name",
        width: 200,
        disableColumnMenu: true
    },
    {
        field: "last_name",
        headerName: "Last name",
        width: 200,
        disableColumnMenu: true
    },
    {
        field: "email",
        headerName: "Email",
        width: 300,
        disableColumnMenu: true
    },
    {
        field: "phone",
        headerName: "Phone",
        width: 200,
        disableColumnMenu: true
    },
    {
        field: "country",
        headerName: "Country",
        width: 200,
        disableColumnMenu: true
    },
    {
        field: "currency",
        headerName: "Currency",
        width: 200,
        disableColumnMenu: true
    },
];

const Customers = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setHeader("Customers"))
    }, [])

    return (
        <div>
            <Head>
                <title>Customers - deep</title>
            </Head>
            <main>
                <div className="justify-between items-center customers__Wrapper hidden md:flex">
                    <div className="left">
                        <div className="tab active">Active (200)</div>
                        <div className="tab">Deleted (19)</div>
                    </div>
                    <div className="right">
                        <ChartBarIcon className="h-12 w-12 text-green-500" />
                        <ChartPieIcon className="h-12 w-12 text-red-500" />
                    </div>
                </div>
                <div className="mt-4">
                    <Paper className="h-[800px]">
                        <DataGrid columns={columns} rows={data} checkboxSelection rowsPerPageOptions={[]} />
                    </Paper>
                </div>
            </main>
        </div>
    );
};

export default Customers;
