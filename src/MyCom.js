import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h4>hello world</h4>
                <h4>I am {this.props.name}</h4>
                <h4>i am {this.props.age} old</h4>
            </div>
        )
    }
}

export default MyComponent;