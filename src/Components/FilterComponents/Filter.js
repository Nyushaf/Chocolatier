import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/ItemsSlice";

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);

    return(
        <div>
            <p onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'selectedCategoryBTN category' : 'category'}>{category}</p>
        </div>
    )
}

export default Filter;