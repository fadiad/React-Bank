import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import Breakdown from './components/Breakdown'
import Balance from './components/Balance'
import './App.css';


const axios = require('axios')


class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      sum: 0
    }
  }

  componentDidMount = async () => {
    let respons = await axios.get("http://localhost:4000/transactions")
    // console.log(respons.data);
    this.setState({
      transactions: respons.data
    }, function () {
      console.log(this.state.transactions);
      this.editSum()
    })
  }

  addTransaction = (transaction) => {
    fetch('http://localhost:4000/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          transactions: data
        }, function () {
          this.editSum()
        })
      })

  }

  deleteTransaction = (id) => {
    fetch('http://localhost:4000/transactions', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          transactions: data
        }, function () {
          this.editSum()
        })
      })

  }


  editSum = () => {
    let tr = [...this.state.transactions]
    let newSum = 0

    for (let t of tr) {
      console.log(newSum);
      newSum = newSum + t.amount
    }

    this.setState({
      sum: newSum
    })
  }

  render() {
    return (
      <Router>
        <div className="App">

          <div className='head'>
            <div>
              <Link className='link' to="/">Transactions</Link>
            </div>
            <div>
              <Link className='link' to="/Operations">Operations </Link>
            </div>
            <div>
              <Link className='link' to="/Breakdown">Breakdown</Link>
            </div>
            <div>
              <Balance sum={this.state.sum} />
            </div>
          </div>

          <br />

          <Route exact path="/" render={() => <Transactions transactions={this.state.transactions} deleteTransaction={this.deleteTransaction} />} />
          <Route exact path="/Operations" render={() => <Operations addTransaction={this.addTransaction} />} />
          <Route exact path="/Breakdown" render={() => <Breakdown />} />

        </div>
      </Router>
    );
  }
}

export default App;


