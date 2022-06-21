import React from "react"
import TestimonialApi from "./TestimonialApi"
import { Avatar } from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import { yellow, green } from "@mui/material/colors";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Testimonial.css"


const Slide = ({ id, design, name, post, date, desc, valueIndex, index }) => {
  let position = "nextSlide"
  if (valueIndex === index) {
    position = "activeSlide"
  }
  if (valueIndex === index - 1 || (index === 0 && valueIndex === TestimonialApi.length - 1)) {
    position = "lastSlide"
  }

  return (
    <>
      <article className={`d_flex ${position}`} key={id}>
        {/*<div className='box d_flex' className={position} key={id}>*/}
        <div className='left box_shadow'>
          <div className='img'>
            {/* <img src={image} alt='' /> */}
            <Avatar 
              sx={{ bgcolor: green[500], width: 50, height: 50}}>
                <AccountCircleIcon  sx={{ fontsize: 40 }}/>
            </Avatar>
          </div>
          <div className='details mtop'>
            <span className='primary_color'>{design}</span>
            <h2>{name}</h2>
            {/* <label>{offcer}</label> */}
            
          </div>
        </div>

        <div className='right'>
          <div className='icon'>
            <div className='quote'>
              <i class='fa fa-quote-right'></i>
            </div>
          </div>

          <div className='content box_shadow mtop'>
            <h1>{post}</h1>
            <h3>{date}</h3>
            <StarRateIcon sx={{ color: yellow[800] }} />
            <StarRateIcon sx={{ color: yellow[800] }}/>
            <StarRateIcon sx={{ color: yellow[800] }}/>
            <StarRateIcon sx={{ color: yellow[800] }}/>
            <StarRateIcon sx={{ color: yellow[800] }}/>
            <p>{desc}</p>
          </div>
        </div>
      </article>
    </>
  )
}

export default Slide