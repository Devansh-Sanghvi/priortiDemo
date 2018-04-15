
// Below Action Creators are basically function that dispatches an action to the reducer.
import {FETCH_PRODUCTLIST_SUCCESS,
 FETCH_PRODUCTLIST,
 FETCH_PRODUCTLIST_FAIL,
 FETCH_PRODUCT_DETAILS,
 FETCH_PRODUCT_DETAILS_SUCCESS,
 FETCH_PRODUCT_DETAILS_FAIL
} from './types'
import Api from '../lib/api';
import {URL_PRODUCT_LIST,URL_PRODUCT_DETAIL} from '../config';
import storage from '../storage'




export const fetchProductList=()=>{

// Api request for fetching the list of products
return(dispatch)=>{
   obj=storage.getAllProducts();
        if(obj){
              dispatch({
               type:FETCH_PRODUCTLIST_SUCCESS,
               payload:obj
              })
              }

        else
        {

           dispatch({
           type:FETCH_PRODUCTLIST_SUCCESS,
           payload:[]
              })
        }
}


  }










export const fetchProductDetails=(code)=>{
  return(dispatch)=>{
    dispatch({
           type:FETCH_PRODUCT_DETAILS

             })
     url='https://api.upcdatabase.org/product/'+code+'/01AD1B72C245ACCC4EEB19AA9B12EE43';
     console.log(url);


    Api.get(url).then(response => {
if(response.status == 200){
          storage.createProduct(response.title,response.description,response.upcnumber,'');
          if(response)
          {
            dispatch({
            type:FETCH_PRODUCT_DETAILS_SUCCESS,
            payload:response
            })

          }

          else
          {
          dispatch({
          type:FETCH_PRODUCT_DETAILS_SUCCESS,
          payload:{}
          })

          }
          }
          else{

              dispatch({
                type:FETCH_PRODUCT_DETAILS_FAIL
              })
            }
          })
    .catch(error=>{

        dispatch({
          type:FETCH_PRODUCT_DETAILS_FAIL
        })
      });

  }
}
