// jsx components are preferable when working with react. No difference between
//jsx file or a js file tho
import React from "react";

//Note how the component name and file name are the same
const MovieCard = ({ movie }) => {
    return(
        <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src={movie.Poster !=='N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}></img>
        </div>

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div> 
    );
}

export default MovieCard;