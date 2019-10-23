import { storiesOf } from '@storybook/html';
import { withWrapper, withDarkWrapper } from '../utilities';
import '../../styles';

import Button from './button.twig';

// ======================================================================
// Buttons
// ======================================================================

const genericButton = () => Button({ class: 'button', text: 'Learn More' });

const buttonMobileValues = {
  class: 'buttonBase buttonMobile',
  text: 'Parent - Learn More',
};
const buttonMobile = () => Button(buttonMobileValues);

storiesOf('Atoms/Buttons', module)
  .add('Parent Button', withWrapper(genericButton))
  .add('Parent Button: Mobile', withDarkWrapper(buttonMobile));
