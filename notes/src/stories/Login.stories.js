import React from 'react'

import { storiesOf } from '@storybook/react'
//import { withInfo } from '@storybook/addon-info'

import LoginComp from '../components/Login'

storiesOf('Login', module)
  .add('Log', () => (<LoginComp/>));