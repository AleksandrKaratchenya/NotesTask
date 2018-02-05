import React from 'react'

import { storiesOf } from '@storybook/react'
//import { withInfo } from '@storybook/addon-info'

import Notes from '../components/Notes'
storiesOf('Note', module)
  .add('Notess', () => (<Notes/>));