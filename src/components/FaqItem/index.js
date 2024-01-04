import './index.css'

const FaqsItem = props => {
  const {listItem, showAnswer} = props
  const {id, questionText, answerText, isActive} = listItem

  const changeToMinus = () => {
    showAnswer(id)
  }

  let image
  let answer
  if (!isActive) {
    image = (
      <button className="img-btn" type="button" onClick={changeToMinus}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
          alt="plus"
          className="b-img"
        />
      </button>
    )
  } else {
    image = (
      <button className="img-btn" type="button" onClick={changeToMinus}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
          alt="minus"
          className="b-img"
        />
      </button>
    )
    answer = (
      <div className="answer-cont">
        <hr className="line" />
        <p className="para1">{answerText}</p>
      </div>
    )
  }

  return (
    <li className="item">
      <div className="question">
        <h1 className="para">{questionText}</h1>
        {image}
      </div>
      {answer}
    </li>
  )
}

export default FaqsItem
