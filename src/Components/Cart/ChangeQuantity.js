const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity = () => {
        setQuantity(quantity + 1);
    }

    const removeQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="btn-change-quantity">
            <button onClick={removeQuantity} className="btn-quantity">- </button>
            <span className="btn-quantity"> {quantity} </span>
            <button onClick={addQuantity} className="btn-quantity"> +</button>
        </div>
            
    )
}
export default ChangeQuantity;