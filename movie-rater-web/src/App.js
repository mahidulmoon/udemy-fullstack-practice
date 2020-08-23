import React,{Component} from 'react';
import MovieList from './components/movie-list'
import './App.css';
import MovieDetails from './components/movie-details';
// function App() {
//   const movies = ['titanic','avatar'];
//   return (
//     <div className="App">
//       <h1>Movie rater</h1>
//       <MovieList movies={movies} />
//     </div>
//   );
// }

class App extends Component{
  state={
    movies:[],
    selectedMovie: null
  }
  movieClicked=movie=>{
    this.setState({selectedMovie:movie});
  }
  //movies = ['titanic','avatar'];
  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/movies/',{
      method:'GET',headers:{
        'Authorization': 'Token a383f177880f8c2330b8b77fa8e81eadf87f3143'
      }
    }).then(res=>res.json()).then(res=>this.setState({movies:res})).catch(err=>console.log('error'));
  }
  render(){
    return(
      <div className="App">
        <h1>Movie rater</h1>
        <div className="layout">

        <MovieList movies={this.state.movies} movieClicked={this.movieClicked}/>
        <MovieDetails movie={this.state.selectedMovie}/>
        </div>
      </div>
    )
  }
}

export default App;
