import React, {useState} from 'react';
import './App.css';

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'

function App() {

  const [cart, setCart] = useState([]);

  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    {
      name: 'Football',
      cost:  599,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/6ad48ceea7864a70bc21aafd00ef2d02_9366/UCL_Finale_Istanbul_Mini_Football_White_FH7348_01_standard.jpg',
        
    },
    {
      name: 'Bicycle',
      cost:  7499,
      image: 'https://5.imimg.com/data5/YE/BP/ZT/SELLER-24782427/sports-racing-bicycles-500x500.jpg',
        
    },
  ]);

  const addToCart = (product) => {
    setCart([...cart, {...product} ]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  
  const getTotalSum = () => {
    return cart.reduce((sum, {cost} ) => sum + cost)
  };

  const renderProducts = () => (
    <div>
      <h1>Products</h1>
      <div className="products">
      {
        products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            
            <img src={product.image} alt={product.name} />
            <h4>Rs {product.cost}</h4>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
        }
      </div>
    </div>
  )

  const renderCart = () => (
    <div>
      <h1>Cart</h1>
     
      <div className="products">
      {
        cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            
            <img src={product.image} alt={product.name} />
            <h4>Rs {product.cost}</h4>
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))
        }
      </div>
      <div>Total cost: Rs {getTotalSum()} </div>
    </div>
  )
  
  return (
    <div className="App">
      <header>
        <button onClick={()=> navigateTo(PAGE_CART)}>
          Go to Cart ({cart.length})
        </button>
        <button onClick={()=> navigateTo(PAGE_PRODUCTS)}>
          View Products
        </button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
     
   
    </div>
  );
}

export default App;
