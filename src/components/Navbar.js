// // src/components/Navbar.js
// import React from "react";
// import { useSelector } from "react-redux"; // Redux state ko access karne ke liye
// import { FaShoppingCart } from "react-icons/fa";  // Cart icon
// import { Link } from "react-router-dom";
// import { Badge } from "react-bootstrap";  // Badge for item count

// function Navbar() {
//   const totalQuantity = useSelector(state => state.cart.totalQuantity); // Redux se cart ki total quantity ko fetch karna

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link to="/" className="navbar-brand">E-Commerce</Link>
//       <div className="ml-auto">
//         <Link to="/cart" className="nav-link">
//           <FaShoppingCart size={30} />
//           {totalQuantity > 0 && (
//             <Badge pill variant="danger" className="position-absolute top-0 start-100 translate-middle">
//               {totalQuantity}
//             </Badge>
//           )}
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
