import './styles/App.scss';
import { isMobile } from "react-device-detect";

import Header from './header.js';
import SearchBar from './searchBar';
import Navigation from './components/navigation';
import AllNews from './components/allNews';
import LatestNews from './components/latestNews';
import Favorites from './components/Favorites';
import {useState, useEffect } from 'react';
import NewsSearch from './components/NewsSearch';

function App() {

  const [showNews, setNews] = useState();
  const [navigateTo, setNav] = useState();
  const [searchRes, setSearchRes] = useState('n');
  const [addToFav, setFavorites] = useState(JSON.parse(localStorage.getItem('Favorites')));
  const [activeSection, setActive] = useState(0);
  const [toggleMobNav, setMobNav] = useState(false);
  
    
  useEffect(()=>{
    const fetchNews = async() => {
      const  myKey =`${process.env.REACT_APP_API_KEY1}`;
      var path = navigateTo === undefined ? "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + myKey :"https://api.nytimes.com/svc/topstories/v2/"+ navigateTo + ".json?api-key=" + myKey ;
      await fetch(path, { method: "GET",
                          headers: {"Accept": "application/json" },
      })
        .then(response => response.json())
        .then(res => {
              let results = res.results;
              setNews(results);
              setSearchRes('n');
        })                            
        .catch(err => {
          console.log("Error Reading data " + err);
        })
    } 
    fetchNews();   
    console.log('render again ', addToFav)
  }, [navigateTo, searchRes, addToFav]); // Change allNews view when click on navigation, add to favourites or search button

console.log(isMobile, toggleMobNav)

  return (
    <div className="App">
      <Header/>     

      <SearchBar setNews={setNews} setSearchRes={setSearchRes}/>
      {
        isMobile ? <Navigation setNav={setNav} toggleMobNav={toggleMobNav} setMobNav={setMobNav}/> :
                   <Navigation setNav={setNav} toggleMobNav={true}/>
      }
      {
        !toggleMobNav &&
      <>
        <div id="tag">
              <h3>News</h3>
        </div>

          <div className='mobile-news'> 
            <button id={activeSection === 0 ? "active2" : "active1"} onClick={()=>setActive(0)}> Featured </button> 
            <button id={activeSection === 1 ? "active2" : "active1"} onClick={()=>setActive(1)}> Latest </button>
            <button id={activeSection === 3 ? "active2" : "active1"} onClick={()=>setActive(3)}> Favorites </button>
          </div>
          {
            isMobile && showNews &&
            <div className="content">
            {activeSection === 0 && <AllNews news={showNews} setFavorites={setFavorites}/> }
            {activeSection === 1 && <LatestNews/>}
            {activeSection === 3 && <Favorites addToFav={addToFav} setFavorites={setFavorites}/> }
            </div>
          }
          {
            !isMobile && 
                    <div className="content">         
                          {
                            searchRes==='n' && showNews ? <AllNews news={showNews} setFavorites={setFavorites}/>  : <NewsSearch news={showNews}/>  
                          }
                          <LatestNews/>
                          <div className='favorites'>
                          {
                            showNews &&  <Favorites addToFav={addToFav} setFavorites={setFavorites}/>
                          }      
                          </div>
                    </div>

          }
          
      </>
         
      }
    </div>
    
  );
}

export default App;
