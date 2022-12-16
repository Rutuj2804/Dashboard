import Link from "next/link";
import React, { useState } from "react";
import Logo from "../logo";
import {
    CalendarDaysIcon,
    ChartPieIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CreditCardIcon,
    EnvelopeIcon,
    HeartIcon,
    PaperAirplaneIcon,
    Squares2X2Icon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/settings"
import { useRouter } from "next/router";

const NavLink = ({ name, icon, link }) => {

    const router = useRouter()
    return (
        <Link href={link} className={`flex items-center gap-4 navlink ${router.pathname === link ? "active": null}`}>
            {icon}
            <h6>{name}</h6>
        </Link>
    );
};

const sidebarData = [
    {
        name: "General",
        links: [
            { name: "Dashboard", icon: <Squares2X2Icon className="h-5 w-5" />, link: "/" },
            { name: "Customers", icon: <UsersIcon className="h-5 w-5" />, link: "/customers" },
            {
                name: "Events",
                icon: <CalendarDaysIcon className="h-5 w-5" />, link: "/events",
            },
        ],
    },
    {
        name: "Communication",
        links: [
            { name: "Emails", icon: <EnvelopeIcon className="h-5 w-5" />, link: "/emails" },
            {
                name: "Messaging",
                icon: <PaperAirplaneIcon className="h-5 w-5" />, link: "/messaging"
            },
            { name: "Social Media", icon: <HeartIcon className="h-5 w-5" />, link: "/social_media" },
        ],
    },
    {
        name: "Performance",
        links: [
            { name: "Insights", icon: <ChartPieIcon className="h-5 w-5" />, link: "/insights" },
            { name: "Spendings", icon: <CreditCardIcon className="h-5 w-5" />, link: "/spendings" },
        ],
    },
];

const Sidebar = () => {

    const dispatch = useDispatch()

    const sidebar = useSelector(state=>state.settings.sidebar)

    return (
        <div className="sidebar__Wrapper">
            <div className="">
                <Logo />
            </div>
            <div className="pannel" onClick={()=>dispatch(toggleSidebar())}>
                {sidebar ? <ChevronLeftIcon className="h-5 w-5" />: <ChevronRightIcon className="h-5 w-5" />}
            </div>
            <div className="middle">
                {sidebarData.map((a) => (
                    <>
                        <span className="category">{a.name}</span>
                        {a.links.map((b) => (
                            <NavLink name={b.name} icon={b.icon} link={b.link} />
                        ))}
                    </>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
