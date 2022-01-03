import React, { Component } from 'react'


export class Transactine extends Component {
    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.transactine._id)
    }

    render() {
        return (
            <div className='transaction'>

                <div>{this.props.transactine.vendor}</div>
                <div>{this.props.transactine.category}</div>

                <div>{this.props.transactine.amount}</div>
                <div><button onClick={this.deleteTransaction}>Delete</button></div>

            </div>
        )
    }
}

export default Transactine
