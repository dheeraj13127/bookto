import {GET_BOOKTOCONTRACT} from '../constants/constants'
const initState={
    booktoContract:null
}


export const rootReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_BOOKTOCONTRACT:{
            return Object.assign({},state,{
                booktoContract:action.payload
            })
        }
        default:{
            return state
        }


    }
}