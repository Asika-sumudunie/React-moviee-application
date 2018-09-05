import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class App extends Component {
  constructor(){
    
    super();
    
   this.ShowList();
    this.state =  {
      result: []
    }
   
   

  }
  ShowList = () =>{
    axios.get('http://localhost:3001/movies').then(response =>this.setState({result:response.data
  }) );
     
  }
  
 
 
  render() {
    return (
      <div>
      <h1> Top Relateted Movies </h1>
      <table>
      <tbody>{this.state.result.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                  <td> <img src={item.poster_path}  width="40%"  hegiht="40%"/></td>
                      <td>Title : {item.title}</td>
                     <td> Relese Date : {item.release_date}</td>
                  </tr>
                )
             
             })}
             </tbody>
       </table>
     </div>
    );
  }
}

export default App;
