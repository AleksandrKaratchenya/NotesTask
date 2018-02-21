import React from 'react'

import { storiesOf } from '@storybook/react'
//import { withInfo } from '@storybook/addon-info'

import Docs from './Docs'

storiesOf('Docs', module)
  .add('with', () => (<Docs name='Ann'/>));

