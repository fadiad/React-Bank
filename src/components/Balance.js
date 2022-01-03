import React, { Component } from 'react'
import '../styles/Balance.css'
export class Balance extends Component {

    render() {
        return (
            <div>Balance : <span>  {'  ' + ' ' + this.props.sum}</span>$</div>
        )
    }
}

export default Balance
