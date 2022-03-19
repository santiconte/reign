import React from "react"
import "../index.css"
import iconFaveSelected from "../assets/iconmonstr-favorite-2_4.svg"
import iconFave from "../assets/iconmonstr-favorite-3_4.svg"
import iconTime from "../assets/iconmonstr-time-2.svg"

const NewComponent = ({
    title,
    created_at,
    author,
    url,
    like
}) => {

    const formatDate = (value) => {
        const date = new Date(value)
        var seconds = Math.floor((new Date() - date) / 1000);
      
        var interval = seconds / 31536000;
      
        if (interval > 1) {
          return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
      }
    return (
        <div style={{ height:100, width:"100%", display:"flex", flexDirection:"row", border:"solid 1px rgba(151, 151, 151,0.6)", borderRadius:6,marginTop:15}}>
            <div onClick={() => alert(url)} style={{ width:"85%", display:"flex",flexDirection:"column",padding: "0 0 0 26px", justifyContent:"center"}}>
                <div style={{ display:"flex"}}>
                    <div style={{width:"100%", height:"16px", display:"flex", flexDirection:"row",alignItems:"center", justifyContent:"flex-start"}}>
                        <img src={iconTime}  height="16px" width="auto"></img>
                        <p style={{margin:0, paddingLeft:10, fontSize:12, color:"#767676"}}>{formatDate(created_at)} ago by {author}</p>
                    </div>
                </div>
                <div style={{  display:"flex", marginTop:10}}>
                    <p style={{margin:0, fontSize:15, color:"#6b6b6b"}}>{title}</p>
                </div>
              
            </div>
            <div style={{ width:"15%", display:"flex",justifyContent:"center", alignItems:"center", backgroundColor:"rgba(96, 96, 96,0.06)",}}>
                <img src={like ? iconFaveSelected : iconFave} height="24px" width="auto"></img>
            </div>
        </div>
    )
}

export default NewComponent