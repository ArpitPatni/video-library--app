import { createContext,useContext,useReducer} from "react";
import { reducerFunc } from "../Reducer/CategoryReducer";
const categoryContext=createContext();

const CategoryProvider=({children})=>{
    const[state,dispatch]=useReducer(reducerFunc,{categoryData:[]})
return(<categoryContext.Provider value={{state,dispatch}}>{children}</categoryContext.Provider>)
}
const useCategory=()=>useContext(categoryContext);

export {useCategory,CategoryProvider}