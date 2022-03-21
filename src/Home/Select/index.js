import React from "react";
import "../../index.css";
import "./style.css";

const Select = ({
    onPress,
    value
}) => {
    return (
        <div className="Select">
           <div className="selectContainer">
               <div onClick={() => onPress(true)} className="selectAll" style={{borderColor: value && ("#1797ff")}}>
                   <p style={{ margin:0, color: value ? ("#1797ff") : "#606060", fontFamily:"RobotoMedium"}}>All</p>
               </div>
               <div onClick={() => onPress(false)}  className="selectMyFaves" style={{borderColor: !value && ("#1797ff")}}>
                   <p style={{ margin:0, color: !value ? ("#1797ff") : "#606060", fontFamily:"RobotoMedium"}}>My faves</p>
               </div>
           </div>
        </div>
    )
}

export default Select