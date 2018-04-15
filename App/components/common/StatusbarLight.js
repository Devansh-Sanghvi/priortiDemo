import React, { Component } from 'react';
import {StatusBar} from 'react-native';

class StatusbarLight extends Component {
  render = () => {
    return (
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent" />
    );
  }
}
export {StatusbarLight};
