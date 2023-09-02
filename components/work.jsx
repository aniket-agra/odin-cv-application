import { useState } from "react";

function WorkExItem() {
    const initialObj = {
        "company" : "company",
        "position" : "position", 
        "start" : "start date",
        "end" : "end date",
        "responsibilities" : "responsibilities"
    };
    const [workInfo, setWorkInfo] = useState(initialObj);
    const [formDisplayed, setFormDisplayed] = useState(true);

    function handleChange(newObj) {
        setWorkInfo(newObj);
    }

    function handleClick(e) {
        e.preventDefault();
        setFormDisplayed(!formDisplayed);
    }

    if (formDisplayed) {
        return (
            <section className = "workItem">
                <label htmlFor = "company">Company: </label>
                <input
                    placeholder = "Name of Company"
                    type = "text"
                    id = "company"
                    value = {workInfo.company}
                    onChange = {(e) => handleChange({
                            ...workInfo,
                            "company" : e.target.value
                        })
                    } />
                <label htmlFor = "position">Position: </label>
                <input
                    placeholder = "Title of Position"
                    type = "text"
                    id = "position"
                    value = {workInfo.position}
                    onChange = {(e) => handleChange({
                            ...workInfo,
                            "position" : e.target.value
                        })
                    } />
                <label htmlFor = "start">Start Date: </label>
                <input
                    placeholder = "Starting Date"
                    type = "date"
                    id = "start"
                    value = {workInfo.start}
                    onChange = {(e) => handleChange({
                            ...workInfo,
                            "start" : e.target.value
                        })
                    } />
                <label htmlFor = "end">End Date: </label>
                <input
                    placeholder = "Ending Date"
                    type = "date"
                    id = "end"
                    value = {workInfo.end}
                    onChange = {(e) => handleChange({
                            ...workInfo,
                            "end" : e.target.value
                        })
                    } />
                <label htmlFor = "responsibilities">Responsibilities: </label>
                <input
                    placeholder = "Responsibilities"
                    type = "textarea"
                    id = "responsibilities"
                    value = {workInfo.responsibilities}
                    onChange = {(e) => handleChange({
                            ...workInfo,
                            "responsibilities" : e.target.value
                        })
                    } />
                <button onClick = {handleClick}>{formDisplayed ? "Submit" : "Edit"}</button>
            </section>
        );
    }
    else {
        return (
            <section className = "workSection">
                <p>Company: {workInfo.company}</p>
                <p>Position: {workInfo.position}</p>
                <p>Start Date: {workInfo.start}</p>
                <p>End Date: {workInfo.end}</p>
                <p>Responsibilities: {workInfo.responsibilities}</p>
                <button onClick = {handleClick}>{formDisplayed ? "Submit" : "Edit"}</button>
            </section>
        );
    }
}

function WorkExSection() {
    const [workItems, setWorkItems] = useState([]);

    function handleAdd() {
        setWorkItems([...workItems, <WorkExItem key = {workItems.length}/>]);
    }

    return (
        <section className = "experienceSection">
            {
                workItems
            }
            <button onClick = {handleAdd}>Add</button>
        </section>
        
    );
}

export {WorkExSection};