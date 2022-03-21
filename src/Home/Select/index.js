import React from "react"

const Select = ({
    onPress,
    value
}) => {
    return (
        <div style={{ height:100, marginTop:10, display:"flex", justifyContent:"center",alignItems:"center"}}>
           <div style={{ height:40, width:200, display:"flex", flexDirection:"row"}}>
               <div onClick={() => onPress(true)} style={{ width:"50%", background:"", display:"flex", justifyContent:"center", alignItems:"center", cursor:"pointer", borderTopLeftRadius:5, borderBottomLeftRadius:5, borderTop:"solid 1px", borderBottom:"solid 1px",borderLeft:"solid 1px", borderColor: value && ("#1797ff")}}>
                   <p style={{ margin:0, color: value && ("#1797ff")}}>All</p>
               </div>
               <div onClick={() => onPress(false)} style={{ width:"50%", background:"", display:"flex", justifyContent:"center", alignItems:"center", cursor:"pointer",  borderTopRightRadius:5, borderBottomRightRadius:5, border: "solid 1px", borderColor: !value && ("#1797ff")}}>
                   <p style={{ margin:0, color: !value && ("#1797ff")}}>My faves</p>
               </div>
           </div>
        </div>
    )
}

export default Select