import React, { Component } from 'react';
class Cmp11 extends React.Component{
    constructor(props) {
        super(props);
        console.log('calling constructor');
        this.state = {
            a: 5
        };
    }

    fn() {
        this.setState({
            a: this.state.a + 1
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        console.log('this.state', this.state);
        console.log('this.props', this.props);
        if(nextState.a % 2 === 1) {
            return true
        } else {
            return false;
        }
    }

    componentWillMount() {
        console.log('will mount');
    }

    componentDidMount() {
        console.log('did mount');
    }

    componentWillUpdate() {
        console.log('will update');
    }

    componentDidUpdate() {
        console.log('did update')
    }

    render() {
        return (
            <div>
                a = {this.state.a}
                <input type="button" value="+1" onClick={this.fn.bind(this)} />
            </div>
        )
    }

}



export default Cmp11;
