import { useState, useEffect } from "react";
import APICard from "./APICard";
import OutlinedCard from "./APICard";

export default function QuoteApi () {
    const [results, setResults] = useState([]);
    useEffect (()=>{
        fetch('https://api.allorigins.win/raw?url=https://zenquotes.io/api/quotes/')
      .then(response => response.json())
      .then(data=>{
        console.log(data)
      const randomNum = Math.floor(Math.random()*data.length)

        const apiResults = (
            <OutlinedCard
            Quote={data[randomNum]["q"]}
            AuthorName={data[randomNum]["a"]}
            /> 
        )
        setResults(apiResults)
      })
},[])

return (
    <div className="ApiComponentBox">
          {results}

    </div>

)
}

