import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Tasks({taskList}) { 
    return (
        <section className = "responsibilities">
            <h3>Responsibilities</h3>
            <ul className = "list">
                {
                    // eslint-disable-next-line react/prop-types
                    taskList.map((responsibility, index) => {
                        return <li key = {index}>{responsibility}</li>;
                    })
                }
            </ul>
        </section>
    );
}

function WorkExItem() {
    const initialTasks = ["Did X"];
    const initialObj = {
        "company" : "company",
        "position" : "position", 
        "start" : "start date",
        "end" : "end date",
        "responsibilities" : initialTasks
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
                <Tasks  
                    taskList = {workInfo["responsibilities"]}  
                />
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
                <Tasks 
                    taskList = {workInfo["responsibilities"]}
                />
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
            <h2>Work Experience</h2>
            {
                workItems
            }
            <button onClick = {handleAdd}>Add</button>
        </section>
        
    );
}

export {WorkExSection};