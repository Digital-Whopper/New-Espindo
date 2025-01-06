import React from 'react'

const HeadingComponent = ({heading,para,italic}) => {
  return (
    <div>
        <div className="tour-heading my-6 ">
      
          <h2 className="text-3xl font-semibold text-center mb-2"><span className='italic-fonts'> <i>{italic} </i></span>
           {heading}</h2>
        {para && <p className='text-lg text-center'>{para}</p>}
        
        </div>


    </div>
  )
}

export default HeadingComponent