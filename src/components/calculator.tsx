import * as React from 'react';
import Temperature from './temperature';
import Result from './result';

interface IProps {

}

interface IState {
  temperature: string,
  name: string
}

function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32;
}

const tryConvert = (temperature: string, convert: (num: number) => number) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output:number = convert(input);
  const rounded:number = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component<IProps, IState> {
  public state = {
    temperature: '',
    name: 'c'
  }
  constructor (props: IProps) {
    super(props);
    this.handleTemperature = this.handleTemperature.bind(this)
  }

  handleTemperature (temperature: string, name: string) {
    this.setState({
      temperature,
      name
    });
  }

  render () {
    const scale = this.state.name;
    const temperature = this.state.temperature;
    const celsius = scale === 'c' ? tryConvert(temperature, toCelsius): temperature;
    const fahrenheit = scale === 'f' ? tryConvert(temperature, toFahrenheit): temperature;
    return (
      <div>
        <Temperature name="f" onChange={this.handleTemperature} temperature={celsius}/>
        <Temperature name="c" onChange={this.handleTemperature} temperature={fahrenheit}/>
        <Result temperature={this.state.temperature}/>
      </div>
    )
  }
}

export default Calculator;