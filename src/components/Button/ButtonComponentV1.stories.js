import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select } from '@storybook/addon-knobs'
import ButtonComponentV1 from './ButtonComponentV1'

export default {
  title: 'Button',
  component: ButtonComponentV1
}

export const Text = () => (
  <ButtonComponentV1
    label='This is a test yo'
    onClick={action('clicked')}
    color={select('Color', ['default', 'primary', 'secondary'])}
  />
)

Text.story = {
  decorators: [withKnobs]
}
