import React from 'react'

import { storiesOf } from '@storybook/react'
//import { withInfo } from '@storybook/addon-info'

import Register from '../components/Register'

storiesOf('Register', module)
  .add('with', () => (<Register/>));