import React, {useState} from "react";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";

// Madlib is the top-level component that manages stats of the madlib game
const Madlib = () =>{
    return (
        <div>
            <p>Madlib Goes Here</p>
            <MadlibForm />
            <MadlibStory />
        </div>
    )
}

export default Madlib;