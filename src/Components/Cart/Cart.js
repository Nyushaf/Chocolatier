import { useSelector } from "react-redux";
import CartItem from "./CartItems";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return (
        <div>
            <div>
                {cartItems.map((cartItem, index) => <CartItem key = {index} cartItem = {cartItem}/>)}
            </div>
            <br />
            <div className="center">
                <h3 className="total-style">TOTAL: $ {totalPrice}</h3>
            </div>
        </div>
    )
}
export default Cart;