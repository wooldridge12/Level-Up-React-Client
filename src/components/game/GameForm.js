import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory } from 'react-router-dom'


export const GameForm = () => {
    const history = useHistory()
    const { createGame, getGameTypes, gameTypes } = useContext(GameContext)

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentGame, setCurrentGame] = useState({
        numberOfPlayers: 0,
        name: "",
        description: "",
        maker: "",
        gameTypeId: 0
    })

    /*
        Get game types on initialization so that the <select>
        element presents game type choices to the user.
    */
    useEffect(() => {
        getGameTypes()
    }, [])

    /*
        REFACTOR CHALLENGE START

        Can you refactor this code so that all property
        state changes can be handled with a single function
        instead of five functions that all, largely, do
        the same thing?

        One hint: [event.target.name]
    */
    const changeGameNameState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.name = event.target.value
        setCurrentGame(newGameState)
    }

    const changeGameHostState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.host = event.target.value
        setCurrentGame(newGameState)
    }

    const changeGamePlayersState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.numberOfPlayers = event.target.value
        setCurrentGame(newGameState)
    }

    const changeGameDescriptionState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.description = event.target.value
        setCurrentGame(newGameState)
    }

    const changeGameTypeState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.gameTypeId = event.target.value
        setCurrentGame(newGameState)
    }
    /* REFACTOR CHALLENGE END */

    return (
        <form className="gameForm">
            <h2 className="gameForm__name">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentGame.name}
                        onChange={changeGameNameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="host">Host: </label>
                    <input type="text" name="host" required autoFocus className="form-control"
                        value={currentGame.host}
                        onChange={changeGameHostState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="players">Number Of Players: </label>
                    <input type="number" name="players" required autoFocus className="form-control"
                        value={currentGame.numberOfPlayers}
                        onChange={changeGamePlayersState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={changeGameDescriptionState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="gametype">Game Type: </label>
                    {/* <input type="text" name="gametype" required autoFocus className="form-control"
                        value={currentGame.gameTypes}
                        onChange={changeGameTypeState}
                    /> */}
                    <select name="gametype" id="gametype"
                    onChange={changeGameTypeState}>
                        <option value="0">Please select a game type</option>
                        {
                            gameTypes.map(type => {
                                //label, id
                                return(<option value={type.id}>{type.label}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </fieldset>

            {/* You create the rest of the input fields for each game property */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        maker: currentGame.maker,
                        name: currentGame.name,
                        number_of_players: parseInt(currentGame.numberOfPlayers),
                        description: currentGame.description,
                        game_type: parseInt(currentGame.gameTypeId)
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}
