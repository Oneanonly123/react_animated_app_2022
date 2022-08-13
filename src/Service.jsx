import React from "react";
import { Card } from "./Card"; 
import SData from "./SData"


export const Service = () => {
  return (
    <>
        <div className="my-5">
         <h1 className="text-center"> Our Services</h1>
       </div>
              <div className="container-fluid mb-5">
                  <div className="row">
                     <div className="col-10 mx-auto">
                       <div className="row gy-4">
              {
                SData.map((val, ind) => {
                  return <Card key={ind} imgSrc={val.imgSrc} title={val.title}/>
                })
              }
                           
                        </div>
                      </div>
                  </div>
               </div>
      </>
    
  )
}
