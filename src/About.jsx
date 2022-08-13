import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from './image/f2.png'

export const About = () => {
  return (
    <> 
      <Common name="Let start where we are from "
        imgsrc={web}
        visit='/contact'
        btname='Contact Us' />
    </>
  )
}


export default About