import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

class ButtonComponentV1 extends Component {
  render () {
    const {
      label,
      onClick,
      color
    } = this.props
    return (
      <Button variant='contained' color={color} onClick={onClick}>
        {label}
      </Button>
    )
  }
}

ButtonComponentV1.propTypes = {
  title: PropTypes.string.isRequired
}

export default ButtonComponentV1
