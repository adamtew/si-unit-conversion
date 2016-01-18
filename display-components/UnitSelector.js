import React, { Component, PropTypes } from 'react';
import Button from './Button';
import Input from './Input';

const propTypes = {  
	onClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.number,
	name: PropTypes.string.isRequired
};
const defaultProps = {  };

export default class UnitSelector extends Component {
	render() {
		const { value, onChange, onClick, name } = this.props;
		const buttons = ['P','T','G','M','k','d','c','m', 'mu','n','p','f','a','z'].map((item, index) => {
			return <Button name={ item } onClick={ onClick } />
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