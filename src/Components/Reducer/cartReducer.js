import addToCart from "../actions/index.jsx"
const initialValue=0
const changeNum = (state=initialValue,action)=>{

    if(action.type==="ADDTOCART"){
        return state+1
    }
    return state;
}

export default changeNum;