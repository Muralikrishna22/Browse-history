import './index.css'

const BrowserItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const deleteItem = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-container">
      <div className="content">
        <p className="history-time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p className="history-title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>

      <button
        testid="delete"
        type="button"
        className="delete-btn"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserItem
