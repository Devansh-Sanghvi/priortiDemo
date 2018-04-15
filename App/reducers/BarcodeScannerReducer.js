import  {FETCH_PRODUCT_DETAILS,FETCH_PRODUCT_DETAILS_SUCCESS} from '../actions/types'


const INITIAL_STATE={
loading:false,

};

export default (state = INITIAL_STATE, action) => {
  
switch (action.type) {

case FETCH_PRODUCT_DETAILS:
return {...state,loading:true}

case FETCH_PRODUCT_DETAILS_SUCCESS:
return {...state,loading:false}

default:
return state;
}


    }
