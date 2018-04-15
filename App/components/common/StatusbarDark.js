import React, { Component } from 'react';
import {StatusBar,View} from 'react-native';

class StatusbarDark extends Component {
  render = () => {
    return (

      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="transparent"
        animated={true}
        hidden={false}

          />

    );
  }
}
export  {StatusbarDark};
