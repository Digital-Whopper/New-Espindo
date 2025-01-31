import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const EnquiryForm=()=>{
const [isFormVisible,setIsFormVisible]=useState(false)
const [isLoading,setIsLoading]=useState(false)
const [formData,setFormData]=useState({
  name:"",
  email:"",
  phone:"",
  date:"",
  travellers:"",
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

  if(!formData.date.trim()) newErrors.date="Date of travel required";

  if(!formData.travellers.trim() || isNaN(formData.travellers) || formData.travellers <=0 )
    newErrors.travellers="Valid traveller count is required"

if (!formData.message.trim()) newErrors.message = "Message is required";

return newErrors;

}

const handleSubmit=async (e)=>{
e.preventDefault();
const newErrors=validate();
if(Object.keys(newErrors).length===0){
  setIsLoading(true)
 try{
  const response=await fetch("api/sendMail",{
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
      date:"",
      travellers:"",
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


    return(
       <section className="max-w-full p-4">
        {/* btn  */}
           <div className="forms-main">
           <div className=" lg:top-[3%] md:top-0 top-[-2px] right-[1%]">
      <button
        className="bg-[#f4839d] text-white lg:text-md md:text-sm text-xs lg:px-4 px-2 py-2"
        onClick={()=>setIsFormVisible(true)}
      >
        SEND ENQUIRY
      </button>
      </div>
    </div>

    {/* form  */}
    {isFormVisible &&(
            <div className="fixed z-[999999999] inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <form 
             className="relative bg-white p-6 rounded-lg shadow-lg z-70 w-[90%] "
             onSubmit={handleSubmit}
            >
            <div className="lg:pb-4 pb-2">
                <h3 className="lg:text-2xl sm:text-xl text-sm">Superb Choice!</h3>
            </div>
            <div className="lg:mb-5 lg:flex lg:justify-between">
                <input type="text" 
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`lg:mb-0 mb-2 lg:w-[42%] p-2 text-gray-900 border  rounded text-[10px] sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500  w-full mb-0 ${
                  errors.name ? "border-red-500" : "border-gray-300"}`}
                    />
                  {errors.name && (<p className="text-red-500 text-[10px]">{errors.name}</p>)}
                  
                <input type="email" placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                    className={`lg:mb-0 mb-2 lg:w-[55%] p-2 text-gray-900 border border-gray-300 rounded text-[10px] sm:text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 w-full mb-0 ${errors.email ? "border-red-500" : "border-gray-300"}`}/>
                    {errors.email && (<p className="text-red-500 text-[10px]">{errors.email}</p>)}
            </div>

            <div className="lg:mb-5  md:flex md:justify-between mb-2">
                <input type="tel" placeholder="Phone"
                 name="phone"
                 value={formData.phone}
                 onChange={handleChange}
                    className={`lg:mb-0 mb-2 md:w-[32%] w-full sm:mb-2 mb-0  p-2 text-gray-900 border border-gray-300 rounded-lg  text-[10px] sm:text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 ${ errors.phone ? "border-red-500" : "border-gray-300"}`}/>
                    {errors.phone && (<p className="text-red-500 text-[10px]">{errors.phone}</p>)}

                <input type="date" placeholder="Date of Travel"
                 name="date"
                 value={formData.date}
                 onChange={handleChange}
                    className={`lg:mb-0 mb-2 md:w-[31%] w-[49%] p-2 text-gray-900 border border-gray-300 rounded-lg  text-[10px] sm:text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 ${errors.date ? "border-red-500" : "border-gray-300"} `}/>
                    {errors.date &&  (<p className="text-red-500 text-[10px]">{errors.date}</p>)}

                <input type="number" placeholder="Traveller Count"
                name="travellers"
                value={formData.travellers}
                onChange={handleChange}
                    className={`lg:mb-0 mb-2 md:w-[31%] sm:w-[50%] w-[49%] p-2  text-gray-900 border border-gray-300 rounded-lg  text-[10px] sm:text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 ${errors.travellers ? "border-red-500" : "border-gray-300"} `}/>
                    {errors.travellers && (<p className="text-red-500 text-[10px]">{errors.travellers}</p>)}
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
                <div className="sm:w-[60%] w-[98%] text-sm ">
                <ul>
                    <li className="pl-4 before:content-['✔'] before:text-green-500 before:absolute before:left-4 lg:before:top-[79%] md:before:top-[75%] text-[10px] sm:text-base">We assure the privacy of your contact</li>
                    <li className="pl-4 before:content-['✔'] before:text-green-500 before:absolute before:left-4 lg:before:top-[85%] md:before:top-[81%] text-[10px] sm:text-base">This data will only be used by our team to contact you and no other purposes.</li>
                </ul>
              </div>
                <div className="sm:w-[35%] w-[98%] sm:mt-0 mt-2"><button className={`w-full  bg-[#f4839d] rounded  py-2 text-[10px] sm:text-sm text-white ${isLoading? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isLoading}
                > {isLoading?"Sending":"Send me Details"}
                </button></div>
                </div>

            <div className="absolute top-[10px] sm:left-[95%] left-[91%]  close">
                <button className="text-[#f4839d] hover:text-gray-700"
                onClick={()=>setIsFormVisible(false)}>
                 <AiOutlineClose className="sm:h-6 sm:w-6 h-4 w-4" />
                </button>
            </div>
        </form>
    </div>    
   
    )}
{/* form end */}
       </section>
    )
}
export default EnquiryForm;






