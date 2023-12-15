import './style.css';
import cross from './cross.png';
import Cart from '../Cart/Cart';

const Content = ({setIsOpen}) => {
    return(
        <div className="modal_content">
            <img onClick = {() => setIsOpen(false)} className='close-modal-btn' src={cross} alt="cross" />
            <div>
                <h2 className='header'>Your cart</h2>
            </div>
            <br />
            <div>
                <Cart/>
            </div>
            <br />
            <button className='modal-btn' onClick = {() => setIsOpen(false)}>Continue shopping</button>
        </div>
    )
}
export default Content;