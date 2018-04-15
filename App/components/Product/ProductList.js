import React,{Component} from 'react'
import{
StyleSheet,
View,
Text,
ListView,
Image,
TouchableOpacity,
DatePickerIOS,
DatePickerAndroid,
Modal,
Platform,
AsyncStorage
} from 'react-native';
import ProductListItem from './ProductListItem';
import {connect} from 'react-redux';
import {fetchProductList} from '../../actions';
import reducers from '../../reducers';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import {StatusbarDark ,Spinner} from '../common';


class ProductList extends Component {


constructor(props)
{
    super(props);

 }

componentWillMount()
{


  this.props.fetchProductList();
  const ds = new ListView.DataSource({rowHasChanged: (r2, r1) => r1 !== r2});
  this.dataSource=ds.cloneWithRows({});


}


componentWillReceiveProps(nextProps)
{



    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource=ds.cloneWithRows(nextProps.productList);




 }




renderRow(product)
{

return <ProductListItem product={product} />;

}


renderList()

{
const {separator,emptyText,emptyViewContainer}=styles;
const {loading}=this.props;

 if(this.dataSource.getRowCount() > 0)
{
 console.error(this.dataSource.getRowCount());

return   (<ListView enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    renderSeparator={(rowId) => <View key={rowId} style={separator}  />}
                    style={{paddingBottom:10}}/>)

}

else {
  return(<View style={emptyViewContainer}><Text style={emptyText}>There are no products added</Text></View>)


   }








}



  render()

  {

    const {superViewContainer}=styles;

return (
  <View style={superViewContainer}>
       <StatusbarDark/>
       {this.renderList()}
   </View>

    )
    }


}


var styles = StyleSheet.create({


superViewContainer:{
flex:1,
backgroundColor:'#FFFFFF',
paddingTop:65

},
emptyViewContainer:{
flex:1,
justifyContent:'center',
alignItems:'center'
},
emptyText:{
color:'#C7C7CD',
fontSize:14,
backgroundColor:'transparent',
alignSelf:'center',
alignContent:'center',
top:-20,
textAlign:'center',
padding:20
},

separator: {
flex: 1,
height: StyleSheet.hairlineWidth,
backgroundColor: '#8E8E8E',
marginLeft: 10,
  },
})





const mapStateToProps = ({products}) => {
  const { productList,loading } = products;
  return {productList,loading};
};






export default connect(mapStateToProps,{fetchProductList})(ProductList);
