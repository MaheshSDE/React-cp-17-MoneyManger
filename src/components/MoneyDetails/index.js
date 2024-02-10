// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="moneyDetailsContainer">
      <div className="balanceContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balanceImg"
        />
        <div className="balanceTitles">
          <p className="balanceHeading">Your Balance</p>
          <p className="balanceDesc" data-testId="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>

      <div className="incomeContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="incomeImg"
        />
        <div className="incomeTitles">
          <p className="incomeHeading">Your Income</p>
          <p className="incomeDesc" data-testId="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>

      <div className="expensesContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="expenseImg"
        />
        <div className="expensesTitles">
          <p className="expensesHeading">Your Expenses</p>
          <p className="expensesDesc" data-testId="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
