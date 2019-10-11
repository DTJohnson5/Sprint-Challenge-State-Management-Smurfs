import axios from 'axios';
export const FETCH_SMURF_START ='FETCH_SMURF'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR'

export const NEW_SMURF ='ADD_SMURF'
export const NEW_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const NEW_SMURF_FAILURE = 'ADD_SMURF_FAILURE'

export const fetchSmurfs = ()=>{
  const promise = axios.get ('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({type: FETCH_SMURF_START});
    promise
    .then(res=> {
      dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log(err);
      dispatch({type:FETCH_SMURF_ERROR});
    })
  }
}
export const addSmurf = newSmurf => dispatch =>{
  dispatch({type: NEW_SMURF})
    console.log(newSmurf)
 axios.post('http://localhost:3333/smurfs', newSmurf)
 .then(res =>{
   dispatch({type: NEW_SMURF_SUCCESS, payload: res.data})
 })
 .catch(err => {
   dispatch({ type: NEW_SMURF_FAILURE, payload: err})
 })

  }