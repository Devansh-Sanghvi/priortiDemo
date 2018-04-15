import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {Spinner,StatusbarDark} from '../common'
var TEXT_INPUT_REF = 'urlInput';
import moment from 'moment';
import {fetchProductDetails,fetchProductList} from '../../actions';
import Camera from 'react-native-camera';

class BarcodeScanner extends Component
{

constructor(props)
  {

       super(props);

  }



// this function is called when first the camera reads the barcode
onBarCodeRead = (e) =>
{

  this.props.fetchProductDetails(e.data)
  Actions.pop();
  this.props.fetchProductList()

}


  render()
  {



   return (

<Camera
 onBarCodeRead={this.onBarCodeRead}
 style={{flex:1}}
 ref={cam => this.Camera = cam}
 aspect={Camera.constants.Aspect.fill}
   />

   );
  }



 }





 export default connect(null,{fetchProductDetails,fetchProductList}) (BarcodeScanner);
