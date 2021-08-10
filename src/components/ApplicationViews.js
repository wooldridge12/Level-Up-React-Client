import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./event/EventProvider.js"
import { EventList } from "./event/EventList.js"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { GameForm } from "./game/GameForm.js"
import { EventForm } from "./event/EventForm.js"
import { ProfileProvider } from "./auth/ProfileProvider.js"
import { Profile } from "./auth/profileList.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <ProfileProvider>
           <GameProvider>
           <EventProvider>
               <Route exact path="/">
                   <GameList />
               </Route>
               <Route exact path="/games/new">
                   <GameForm />
               </Route>

               <Route exact path="/profile">
                   <Profile />
               </Route>

               <Route exact path="/events">
                   <EventList />
               </Route>
               <Route exact path="/events/new">
                   <EventForm />
               </Route>
           </EventProvider>
           </GameProvider>
           </ProfileProvider>
        </main>
    </>
}
