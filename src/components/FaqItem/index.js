// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isPlus: false}

  onDisplayText = () => {
    const {isPlus} = this.state
    this.setState({isPlus: !isPlus})
  }

  render() {
    const {faqsDetails} = this.props
    const {isPlus} = this.state
    const {questionText, answerText} = faqsDetails
    return (
      <li className="question-card">
        <div className="display-card">
          <h1 className="question-head">{questionText}</h1>
          <button onClick={this.onDisplayText} className="plus-button">
            {isPlus ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
        {isPlus && <p>{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
