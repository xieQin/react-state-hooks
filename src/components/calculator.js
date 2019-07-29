import React from 'react';
import Temperature from './temperature';
import Result from './result';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      temperature: '',
      name: 'c'
    }
    this.handleTemperature = this.handleTemperature.bind(this)
  }

  handleTemperature (temperature, name) {
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