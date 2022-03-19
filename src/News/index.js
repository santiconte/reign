import React, { useState, useEffect } from "react"
import NewsContainer from "./News"
import NewComponent from "../NewComponent"
import iconAngular from "../assets/iconAngular.png"
import iconReact from "../assets/iconReact.png"
import iconVue from "../assets/iconVue.png"
import Loading from "../Loading"
import "../index.css"
const News = () => {
    const [ page, setPage ] = useState(1)
    const [ data, setData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ filter, setFilter ] = useState(null)

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        getData(page)
      },[]);

      useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        getData(page, filter)
      },[page,filter]);

    const getData = async (page, filter) => {
        setIsLoading(true)
        await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${filter}&page=${page}`, {method: 'get'}
        ).then(async res => {
            const reponse = await res.json()
            setData(reponse.hits)
        }).finally(res => setIsLoading(false))
    }

    const a = ">"
    const b = "<"
    const cantPage = [1,2,3,4,5,6,7,8,9]
    return (
        <div style={{ marginTop:10, display:"flex", flexDirection:"column", paddingLeft:"15%",paddingRight:"15%"}}>
            <div id="gender" style={{height:40, width:200}}>
                <select onChange={(event) => {setFilter(event.target.value)}} style={{ width:"100%", height:"100%", border:"solid 1px #2e2e2e", borderRadius:4}}>
                    <option disabled selected >Select your news</option>
                    <option value={"angular"}>Angular</option>
                    <option value={"reactjs"}>Reactjs</option>
                    <option value={"vuejs"}>Vuejs</option>
                </select>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 10, marginTop:10}}>
                {data.map((item, index) => {
                    const {story_title, created_at, author, story_url } = item
                    if( story_title !== null && created_at !== null && author !== null && story_url !== null ){
                        return(
                            <NewComponent 
                                title={item.story_title}
                                created_at={item.created_at}
                                author={item.author}
                                url={item.story_url}
                                like={index === 0 ? true : false}
                            /> 
                        )
                    }
                }
                    
                )}
            </div>
            <div class="pagination">
                <button onClick={() => {
                    if( 1 !== page ){
                        setPage(page - 1)
                    }
                }}><p style={{ margin:0}}> {b} </p></button>
                {cantPage.map(itemPage => 
                    <button class={page === itemPage && "active"} onClick={() => setPage(itemPage)}><p style={{ margin:0}}>{itemPage}</p></button>
                )}
                <button onClick={() => {
                    const pagination = cantPage.length
                    if(pagination !== page ){
                        setPage(page + 1)
                    }
                }}><p style={{ margin:0}}> {a} </p></button>
            </div>
            <Loading value={isLoading}></Loading>
        </div>
    )
}

export default News