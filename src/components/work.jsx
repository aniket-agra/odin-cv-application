import { useState } from "react";
import "../styles/experience.css"

function Tasks({workInfo, displayState, handleChange, handleClick2}) {
    if (displayState === 0) {
        return (
            <div className = "responsibilities">
                <h3>Responsibilities</h3>
                <ul>
                {
                    workInfo.responsibilities.map(
                        function (task, index) {
                            return (
                                <li key = {task["id"]}>
                                    <input 
                                        type = "text"
                                        value = {task["content"]} 
                                        onChange = {(e) => {
                                            let newObj = {...workInfo};
                                            newObj["responsibilities"][index]["content"] = e.target.value;  
                                            return handleChange(newObj)} 
                                        }/>
                                </li>
                            );
                        }
                    )
                }
                </ul>
            </div>
        );
    }
    if (displayState === 1) {
        return (
            <div className = "responsibilities">
                <h3>Responsibilities</h3>
                <ul>
                {
                    workInfo.responsibilities.map(
                        function (task) {
                            return <li key = {task["id"]}>{task["content"]}</li>;
                        }
                    )
                }
                </ul>
                <button onClick = {e => handleClick2(e, 0)}>Edit</button>
                <button onClick = {e => {
                    let newObj = {...workInfo};
                    newObj["responsibilities"].push({id : crypto.randomUUID(), content : ""});
                    return handleClick2(e, 2);
                }}>
                Add responsibility
                </button>
            </div>
        );
    }
    if (displayState === 2) {
        return (
            <div className = "responsibilities">
                <h3>Responsibilities</h3>
                <ul>
                    {
                        workInfo.responsibilities.map(
                            function (task, index) {
                                if (index < workInfo.responsibilities.length - 1)
                                    return <li key = {task["id"]}>{task["content"]}</li>;
                            }
                        )
                    }
                    <li key = {workInfo.responsibilities[workInfo.responsibilities.length - 1]["id"]}>
                        <label htmlFor="newTask">Add details: </label>
                        <input 
                            type = "text"
                            id = "newTask"
                            value = {workInfo.responsibilities[workInfo.responsibilities.length - 1]["content"]}
                            onChange = {e => {
                                let newObj = {...workInfo};
                                newObj["responsibilities"][workInfo.responsibilities.length - 1]["content"] = e.target.value;
                                return handleChange(newObj);
                            }} />
                    </li>
                </ul>
            </div>
        );
    }
}

function WorkExItem() {
    const initialObj = {
        "company" : "company",
        "position" : "position", 
        "start" : "start date",
        "end" : "end date",
        "responsibilities" : [{id: crypto.randomUUID(), content : 'Did X'}]
    };
    const [workInfo, setWorkInfo] = useState(initialObj);
    const [displayState, setDisplayState] = useState(0);

    function handleChange(newObj) {
        setWorkInfo(newObj);
    }

    function handleClick2(e, targetState) {
        e.preventDefault();
        setDisplayState(targetState);
    }

    if (displayState === 0) {
        return (
            <section className = "workItemForm">
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
                    workInfo={workInfo}
                    displayState={displayState}
                    handleChange={handleChange}
                    handleClick2={handleClick2} />
                <button onClick = {e => handleClick2(e, 1)}>Submit</button>
            </section>
        );
    } 
    if (displayState === 1) {
        return (
            <section className = "workItemListed">
                <div className = "company">Company: {workInfo.company}</div>
                <div className = "position">Position: {workInfo.position}</div>
                <div className = "start">Start Date: {workInfo.start}</div>
                <div className = "end">End Date: {workInfo.end}</div>
                <Tasks
                    workInfo={workInfo}
                    displayState={displayState}
                    handleChange={handleChange}
                    handleClick2={handleClick2} />
            </section>
        );
    }
    if (displayState === 2) {
        return (
            <section className = "workItemListed">
                <div className = "company">Company: {workInfo.company}</div>
                <div className = "position">Position: {workInfo.position}</div>
                <div className = "start">Start Date: {workInfo.start}</div>
                <div className = "end">End Date: {workInfo.end}</div>
                <Tasks
                    workInfo={workInfo}
                    displayState={displayState}
                    handleChange={handleChange}
                    handleClick2={handleClick2} />

                <button onClick = {e => {
                    return handleClick2(e, 1);
                }}>
                Submit
                </button>
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
            <div>Work Experience</div>
            {
                workItems
            }
            <button onClick = {handleAdd}>Add</button>
        </section>
        
    );
}

export {WorkExSection};