import React, { Component } from 'react'

class Footer extends Component {
    render() {
        const { heading = 'No Footer Heading' } = this.props
        return (
            <div style={{ width: '100%', height: 50, backgroundColor: 'blue' }}>
                <h1 style={{ margin: 0 }}>{heading}</h1>
            </div>
        )
    }
}

export default Footer;
