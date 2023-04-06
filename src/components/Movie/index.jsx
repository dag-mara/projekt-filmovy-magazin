import React from "react";
import './style.css';
import movies from "../../movie-database";
import { useParams } from "react-router-dom";

const Movie = () => {
    const {id} = useParams();
    const currentMovie = movies[id - 1];
  
    return(
        <div className="movie">
            <img src={currentMovie.poster} alt={currentMovie.title}/>
            <h2>{currentMovie.title}</h2>
            <div className="movie-bar">
                <p>{currentMovie.year}</p>
                <span>|</span>
                <p>{currentMovie.director}</p>
            </div>
            <p className="genre">{currentMovie.genre}</p>
            <p>
                <span className="rating">rating:</span>
                {currentMovie.rating}
            </p>
            
            <p>{currentMovie.storyline}</p>
            <h3>Cast:</h3>
            <p>
            {currentMovie.cast.map((actors)=>{
                return <span key={actors.name}>{actors.name} ({actors.as})<br/></span>
            })}
            </p>
        </div>              
    )
}

export default Movie;