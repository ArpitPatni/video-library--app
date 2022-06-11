import React,{useEffect} from 'react'
import { useCategory } from '../../Context/CategoryContext'
import axios from 'axios';
import "./CategoryList.css"
import { useFilter } from '../../Context/FilterContext';
import { Link } from 'react-router-dom';

const CategoryList = () => {

    const { state, dispatch } = useCategory();
    const {FilterDispatch}=useFilter();
    useEffect(() => {
        (async () => {
          try {
            const response = await axios.get("/api/categories");
            dispatch({ type: "SAVE_DATA", payload: response.data.categories });
          } catch (error) {
            <div class="alert-items alert-danger ">
              <i class="fas fa-exclamation-triangle alert-icon"></i>
              Could Not Load Data
            </div>;
          }
        })();
      }, [dispatch]);
  return (
    <div className='filterbar'>
      <Link to="/">
       <div className="itemName" onClick={() =>
            FilterDispatch({ type: "Clear_Filter"})
          } >All</div></Link> 
       {state.categoryData.map((item) => {
        return (
          <Link
          to="/"
          onClick={() =>
            FilterDispatch({ type: "CATEGORY", payload: item.categoryName })
          }
        >
          <div className="itemName" key={item._id}>
            {item.categoryName}
          </div>
        </Link>
          
        );
      })}
    </div>
  )
}

export default CategoryList