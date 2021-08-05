import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import "./GameList.css"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">
            <header className="games-header">
            <h1>Level Up Games</h1>
            </header>
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__name">{game.name} by {game.maker}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__description">{game.description}</div>
                    </section>
                })
            }
        </article>
    )
}
