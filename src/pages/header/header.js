import React, { useState } from "react";
import { Link } from "react-router-dom";
import './header.scss';
import ModalCart from "../../modalCart/modalCart";
import { useSelector } from "react-redux";


const Header = () => {
    const [modalActive, setModalActive] = useState(false)
    const cartLength = useSelector(store => store.shopData.cartLength)
    return(
        <header className="header">
            <div className="blackText">   
                <p>Free shipping on orders over $50</p>
            </div>
            <div className="menuContainer">
                <div className="menuChild leftMenu">
                    <Link to='/' className="smallChilds link">HOME</Link>
                    <Link  to='/all' className="smallChilds link">All Products</Link>
                    <p className="smallChilds">ABOUT</p>
                    <p className="smallChilds">FAQ</p>
                    <p className="smallChilds">BLOG</p>
                    <p className="smallChilds">CONTACT</p>
                    
                </div>
                <h1 className="logo"><Link  className="link" to='/'>morning</Link></h1>
                <div className="menuChild rightMenu">
                    <p className="smallChilds">UNITED STATE(USD $)</p>
                    <Link to="/Login" className="smallChilds link">LOG IN</Link>
                    <p onClick={()=>setModalActive(true)} className="smallChilds" style={{cursor:'pointer'}}>CART 
                    <span style={{color:'red',fontSize:'17px',marginLeft:'5px'}}>{cartLength}</span></p>
                </div>
            </div>
            <ModalCart active={modalActive} setActive={setModalActive}/>
            
        </header>
    )
}


export default Header