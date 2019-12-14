import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li>{this.props.name}</li>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ['Apple','Orange','Mango']
    };
    this.input = React.createRef();
  }
  add = () => {
    this.setState({
      data: [
        ...this.state.data, this.input.current.value
      ]
    })
  };
  render() {    
    return (
      <div>
        <ul>
          {this.state.data.map(i=>{
            return(
              <Item name={i} />
            )
          })}
        </ul>
        <input type="text"ref={this.input} />
        <button onClick={this.add}>+</button>
        <h1>Hello React</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    )
  }
}
export default App