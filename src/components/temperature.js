import React from 'react';

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (event) {
    this.props.onChange(event.target.value, this.props.name)
  }

  render () {
    const title = {
      'c': 'celsius',
      'f': 'fahrenheit'
    }
    const header = <div>{title[this.props.name]}</div>
    return (
      <div>
        {header}
        <input type="text" value={this.props.temperature} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Temperature