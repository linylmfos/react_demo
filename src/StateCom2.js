import React, { Component } from 'react';
class Cmp2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            a: 5
        }
        console.log('a', this.state.a);
    }

    fn() {
        this.setState({
            a: this.state.a + 1
        });
        this.props.obj.a ++;
        console.log('aa', this.state.a);
    }

    
    render() {
        
        return (
            <div>
                {this.state.a}-
                {this.props.obj.a}
                <input type="button" value="+1" onClick={this.fn.bind(this)} />
                <ul>
                    {
                        this.props.children.map((item, index) => (
                        <li key={item.props.id}>{item}</li>   
                        ))
                    }
                </ul>
            </div>
        )
    }

    
}

export default Cmp2;