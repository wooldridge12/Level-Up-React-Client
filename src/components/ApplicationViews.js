import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./game/EventProvider.js"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { EventList } from "./game/EventList.js"
import { GameForm } from "./game/GameForm.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
           <GameProvider>
               <Route exact path="/">
                   <GameList />
               </Route>
               <Route exact path="/games/new">
                   <GameForm />
               </Route>
           </GameProvider>

           <EventProvider>
               <Route exact path="/events">
                   <EventList />
               </Route>
           </EventProvider>
        </main>
    </>
}
