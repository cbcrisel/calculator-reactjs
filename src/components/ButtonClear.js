import React from "react";
import '../style-sheets/ButtonClear.css'

export function ButtonClear(props){

    return(
        <div className='button-clear' 
        onClick={props.clearHandler}>
            {props.children}
        </div>
    );
}