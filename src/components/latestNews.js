import { useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/latest.scss'


export default function LatestNews() {

  const [showLatest, setLatest] = useState();
  const [pageNo, setNewPage] = useState(6);
  

  const handleScroll = e => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop < element.clientHeight+2) {
      //load more results at end of scroll
        let page = pageNo + 2;
        setNewPage(page);
      }
      
    }

  useEffect(()=>{
    const getLatestNews = async ()=>{
      const key2 = `${process.env.REACT_APP_API_KEY2}`;
      var url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize='+ pageNo + '&' 
            +'apiKey='+ key2;
      await fetch(url, { method: "GET",
                        headers: {"Accept": "application/json"},
      })
      .then(response => response.json())
      .then(res => {
        let results = res.articles;
        if(showLatest === undefined) setLatest(results);
       else {setLatest([...results])}
       
      })                            
       .catch(err => {
            console.log("Error Reading data " + err);
        })
    };
    getLatestNews();
   // eslint-disable-next-line
  },[pageNo] );
  
  return (
    <div className='latest'>
        <div className='headerLatest'>
            <div id='icon'>
              <FontAwesomeIcon icon={faCircleDot} color='#ff9ca6' style={{height: "20px", background:"#BB1E1E", borderRadius:"20px" }} fade />
            </div>
            <p id="head">Latest news</p>
        </div>
        <div className='Lnews' onScroll={(e)=>handleScroll(e)}>
          {(showLatest &&
            showLatest.map((val, key)=>
                    <div className='latestWindow' key={key} >
                          <p id='category2'>{val.publishedAt}</p>
                          <h4 id='title'> {val.title}</h4>  
                          <hr/>          
                    </div>
                )
            )}
        </div>
        <div className='link'>
          <p> See all news </p>
          <FontAwesomeIcon id='icon2' icon={faAngleRight} /> 
        </div>
         
         
    </div>
    
  )
}
