import { useState } from "react";
import "../styles/basics.css"

function Basics() {
    let initialObj = {
        "name" : "Name",
        "phone" : "Phone",
        "email" : "Email@Domain"
    };
    const [basicInfo, setBasicInfo] = useState(initialObj);

    function handleChange(newObj) {
        setBasicInfo(
            newObj
        );
    }

    return (
        <section className = "basics">
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
        </section>
    );
}

export {Basics};