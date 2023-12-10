import './index.css'

const SuggestionItem = props => {
  const {object, selectedInput} = props
  const {suggestion, id} = object

  const selectSuggestion = () => {
    selectedInput(id)
  }

  return (
    <li className="list-item">
      <div className="suggestion-container">
        <p className="suggestion">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="img"
          onClick={selectSuggestion}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
