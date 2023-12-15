import { useState } from 'react';
import './App.css';
import AllCategories from './Components/FilterComponents/AllCategories';
import Items from './Components/ItemComponents/Items';
import background from './background.jpg';
import basket from './basket.png';
import Modal from './Components/Modal/Modal';
import Content from './Components/Modal/Content';
import { useSelector } from 'react-redux';
import { getTotalPrice } from './redux/cartSlice';


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className="App">
      
      <div className='icon-position' onClick = {() => setIsOpen(true)}>
        <img className='icon-style' src={basket} alt="basket" />
        <p className='cart-text'>${totalPrice}</p>
      </div>
      {isOpen && 
      <Modal setIsOpen = {setIsOpen}>
        <Content setIsOpen = {setIsOpen} />
      </Modal>
      }

      <div className='header'>
        <h1>Chocolatier</h1>
      </div>

      <div className='image'>
        <img className='background-img' src={background} alt="background" />
        <h2 className='text'>Savor the moment...</h2>
      </div>

      <div>
        <AllCategories/>
      </div>
      <br />

      <div className='display-container-items'>
        <Items/>
      </div>
      
    </div>
  );
}

export default App;
