import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    inputEl: '',
  }

  inputSearch = event => {
    this.setState({inputEl: event.target.value})
  }

  inputValue = suggestion => {
    this.setState({inputEl: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {inputEl} = this.state

    const filteredEl = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(inputEl.toLowerCase()),
    )
    return (
      <div className="bg-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div className="sub-div">
          <div className="search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="image1"
            />
            <input
              type="search"
              className="searchEl"
              placeholder="Search Google"
              onChange={this.inputSearch}
              value={inputEl}
            />
          </div>
          <ul className="ul-el">
            {filteredEl.map(each => (
              <SuggestionItem
                each={each}
                key={each.id}
                inputValue={this.inputValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
