import React, { useState } from 'react'
import './styles/searchBar.scss'

export default function SearchBar({setNews, setSearchRes}) {

  const [search, setSearch] = useState();
  
  const mykey =`${process.env.REACT_APP_API_KEY1}`;
  const searchUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq='+ search +'&sort=newest&api-key=' + mykey ;
  const options = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    },
  };

  async function searchNews() {
    await fetch(searchUrl, options)
          .then(response => response.json())
          .then(res => {
                  let results = res.articles;
                  setNews(results);
                  console.log('re ',results);
                  setSearchRes('y');
          })                            
           .catch(err => {
                console.log("Error Reading data " + err);
            })
    } 


  return (
    
    <>
       <h3 className="logo"><font color="#BB1E1E"> My</font><font color="black">News</font></h3>
          <input type="text" className="search" onChange={(e)=> setSearch(e.target.value)} placeholder=" &#xF002;    Search news"/>
            <button className="searchBtn" onClick={searchNews}> SEARCH </button>

        <hr id='line'></hr>
    </> 
  )
}
