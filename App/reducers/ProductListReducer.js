import  { FETCH_PRODUCTLIST_SUCCESS,
 FETCH_PRODUCTLIST,
 FETCH_PRODUCTLIST_FAIL} from '../actions/types'


const INITIAL_STATE={
productList:[],
loading:false,
};


export default(state=INITIAL_STATE,action)=>{



switch(action.type){

case FETCH_PRODUCTLIST:
return{...state,loading:true}

case FETCH_PRODUCTLIST_FAIL:
return{...state,loading:false}

case FETCH_PRODUCTLIST_SUCCESS:

return{...state,productList:action.payload,loading:false}

default:
return state;



}





}
