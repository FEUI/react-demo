import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
    this.toggleHandler = this.toggleHandler.bind(this)
  }
  toggleHandler () {
    this.setState({
      show: !this.state.show
    })
  }
  render () {
    const { show } = this.state
    return (
      // <div onClick={this.toggleHandler()}>切换展示{show ? '关闭' : '开启'}</div>
      <div>11</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

module.hot.accept()