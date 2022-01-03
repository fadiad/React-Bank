import React, { Component } from 'react'
import Category from './Category'

const axios = require('axios')

export class Breakdown extends Component {

    constructor() {
        super()
        this.state = {
            _transactions: []
        }
    }

    componentDidMount() {
        let transactions = [...this.state._transactions]

        axios.get("http://localhost:4000/brackdown").then((respons) => {
            return respons.data
        }).then((respons) => {

            let transactionsKeys = Object.keys(respons)

            for (let t of transactionsKeys) {
                let obj = {}
                obj[t] = respons[t]
                transactions.push(obj)
            }

            // console.log(transactions);

            this.setState({
                _transactions: transactions
            }, function () {
                // console.log(this.state._transactions);
            })
        })
    }



    render() {
        return (
            <div>
                {
                    this.state._transactions.map(t => {
                        return (
                            <Category category={Object.keys(t)[0]} spends={Object.values(t)[0]} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Breakdown

