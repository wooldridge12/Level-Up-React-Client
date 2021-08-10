import { createEvent } from "@testing-library/react"
import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "../game/GameProvider"
import { EventContext } from "./EventProvider"


export const EventForm = () => {
    const history = useHistory()
    const { games, getGames } = useContext(GameContext)
    const { createEvent } = useContext(EventContext)
    const [currentEvent, setCurrentEvent] = useState({
        gameId: "",
        date: "",
        time: "",
        description: "",
        title: "",
        attendees: 0
    })

    useEffect(() => {
        getGames()
    }, [])

    const changeEventGameState = (domEvent) => {
        const newEventGameState = { ...currentEvent }
        newEventGameState.gameId = domEvent.target.value
        setCurrentEvent(newEventGameState)
    }

    const changeEventDateState = (domEvent) => {
        const newEventDateState = { ...currentEvent }
        newEventDateState.date = domEvent.target.value
        setCurrentEvent(newEventDateState)
    }

    const changeEventTimeState = (domEvent) => {
        const newEventTimeState = { ...currentEvent }
        newEventTimeState.time = domEvent.target.value
        setCurrentEvent(newEventTimeState)
    }

    const changeEventDescriptionState = (domEvent) => {
        const newEventDescriptionState = { ...currentEvent }
        newEventDescriptionState.description = domEvent.target.value
        setCurrentEvent(newEventDescriptionState)
    }

    const changeEventTitleState = (domEvent) => {
        const newEventTitleState = { ...currentEvent }
        newEventTitleState.title = domEvent.target.value
        setCurrentEvent(newEventTitleState)
    }

    const changeEventAttendeesState = (domEvent) => {
        const newEventAttendeesState = { ...currentEvent }
        newEventAttendeesState.attendees = domEvent.target.value
        setCurrentEvent(newEventAttendeesState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventGame">Game: </label>

                    <select name="eventGame" className="form-control"
                        value={ currentEvent.gameId }
                        onChange={changeEventGameState}>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => {
                              return( <option value={game.id}>{game.name}</option>
                              )
                              })
                        }
                    </select>
                </div>
            </fieldset>



            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        value={currentEvent.date}
                        onChange={changeEventDateState}
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input type="time" name="time" required autoFocus className="form-control"
                        value={currentEvent.time}
                        onChange={changeEventTimeState}
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Decription:</label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentEvent.description}
                        onChange={changeEventDescriptionState}
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentEvent.title}
                        onChange={changeEventTitleState}
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="attendees">Attendees:</label>
                    <input type="number" name="attendees" required autoFocus className="form-control"
                        value={currentEvent.attendees}
                        onChange={changeEventAttendeesState}
                        />
                </div>
            </fieldset>

            {/* Create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    // Create the event
                    const event = {
                        gameId: parseInt(currentEvent.gameId),
                        date: currentEvent.date,
                        time: currentEvent.time,
                        description: currentEvent.description,
                        title: currentEvent.title,
                        attendees: parseInt(currentEvent.attendees)
                    }


                    // Once event is created, redirect user to event list
                    createEvent(event)
                        .then(() => history.push("/events"))
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}