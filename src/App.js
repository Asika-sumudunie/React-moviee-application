import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class App extends Component {
  constructor(){
    
    super();
    
   this.ShowList();
    this.state =  {
      result: [],
      currentPage :1,
      todosPerPage:8
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  ShowList = () =>{
    axios.get('http://localhost:3001/movies').then(response =>this.setState({result:response.data
  }) );
     
  }
  
  render() {
    const { result, currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = result.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((item, index) => {
      return (
                 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 bigBox"  key = {index}>
                 <div className="bigBox2">
                 <img src={item.poster_path}  width="30%"  hegiht="30%" className="responsive pic" />
                  <div className="data">
                  <div className="row text1"><b>{item.title}</b></div>
                  <div className="row text2"> {item.release_date}</div>
                  </div>
                  </div>   
                 </div>
                   
      );;
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(result.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
       <div className="banner">Top Related Movies</div>
      
          {renderTodos}
      <div className="page">
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
       
      </div>
    );
  }
}


export default App;
