import React, { Component } from 'react';
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1
        }
    }

    next() {
        if (this.state.id < 3) {
            this.setState({
                id: this.state.id + 1
            })
        } else {
            this.setState({
                id: 1
            })
        }
    }

    render() {
        return (
            <div>
                <input type="button" value="next" onClick={this.next.bind(this)} />
                <Child id={this.state.id} />
            </div>
        )

    }
}

class Child extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nama: '',
            age: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        return true
    }

    loadData(id) {
        console.log('id',id);
        fetch(`data/data${id}.txt`).then(res => {
            console.log('ddd', res)
            res.json().then(data => {
                this.setState(data);
            })
        })
    }

    componentDidMount() {
        console.log('Mount', this.props.id);
        this.loadData(this.props.id);
    }

    componentDidUpdate() {
        console.log('update', this.props.id);
        this.loadData(this.props.id);
    }

    render() {
        return (
            <div>
                <h2>ID: {this.props.id}</h2>
                <p>用户名： {this.state.name}-年龄： {this.state.age}</p>
            </div>
        )
    }
}

export default Parent