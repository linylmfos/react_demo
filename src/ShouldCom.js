import React, { Component } from 'react';
import Axios from 'axios';
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
            name: '',
            age: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        return (
            nextProps.id !== this.props.id || nextState.name !== this.state.name
        )
        // return true
    }

    loadData(id) {
        console.log('id',id);
        fetch(`data/data${id}.json`, {
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            res.json().then(data => {
                console.log('d', data)
                this.setState(data);
            }).catch(err => {
            }).finally(() => {
                var data;
                if(id === 1) {
                    data = {
                        "name": "张三",
                        "age": 18
                    }
                    this.setState(data);
                } else if(id ===2){
                    data = {
                        "name": "张三丰", "age": "20"
                    }
                    this.setState(data);
                } else if(id === 3) {
                    data = {
                        "name": "张丰", "age": "22"
                    }
                    this.setState(data);
                }
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
                <p>用户名： {this.state.name}<br/> 年龄： {this.state.age}</p>
            </div>
        )
    }
}

export default Parent