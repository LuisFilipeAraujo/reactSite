import { useEffect } from 'react';

import './App.css';
// 7cb372bc my API key

const API_URL = 'http://www.omdbapi.com?apikey=7cb372bc';



const App = () => {

    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`); //calling the API
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(()=>{
        searchMovies('Spiderman');
    }, []);
    
    return (
        <h1>App</h1>
    );
}

export default App;