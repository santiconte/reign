import React, { useState } from "react";
import Header from "../Header";
import Select from "./Select";
import News from "../News";

const Home = () => {
    const [ switchNews, setSwitchNews ] = useState(true) 
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
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