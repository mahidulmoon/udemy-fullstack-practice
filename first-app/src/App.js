import React from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/footer';
import Numbers from './Components/numbers';

function createAlert(){
  alert("this is pass as function through props")
}
function ShowMessage(props){
  if(props.toShow){
    return <h2>My message</h2>
  }else{
    return <h2>forbidden</h2>
  }
}

const pStyle ={
  fontSize: '2em',
  color: 'red'
}

function App() {
//   const userlogin =true;
//   if (userlogin){
//     return (
//       <div className="App">
//         <Header info="this is my message" mynumber="5" />
//         <p style={pStyle}>main content</p>
//         <Footer trademark="page by mahidulmoon" myAlert={createAlert} />
//         <ShowMessage toShow={true}/>
//       </div>
//     );
//   }else{
//   return <h2>forbidden</h2>
// }
  return(
    <div className="App">
      <Numbers />
    </div>
  )
}

export default App;
