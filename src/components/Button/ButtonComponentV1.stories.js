import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select } from '@storybook/addon-knobs'
import ButtonComponentV1 from './ButtonComponentV1'

export default {
  title: 'ButtonComponentV1',
  component: ButtonComponentV1
}

export const ContainedButton = () => (
  <ButtonComponentV1
    label='Contained'
    variant='contained'
    onClick={action('clicked')}
    color={select('Color', ['default', 'primary', 'secondary'])}
  />
)

ContainedButton.story = {
  decorators: [withKnobs]
}

export const ContainedDisabledButton = () => (
  <ButtonComponentV1
    label='Contained Disabled'
    variant='contained'
    disabled={true}
  />
)

ContainedDisabledButton.story = {
  decorators: [withKnobs]
}
