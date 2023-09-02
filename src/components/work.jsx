import { useState } from "react";

function WorkExItem() {
    const initialObj = {
        "company" : "company",
        "position" : "position", 
        "start" : "start date",
        "end" : "end date",
        "responsibilities" : ['Did X']
    };
    const [workInfo, setWorkInfo] = useState(initialObj);
    const [displayState, setDisplayState] = useState(0);

    function handleChange(newObj) {
        setWorkInfo(newObj);
    }

    // function handleClick(e) {
    //     e.preventDefault();
    //     setFormDisplayed(!formDisplayed);
    // }

    function handleClick2(e, targetState) {
        e.preventDefault();
        setDisplayState(targetState);
    }

    if (displayState === 0) {
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
                <h3>Responsibilities</h3>
                <ul>
                {
                    workInfo.responsibilities.map(
                        function (task, index) {
                            return (
                                <li key = {index}>
                                    <input 
                                        type = "text"
                                        value = {task} 
                                        onChange = {(e) => {
                                            let newObj = {...workInfo};
                                            newObj["responsibilities"][index] = e.target.value;  
                                            return handleChange(newObj)} 
                                        }/>
                                </li>
                            );
                        }
                    )
                }
                </ul>
                <button onClick = {e => handleClick2(e, 1)}>Submit</button>
            </section>
        );
    }
    else 
    if (displayState === 1) {
        return (
            <section className = "workSection">
                <p>Company: {workInfo.company}</p>
                <p>Position: {workInfo.position}</p>
                <p>Start Date: {workInfo.start}</p>
                <p>End Date: {workInfo.end}</p>
                <h3>Responsibilities</h3>
                <ul>
                {
                    workInfo.responsibilities.map(
                        function (task, index) {
                            return <li key = {index}>{task}</li>;
                        }
                    )
                }
                </ul>
                <button onClick = {e => handleClick2(e, 0)}>Edit</button>
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