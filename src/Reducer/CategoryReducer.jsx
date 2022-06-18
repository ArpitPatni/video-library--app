const reducerFunc=(state,action)=>{
    switch (action.type) {
        case "SAVE_DATA":
            return {...state,categoryData:action.payload}    
        default:
            return state;
    }

}

export {reducerFunc}