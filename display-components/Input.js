import React, { Component, PropTypes } from 'react';

const propTypes = { 
	value: PropTypes.number,
	onChange: PropTypes.func,
	name: PropTypes.string.isRequired
};
const defaultProps = {  };

export default class Input extends Component {
	render() {
		const { value, onChange, name } = this.props;
		return (
			<div
				style={{
					margin: 3
				}}
			>
				<input 
					name={ name }
					value={ value } 
					onChange={ onChange }
				/>
			</div>
		)	
	}
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;