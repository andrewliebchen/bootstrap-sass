import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from '../components/Button';

storiesOf('Button', module)
  .add('Default', () => (
    <Button>Default</Button>
  ))
  .add('Primary', () => (
    // Provides extra visual weight and identifies the primary action in a set of buttons
    <Button bsStyle="primary">Primary</Button>
  ))
  .add('Success', () => (
    // Indicates a successful or positive action
    <Button bsStyle="success">Success</Button>
  ))
  .add('Info', () => (
    // Contextual button for informational alert messages
    <Button bsStyle="info">Info</Button>
  ))
  .add('Warning', () => (
    // Indicates caution should be taken with this action
    <Button bsStyle="warning">Warning</Button>
  ))
  .add('Danger', () => (
    // Indicates a dangerous or potentially negative action
    <Button bsStyle="danger">Danger</Button>
  ))
  .add('Link', () => (
    // Deemphasize a button by making it look like a link while maintaining button behavior
    <Button bsStyle="link">Link</Button>
  ));
