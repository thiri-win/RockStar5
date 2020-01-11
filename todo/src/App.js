import React from 'react'
import TodoList from './TodoList'
import DoneList from './DoneList'

class App extends React.Component {
  state = {
    items: [
      {_id:1, subject: 'Bread', status: 0},
      {_id:2, subject: 'Milk', status: 1},
      {_id:3, subject: 'Butter', status: 0},
      {_id:4, subject: 'Jam', status: 1},
      {_id:5, subject: 'Coffee', status: 0},
    ]
  }
  input = React.createRef();
  autoid = this.state.items.length;

  remove = (_id) => {
    this.setState({
      items: this.state.items.filter(item => item._id !== _id)
    })
  }

  toggle = (_id) =>{
    this.setState({
      items: this.state.items.map ( item => {
        if(item._id === _id) item.status = +! item.status;
        return item
      })
    })
  }

  add = ()=> {
    this.setState({
      items: [
        ...this.state.items,
        {
          _id:++this.autoid,
          subject: this.input.current.value,
          status: 0,
        }
      ]
    })
  }

  edit = (_id) => {
    console.log(_id)
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
        edit = {this.edit}
        />
        <DoneList 
        items={this.state.items.filter(item => item.status === 1)} 
        remove = {this.remove}
        toggle = {this.toggle}
        edit = {this.edit}
        />
      </div>
    )
  }
}

export default App