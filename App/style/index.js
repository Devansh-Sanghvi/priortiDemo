'use strict';
import {StatusBar,Platform} from 'react-native'
import {THEME_COLOR} from '../config'
var React = require('react-native');
var {
  StyleSheet,
  Dimensions
} = React;

let ScreenHeight = Dimensions.get("window").height ;
let ScreenWidth = Dimensions.get("window").width;
module.exports = StyleSheet.create({

innerScreenContainer: {
    backgroundColor: 'white',

    ...Platform.select({
      ios: {
        paddingTop:67,
      },
      android: {
        paddingTop:80,
      }
    }),
    flex:1

},

modalContainer: {
    paddingTop:45,
    backgroundColor: 'white',
    height: ScreenHeight,
    width:ScreenWidth,
},
submitAbsenceScreenContainer: {
    backgroundColor: 'white',
    height: ScreenHeight,
    width:ScreenWidth,
},
centerText:{
   textAlign: 'center',
},
blackText:{
   color: 'black',
},
defaultPaddingAll:{
  padding:10,
},
defaultPaddingLR:{
  paddingLeft:10,
  paddingRight:10,
},
defaultPlainTextListItem:{
  backgroundColor: '#F5F5F5',
  height:50,
  justifyContent:'space-between',
  flexDirection:'row',
  alignSelf :'stretch',
  alignItems : 'center',
},
defaultPlainTextListItemFont:{
  fontFamily : 'HelveticaNeue-Light',
  fontWeight : '300',
  fontSize : 21,

},
transFullSeparator:{
  backgroundColor: '#FFFFFF',
  flex: 1,
  height: StyleSheet.hairlineWidth

},
whiteBackground:{
  backgroundColor: '#FFFFFF',

},
vCenter:{

},
defaultPlainTextListItemLeft:{
  flex:0.8,

},
defaultPlainTextListItemRight:{
  flex:0.2,


},
parentHeight:{
  //height:'100%',



},




rowViewStyle:{
  flexDirection:'row',
  justifyContent: 'center',
  alignItems: 'center',
  height:80,
  paddingLeft: 10,
  paddingRight: 10,
},
dateViewStyle:{
  borderRadius:60,
  height:60,
  width:60,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:THEME_COLOR,
  alignSelf:'center',
},
dateStyle:{
  backgroundColor:'transparent',
  color:'#FFFFFF',
  fontSize:32,
  fontWeight:'200',
  textAlign:'center',
  fontFamily:'HelveticaNeue-Light'
},
monthStyle:{
  backgroundColor:'transparent',
  color:'#FFFFFF',
  fontSize:16,
  top:-7,
  fontWeight:'300',
    fontFamily:'HelveticaNeue-Light',
  textAlign:'center'
},
scheduleContainerStyle:{
  flex:1,
  justifyContent:'center',
  left:10,
  right:100,
  flexDirection:'column',
},
eventNameStyle:
{
  fontSize:15,
  marginRight:15,
    fontWeight:'400',
  fontFamily:'HelveticaNeue-Light',
      color:'black'
},
timingStyle:{
  fontSize:12,
 fontFamily:'HelveticaNeue-Light',
fontWeight:'300',
right:-2,
color:'black'
},
arrowImageStyle:{
  alignSelf:'center',
  alignItems:'flex-end',
  height:20,
},
listingRightArrow:{
  width:10,
  height : 20,
},

listViewHeaderViewStyle:{
  justifyContent:'center',
  alignItems:'center',
  height:25,
  backgroundColor: '#F7F7F7'
},
listViewHeaderViewOfflineStyle:{
  justifyContent:'center',
  alignItems:'center',
  height:25,
  backgroundColor: '#FFC107'
},
listViewHeaderViewKamarStyle:{
  justifyContent:'center',
  alignItems:'center',
  height:25,
  backgroundColor: '#7ec0ee'
},
headerTextStyleOffline:{
  fontSize:12,
  fontWeight:'500',
   fontFamily:'HelveticaNeue-Light',
  color:'#ffffff'
},

headerTextStyle:{
  fontSize:10,
   fontFamily:'HelveticaNeue-Light',
},

separator: {
  flex: 1,
  height: StyleSheet.hairlineWidth,
  backgroundColor: '#8E8E8E',
  marginLeft: 10,
},

buttonImage:{
  width: 25,
  height: 25
},
iconButtonContainer:{
  flexDirection:'row',
  alignItems : 'center',
  zIndex:10
},
iconButtonText:{
  marginLeft : 5,
},
alertToggleButton:{
  width: 130,
},
buttonContainer:{
  alignItems : 'center',
  flexDirection:'column',
  zIndex:-1
},
defaultBadgeStyle:{
  backgroundColor: '#D9251D',
},
dashboardBadges:{
  position:'absolute',
  right:15,
  top:5,
  zIndex:1
},
setupAlertHeader:{
  height:95,
},
setupAlertHeaderHeading:{
  fontSize: 24,
  textAlign:'center',
  backgroundColor:'transparent',
  fontFamily : 'HelveticaNeue-Light',
  fontWeight : '400'
},
setupAlertHeaderSubHeading:{
  fontSize: 14,
  textAlign:'center',
  paddingLeft:10,
  paddingRight:10,
  backgroundColor:'transparent',
  marginTop:10,
  fontFamily : 'HelveticaNeue-Light',
},
setupAlertBody:{
  flex:1
},
setupAlertBodyText:{
  fontSize: 14,
  textAlign:'center',
  paddingLeft:25,
  paddingRight:25,
  backgroundColor:'transparent',
  marginTop:25,
  fontFamily : 'HelveticaNeue-Light',
},
setupAlertButtonContainer:{
  marginTop:60,
  justifyContent: 'center',
  alignItems: 'center'
},
setupAlertButton:{
  width:164,
  height: 49,
  ...Platform.select({

    android: {
      bottom:20,
    }
  }),
},
setupAlertButtonImage:{
  height: 49,
  width:164,
},
setupAlertSSLogoImage:{
  height: 19,
  width:150,
  marginBottom:20,


},

setupAlertButtonText:{
  position: 'absolute',
  left: 0,
  right: 0,
  top:12,
  backgroundColor:'transparent',
  fontFamily : 'HelveticaNeue-Light',
  fontSize: 20,
  fontWeight : '500',
  color:'#545454',
  textAlign:'center',
},
setupAlertFooter:{
  justifyContent: 'center',
  alignItems: 'center'
},
disabledInputContainer:{
  opacity: 0.3
},

searchByDateViewStyle:{
  flexDirection:'row',
  alignSelf:'stretch',
  alignContent:'center',
  alignItems:'center',
  justifyContent:'space-around',
  height:45,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderTopWidth: StyleSheet.hairlineWidth,
},

searchButtonStyle:
{
borderRadius:5,
borderWidth:0.5,
width:105,
flexDirection:'row',
justifyContent:'center',
height:30,
alignItems:'center',

},

downArrowStyle:{
  height:8,
  width:15,
  alignSelf:'center',
  right:-2,
  top:1
},
searchButtonTextStyle:{
fontSize:9.5,

  padding:5,
  backgroundColor:'transparent'
  ,fontFamily:'HelveticaNeue-Light',
      color:'black',
      alignSelf:'center'
},

datePickerIOSBackDropViewStyle:{
backgroundColor:'transparent',
flex:1,
justifyContent:'flex-end'
},

datePickerIOSContainerStyle:
{
backgroundColor:'white',
...Platform.select({

  android: {
    flex:0.4,
  }
}),
},

datePickerIOSToolBarView:{
alignSelf:'stretch',
flexDirection:'row',
justifyContent:'space-between',
backgroundColor:'#D3D3D3',



},
datePickerIOSToolBarButtonTextStyle:{
fontSize:18,
color:THEME_COLOR,
fontWeight:'700',
padding:7
},



invalidField:{
  borderColor: 'red',
},

inavalidIcon:
{
tintColor:'red'

},
scheduleViewStyle:{
  alignSelf:'stretch',
  backgroundColor:THEME_COLOR,
  flexDirection:'row',
  justifyContent:'space-around',
  paddingBottom:10,
  paddingTop:10

},
dateViewStyle1:{
  flex:20,
  flexDirection:'column',
  justifyContent: 'center',
  alignSelf:'stretch',
},
dateTextStyle:{
  alignSelf:'center',
  color:'#FFFFFF',
  fontSize:35,
  fontWeight:'200',
   fontFamily:'HelveticaNeue-Light',
  textAlign:'left'
},
monthTextStyle:{
  alignSelf:'center',
  color:'#FFFFFF',
  fontSize:15,
  fontWeight:'300',
  fontFamily:'HelveticaNeue-Light',
  textAlign:'right',

},
nameViewStyle:{
  flex:60,
  flexDirection:'column',
  alignSelf:'stretch',
  justifyContent:'center',

},
nameTextStyle:{
  alignSelf:'center',
  color:'#FFFFFF',
  fontSize:23,
  fontWeight:'300',
  fontFamily:'HelveticaNeue-Light',
  textAlign:'center'
},
timingsTextStyle:{
  alignSelf:'center',
  color:'#FFFFFF',
  fontSize:12,
  fontWeight:'400',
   fontFamily:'HelveticaNeue-Light',
  textAlign:'center'
},

descruptionWithBorder:{
  margin:25,
  padding : 5,
  borderRadius: 8,
  borderWidth: 0.8,
  borderColor: '#000000',
  color:'black'
},
footerTicker:{
  height:25,
  backgroundColor:'#F7F7F7',
  justifyContent:'center',
  alignItems:'center',
},
tickerText:{
  fontSize:10,

  fontFamily:'HelveticaNeue-Light',
},
sendButtonStyle:{
  backgroundColor:THEME_COLOR,
  height:40,
  alignItems:'center',
  justifyContent:'center',
  alignSelf:'stretch'
},
sendButtonTextStyle:{
color:'#FFFFFF',
fontSize:20,
},


});
