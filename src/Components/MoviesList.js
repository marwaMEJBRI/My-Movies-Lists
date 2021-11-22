import React, {useState} from 'react';
const MoviesList= ({movies})=>{
    return(
        <div className="movies" >
            {movies.map((mv) => (
            <div className="groupes">
                <h1 className="title">{mv.Title}</h1>
                <img src={mv.ImageMovies} ></img>
                <h2>{mv.Description}</h2>
                <a href= {mv.PosterURL}> link Movies </a>
                <h3>Rating : {mv.rating}</h3>
            </div>))}
        </div>
    )
}

export default MoviesList;