import React from "react";
import { Link } from "react-router-dom";
const ProductsGener = (props) => {
    const hover = (e) => {
        e.currentTarget.childNodes[3].classList.add('activeHoverBtn')
    }
    const  blur = (e) => {
        e.currentTarget.childNodes[3].classList.remove('activeHoverBtn')
    }
    return(
        <>
            <div className="gridChild" onMouseEnter={hover} onMouseLeave={blur} key={props.id}>
                <img src={props.image} alt="image"/>
                <p className="title">{props.title}</p>
                <p style={{color:'red'}}>{props.price}</p>
                <Link to={`/product${props.id}`} className='btnOption'>SELECT OPTION</Link>
            </div>
        </>
    )
}


export default ProductsGener

