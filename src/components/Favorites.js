import { useEffect, useState } from 'react'
import favorites from '../styles/icon-fav.png';

export default function Favorites({addToFav, setFavorites}) {

    const [favs, setFavs] = useState([]);
    let data = JSON.parse(localStorage.getItem('Favorites'));

    function removeFromLocal(e)  {
        if(data){
            if(data.length===0) localStorage.clear() ;
            else{
                let rez = data.filter(d => d.title !== e.title);
                localStorage.setItem('Favorites',JSON.stringify(rez)); 
                setFavs(rez);
                setFavorites(rez);
    
            }
            
        }
    }


    useEffect(()=>{
    
        setFavs(data);
        // eslint-disable-next-line
    }, [addToFav])
   

  return (
    <div>
     
       <h3 id='favHeader'> 
         Favorites</h3>
         
        <div className='favArticle'>
            {(favs &&
                favs.map((val, key)=>(
                    
                <div className='favWindow'key={key} value={val} onClick={()=>removeFromLocal(val)}>
                    <img id='fav' src={favorites} alt='favorites-icon'></img> 
                    <img src={val.multimedia ? val.multimedia[0].url : val.url} alt='News'/>
                    <div className='articleText'>
                        <p id='category'>{val.section}</p>
                        <h4 id='title1'> {val.title}</h4>
                        <h5 id='author'> {val.byline}</h5>
                    </div>         
                </div>
                    ))
                )}
            </div>
    </div>
  )
}
