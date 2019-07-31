import * as React from 'react';
import InputComponent from './input'

interface IProps {
  name: string
}
interface IState {
  time: Date,
  isToggled: Boolean
}

class Test extends React.Component<IProps, IState> {

  public state = {
    time: new Date(),
    isToggled: false
  }

  public timeId: any = null

  constructor (props: IProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  tick () {
    this.setState({
      time: new Date()
    });
  }

  shouldComponentUpdate () {
    // console.log('1111', new Date())
    return true
  }
  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  handleClick () {
    this.setState(state => ({
      isToggled: !state.isToggled
    }));
  }

  handleClickFunc = () => {
    console.log('111111')
    this.setState(() => ({
      isToggled: !this.state.isToggled
    }));
  }

  render () {
    const nums = [1, 2, 3, 4, 5];
    const numItems = nums.map(item => <div key={item}>{item}</div>)
    return (
      <div>
        ～{this.props.name}
        {numItems}
        <InputComponent/>
        <div>{this.state.time.toLocaleTimeString()}</div>
        <div onClick={this.handleClickFunc}>click test</div>
        <a href="#111" onClick={this.handleClick}>{this.state.isToggled ? 'ON': 'OFF'}</a>
      </div>
    )
  }
}

export default Test