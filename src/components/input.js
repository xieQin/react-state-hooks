import React from 'react';

class InputComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'test input'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit (event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render () {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <select name="" value={this.state.value} id="" onChange={this.handleChange}>
          <option value="1111">11</option>
          <option value="2222">22</option>
          <option value="3333">33</option>
          <option value="4444">44</option>
        </select>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button>Submit</button>
      </form>
    )
  }
}

export default InputComponent