/* eslint-disable react/prop-types */
// import { useState } from "react";
import "./App.css";
const Task = (props) => {
    return (
        <div className="task">
            <p className={props.task.complete?"done":""}>
                { props.task.text }
            </p>
            <div className="btns">
                <button className="update-btn" onClick={props.done}>Done</button>
                <button className="dellete-btn" onClick={ props.delete } >Dellete</button>
            </div>
        </div>
    )
}

export default Task