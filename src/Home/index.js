import React, { useState } from "react";
import Header from "../Header";
import Select from "./Select";
import News from "../News";
import "../index.css";

const Home = () => {
    const [ switchNews, setSwitchNews ] = useState(true) 
    return (
        <div className="mainContainer">
            <Header />
            <Select 
                onPress={(value) => {setSwitchNews(value)}} 
                value={switchNews} 
            />
            <News 
                switchValue={switchNews}
            />
            
        </div>
    )
}

export default Home