import React,{Component} from 'react';
import { Scene, Router, Actions, Modal,Overlay, Stack,ActionConst} from 'react-native-router-flux';
import ProductList from './components/Product/ProductList';
import BarcodeScanner from './components/Product/BarcodeScanner';
import {IMAGE_ICON_ADD} from './images';
import { connect } from 'react-redux';
import {setInitialState} from './actions'
import {Spinner} from './components/common'


class RouterComponent extends Component {



  onBackFunction()
{
    Actions.pop();
    this.props.setInitialState();
}

  render() {

  return (

<Router>
<Scene key='root'>
<Scene key="productList"  initial={true} component={ProductList} onRight={()=>{Actions.barcodeScnanner()}} rightButtonImage={IMAGE_ICON_ADD} title={'Products'} navTransparent="true"/>
<Scene key="barcodeScnanner" component={BarcodeScanner}  onBack={this.onBackFunction} hideNavBar={true} navTransparent="true"/>
</Scene>
</Router>
  )
}
}




export default connect(null,{setInitialState})(RouterComponent);
