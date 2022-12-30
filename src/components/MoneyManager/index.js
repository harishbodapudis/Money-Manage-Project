import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

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
    title: '',
    income: 0,
    expenses: 0,
    historyList: [],
    optionValue: 'INCOME',
    amount: '',
  }

  titleChange = event => {
    console.log(event.target.value)
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onOptionValueChange = event => {
    this.setState({optionValue: event.target.value})
    console.log('h')
  }

  updatedHistoryList = event => {
    event.preventDefault()
    const {title, amount, optionValue} = this.state
    console.log(optionValue)
    const optValue = optionValue === 'INCOME' ? 'Income' : 'Expenses'
    if (title && amount) {
      console.log(typeof amount)
      const newHistoryList = {
        id: uuidv4(),
        title,
        amount,
        optionValue: optValue,
        deleteUrl:
          'https://assets.ccbp.in/frontend/react-js/money-manager/delete.png',
      }
      this.setState(prevState => ({
        historyList: [...prevState.historyList, newHistoryList],
      }))
      if (optValue === 'Income') {
        this.setState(prevState => ({
          income: prevState.income + parseInt(amount),
        }))
      } else {
        this.setState(prevState => ({
          expenses: prevState.expenses + parseInt(amount),
        }))
      }
    }
    this.setState({title: '', amount: '', optionValue: 'INCOME'})
  }

  removeItemFromList = id => {
    const {historyList} = this.state

    const amountItem = historyList.filter(item => item.id === id)

    const newExpensesHistory = historyList.filter(
      eachItem => eachItem.id !== id,
    )
    if (amountItem[0].optionValue === 'Expenses') {
      this.setState(prevState => ({
        expenses: prevState.expenses - parseInt(amountItem[0].amount),
      }))
    } else {
      this.setState(prevState => ({
        income: prevState.income - parseInt(amountItem[0].amount),
      }))
    }

    this.setState({historyList: [...newExpensesHistory]})
  }

  render() {
    const {
      title,
      income,
      expenses,
      historyList,
      optionValue,
      amount,
    } = this.state

    return (
      <div className="main-container">
        <div className="money-manager-box">
          <h1 className="manage-heading">Hi,Richard</h1>
          <p className="manage-para">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails incomeData={income} expensesData={expenses} />
        </div>
        <div className="balance-form-history-box">
          <div className="form-box">
            <div className="transaction-entry-details-box">
              <h1 className="transaction-heading">Add Transaction</h1>
              <form onSubmit={this.updatedHistoryList}>
                <label htmlFor="title" className="label-title">
                  TITLE
                </label>
                <br />
                <input
                  onChange={this.titleChange}
                  value={title}
                  className="title-input"
                  type="text"
                  placeholder="TITLE"
                  id="title"
                />
                <br />
                <label htmlFor="amount" className="label-amount">
                  AMOUNT
                </label>
                <br />
                <input
                  className="amount-input"
                  type="text"
                  value={amount}
                  placeholder="AMOUNT"
                  id="amount"
                  onChange={this.onAmountChange}
                />
                <br />
                <label htmlFor="title" className="label-type">
                  TYPE
                </label>
                <br />
                <select
                  className="type-input"
                  onChange={this.onOptionValueChange}
                  value={optionValue}
                >
                  {transactionTypeOptions.map(eachItem => (
                    <option key={eachItem.optionId} value={eachItem.optionId}>
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
                <br />
                <button type="submit" className="add-btn">
                  Add
                </button>
                <br />
              </form>
            </div>
          </div>
          <div className="user-balance-sheet-box">
            <div className="history-heading-balance-box">
              <h1 className="history-heading">History</h1>
              <ul className="ul-item">
                <li className="balance-sheet-headings-box">
                  <p className="title-history-heading">Title</p>
                  <p className="amount-history-heading">Amount</p>
                  <p className="type-history-heading">Type</p>
                  <p className="delete-history-heading">Delete</p>
                </li>
                {historyList.map(eachItem => (
                  <TransactionItem
                    key={eachItem.id}
                    incomeDetails={eachItem}
                    removeItemFromList={this.removeItemFromList}
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
