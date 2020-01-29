import React, { Component } from 'react';
class Parent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            domInputValue: 'wangxiaozhang'
        };
    }

    componentDidMount() {
        console.log('a', this.refs.reactChild.state.a);
        console.log('az', this.refs.domInput.value);
    }

    handleChange = (e) => {
        console.log(e.target.value)
        console.log(this.refs.domInput.value)
        console.log(this.state.domInputValue)

        this.setState({
            domInputValue: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Child ref="reactChild" />
                <input ref="domInput" type="text" 
                value={this.state.domInputValue} onChange={this.handleChange.bind(this)} />
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