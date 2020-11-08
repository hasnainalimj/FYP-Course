import React, { Component } from 'react'
import './App.css';

// var key = 'gender'
// var data = {
//   [key] : 'male'
//  }

class App extends Component {
  constructor() {
    super()
    // console.log('execute constructor', this)

    this.state = {
      name: 'Hasnain Ali',
      country: 'Pakistan',
      profession: 'Developer',
      students: ['Amreen', 'Faizan', 'Ali', 'Saad', 'Sami', 'Faris', 'Kaleem'],
      data: {
        email: 'mjhasnain15@gmail.com',
        prototype: 'Google'
      },
      boolean: false,
      userService: {
        getUserName(user) {
          return user.firstname + ' ' + user.lastname;
        },
      },
      list: ['Pakistan', 'India', 'Bangladesh', 'Brazil', 'America', 'Argentina', 'Netherland']
    }

    this.getListItem = this.getListItem.bind(this)
  }

  getListItem() {
    console.log('this', this)
  }

  getListItemArrow = item => {
    // console.log(this)
    console.log("App -> item", item)
  }

  deleteItem = item => {
    // console.log("App -> item", item)
    const updatedList = this.state.list.filter(country => country !== item)
    console.log("App -> updatedList", updatedList)

    this.setState({
      list: updatedList,
      name: 'Pakistan Zindabad'
    })
  }

  render() {
    // console.log('this', this)

    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* <h1>{this.state.country}</h1>
        <h1>{this.state.profession}</h1> */}
        {/* <`ol>
          {this.state.students.map((student, ind) => {
            // return <li key={ind} onClick={this.getListItemArrow}>{student}</li>
            return <li key={ind} onClick={() => this.getListItemArrow(student)}>{student}</li>
          })}
        </ol>` */}
        {/* <p>{`${this.state.data.email} ${this.state.data.prototype}`}</p> */}

        {/* <h2>{this.state.boolean ? 'true' : 'false'}</h2> */}
        {this.state.list.map(country => {
          return <h1 onClick={() => this.deleteItem(country)}>{country}</h1>
        })}
      </div>
    )
  }
}

export default App;
