import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

class ButtonComponentV1 extends Component {
  render () {
    const {
      label,
      variant,
      onClick,
      color,
      disabled
    } = this.props
    return (
      <Button
        variant={variant}
        color={color}
        onClick={onClick}
        disabled={disabled}
        disableElevation
      >
        {label}
      </Button>
    )
  }
}

ButtonComponentV1.propTypes = {
  label: PropTypes.string.isRequired
}

export default ButtonComponentV1
