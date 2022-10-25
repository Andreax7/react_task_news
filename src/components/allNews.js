import { useState } from 'react'
import { Pagination } from '../pagination';
import '../styles/allNews.scss'

export default function AllNews({news, setFavorites}) {

  let localData = JSON.parse(localStorage.getItem('Favorites'));
  /**** PAGINATION ****/
  const [currentPage, setCurrent]= useState(1);
  const [newsOnPage] =  useState(8);
  // Get current posts 
  const indexOfLast = currentPage * newsOnPage;
  const indexOfFirst = indexOfLast - newsOnPage;
  const currentArticles = news.slice(indexOfFirst,indexOfLast);
  //switch to next page
  const changePage = (number) => setCurrent(number);
  /*******/
  
  function saveToLocal(e){ //save article on click to Local Storage with no duplicates
    if(localData){
      if(!localData.some(d => d.title === e.title)){ //checking for duplicates
          localData.push(e);
          setFavorites(localData);
          localStorage.setItem('Favorites',JSON.stringify(localData));  
      }     
    }
    else{           //add first element to local
      localData=[e];
      localStorage.setItem('Favorites',JSON.stringify(localData));
      setFavorites(localData);
    } 
  }



  return (
    <>
  
      <div className='newsList'>
          {news &&
            currentArticles.map((val, key)=>(
      
              <div className='newsWindow'key={key} value={val} onClick={()=>saveToLocal(val)}>
            
                  <img src={val.multimedia ? val.multimedia[0].url : val.url} alt='News'/>
                  <div className='articleText'>
                      <p id='category'>{val.section}</p>
                    <h4 id='title1'> {val.title}</h4>
                    <h5 id='author'> {val.byline}</h5>
                  </div>  
                  
              </div>
            ))
          }
          <br/>
      </div>
      <Pagination newsOnPage={newsOnPage} newsNumber={news.length} changePage={changePage} currentPage={currentPage}/>
    </>
    
  )
}
