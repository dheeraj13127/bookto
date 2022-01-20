import {CREATE_BOOK} from '../constants/constants'
import toast from 'react-hot-toast'
import {GET_BOOKTOCONTRACT} from '../constants/constants'
export const createNewBook = (payload,API,navigate) => async (dispatch, getState) => {
    toast("Will take few seconds!", {
        icon: "⏳",
      });
    API.post("booksapi","/books",{
        body:payload
    })
    .then(res=>{
        toast.success('Successfully created your book !')
        dispatch({
            type: CREATE_BOOK,
            payload: payload
          })
        setTimeout(()=>{
            navigate('/dashboard')
        },2000)
        
    })
    .catch(err=>console.log(err))
  
  }
  export const loadBooktoContract=(payload)=>async(dispatch,getState)=>{
    dispatch({
      type:GET_BOOKTOCONTRACT,
      payload:payload
    })
  }