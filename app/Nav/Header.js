"use client";
import '../Nav/header.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
function Header() {
  const router = useRouter()
  return (
    <nav className="navbar navbar-expand-lg   py-2 shadow-lg fixed-top">
      <div className="container-fluid d-flex justify-content-around p-0">
        <button style={{ border: "none", outline: "none" }} onClick={() => router.push('/')} className='logo'>NexStore</button>
        <button
          style={{ color: "black", backgroundColor: "white" }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Search */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Search Box */}
          <form className="d-flex mx-auto my-2 my-lg-0" style={{ position: "relative" }}>
            <FaSearch style={{ color: "silver", fontSize: "18px", position: "absolute", top: "18", left: "16px" }} />
            <input
              className="form-control  rounded-4 input "
              type="search"
              placeholder="Search products..."
              aria-label="Search"
              style={{ width: "400px", border: "none", outline: "none", padding: "13px", paddingLeft: "40px", backgroundColor: "whitesmoke" }}

            />

          </form>

          {/* Menu Items */}
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item ">
              <Link href={"/"} className="nav-link px-3 text-black">Home</Link>
            </li>
            <li className="nav-item">
              <Link href={"/products"} className="nav-link px-3 text-black ">Products</Link>
            </li>
            <li className="nav-item">
              <Link href={'/contact'} className="nav-link px-3 text-black " >Contact</Link>
            </li>

            <li className="nav-item">
              <Link href={'/about'} className="nav-link px-3 text-black" >About</Link>
            </li>
            <li className="nav-item">
              <Link href={'/login'} className="nav-link login px-3 text-black" >👤Login</Link>
            </li>
            <li className="nav-item">
              <Link href={'/cart'} className="nav-link px-3 text-black position-relative">
                🛒 Cart
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.7rem" }}
                >
                  {/* 1 */}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Header;

