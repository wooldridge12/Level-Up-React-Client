import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import { useHistory } from "react-router-dom"
import "./EventList.css"

export const EventList = (props) => {
    const history = useHistory()
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <article className="events">
            <header className="events__header">

                <h1>Level Up Events</h1>

                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/events/new"})
                    }}
                    > Register New Event</button>
            </header>
            {
                events.map(event => {
                    return <section key={event.id} className="registration">
                        <div className="registration__event_title">{event.title}</div>
                        <div className="registration__event_name">{event.game.name}</div>
                        <div>Description: {event.game.description}</div>
                        <div> 
                            Time:  {
                                new Date(event.date).toLocaleDateString("en-US",
                                {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })
                            }
                            @ {event.time}
                        </div>
                        <div className="registration__event">{event.attendees}</div>
                    </section>
                })
            }
        </article >
    )
}
