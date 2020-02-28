import React from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";
import "../style/Body.css"

const body = (props)=>{
    return (
        <div className="Body">
            <Display display={props.display} displayReg={props.displayReg} upArrow={props.upArrow} downArrow={props.downArrow} appendDisplayOperation={props.appendDisplayOperation} science={props.science}/>
            <Keyboard appendDisplay={props.appendDisplay} solve={props.solve} changeMode={props.changeMode} science={props.science} keys={props.keys} scienceKeys={props.scienceKeys}/>
        </div>
    );
}

export default body;