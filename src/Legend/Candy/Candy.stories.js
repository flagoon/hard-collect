import * as React from 'react';

import { storiesOf } from '@storybook/react';
import Candy from './Candy';
import { wInfo } from '../../../utils';

storiesOf('Components/Candy', module).addWithJSX(
    'Candy',
    wInfo(`

  ### Notes

  This is a Candy visualisation

  ### Usage
  ~~~js
  <Candy />
  ~~~`)(() => <Candy />)
);
