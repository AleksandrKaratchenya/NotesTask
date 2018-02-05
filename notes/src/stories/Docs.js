import React, { Component } from 'react';
import PropTypes from 'prop-types'

/** A dumb component that says "hello" */
//export 

class Docs extends Component {
	render(){
		return (
			<div>Hello {this.props.name}</div>
			)
	}
	}

/*
	({name}) => (<div>Hello {name}</div>)

Docs.propTypes = {
  name: PropTypes.string
}

Docs.defaultProps = {
  name: 'World'
}*/

export default Docs;