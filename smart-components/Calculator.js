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
			secondValue: null,
			resultValue: null
		})
	}

//------------------------------------------------------------------------------
// User Defined Function
//------------------------------------------------------------------------------

	handleChange(event) {
		this.setState({ [event.target.name] :event.target.value})
	}

	handleClick() {
		const first = this.state.firstValue
		const second = this.state.secondValue
		const resultValue = parseInt(first) + parseInt(second)
		this.setState({ resultValue })
	}

	render() {
		const { firstValue, secondValue, resultValue } = this.state;
		return (
			<div> 
				<UnitSelector
					name="firstValue"
					value={ firstValue }
					onClick={ this.handleClick }
					onChange={ this.handleChange }
				/>
				<UnitSelector 
					name="secondValue"
					value={ secondValue }
					onClick={ this.handleClick }
					onChange={ this.handleChange }
				/>
				<Input 
					value={ resultValue }
				/>
			</div>
		)
	}
}