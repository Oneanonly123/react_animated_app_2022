import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from './image/f1.png'

export const Home = () => {
  return (
      <>
      <Common name="Learn Everything with "
        tag ="Sharma Classes"
        imgsrc={web}
        visit='/'
        btname='Get Started' />
      </>
  )
}
