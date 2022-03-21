import React from "react"
import "../../index.css"
import iconFaveSelected from "../../assets/iconmonstr-favorite-2_4.svg"
import iconFave from "../../assets/iconmonstr-favorite-3_4.svg"
import iconTime from "../../assets/iconmonstr-time-2.svg"
import "./style.css"
const NewComponent = ({
    title,
    created_at,
    author,
    url,
    like,
    onClickLike
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
        <div className="newComponent">
            <div onClick={() => window.open(url)} className="newInfoContainer">
                <div className="newInfoTop">
                    <img src={iconTime}  height="16px" width="auto"></img>
                    <p className="newInfoTopText">{formatDate(created_at)} ago by {author}</p>
                </div>
                <p className="newInfoTitle">{title}</p>
            </div>
            <div className="newInfoImgContainer">
                <img onClick={() => onClickLike()} src={like ? iconFave : iconFaveSelected} height="24px" width="auto" style={{ cursor:"pointer"}}></img>
            </div>
        </div>
    )
}

export default NewComponent