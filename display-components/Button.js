import React, { Component, PropTypes } from 'react'

const propTypes = {
	name: PropTypes.any,
	onMouseOver: PropTypes.func,
	selected: PropTypes.bool,
	value: PropTypes.number.isRequired,
	position: PropTypes.string.isRequired
}

const defaultProps = {
	selected: false
}

export default class Button extends Component {
	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const { onClick, value, name, position } = this.props;
		onClick(position, value)
	}

	render() {
		const { selected, onClick, onSelect, onMouseOver, name, value } = this.props
		return (
			<div 
				style={{ 
					height: 20, 
					width: 35, 
					float: 'left', 
					border: '1px solid silver',
					cursor: 'pointer',
					backgroundColor: selected ? 'silver' : 'white',
					textAlign: 'center',
					padding: 5
				}}
				onMouseOver={ onMouseOver }
				onClick={ this.handleClick }
				onSelect={ onClick }
			>
				{ name }
			</div>
		)
	}
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps