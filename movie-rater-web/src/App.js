import React,{Component} from 'react';
import MovieList from './components/movie-list';
import './App.css';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-form';
import { withCookies } from 'react-cookie';
var FontAwesome = require('react-fontawesome');

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
    selectedMovie: null,
    editedMovie: null,
    token: this.props.cookies.get('mr-token')
  }
  
  loadMovie = movie =>{
    this.setState({selectedMovie:movie,editedMovie:null})
  }

  editClicked = selMovie => {
    this.setState({editedMovie:selMovie});
  }
  //movies = ['titanic','avatar'];
  componentDidMount(){
    if(this.state.token){
      fetch('http://127.0.0.1:8000/api/movies/',{
      method:'GET',headers:{
        'Authorization': `Token ${this.state.token}`
      }
    }).then(res=>res.json()).then(res=>this.setState({movies:res})).catch(err=>console.log('error'));
  
    }else{
      window.location.href='/';
    }
    }
  movieDeleted = selMovie =>{
    const movies = this. state.movies.filter(movie => movie.id !== selMovie.id)
    this.setState({movies: movies,selectedMovie:null })
  }
  newMovie = () =>{
    this.setState({editedMovie: {title: '',description:''}});
  }
  cancelForm = () =>{
    this.setState({editedMovie: null})
  }
  addMovie = (movie)=>{
    this.setState({movies: [...this.state.movies,movie]});
  }

  render(){
        return(
      <div className="App">
        <h1><FontAwesome name="film" /><span>Movie rater</span></h1>
        <div className="layout">

        <MovieList movies={this.state.movies} movieClicked={this.loadMovie} movieDeleted={this.movieDeleted} editClicked={this.editClicked} newMovie={this.newMovie} token={this.state.token} />
        <div>
          {!this.state.editedMovie ?
          <MovieDetails movie={this.state.selectedMovie} updateMovie={this.loadMovie} token={this.state.token}/>
          : <MovieForm movie={this.state.editedMovie} cancelForm={this.cancelForm} token={this.state.token} newMovie={this.addMovie} editedMovie={this.loadMovie} />
        }
          
        </div>
        </div>
      </div>
    )
  }
}

export default withCookies(App);
