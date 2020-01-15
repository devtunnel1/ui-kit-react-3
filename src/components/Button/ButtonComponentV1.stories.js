import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select } from '@storybook/addon-knobs'
import ButtonComponentV1 from './ButtonComponentV1'

export default {
  title: 'ButtonComponentV1',
  component: ButtonComponentV1
}

export const ContainedDefault = () => (
  <ButtonComponentV1
    label='Default'
    variant='contained'
    onClick={action('clicked')}
    color={select('Color', ['default', 'primary', 'secondary'])}
  />
)

ContainedDefault.story = {
  decorators: [withKnobs]
}

export const ContainedDisabled = () => (
  <ButtonComponentV1
    label='Disabled'
    variant='contained'
    disabled={true}
  />
)

ContainedDisabled.story = {
  decorators: [withKnobs]
}
