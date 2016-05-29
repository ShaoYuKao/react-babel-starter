import React, { Component } from 'react';

export class Title extends Component{
    constructor(props, context){
        super(props, context);
        
        this.state = {
            data : 'this is constructor'
        };
    }
    
    
    render (){
        return (
          <div>
            <h1>Hello React~!</h1>
            <h2>Author</h2>
            <h3>{this.props.text}</h3>
            <hr/>
            <h1>{this.props.text1} by {this.props.author}</h1>
            <h2>{this.state.data}</h2>
          </div>
        );
    }
};

Title.defaultProps = {
    text1 : 'Hello',
    author : 'Ract'
}