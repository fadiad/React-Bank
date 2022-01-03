import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import '../styles/Operations.css'


export class Operations extends Component {

    constructor() {
        super()
        this.state = {
            Amount: 0,
            Vendor: ' ',
            Category: ' ',
            redirect: null
        }
    }

    setAmount = (event) => {
        let amount = event.target.value
        this.setState({
            Amount: amount
        })
    }

    setVendor = (event) => {
        let vendor = event.target.value
        this.setState({
            Vendor: vendor
        })
    }

    setCategory = (event) => {
        let category = event.target.value
        this.setState({
            Category: category
        })
    }

    depositTransaction = () => {
        let transaction = {
            amount: this.state.Amount,
            vendor: this.state.Vendor,
            category: this.state.Category,
        }
        this.props.addTransaction(transaction)
        this.setState({ redirect: "/" });
    }


    withdrawTransaction = () => {
        let transaction = {
            amount: -1 * this.state.Amount,
            vendor: this.state.Vendor,
            category: this.state.Category,
        }
        this.props.addTransaction(transaction)
        this.setState({ redirect: "/" });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className='Operations' >
                <h1>Insert Transaction</h1>
                <div>
                    <input type="text" placeholder='Transaction Amount' onChange={this.setAmount} />
                    <input type="text" placeholder='Transaction Vendor' onChange={this.setVendor} />
                    <input type="text" placeholder='Transaction Category' onChange={this.setCategory} />
                    <br /><br /><br />
                    <button type="button" onClick={this.depositTransaction}>Deposit</button>
                    <button type="button" onClick={this.withdrawTransaction}>Withdraw </button>
                </div>
            </div>
        )
    }
}

export default Operations
