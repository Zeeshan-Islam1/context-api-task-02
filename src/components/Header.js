import "./header.css";
import { useEffect, useState } from "react";
import Icon from "./assets/shopyfy-Icon.png";
import Icon2 from "./assets/shopnity-Icon.png";

function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light-theme';
  });

  const ToggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <header style={{alignItems:"center", textAlign:"center"}}>
      <a href="/" alt="DarkMode" className="d-flex align-items-center gap-2">
  <img src={Icon2} alt="Shopify" style={{ width: '50px', height: 'auto' }} />
  <span style={{fontSize:"20"}}><h1>Shopinity</h1></span>
</a>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/profile">Profile</a></li>
            
            <button className='Modebtn' onClick={()=> ToggleTheme()}>{theme === 'light-theme' ? 'Dark Mode' : 'Light Mode'}</button>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
