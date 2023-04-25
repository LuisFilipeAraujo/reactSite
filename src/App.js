import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';
// 7cb372bc my API key

const API_URL = 'http://www.omdbapi.com?apikey=7cb372bc';



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`); //calling the API
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Spiderman');
    }, []);
    
    return (
        <div className="app">
            <h1>MovieFinder</h1>

            {/* SearchDIV */}
            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}  
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ?(
                  <div className="container">
                    {movies.map((movie) =>(
                        <MovieCard movie ={movie}/>
                     ))}
                    </div>
                ) :
                (
                 <div className=''>
                    <h2>No movies found</h2>
                 </div> 
                )
            }
        </div>
    );
}

export default App;