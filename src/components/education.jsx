import { useState } from "react";

function EducationItem() {
    const initialObj = {
        "school" : "school",
        "title" : "title of education", 
        "year" : "graduation year"
    };
    const [educationInfo, setEducationInfo] = useState(initialObj);
    const [formDisplayed, setFormDisplayed] = useState(true);

    function handleChange(newObj) {
        setEducationInfo(newObj);
    }

    function handleClick(e) {
        e.preventDefault();
        setFormDisplayed(!formDisplayed);
    }

    if (formDisplayed) {
        return (
            <section className = "educationItem">
                <label htmlFor = "school">School: </label>
                <input
                    placeholder = "Name of School"
                    type = "text"
                    id = "school"
                    value = {educationInfo.school}
                    onChange = {(e) => handleChange({
                            ...educationInfo,
                            "school" : e.target.value
                        })
                    } />
                <label htmlFor = "title">Title: </label>
                <input
                    placeholder = "Title of Qualification"
                    type = "text"
                    id = "title"
                    value = {educationInfo.title}
                    onChange = {(e) => handleChange({
                            ...educationInfo,
                            "title" : e.target.value
                        })
                    } />
                <label htmlFor = "year">Graduation Year: </label>
                <input
                    placeholder = "Year of Graduation"
                    type = "text"
                    id = "year"
                    value = {educationInfo.year}
                    onChange = {(e) => handleChange({
                            ...educationInfo,
                            "year" : e.target.value
                        })
                    } />
                <button onClick = {handleClick}>{formDisplayed ? "Submit" : "Edit"}</button>
            </section>
        );
    }
    else {
        return (
            <section className = "basics">
                <p>School: {educationInfo.school}</p>
                <p>Title: {educationInfo.title}</p>
                <p>Year of Graduation: {educationInfo.year}</p>
                <button onClick = {handleClick}>{formDisplayed ? "Submit" : "Edit"}</button>
            </section>
        );
    }
}

function EducationSection() {
    const [educationItems, setEducationItems] = useState([]);

    function handleAdd() {
        setEducationItems([...educationItems, <EducationItem key = {educationItems.length}/>]);
    }

    return (
        <section className = "educationSection">
            {
                educationItems
            }
        <button onClick = {handleAdd}>Add</button>
        </section>
        
    );
}

export {EducationSection};