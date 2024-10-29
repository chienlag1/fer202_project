
import './App.css';
import WishList from './pages/WishList';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/wishlist" element={<WishList/>} /> 
                <Route path="/cart" element={<Cart/>} /> 
               
                
            </Routes>
        </BrowserRouter>  
      
      
    </div>
  );
}

export default App;
