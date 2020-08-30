import React, { Component } from 'react';
var FontAwesome = require('react-fontawesome');
export default class MovieForm extends Component {
  state={
    editedMovie: this.props.movie
  }
  inputChanged = event =>{
      let movie = this.state.editedMovie;
      movie[event.target.name] = event.target.value;
      this.setState({editedMovie: movie});
  }
  cancelClicked = () =>{
      this.props.cancelForm();
  }
  saveClicked = () =>{
      //console.log(this.state.editedMovie);
      fetch(`http://127.0.0.1:8000/api/movies/`,{
      method:'POST',headers:{
        'Content-type': 'application/json',
        'Authorization': 'Token a383f177880f8c2330b8b77fa8e81eadf87f3143'
      },body:JSON.stringify(this.state.editedMovie)
    }).then(res=>res.json()).then(res=>this.props.newMovie(res)).catch(err=>console.log('error'));
  
  }
  updateClicked = () =>{
    //console.log(this.state.editedMovie);
    fetch(`http://127.0.0.1:8000/api/movies/${this.props.movie.id}/`,{
      method:'PUT',headers:{
        'Content-type': 'application/json',
        'Authorization': `Token ${this.props.token}`
      },body:JSON.stringify(this.state.editedMovie)
    }).then(res=>res.json()).then(res=>this.props.editedMovie(res)).catch(err=>console.log('error'));
  
  
}
  render() {
    const isDisabled = this.state.editedMovie.title.length === 0 || this.state.editedMovie.description.length === 0;

    return (
    
      <React.Fragment>
          <span>Title</span><br/>
          <input type="text" name="title" value={this.props.movie.title} onChange={this.inputChanged} /><br/>
          <span>Description </span><br/>
          <textarea name="description" value={this.props.movie.description} onChange={this.inputChanged} /><br/>
          {this.props.movie.id ? <button disabled={isDisabled} onClick={this.updateClicked}>Update</button> : <button disabled={isDisabled} onClick={this.saveClicked}>Save</button> }
          
          <button onClick={this.cancelClicked}>Cancel</button>
      </React.Fragment>
    );
  }
}
