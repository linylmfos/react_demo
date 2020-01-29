import React, { Component } from 'react';
class Parent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            domInputValue: '王校长'
        };
    }

    componentDidMount() {
        console.log('a', this.refs.reactChild.state.a);
        console.log('az', this.refs.domInput.value);
        this.refs.reactChild.f1();
        this.refs.reactChild.f2(5);
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
                {/* <Child ref="reactChild" a={12} /> */}
                <Child ref="reactChild" a={5} parent={this} />
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
            a : 25
        }
    }

    f1() {
        console.log('in Child f1()');
    }
    f2(b) {
        console.log('b', b);
    }

    componentDidMount() {
        console.log('子组件', this.props.parent.state.domInputValue);
    }

    render() {
        return (
            <div>
                <input type="button" value="子组件按钮" />
            </div>
        )
    }
}

export default Parent;