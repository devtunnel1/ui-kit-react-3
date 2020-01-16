import React from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: '#5845DB'
    },
    secondary: {
      main: '#F1F3F5'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '3px',
        fontWeight: 'normal',
        padding: '3px 16px'
      },
      contained: {
        '&$disabled': {
          backgroundColor: '#F1F3F5',
          color: '#A2A6AB'
        }
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#9D8EFF'
        }
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: '#DBDFE2'
        }
      }
    }
  }
})

function ButtonComponentV1 (props) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={props.variant}
        color={props.color}
        onClick={props.onClick}
        disabled={props.disabled}
        disableElevation
      >
        {props.label}
      </Button>
    </ThemeProvider>
  )
}

ButtonComponentV1.propTypes = {
  label: PropTypes.string.isRequired
}

export default ButtonComponentV1
