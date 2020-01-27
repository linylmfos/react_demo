import React, { Component } from 'react';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 5
        }
        console.log('aa', this.state.a);
    }

    fn() {
        this.setState({
            a: this.state.a + 1
        });
        console.log('aaa', this.state.a);
    }

    render() {
        console.log('父组件渲染啦');
        return (
            <div style={{color: 'orange'}}>
                <Child a={this.state.a} />
                父组件: {this.state.a} <br/> 
                <input type="button" value="+1" onClick={this.fn.bind(this)} />
            </div>
        )
    }
}

class Child extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        console.log('子组件渲染啦');
        return (
            <div>
                子组件: {this.props.a}
            </div>
        );
    }
}

export default Parent;