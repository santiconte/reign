import React, { useState } from "react";
import Header from "../Header";
import Select from "../Select";
import News from "../News";

const Home = () => {
    const [ switchNews, setSwitchNews ] = useState(true) 
    return (
        <div style={{display:"flex", flexDirection:"column", width:window.innerWidth}}>
            <Header />
            <Select 
                onPress={(value) => {setSwitchNews(value)}} 
                value={switchNews} 
            />
            <News />
            
        </div>
    )
}

export default Home