import "./header.css";
import { useEffect, useState } from "react";
import Icon2 from "./assets/shopnity-Icon.png";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaMoon, FaSun } from 'react-icons/fa';

function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light-theme';
  });
  const [menuOpen, setMenuOpen] = useState(false); 

  const ToggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const cartItems = useSelector(state => state.cart.items);
  const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <a href="/" alt="DarkMode" className="d-flex align-items-center gap-2">
        <img src={Icon2} alt="Shopinity" style={{ width: '50px', height: 'auto' }} />
        <h1>Shopinity</h1>
      </a>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <nav>
        <ul className={menuOpen ? 'show' : ''}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/profile">Profile</Link></li>

          {/* Cart Icon */}
          <Link to="/cart" className="cart-icon" style={{ position: 'relative' }}>
            <PiShoppingCartLight size={25} />
            {/* Cart count */}
            {totalQty > 0 && (
              <span style={{
                position: 'absolute',
                top: '-3px',
                right: '-10px',
                background: 'red',
                color: 'white',
                borderRadius: '45%',
                padding: '2px 6px',
                fontSize: '12px'
              }}>
                {totalQty}
              </span>
            )}
          </Link>

          {/* Dark/Light Mode Button */}
          <button className='Modebtn' style={{ marginLeft: '10px', textAlign: 'center', cursor: 'pointer', fontSize: '20px' }} onClick={ToggleTheme}>
  {theme === 'light-theme' ? <><FaMoon /> </> : <><FaSun /></>}
</button>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
