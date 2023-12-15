import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Item = ({item}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        
        <div className="each-item">
            <img src={`./${item.img}.jpg`} alt="dish"/>
            <h3>{item.name} </h3>
            <p>{item.quantity}</p>
            <h3>$ {item.price}</h3>
            <div className="container-quantity">
                <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity}/>
            </div>
            
            <button className="btn-add" onClick={() => {dispatch(addItemToCart({item, quantity}));
        }}>Add to cart</button>

        </div>
    )
}
export default Item;