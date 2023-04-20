import { useEffect } from 'react';
// 7cb372bc my API key

const API_URL = 'http://www.omdapi.com?apikey=7cb372bc';


const App = () => {

    const searchMovies = async (title)=>{
        const response = await fetch(`${API}`);
    }

    useEffect(()=>{

    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;