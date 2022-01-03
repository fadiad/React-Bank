import React, { Component } from 'react'
import '../styles/Transactions.css'
import Transactine from './Transactine'


export class Transactions extends Component {




    render() {

        return (
            <div className='transactions'>
                {
                    this.props.transactions.map(t => {
                        return (
                            <Transactine transactine={t} deleteTransaction={this.props.deleteTransaction} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Transactions
