import React, { Component } from 'react';
class Cmp1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            a: 4
        }
        console.log('a', this.state.a);
    }

    fn() {
        this.setState({
            a: this.state.a + 1
        });
        console.log('aa', this.state.a);
    }

    render() {
        return (
            <div>
                {this.state.a}
                <input type="button" value="+1" onClick={this.fn.bind(this)} />
            </div>
        )
    }

    
}

export default Cmp1;