import React,{Component} from 'react';
import{
StyleSheet,
View,
Text,
Image,
TouchableOpacity
} from 'react-native'
import moment from 'moment'
import { Actions } from 'react-native-router-flux';

class ProductListItem extends Component {


render()
{


  const{

  imageViewStyle,
  rowViewStyle,
  textContainerStyle,
  textStyle,
  }=styles;

 const {product}=this.props;
 console.error(product);
  return(
  <View style={rowViewStyle}>
  <View style={textContainerStyle} >
  <Text style={[textStyle,{fontWeight:'bold'}]} numberOfLines={1}>UPC Number:{product.barcodeNumber} </Text>
  <Text style={textStyle} >Product Information:{product.title}</Text>
  <Text style={textStyle} numberOfLines={1}>Description:{product.description}</Text>
  </View>
  </View>
  )

}


}





var styles = StyleSheet.create({


  rowViewStyle:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:160,

  },

  imageViewStyle:{
    flex:0.4,
    height:130,
  },

  textContainerStyle:{
    flex:0.6,
    justifyContent:'space-around',
    flexDirection:'column',
    height:160,
    padding:5
  },



  textStyle:
  {
    fontSize:12,

  },





});




export default ProductListItem;
