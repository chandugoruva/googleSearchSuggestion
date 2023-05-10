import './index.css'

const SuggestionItem = props => {
  const {each, inputValue} = props
  const {suggestion} = each
  const onClickText = () => {
    inputValue(suggestion)
    console.log(suggestion)
  }
  return (
    <li className="li-el">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="image2"
        onClick={onClickText}
      />
    </li>
  )
}

export default SuggestionItem
