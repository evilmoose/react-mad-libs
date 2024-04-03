import React, {useState} from "react";

// Collects words from the user through a form.
const MadlibForm = ({ onWordsChange, onSubmit }) => {
    const [formData, setFormData] = useState({
        adjective: '',
        noun: '',
        verb: '',
        adverb: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onWordsChange(formData);
        onSubmit();
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="adjective" value={formData.adjective} onChange={handleChange} placeholder="Adjective" />
                <input type="text" name="noun" value={formData.noun} onChange={handleChange} placeholder="Noun" />
                <input type="text" name="verb" value={formData.verb} onChange={handleChange} placeholder="Verb" />
                <input type="text" name="adverb" value={formData.adverb} onChange={handleChange} placeholder="Adverb" />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MadlibForm;