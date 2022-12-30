// Write your code here
import './index.css'

const TransactionItem = props => {
  const {incomeDetails, removeItemFromList} = props
  const {id, title, amount, optionValue, deleteUrl} = incomeDetails

  const removeItem = () => {
    removeItemFromList(id)
  }

  return (
    <li className="income-balance-details-box">
      <p className="title">{title}</p>
      <p className="amount">Rs {amount}</p>
      <p className="type">{optionValue}</p>
      <button type="button" className="delete-btn" onClick={removeItem}>
        <img src={deleteUrl} alt="delete" className="delete-img" />
      </button>
    </li>
  )
}

export default TransactionItem
