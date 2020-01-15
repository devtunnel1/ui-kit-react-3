import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '@material-ui/core/Button';
import ButtonComponentV1 from './ButtonComponentV1'

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <ButtonComponentV1 onClick={action('clicked')} />;

// export const Emoji = () => (
//   <Button variant='contained' color='default' onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
