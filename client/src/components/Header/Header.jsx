import {useState,useEffect} from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Header.css"
import { useSelector } from 'react-redux'

function Header() {

    const addedProductArray = useSelector((state) => state.cart.products)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {

        // Function to update windowWidth when the window is resized
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup: Remove event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container-fluid px-md-5">
                <Link className="navbar-brand">
                    <img className='img-fluid' src={logo} alt="" />
                </Link>
                <button
                    className="navbar-toggler fs-6 px-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/products' className="nav-link">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/cart' className="nav-link">
                                Cart 
                            </NavLink>
                            {windowWidth >= 992 && <div id='total-cart-count'>{addedProductArray.length}</div>}
                        </li>
                        <li className="nav-item">
                            <NavLink to='/login' className="nav-link">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header