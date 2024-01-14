import React from 'react'


const ProductReducer = (state,action) => {

    switch (action.type) {
        case "LOADING_API":
            return{
                ...state,
                isLoading:true,

            }
        case "GET_MY_PRODUCT":
            // action.payload=all product to filter kark nikal rahe ahi featured===true (from api)
            const featuredata=action.payload.filter((curele)=>{    
                return curele.featured===true;
            })
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featuredProduct:featuredata

            }
        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true
            } 
           
        case "LOADING_SINPRO":
            return{
                  ...state,
                  isSingleLoading:true,
    
                }  
        case "GET__SPRODUCT":
            return{
                  ...state,
                  singleProduct:action.payload,
    
                } 
        case "SINPRO_ERROR":
            return{
                  ...state,
                  isSingleLoading:false,
                  isError:true,
    
                }    
          
    
        default:
            return{
                state
            }
    }
 
}

export default ProductReducer