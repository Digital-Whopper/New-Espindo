'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import SafariSection from "../component/SafariSection";
import { AiOutlineClose } from "react-icons/ai";
const Page = () => {
const [isLoading,setIsLoading]=useState(false)
const [formData,setFormData]=useState({
  name:"",
  email:"",
  phone:"",
  message:""
})
const [errors,setErrors]=useState({});


const validate=()=>{
  const newErrors={};
  if(!formData.name.trim()) newErrors.name="Name is required";

  if(!formData.email.trim() || !/^[\w.-]+@([\w]+\.)+[\w]{2,4}$/.test(formData.email))
    newErrors.email="Valid email is required";

  if(!formData.phone.trim()|| !/^\d{10}$/.test(formData.phone))
    newErrors.phone="Valid 10-digit phone number is required";



if (!formData.message.trim()) newErrors.message = "Message is required";

return newErrors;

}

const handleSubmit=async (e)=>{
e.preventDefault();
const newErrors=validate();
if(Object.keys(newErrors).length===0){
  setIsLoading(true)
 try{
  const response=await fetch("https://www.espindotourandtravels.com/api/enquiry",{
    method :"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(formData)
  });

  if(response.ok){
    setFormData({
      name:"",
      email:"",
      phone:"",
      message:""
    })
  }else{
    console.error("Error submitting form:",await response.json());   
  }
 } catch(error){
  console.error("Error:",error);
 }finally{
  setIsLoading(false)
 }
}else{
  setErrors(newErrors)
}
}

const handleChange=(e)=>{
  const {name,value}=e.target;
  setFormData({...formData,[name]:value});
  setErrors({...errors,[name]:""});
  }

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   // Handle form submission
  // };

  return (
    <>
      <Image src="/contactbanner.png" width={1920} height={350} layout="responsive" alt="contact" />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Feel Free To Contact us
        </h2>
        <div className="lg:flex justify-between gap-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <iframe
              className="top-0 left-0 w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.05321101606!2d75.62574595312086!3d26.88511514457059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1732884549124!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="lg:w-1/2">
           <form 
                       className="relative bg-white p-6 rounded-lg shadow-lg z-70 w-[90%] "
                       onSubmit={handleSubmit}
                      >
                     
                      <div className="lg:mb-5 lg:flex lg:justify-between flex-wrap">
                          <input type="text" 
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`lg:mb-5 mb-2 lg:w-[100%] p-2 text-gray-900 border  rounded text-[10px] sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500  w-full mb-0 ${
                            errors.name ? "border-red-500" : "border-gray-300"}`}
                              />
                            {errors.name && (<p className="text-red-500 text-[10px]">{errors.name}</p>)}
                            
                          <input type="email" placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                              className={`lg:mb-0 mb-2 lg:w-[100%] p-2 text-gray-900 border border-gray-300 rounded text-[10px] sm:text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 w-full mb-0 ${errors.email ? "border-red-500" : "border-gray-300"}`}/>
                              {errors.email && (<p className="text-red-500 text-[10px]">{errors.email}</p>)}
                      </div>
          
                      <div className="lg:mb-5  md:flex md:justify-between mb-2">
                          <input type="tel" placeholder="Phone"
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                              className={`lg:mb-0 mb-2 md:w-[100%] w-full sm:mb-2 mb-0  p-2 text-gray-900 border border-gray-300 rounded-lg  text-[10px] sm:text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 ${ errors.phone ? "border-red-500" : "border-gray-300"}`}/>
                              {errors.phone && (<p className="text-red-500 text-[10px]">{errors.phone}</p>)}
          
                          
                      </div>
          
                      <div className="lg:mb-5 mb-2">
                          <textarea rows="3"
                           name="message"
                           value={formData.message}
                           onChange={handleChange}
                              className={`block w-full p-2 text-gray-900 border border-gray-300 rounded-lg text-[10px] sm:text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 resize-none"
                              placeholder=" Message ${errors.message ?  "border-red-500" : "border-gray-300"}`}></textarea>
                              {errors.message &&( <p className="text-red-500 text-[10px]">{errors.message}</p>)}
                      </div>
          
                      <div className="submit w-full sm:flex sm:items-center sm:justify-between mb-3">
                         
                          <div className="sm:w-[35%] w-[98%] sm:mt-0 mt-2"><button className={`w-full  bg-[#f4839d] rounded  py-2 text-[10px] sm:text-sm text-white ${isLoading? "opacity-50 cursor-not-allowed" : ""}`}
                          disabled={isLoading}
                          > {isLoading?"Sending":"Send me Details"}
                          </button></div>
                          </div>
          
                      
                  </form>
            {/* <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#f4839d] text-white text-lg font-semibold rounded-md hover:bg-[#f4839d] transition"
              >
                Send Message
              </button>
            </form> */}
          </div>
        </div>
        <div className="mt-12 flex justify-around flex-wrap">
          <div className="text-center w-full lg:w-[33%]">
            <h3 className="font-semibold text-lg">Our Location</h3>
            <p className="text-gray-600">
              Plot No. 17 Siddharth Nagar, Near Jawahar Circle,<br /> Jagatpura, Jaipur Rajasthan Pin 302017
            </p>
          </div>
          <div className="text-center w-full lg:w-[33%]">
            <h3 className="font-semibold text-lg">Call Us</h3>
            <p className="text-gray-600">+91-7790966554</p>
            <p className="text-gray-600">+91-9928062034</p>
          </div>
          <div className="text-center w-full lg:w-[33%]">
            <h3 className="font-semibold text-lg">Email Us</h3>
            <p className="text-gray-600">espindotour@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
