import React from 'react';
import MyComponent from './MyCom'
import StateCom from './StateCom'
import StateCom2 from './StateCom2'
import PropsRender from './PropsRender';
import ForceUpdate from './ForceUpdate';
import Life from './Life'
import ShouldCom from './ShouldCom'
import './App.css';

function App() {
  let array1 = [1, 2, 3, 4, 5];
  let users = [
    {id: 's01', name: '张三', age: 25},
    {id: 's02', name: '张四', age: 26},
    {id: 's03', name: '万股', age: 27},
  ]

 
  // let array2 = array1.filter(isLarger);
  let name = "老王";
  let age = 22;

  let childrenStr = [
    { id: 's01', str: '隔壁老王1' },
    { id: 's02', str: '隔壁老王2' },
    { id: 's03', str: '隔壁老王3' }
  ]

  let children = childrenStr.map((item, index) => (
    <h4 key={item.id}>{item.str}</h4>
  ));
  let mcpt = <MyComponent name={name} age={age} />

  let obj = {
    a: 5
}
  return (
    <div>
      <div className="App">
        <ul>
          {
            users.map((item, index) => (
             <Child key={item.id} name={item.name} age={item.age} />
            ))
          }
        </ul>
      </div>

      <div>
        <ShouldCom />
      </div>
      
      <h4>
        <hr />
        <StateCom />
        <hr />
      </h4>
      <p>
        <PropsRender />
      </p>
      <h6 style={{color: 'green', backgroundColor: '#F00'}}>
        <ForceUpdate a={5} />
      </h6>
      <p style={{background: '#FF0'}}>
        <Life />
      </p>
      <p>
        <StateCom2 a={5} obj={obj} >
          <span id="ss1">aaa</span>
          <span id="ss2">bbb</span>
        </StateCom2>
        <hr />
      </p>
      <div>
        {children}
      </div>
      {mcpt}
    </div>

  );
}

class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li style={{color:'red'}}>
        name: {this.props.name}  age: {this.props.age}
      </li>
    )
  }
}

export default App;
