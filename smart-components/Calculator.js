import React, { Component, PropTypes } from 'react';
import Button from 'display-components/Button'
import UnitSelector from 'display-components/UnitSelector';
import Input from 'display-components/Input';

export default class Calculator extends Component {
	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

//------------------------------------------------------------------------------
// Lifecycle Events
//------------------------------------------------------------------------------

	componentWillMount() {
		this.setState({ 
			firstValue: null,
			firstUnitValue: null,
			secondValue: null,
			secondUnitValue: null,
			resultValue: null
		})
	}

//------------------------------------------------------------------------------
// User Defined Function
//------------------------------------------------------------------------------

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value})
	}

	handleClick(unitName, unitValue) {
		this.setState({ [unitName]: unitValue })

		console.log('unitName', unitName)
		console.log('value', unitValue)
		
		const { 
			firstValue, secondValue, firstUnitValue, secondUnitValue 
		} = this.state;

		const first = firstValue * firstUnitValue;
		const second = secondValue / secondUnitValue;
		const resultValue = parseFloat(first) * parseFloat(second)
		this.setState({ resultValue })
	}

//------------------------------------------------------------------------------
// Render
//------------------------------------------------------------------------------

	render() {
		const { firstValue, secondValue, resultValue } = this.state;
		return (
			<div> 
				<UnitSelector
					name="firstValue"
					value={ firstValue }
					onClick={ this.handleClick }
					onChange={ this.handleChange }
					position="firstUnitValue"
				/>
				<UnitSelector 
					name="secondValue"
					value={ secondValue }
					onClick={ this.handleClick }
					onChange={ this.handleChange }
					position="secondUnitValue"
				/>
				<Input 
					value={ resultValue }
				/>
			</div>
		)
	}
}