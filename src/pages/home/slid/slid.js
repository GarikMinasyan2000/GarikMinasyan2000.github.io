import React,{useState,useEffect} from 'react'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {slider} from './sl';
import { Link } from "react-router-dom";


const Slid = () => {

  const [slide,setSlide] = useState(0)


  const autoplay = () => {
    if(slide === slider.length-1){
      setSlide(0)
    }else{
      setSlide(slide+1)
    }
  }


  useEffect(() => {  
      const interval= setInterval(autoplay,5000)
          return() => clearInterval(interval)

  },[autoplay])

  const left = () => {
      setSlide(slide === 0 ? slider.length-1 : slide-1)
  }

  const right = () => {
      setSlide(slide === slider.length-1 ? 0 : slide+1)
  }
  return (
    <div className="conteiner">
      <section className="three">    
        <div className="img">
          <div  className={slider[2].class}>
            <img src={slider[slide].img}/>
            <div className={slider[slide].className}>
              <h1>{slider[slide].title}<hr/> </h1>
              <p>{slider[slide].subtitle}</p>
              <Link to='/all'>                    
                <button>{slider[slide].btn} <FontAwesomeIcon icon={faAngleRight}/></button>
              </Link>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button onClick={left}><FontAwesomeIcon icon={faAngleLeft} /></button>
          <button onClick={right}><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
      </section>
    </div>
  )
}


export default Slid
