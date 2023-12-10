import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestionsList: props.suggestionsList,
      searchResult: props.suggestionsList,
      searchInput: '',
    }
  }

  selectedInput = id => {
    const {suggestionsList} = this.state

    suggestionsList.forEach(
      element =>
        element.id === id && this.setState({searchInput: element.suggestion}),
    )
  }

  updateSearchInput = event => {
    this.setState({searchInput: event.target.value})

    const {suggestionsList, searchInput} = this.state

    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    this.setState({
      searchResult,
    })
  }

  render() {
    const {searchInput, searchResult} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-result-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="search-bar"
                value={searchInput}
                onChange={this.updateSearchInput}
              />
            </div>

            <ul className="logo-container">
              {searchResult.map(object => (
                <SuggestionItem
                  key={object.id}
                  object={object}
                  selectedInput={this.selectedInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
