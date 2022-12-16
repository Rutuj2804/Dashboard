import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import data from "../../assets/data/emaildata.json";
import { setHeader } from "../../store/settings";
import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/solid";

const valueGetter = (params) => {
    return `${params.row.title} - ${params.row.text} ${params.row.text} ${params.row.text}`;
};

const columns = [
    { field: "id", headerName: "ID", width: 90, disableColumnMenu: true },
    {
        field: "title",
        headerName: "Email",
        flex: 1,
        valueGetter: valueGetter,
        disableColumnMenu: true
    },
];

const Emails = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeader("Emails"));
    }, []);

    return (
        <div>
            <Head>
                <title>Emails - deep</title>
            </Head>
            <main>
                <div className="flex justify-between items-center customers__Wrapper hidden sm:hidden md:flex lg:flex">
                    <div className="left">
                        <div className="tab active">Primary (200)</div>
                        <div className="tab">Promotional (19)</div>
                        <div className="tab">Professional (57)</div>
                        <div className="tab">Social (7)</div>
                    </div>
                    <div className="right">
                        <EnvelopeOpenIcon className="h-12 w-12 text-green-500" />
                        <EnvelopeIcon className="h-12 w-12 text-red-500" />
                    </div>
                </div>
                <div className="mt-4">
                    <Paper className="h-[800px]">
                        <DataGrid
                            columns={columns}
                            rows={data}
                            checkboxSelection
                            rowsPerPageOptions={[]}
                            disableSelectionOnClick
                        />
                    </Paper>
                </div>
            </main>
        </div>
    );
};

export default Emails;
