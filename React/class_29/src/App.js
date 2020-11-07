import React, { Component } from 'react'
import './App.css';

class App extends Component {

  returnCountry = () => {
    return 'Pakistan'
  }


  render() {

    // console.log(this)

    const text = 'We are learning basics of React :) 12323 1232323132'

    const list = [
      {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
      },
      {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
      },
    ];

    return (
      // <h1 className='abc'>{text}</h1>
      <div>
        <h1>Country : {this.returnCountry()}</h1>
        {list.map((val, ind) => {
          return <div key={ind}>
            <h1>{`${val.title} ${val.author}`}</h1>
            <p>Points : {val.points}</p>
            <p>Total Comments : {val.num_comments}</p>
            <p>URL : <a href={val.url}>{val.url}</a></p>
            <p>Id : {val.objectID}</p>
          </div>
        })}
      </div>
    )
  }
}

export default App;
