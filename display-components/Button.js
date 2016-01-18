import React, { Component, PropTypes } from 'react'

const propTypes = {
	name: PropTypes.any,
	onMouseOver: PropTypes.func,
	selected: PropTypes.bool
}

const defaultProps = {
	selected: false
}

export default class Button extends Component {
	render() {
		const { selected, onClick, onSelect, onMouseOver, name } = this.props
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
				onClick={ onClick }
				onSelect={ onClick }
			>
				{ name }
			</div>
		)
	}
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps