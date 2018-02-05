import React from 'react';
import PropTypes from 'prop-types'
import './Name.css';

 export const Name = (props) => (
  <div className={'name ' + (props.type ? props.type : '')}>{props.name}</div>
)

Name.propTypes = {
  type: PropTypes.string,
}

export default Name;