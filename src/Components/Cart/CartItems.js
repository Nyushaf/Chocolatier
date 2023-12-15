import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import dataItems from "../../data/dataItems";
import basket from './delete.png';

const CartItem = ({cartItem}) => {
    const items = dataItems.find((item) => item.id === cartItem.itemId)
    const dispatch = useDispatch();
    const cartItemId = cartItem.id;
    return (
        <div>
            <p className="cartItem"><span><b>{items.name}</b></span>  {cartItem.quantity} pc(s) - <b>  $ {items.price * cartItem.quantity}</b> <span onClick={() => dispatch(removeItemFromCart({cartItemId}))}><img className="icon" src={basket} alt="delete"/> </span></p>
        </div>
    )
}
export default CartItem;