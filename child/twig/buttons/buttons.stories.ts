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
  text: 'Child - Learn More',
};
const buttonMobile = () => Button(buttonMobileValues);

storiesOf('Atoms/Buttons', module)
  .add('Child Button', withWrapper(genericButton))
  .add('Child Button: Mobile', withDarkWrapper(buttonMobile));
