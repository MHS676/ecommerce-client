import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/order/categories">Categories</Link></li>
        <li><Link to="/order/custom">Custom</Link></li>
        <li><Link to="/order/blog">Blog</Link></li>
        {
            // user ? 'true': 'false'
            // user ? condition ? 'double true' : 'one true' : 'false' 
        }
        {/* {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        } */}
        {/* <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li> */}
        
    </>

    return (
        <>
            <div className="navbar    max-w-screen-xl bg-white text-black mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex items-center">
          <Link to="/" className="btn btn-ghost text-xl "> <img src="../../public/icon.png" alt="" /> <span className='text-black'>Furni<span className='text-[#1E99F5]'>Flex</span></span></Link>
        </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="indicator mx-6">
            <Link to="/dashboard/cart" aria-label="View Cart">
              <span className="indicator-item badge badge-secondary">{cart.length}</span>
              <div className="btn btn-sm"><FaShoppingCart /></div>
            </Link>
          </div>
                {user ? (
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost btn-circle avatar" aria-label="User Menu">
                <div className="w-10 rounded-full tooltip" title={user.displayName || 'User'}>
                  {user.photoURL ? (
                    <img alt="User avatar" src={user.photoURL} />
                  ) : (
                    <img alt="Default user avatar" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
                  )}
                </div>
              </button>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
                {user && isAdmin && <li><NavLink to="/dashboard/adminHome">Dashboard</NavLink></li>}
                {user && !isAdmin && <li><NavLink to="/dashboard/userHome">Dashboard</NavLink></li>}
                <li><NavLink to='/' onClick={handleLogOut}>Logout</NavLink></li>
              </ul>
            </div>
          ) : (
            <button className="btn mr-5"><NavLink to='/login'>Login</NavLink></button>
          )}
            </div>
        </>
    );
};

export default NavBar;