import { useEffect } from 'react'

export default function useLatest(pageNumber, setLatest) {

    useEffect(()=>{
        const getLatestNews = async ()=>{
            const key2 = `${process.env.REACT_APP_API_KEY2}`;
            var url = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=100&' 
                  +'apiKey='+ key2;
            await fetch(url, { method: "GET",
                              headers: {"Accept": "application/json"},
            })
            .then(response => response.json())
            .then(res => {
                let results = res.articles;
                setLatest(results);
            })                            
             .catch(err => {
                  console.log("Error Reading data " + err);
              })
          };
          getLatestNews();
           // eslint-disable-next-line
    }, [pageNumber])
  return null
}
