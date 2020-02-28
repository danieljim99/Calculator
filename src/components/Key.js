import React from "react";
import "../style/Key.css";

const key = (props)=>{
    let result = null;
    if(props.symbol === "="){
        result = (
            <div className="SolveKey" onClick={props.solve.bind(this, props.symbol)}>
                {props.symbol}
            </div>
        );
    } else if (props.symbol === "SM"){
        result = (
            <div className="Key" onClick={props.changeMode.bind(this)}>
                {props.symbol}
            </div>
        );
    } else if (props.symbol === "(" || props.symbol === ")"){
        result = (
            <div className="ParenthesisKey" onClick={props.appendDisplay.bind(this, props.symbol)}>
                {props.symbol}
            </div>
        );
    } else {
        result = (
            <div className={(props.symbol === "0") ? "ZeroKey" : "Key"} onClick={props.appendDisplay.bind(this, props.symbol)}>
                {props.symbol}
            </div>
        );
    }
    return result;
}

export default key;