import React from "react";
import "../style/Display.css";

const display = (props)=>{
    let result;
    if(props.science){
        result = (
            <div className="Operations">
                {props.displayReg.length > 3 ? (
                    <div className="Arrows">
                        <div className="UpArrow" onClick={props.upArrow.bind(this)}>▲</div>
                        <div className="DownArrow" onClick={props.downArrow.bind(this)}>▼</div>
                    </div>
                ) : null}
                <div className="ScienceDisplay">
                    {props.displayReg.length > 2 ? <p className="DisplaySelectionable" onClick={props.appendDisplayOperation.bind(this, props.displayReg[props.displayReg.length - 3])}>{props.displayReg[props.displayReg.length - 3]}</p> : null}
                    {props.displayReg.length > 1 ? <p className="DisplaySelectionable" onClick={props.appendDisplayOperation.bind(this, props.displayReg[props.displayReg.length - 2])}>{props.displayReg[props.displayReg.length - 2]}</p> : null}
                    {props.displayReg.length > 0 ? <p className="DisplaySelectionable" onClick={props.appendDisplayOperation.bind(this, props.displayReg[props.displayReg.length - 1])}>{props.displayReg[props.displayReg.length - 1]}</p> : null}
                    <p style={props.display[0] === "-" ? {color:"red"} : {color:"black"}}>{props.display}</p>
                </div>
            </div>
        );
    } else {
        result = (
            <div className={(props.display[0] === "-") ? "Display DisplayNegative" : "Display"}>
                {props.display}
            </div>
        );
    }
    return result;
}

export default display;