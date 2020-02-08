import React from 'react'
import TodoList from './TodoList'
import DoneList from './DoneList'

class App extends React.Component {
  state = {
    items: []
  }

  input = React.createRef();
  api = "http://localhost:8000/tasks";

  componentDidMount() {
    fetch(this.api)
    .then( res => res.json())
    .then( items => {
      this.setState({items})
    });
  }

  remove = (_id) => {
    fetch(`${this.api}/${_id}`, {method:'DELETE'});
    this.setState({
      items: this.state.items.filter(item => item._id !== _id)
    })
  }

  toggle = (_id) =>{
    this.setState({
      items: this.state.items.map ( item => {
        if(item._id === _id) {
          item.status = +! item.status
          fetch(`${this.api}/${_id}`, 
            {
              method:'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({status: item.status})
            });
        };
        return item
      })
    })
  }

  add = ()=> {
    fetch(this.api,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({subject: this.input.current.value})
    })
    .then(res => res.json())
    .then( item => {
      this.setState({
        items:[ ...this.state.items, item ]
      });
    });
  }

  render() {
    return(
      <div>
        <h1>ToDo List With React </h1>
        <input type="text" ref={this.input}/>
        <button onClick={this.add}>Add</button>
        <TodoList 
        items={this.state.items.filter(item => item.status === 0)} 
        remove = {this.remove}
        toggle = {this.toggle}
        />
        <DoneList 
        items={this.state.items.filter(item => item.status === 1)} 
        remove = {this.remove}
        toggle = {this.toggle}
        />
      </div>
    )
  }
}

export default App