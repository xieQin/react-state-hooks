import * as React from 'react';
import { ChangeEvent } from 'react';

interface IProps {

}
interface IState {

}

class InputComponent extends React.Component<IProps, IState> {
  public state = {
    value: 'test input'
  }
  constructor(props: IProps) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit (event: ChangeEvent<HTMLFormElement>) {
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