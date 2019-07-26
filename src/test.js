import React from 'react';

class Test extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  tick () {
    this.setState({
      time: new Date()
    })
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
  }

  render () {
    return (
      <div>
        ～{this.props.name}
        <div>{this.state.time.toLocaleTimeString()}</div>
      </div>
    )
  }
}

export default Test