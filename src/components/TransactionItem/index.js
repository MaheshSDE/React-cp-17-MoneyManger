// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, deleteImg, type} = transactionDetails

  const onDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="table-header">
      <p className="table-header-cell">{title}</p>
      <p className="table-header-cell">Rs {amount}</p>
      <p className="table-header-cell">{type}</p>
      <button
        type="button"
        className="del-button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img src={deleteImg} className="image" alt="delete" />
      </button>
    </li>
  )
}
export default TransactionItem
