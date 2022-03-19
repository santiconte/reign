import React from "react";

const Loading = ({
    value
}) => {
    if(value){
        return (
            <div style={{width:"100%", height: "100%", position:"fixed",top:0,left:0, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"rgba(96, 96, 96,0.3)"}}>
                <div class="spinner"></div>
            </div>
        )
    }else{
        return null
    }
    
}
export default Loading