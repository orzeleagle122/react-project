import React from "react";

const SwitchButton=(props)=>{
    return (
        <button onClick={props.click}>{props.active?`wyłącz`:`włącz`}</button>
    )
}

export default SwitchButton;

