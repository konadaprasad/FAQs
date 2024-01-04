import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

const faqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
    isActive: false,
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
    isActive: false,
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
    isActive: false,
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
    isActive: false,
  },
]

class Faqs extends Component {
  state = {status: 'Hide', List: faqsList}

  showAnswer = id => {
    this.setState(prevState => ({
      List: prevState.List.map(each => {
        if (each.id === id) {
          return {...each, isActive: !each.isActive}
        }
        return each
      }),
    }))
    console.log(this.state)
  }

  render() {
    const {status, List} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">FAQs</h1>
          <ul className="un-order-list">
            {List.map(item => (
              <FaqItem
                listItem={item}
                key={item.id}
                status={status}
                showAnswer={this.showAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
