import * as React from 'react'

interface IProps {
  temperature: string
}
interface IState {

}

class Result extends React.Component<IProps, IState> {
  render () {
    if (Number(this.props.temperature) > 100) {
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