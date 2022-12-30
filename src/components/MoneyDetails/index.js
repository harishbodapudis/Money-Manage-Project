// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeData, expensesData} = props
  return (
    <div className="balance-sheet-box">
      <div className="balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-img"
        />
        <div>
          <p>Your Balance</p>
          <p>Rs {incomeData - expensesData}</p>
        </div>
      </div>
      <div className="income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="income-img"
        />
        <div>
          <p>Your Income</p>
          <p>Rs {incomeData}</p>
        </div>
      </div>
      <div className="expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="expenses-img"
        />
        <div>
          <p>Your Expenses</p>
          <p>Rs {expensesData}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
