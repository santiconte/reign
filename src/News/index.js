import React, { useState, useEffect } from "react"
import NewComponent from "./NewComponent"
import Loading from "../Loading"
import "./style.css"

const News = ({
    switchValue
}) => {
    const [ page, setPage ] = useState(1)
    const [ data, setData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ newsLike, setNewsLike ] = useState([])

    useEffect(() => {
        getData(page, localStorage.getItem("filter"), switchValue)
      },[switchValue, page]);

    const getData = async (page, filter, switchValue) => {

        window.scroll({
            top: 0,
            behavior: 'smooth'
          });

        if(switchValue){
            if(filter){
                setIsLoading(true)
                await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${filter}&page=${page}`, {method: 'get'}
                ).then(async res => {
                    const reponse = await res.json()
                    setData(reponse.hits)
                }).finally(res => setIsLoading(false))
            }
        }else{
            if(JSON.parse(localStorage.getItem("newsLike"))){
                setData(JSON.parse(localStorage.getItem("newsLike")))
            }else{
                setData([])
            }
        }
    }

    const setFilterLocal = (value) => {
        localStorage.setItem("filter", value)
        getData(page, value, switchValue)
    }

    const like = (newItem) => {
        var newsLike = localStorage.getItem("newsLike")
        if(!newsLike){
            newsLike = []
        }else{
            newsLike = JSON.parse(newsLike)
        }
        var liked = false
        newsLike.forEach(item => {
            if(newItem.objectID === item.objectID){
                liked = true
            }}
        )
        if(liked){
            const filtered = newsLike.filter(item => { if(item.objectID !== newItem.objectID){ return item}})
            newsLike = filtered
        }else{
            newsLike.push(newItem)
        }
        localStorage.setItem("newsLike", JSON.stringify(newsLike))
        setNewsLike(newsLike)
        if(!switchValue){
            getData(page, localStorage.getItem("filter"), switchValue)
        }
    }

    const isLiked = (newItem) => {
        var newsLike = localStorage.getItem("newsLike")
        if(!newsLike){
            newsLike = []
        }else{
            newsLike = JSON.parse(newsLike)
        }
        const found = newsLike.find(item => item.objectID === newItem.objectID)
        if(found){
            return true 
        }else{
            return false
        }
      }

    const mayor = ">"
    const menor = "<"
    const cantPage = [1,2,3,4,5,6,7,8,9]
    return (
        <div className="main">
            <div className="selectContainer">
                {switchValue && (
                    <select 
                        onChange={(event) => {setFilterLocal(event.target.value)}} 
                        value={localStorage.getItem("filter")}
                        className="select"
                        defaultValue={0}
                        >
                            <option disabled value={0}>Select your news</option>
                            <option value={"angular"}>Angular</option>
                            <option value={"reactjs"}>Reactjs</option>
                            <option value={"vuejs"}>Vuejs</option>
                    </select>
                )}
            </div>
            <div className="newsComponent">
                {data.map((item,index) => {
                    const {story_title, created_at, author, story_url } = item
                    if(story_title && created_at && author && story_url){
                        return(
                            <NewComponent
                                keyItem={index}
                                title={item.story_title}
                                created_at={item.created_at}
                                author={item.author}
                                url={item.story_url}
                                like={isLiked(item)}
                                onClickLike={() => like(item)}
                            /> 
                        )
                    }
                }
                    
                )}
            </div>
            {data.length > 0 && switchValue && (
                <div class="pagination">
                    <button 
                        onClick={() => {
                            if( 1 !== page ){
                                setPage(page - 1)
                            }}}
                        >
                            <p style={{ margin:0}}> {menor} </p>
                    </button>
                    {cantPage.map((itemPage, index) => 
                        <button
                            key={index}
                            class={page === itemPage && "active"} 
                            onClick={() => setPage(itemPage)}>
                                <p style={{ margin:0}}>{itemPage}</p>
                        </button>
                    )}
                    <button onClick={() => {
                        if(cantPage.length !== page ){
                            setPage(page + 1)
                        }}}
                        >
                            <p style={{ margin:0}}> {mayor} </p>
                    </button>
                </div>
            )}
            
            <Loading value={isLoading}></Loading>
        </div>
    )
}

export default News