import * as React from 'react';
import { ChangeEvent} from 'react';

interface IProps {
  onChange: (value: string, name: string) => void,
  name: string,
  temperature: string
}
interface IState {

}

class Temperature extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (event: ChangeEvent<HTMLInputElement>) {
    this.props.onChange(event.target.value, this.props.name)
  }

  render () {
    const title: any = {
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