import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    optionId: transactionTypeOptions[0].optionId,
    titleInput: '',
    amountInput: '',
    transactionsList: [],
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTransaction = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: typeOption.displayText,
      deleteImg:
        'https://assets.ccbp.in/frontend/react-js/money-manager/delete.png ',
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state

    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    const filteredList = transactionsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionsList: filteredList})
  }

  render() {
    const {optionId, titleInput, amountInput, transactionsList} = this.state

    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="moneyManagerContainer">
        <div className="top-section">
          <h1 className="name">Hi, Richard</h1>
          <p className="description">
            Welcome back to your <span className="spanElem">Money Manager</span>
          </p>
        </div>

        <div className="unOrderList">
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </div>

        <div className="bottom-section">
          <form
            className="transactionContainer"
            onSubmit={this.onAddTransaction}
          >
            <h1 className="styleAdd">Add Transaction</h1>
            <label htmlFor="forTitle" className="titleStyle">
              TITLE
            </label>
            <input
              onChange={this.onChangeTitleInput}
              type="text"
              placeholder="TITLE"
              className="inputTitle"
              id="forTitle"
              value={titleInput}
            />

            <label htmlFor="forAmount" className="titleStyle">
              AMOUNT
            </label>

            <input
              onChange={this.onChangeAmountInput}
              type="text"
              placeholder="AMOUNT"
              className="inputAmount"
              id="forAmount"
              value={amountInput}
            />

            <label htmlFor="forType" className="titleStyle">
              TYPE
            </label>

            <select
              id="forType"
              value={optionId}
              onChange={this.onChangeTransaction}
              className="transaction-select"
            >
              {transactionTypeOptions.map(eachItem => (
                <option
                  key={eachItem.optionId}
                  value={eachItem.optionId}
                  className="option"
                >
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>

          <div className="history-transactions">
            <h1 className="transaction-header">History</h1>
            <div className="transactions-table-container">
              <ul className="transactions-table">
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell">Type</p>
                </li>
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    transactionDetails={eachTransaction}
                    key={eachTransaction.id}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
