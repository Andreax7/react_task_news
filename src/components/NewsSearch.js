import React from 'react'

export default function NewsSearch({news}) {
  
  
    return (
        <div className='newsList'>
        {(news &&
          news.map((val, key)=>
        
            <div className='newsWindow'key={key}>
                <img src={val.multimedia ? val.multimedia[0].url : val.url} alt='News'/>
                <div className='articleText'>
                    <p id='category'>{val.section}</p>
                  <h4 id='title'> {val.title}</h4>
                  <h5 id='author'> {val.author}</h5>
                </div>  
                
            </div>
          ))
        }
    </div>
  )
}
