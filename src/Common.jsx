import React from "react";
import { NavLink } from "react-router-dom";


export const Common = (props) => {
  return (
      <div>
      <section id="header" className="display-flex align-items-center">
          <div className="container-fluid ">
            <div className="row">
                    {/* It will take 10 col and will put it in center */}
             <div className="col-10 mx-auto">
               <div className="row">
                  <div className="col-md-6 pt-5-lg-0 order-2 order-lg-1 display-flex justify-content-center flex-column">
                                  <h1> {props.name}<strong className="brand-name">{props.tag}</strong></h1>
                      <h2 className="my-3">
                          Want to know more ?
                      </h2>
                  <div className="mt-3">    
                    <NavLink to={props.visit} className="btn-get-started">
                   {props.btname}
                  </NavLink>
                 </div>
              </div>
               
              
              
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc}  className ="img-fluid animated" alt="home img"></img>
               </div>
              </div>
            </div>
           </div>
        </div>
      </section>
    </div>
  )
}


export default Common