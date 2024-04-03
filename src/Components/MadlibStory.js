import React from "react";

// component displays the story with the user's words.

const MadlibStory = ({words}) => {
    const { adjective, noun, verb, adverb } = words;
    const story = `Once upon a time, a ${adjective} ${noun} decided to ${verb} ${adverb}.`;

    return (
        <div>
            <p>{story}</p>
        </div>
    )
}

export default MadlibStory;