import React from 'react';
var FontAwesome = require('react-fontawesome');
function MovieList(props){
    const movieClicked = movie=> evt =>{
        props.movieClicked(movie);
    }
    const editClicked = movie=> evt =>{
        props.editClicked(movie);
    }
    const removeClicked = movie => evt =>{
        fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/`,{
        method:'DELETE',headers:{
            'Content-type': 'application/json',
            'Authorization': `Token ${this.props.token}`
        }
        }).then(res=>this.props.movieDeleted(movie)).catch(err=>console.log('error'));
  
    }
    const newMovie = () =>{
        props.newMovie();
    }
    
    return(
        <div>
            {props.movies.map(movie=>{
            return (
            <div key={movie.id} className="movie-item">
                <h3  onClick={movieClicked(movie)}>
                {movie.title}
            </h3>
            <FontAwesome name="edit" onClick={editClicked(movie)} />
            <FontAwesome name="trash" onClick={removeClicked(movie)} />
            </div>
            )
        })} 
        <button onClick={newMovie}>Add new</button>
        </div>
    )
}


export default MovieList;