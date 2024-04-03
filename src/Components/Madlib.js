import React, {useState} from "react";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";

// Madlib is the top-level component that manages stats of the madlib game
const Madlib = () => {
    const [words, setWords] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleWordsChange = (newWords) => {
        setWords(newWords);
    }

    const handleSubmit = () => {
        setIsSubmitted(true);
    }

    return (
        <div>
            {!isSubmitted ? (
                <MadlibForm 
                    onWordsChange={handleWordsChange}
                    onSubmit={handleSubmit}
                />
            ) : (
                <MadlibStory 
                    words={words} 
                />
            )}
        </div>
    );
}

export default Madlib;