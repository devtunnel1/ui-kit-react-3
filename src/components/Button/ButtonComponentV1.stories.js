import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import ButtonComponentV1 from './ButtonComponentV1'

export default {
  title: 'Button',
  component: ButtonComponentV1
}

export const Primary = () => (
  <ButtonComponentV1
    label='Primary'
    variant='contained'
    onClick={action('clicked')}
    color='primary'
  />
)

Primary.story = {
  decorators: [withKnobs]
}

export const Secondary = () => (
  <ButtonComponentV1
    label='Secondary'
    variant='contained'
    onClick={action('clicked')}
    color='secondary'
  />
)

Secondary.story = {
  decorators: [withKnobs]
}

export const Disabled = () => (
  <ButtonComponentV1
    label='Disabled'
    variant='contained'
    color='primary'
    disabled
  />
)

Disabled.story = {
  decorators: [withKnobs]
}
