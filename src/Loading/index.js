import React from "react";

const Loading = ({
    value
}) => {
    if(value){
        return (
            <div className="loading">
                <div className="spinner"></div>
            </div>
        )
    }else{
        return null
    }
}
export default Loading