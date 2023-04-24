// jsx components are preferable when working with react. No difference between
//jsx file or a js file tho
import React from "react";

//Note how the component name and file name are the same
const MovieCard = ({ movie1 }) => {
    return(
        <div className="movie">
        <div>
            <p>{movie1.Year}</p>
        </div>
        <div>
            <img src={movie1.Poster !=='N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}></img>
        </div>

        <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
        </div>
    </div> 
    );
}

export default MovieCard;