import React, { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import Paper from "../paper";
import { Button, IconButton } from "@mui/material";
import { CalendarIcon, XMarkIcon } from "@heroicons/react/24/solid"

const EventCalendar = () => {
    const [currentEvent, setCurrentEvent] = useState([]);

    const [addEvent, setAddEvent] = useState(false);

    const [value, setValue] = useState("")

    const handleDateClick = (selected) => {
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();
        const title = prompt("Input title of event");
        if (title) {
            calendarApi.addEvent({
                id: `${selected.endStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        // are you sure you want to delete
        const cin = confirm("Do you want to delete the event")
        if(cin)
        selected.event.remove();
    };

    const onSubmit = () => {
        console.log("asdbv");
        
        setAddEvent(false)
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="events_list col-span-4 sm:col-span-4 md:col-span-1">
                    {currentEvent.map((e) => (
                        <div className="event" key={e.id}>
                            {e.title}
                        </div>
                    ))}
                    <div className="text-center text-gray-600">
                        {currentEvent.length === 0
                            ? "No events to display"
                            : null}
                    </div>
                </div>
                <Paper className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-3">
                    <FullCalendar
                        height="82vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            listPlugin,
                            interactionPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable
                        selectable
                        selectMirror
                        dayMaxEvents
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(e) => setCurrentEvent(e)}
                        initialEvents={[
                            {
                                id: "1234",
                                title: "Meeting with bob",
                                date: "2022-12-14",
                            },
                            {
                                id: "34",
                                title: "Meeting with sam",
                                date: "2022-12-14",
                            },
                        ]}
                    />
                </Paper>
            </div>
            {addEvent && <div className="addEventPopover__Wrapper" onClick={()=>setAddEvent(false)}>
        <div className="block"  onClick={e=>e.stopPropagation()}>
            <div className="top">
                <h4>Add Event</h4>
                <IconButton onClick={()=>setAddEvent(false)}>
                    <XMarkIcon className="h-5 w-5 text-black" />
                </IconButton>
            </div>
            <form onSubmit={onSubmit}>
                <input placeholder="Title of the event..." required value={value} onChange={e=>setValue(e.target.value)} />
                <Button type="submit" endIcon={<CalendarIcon className="h-5 w-5 text-white" />}>Add Event</Button>
            </form>
        </div>
    </div> }
        </>
    );
};

export default EventCalendar;
