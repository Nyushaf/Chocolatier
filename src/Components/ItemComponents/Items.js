import { useSelector } from "react-redux";
import dataItems from "../../data/dataItems";
import Item from "./Item";
import { getSelectedCategory } from "../../redux/ItemsSlice";


const Items = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div className="container-items">
            {dataItems
            .filter(item => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === item.category;
            })
            .map(item => <Item key = {item.id} item = {item}/>)}
        </div>
    )
}

export default Items;