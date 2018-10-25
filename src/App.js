import React, { Component } from 'react';
import NavBar from './componenets/navbar'
import './App.css';
import Counters from './componenets/counters';

class App extends Component {
  state = { 
    counters : [
        { id :1, value:4},
        { id :2, value:0},
        { id :3, value:0},
        { id :4, value:0}
    ]
 };
constructor() {
  super();
  console.log("App-Constructor");
}

componentDidMount(){
  console.log("App-Mounted");
  //Ajax call
}
 handleIncrement = counter => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter};
     counters[index].value++;
     this.setState({counters});
     console.log(this.state.counters[0]);
 }

 handleDelete =(counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
 };
 
 handleReset= () => {
     const counters = this.state.counters.map(c =>{
         c.value = 0;
         return c;
     });
     this.setState({ counters });

 };
  render() {
    console.log("App-render");
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value  > 0).length}/>
        <main className="container">
          <Counters 
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
