import { combineReducers } from 'redux';
import BarcodeScannerReducer from './BarcodeScannerReducer';
import ProductListReducer from './ProductListReducer';

export default combineReducers({

barcodeScnanner:BarcodeScannerReducer,
products:ProductListReducer,


});
