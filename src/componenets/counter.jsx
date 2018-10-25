import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        //if changes get updated data from the server
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //Ajax call and get new data from the server
        }
    }

    componentWillUnmount() {
        console.log("Counter -UnMount");
    }
    
    // renderTags ()
    // {
    //     if(this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>;
    // }

    
    // constructor()
    // {       super();
    //         this.handleIncrment =  this.handleIncrment.bind(this);
    // }

    
    styles ={
        fontSize:40,
        fontWeight: 'bold'  
    }
    render() { 
        console.log("counter-Rendered");
        return (
            <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className = "btn btn-secondary btn-sm">
                Increment
            </button>
            <button
                onClick ={ () => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">
                Delete
            </button>
            </div>
        
        );
    }

    formatCount () {
        const {value} = this.props.counter;
        return value === 0 ? "Zero":value;
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;