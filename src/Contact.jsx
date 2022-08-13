import React from "react";
import { useState } from "react";

export const Contact = () => {


  const [data, setData] = useState({
    fullname: '',
    contact: '',
    email: '',
    yourquery :''
    
  })
  const formSubmit = (e) => {
    e.preventDefault()
    alert(` My name is ${data.fullname} and My email is ${data.email}`)
  }

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,        
      }
    })
  }
  return (
    <>
      <div className="my-5">
          <h1 className="text-center"> Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
               <form onSubmit ={formSubmit}>
                   <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Name</label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Name"/>
              </div>
               <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Contact</label>
                      <input type="number" class="form-control" id="exampleFormControlInput1" name="contact" value={data.contact} onChange={InputEvent} placeholder="Enter your Contact Number"/>
              </div>
               <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
              </div>
              
              <div class="mb-3">
                       <label for="exampleFormControlTextarea1" class="form-label">Your Query</label>
                         <textarea class="form-control" id="exampleFormControlTextarea1" name="yourquery" value={data.yourquery} onChange={InputEvent} rows="3"></textarea>
              </div>
              <div class="col-12">
                   <button class="btn btn-primary" type="submit">Submit</button>
              </div>
                </form>
            </div>
         </div>
      </div>
    </>
  )
}
