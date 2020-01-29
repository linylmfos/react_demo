import React, { Component } from 'react';
class Parent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            b: true
        }
    }

    fn() {
        this.setState({
            b: !this.state.b
        });
    }

    render() {
        return (
            <div>
                <input typed="button" value="Be/Not to Be" onClick={this.fn.bind(this)} />
                {this.state.b ? <Child /> : ('') }
            </div>
        )
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('mount');
    }
    componentWillUnmount() {
        console.log('unmount');
    }
    render() {
        return (
            <p>隔壁王</p>
        )
    }
}

export default Parent;