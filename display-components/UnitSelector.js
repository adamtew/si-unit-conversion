import React, { Component, PropTypes } from 'react';
import Button from './Button';
import Input from './Input';

const propTypes = {  
	onClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.number,
	name: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired
};
const defaultProps = {  };

export default class UnitSelector extends Component {
	render() {
		const { value, onChange, onClick, name } = this.props;
		const buttons = [
			{name: 'p', value: 10000000000000000 }, 		// Peta - 10^12
			{name: 'T', value: 10000000000000 },				// Tera - 10^12
			{name: 'G', value: 10000000 },							// Giga - 10^9
			{name: 'M', value: 100000 },								// Mega - 10^6
			{name: 'k', value: 10000 },									// Kilo - 10^3
			{name: 'd', value: 1.0 },										// Deci - 10^-1
			{name: 'c', value: .10 },										// Centi - 10^-2
			{name: 'm', value: .010 },									// Milli - 10^-3
		 	{name: 'mu', value: .000010 },							// Micro - 10^-6
		 	{name: 'n', value: .000000010 },						// Nano - 10^-9
			{name: 'p', value: .000000000010 },					// Pico - 10^-12
			{name: 'f', value: .000000000000010 },			// Femto - 10^-15
			{name: 'a', value: .000000000000000010 },		// Atto - 10^-18
			{name: 'z', value: .000000000000000000010 }	// Zepto - 10^-21
		].map((item, index) => {
			const { name, value } = item;
			return <Button name={ name } value={ value } onClick={ onClick } position={ this.props.position } />
		})
		return (
			<div 
				style={{
					float: 'left',
					backgroundColor: 'silver',
					width: 150,
					padding: 10,
					margin: 5
			 	}}
			>
				<Input 
					name={ name }
					value={ value }
					onChange={ onChange }
				/>
				{ buttons }
			</div>
		)
	}
}

UnitSelector.propTypes = propTypes;
UnitSelector.defaultProps = defaultProps;