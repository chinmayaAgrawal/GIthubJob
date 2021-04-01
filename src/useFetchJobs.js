// HOOK for the GitHub job API 

import { useReducer, useEffect } from 'react'
import axios from 'axios'


//type of action that cap be performed
const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error',
}

const BASE_URL = ' https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json'
//https://api.allorigins.win/raw?url=/
function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.MAKE_REQUEST:
        return { loading: true, jobs: [] }
      case ACTIONS.GET_DATA:
        return { ...state, loading: false, jobs: action.payload.jobs }
      case ACTIONS.ERROR:
        return { ...state, loading: false, error: action.payload.error, jobs: [] }
        default:
            return state
    }

}

//the function takes two input parametes parmas- for location ,type,long/lat
//page -- for the page we are currently in
export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })
    //payload is date for the given type
    // dispatch({ type:int,payload:{x:3}});
   
    //whenever there is a change in either params or page we need to reload and so
    // useEffect is the react hook fot it
    
    useEffect(() => {
        //const cancelToken1 = axios.CancelToken.source()
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        axios.get(BASE_URL, {
            //covert the given data to markdown as specified in documentation
            params: { markdown: true, page: page, ...params },
            
    }).then(res => {
            //action for the received JSON res.data
            dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } }) 
    }).catch(e => {
            //for any error that can occur
            dispatch({ type: ACTIONS.ERROR, payload: { error: e } }) 
        })
    },[params,page])

    return state


    // passing the given static values is useless so we will be using
    //reducer
   /* return{
        jobs:[9,5,3],
        loading :false,
        error : true
    }*/


}