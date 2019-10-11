import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_ERROR,
    NEW_SMURF,
    NEW_SMURF_SUCCESS,
    NEW_SMURF_FAILURE,
} from '../actions/index'

  const initialState =     {
   smurfs: [  ],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null
 }

  const reducer = (state = initialState, action)=> {
      switch(action.type){
          case FETCH_SMURF_START: {
              return  Object.assign({}, state, { fetchingSmurfs: true });
          }
          case FETCH_SMURF_SUCCESS: {
              return Object.assign ({}, state, {
                 smurfs: [...state.smurfs, ...action.payload],
                 fetchingSmurfs: false
              });
              }

         case FETCH_SMURF_ERROR:{
             return Object.assign ({}, state, {
                 fetchingSmurfs:false,
                 error: 'ERROR fetching smurfs'
             });
            }

          case NEW_SMURF: 
            return  {
                ...state,
                fetchingSmurfs: false,
                addingSmurf: true,
                error: ''
            }

            case NEW_SMURF_SUCCESS: {
                return {
                    ...state,
                    smurfs: action.payload,
                    fetchingSmurfs:false,
                    addingSmurf: false,
                    error: ''
                } 
            }
            case NEW_SMURF_FAILURE:
       return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: action.payload,
      }
          default: return state
      }
  };

  export default reducer;