import React, { Component, useDebugValue } from 'react';

class Cmp1 extends React.Component {
    constructor(props) {
        super(props);
        this.a = 5;
        console.log('a', this.a);
    }

    fn() {
        this.a++;
        console.log(this.a);
        this.forceUpdate();
    }

    render() {
        console.log('渲染啦');
        return (
            <div>
                {this.a}
                <input type="button" value="+1" onClick={this.fn.bind(this)} />
            </div>
        )
    }
}

export default Cmp1;
