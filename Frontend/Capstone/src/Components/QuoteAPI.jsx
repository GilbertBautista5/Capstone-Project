import { useState, useEffect } from "react";
import APICard from "./APICard";

export default function QuoteApi () {
    const [results, setResults] = useState([]);
    useEffect (()=>{
        fetch('https://zenquotes.io/api/quotes/')
      .then(response => response.json())
      .then(data=>{
        const apiResults = data.data.map(item=>(
            <APICard key={item.id} 
            Quote={''}
            AuthorName={''}
            /> 
        ))
        setResults(apiResults)
      })
})

return (
    <div className="ApiComponentBox">
        <h1>Quote of the day </h1>
          {results}

    </div>

)
}

