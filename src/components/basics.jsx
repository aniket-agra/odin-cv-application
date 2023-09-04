import { useState } from "react";
import "../styles/basics.css"

function Basics() {
    let initialObj = {
        "name" : "Name",
        "phone" : "Phone",
        "email" : "Email@Domain"
    };
    const [basicInfo, setBasicInfo] = useState(initialObj);
    const [formDisplayed, setFormDisplayed] = useState(true);

    function handleChange(newObj) {
        setBasicInfo(
            newObj
        );
    }

    function handleClick(e) {
        e.preventDefault();
        setFormDisplayed(!formDisplayed);
    }

    if (formDisplayed) {
        return (
            <section className = "basicsForm">
                <label htmlFor = "name">Name: </label>
                <input
                    placeholder = "name"
                    type = "text"
                    id = "name"
                    value = {basicInfo.name}
                    onChange = {(e) => handleChange({
                            ...basicInfo,
                            "name" : e.target.value
                        })
                    } />
                <label htmlFor = "phone">Phone: </label>
                <input
                    type = "text"
                    id = "phone"
                    value = {basicInfo.phone}
                    onChange = {(e) => handleChange({
                            ...basicInfo,
                            "phone" : e.target.value
                        })
                    } />
                <label htmlFor = "email">Email: </label>
                <input
                    type = "email"
                    id = "email"
                    value = {basicInfo.email}
                    onChange = {(e) => handleChange({
                            ...basicInfo,
                            "email" : e.target.value
                        })
                    } />
                <button onClick = {handleClick}>{formDisplayed ? "Submit" : "Edit"}</button>
            </section>
        );
    } 
    else {
        return (
            <section className = "basicsListed">
                <div className = "name">{basicInfo.name}</div>
                <div className = "phone">{basicInfo.phone}</div>
                <div className = "email">{basicInfo.email}</div>
                <button onClick = {handleClick}>{formDisplayed ? "Submit" : "Edit"}</button>
            </section>
        );
    }    
}

export {Basics};