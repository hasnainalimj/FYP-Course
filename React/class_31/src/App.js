import React, { Component } from 'react'
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'

// const ar = ['A','B','C']
// const [one, two, three] = ar

class App extends Component {
  constructor() {
    super()
    this.state = {
      itemName: '',
      items: [],
      isEdit: false,
      editedIndex: 0
    }
  }

  addItem = () => {
    const { itemName, items } = this.state
    if (!itemName) return alert('Enter item name!');

    this.setState({
      items: [...items, itemName],
      itemName: ''
    })
  }

  deleteItem = ind => {
    const { items } = this.state
    // const data = this.state.items
    items.splice(ind, 1)
    this.setState({
      items: items
    })
  }

  editItem = (ind, val) => {
    this.setState({
      isEdit: true,
      itemName: val,
      editedIndex: ind
    })
  }

  updateItem = () => {
    const { items, itemName, editedIndex } = this.state //ES6 Destruction
    // const data = this.state.items
    items.splice(editedIndex, 1, itemName)
    this.setState({
      isEdit: false,
      itemName: '',
      items: items
    })
  }

  render() {
    const { itemName, isEdit, items } = this.state
    return (
      <div>
        <Header heading='Abc' messages={100} />
        <input type='text' value={itemName} placeholder='enter your item' onChange={(e) => this.setState({ itemName: e.target.value })} />
        <button onClick={isEdit ? this.updateItem : this.addItem}>{isEdit ? "Update" : "Add"}</button>
        <p onClick={() => this.setState({ itemName: '' })}>{itemName}</p>
        {items.map((val, ind) => {
          return <div>
            <span>{`${ind + 1} ${val}       `}</span>
            <button onClick={() => this.editItem(ind, val)}>Edit</button>
            <button onClick={() => this.deleteItem(ind)}>Delete</button>
          </div>
        })}
        <Footer heading='New Footer' />
      </div>
    )
  }
}

export default App;
