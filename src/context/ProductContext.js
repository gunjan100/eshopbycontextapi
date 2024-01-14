// create a context
// Provider
// consumer =>useContext hook  
// in value attribute we are passing data


import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/ProductReducer'

const AppContext =createContext();  // create a context
const API ="https://api.pujakaitem.com/api/products";

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featuredProduct:[],
    isSingleLoading:true,
    singleProduct:{}
}

const AppProvider=({children})=>{  // Provider
    const[state, dispatch] = useReducer(reducer,initialState)
   
    const getProduct = async (url)=>{
        dispatch({type:"LOADING_API"})
       try {
         const res =await axios.get(url)
         const product =await res.data
         dispatch({type:"GET_MY_PRODUCT", payload:product})
       } catch (error) {
        dispatch({type:"API_ERROR"})
        
       }

    }

    const getSingleProduct=async(url)=>{
        dispatch({type:"LOADING_SINPRO"})
       try {
         const res = await axios.get(url)
         const sproduct= await res.data
         dispatch({type:"GET__SPRODUCT", payload:sproduct})
       } catch (error) {
        dispatch({type:"SINPRO_ERROR"})
       }


    }

    useEffect(()=>{
        getProduct(API)
    },[])

    return <AppContext.Provider value={{...state, getSingleProduct}}>
        {children}
        </AppContext.Provider>

}

export {AppContext, AppProvider}