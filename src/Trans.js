import React, { Component } from 'react';
class Parent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            aValue: 50
        };
    }

    fn2(aValue) {
        console.log('trigged', aValue);
        this.state.aValue = aValue;
    }

    render() {
        return (
            <div>
                <Child myFunc={this.fn2.bind(this)} />
            </div>
        )
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myValue : 25
        }
    }

    fn() {
        this.props.myFunc(this.state.myValue)
    }

    render() {
        return (
            <div>
                <input type="button" value="send" onClick={this.fn.bind(this)} />
            </div>
        )
    }
}

export default Parent;