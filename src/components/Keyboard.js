import React from "react";
import Key from "./Key";
import "../style/Keyboard.css";

const keyboard = (props)=>{
    const science = (
        <div className="Science">
            {props.scienceKeys.map((key, index) => {
                return <Key symbol={key} appendDisplay={props.appendDisplay} key={index}/>
            })}
        </div>
    );
    return (
        <div className="Keyboard">
            {props.science ? science : null}
            <div className="Keyboard1">
            {props.keys.map((key, index) => {
                if(index <= 11){
                    return (
                        <Key symbol={key} appendDisplay={props.appendDisplay} solve={props.solve} changeMode={props.changeMode} key={index}/>
                    );
                } else {
                    return null;
                }
            })}
            </div>
            <div className="Keyboard2">
                <div>
                    <div className="Keyboard1">
                        {props.keys.map((key, index) => {
                            if(index > 11 && index <=14){
                                return (
                                    <Key symbol={key} appendDisplay={props.appendDisplay} solve={props.solve} key={index}/>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                    <div className="Keyboard1">
                        {props.keys.map((key, index) => {
                            if(index > 15){
                                return (
                                    <Key symbol={key} appendDisplay={props.appendDisplay} solve={props.solve} key={index}/>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
                <div>
                    {props.keys.map((key, index) => {
                        if(index === 15){
                            return (
                                <Key symbol={key} appendDisplay={props.appendDisplay} solve={props.solve} key={index}/>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default keyboard;