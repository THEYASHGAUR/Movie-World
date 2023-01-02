import React,{ useEffect, useState } from "react";
import './App.css';
import searchIcon from './search2.svg';
import MovieCard from './MovieCard.jsx';

const API_URL = 'https://www.omdbapi.com?apikey=8b2be3bd';

// const movie1 ={
//     "Title": "Spiderman the Verse",
//     "Year": "2019",
//     "imdbID": "tt12122034",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
// };
const App = ()=> {
    const [movies,setMovies] = useState([]);
    const [searchTerm , setsearchTerm] = useState([]);

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('all');
    },[]);
    return(
        <>
           <div className="app">
            <h1>MovieWorld</h1>

            <div className="search">
                <input
                    placeholder="search for movies"
                    value={searchTerm}
                    // value="yash"
                    onChange={(e)=>setsearchTerm(e.target.value)}
                />
                <img
                  src={searchIcon}
                  alt="search" 
                  onClick={() =>searchMovies(searchTerm)}
                />
            </div>
           </div>

           {
            movies.length > 0 ? (
                <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie = {movie} />
                    ))}
                    
                </div>

            ):(
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )

            
           }

        </>
    );
}

export default App;
