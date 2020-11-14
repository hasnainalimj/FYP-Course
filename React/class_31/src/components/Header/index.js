import React, { Component } from 'react'

class Header extends Component {
    render() {
        const { heading = 'No Heading Available' } = this.props
        return (
            <div style={{ width: '100%', height: 50, backgroundColor: 'red' }}>
                <h1 style={{ margin: 0 }}>{heading}</h1>
            </div>
        )
    }
}

export default Header;
