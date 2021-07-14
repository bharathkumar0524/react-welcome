// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe', status: true}

  onSubscribe = () => {
    this.setState(prev => {
      if (prev.status) {
        return {text: 'Subscribed', status: false}
      }
      return {text: 'Subscribe', status: true}
    })
  }

  render() {
    const {text} = this.state
    return (
      <div className="Welcome-bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.onSubscribe}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
