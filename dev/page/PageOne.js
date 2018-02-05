import React, { Component } from 'react';



class PageOne extends Component {

    componentDidMount() {
        console.log('进入pageone');
    }
    render() {
        return (
            <h1 style={{ position: 'absolute', left: 150, top: 10, color: 'red' }}>this is a PageOne</h1>
        )
    }
}

export default PageOne;