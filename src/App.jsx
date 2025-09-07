import React from 'react'
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"

const App=()=>{
    return(
        <main className="max-w mx-auto">
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
        </main>
    )
}

export default App