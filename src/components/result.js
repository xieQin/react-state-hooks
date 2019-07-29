import React from 'react'

class Result extends React.Component {
  render () {
    if (this.props.temperature > 100) {
      return (
        <div>boiled</div>
      )
    } else {
      return (
      <div>not boiled</div>)
    }
  }
}

export default Result