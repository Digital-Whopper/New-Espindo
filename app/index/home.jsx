import React from 'react'
import Slider from '../component/Slider'

import HeadingComponent from '../component/HeadingComponent'

import VideoSlider from '../component/VideoSlider'
import ReviewSlider from '../component/ReviewSlider'
import FAQSection from '../component/FAQSection'


import ProductSlider from '../component/ProductSlider'
import Blog from '../component/Blog'
import CubeSlider from '../component/CubeSlider'

import PopupForm from '../component/PopupForm'

const home = () => {
  return (
    <div>

<Slider/>
<HeadingComponent heading="Our Travels"

/>
<ProductSlider/>

<HeadingComponent heading="Activities"/>
<VideoSlider/>


<CubeSlider/>

<HeadingComponent heading="Our Blogs"/>
<Blog/>

<HeadingComponent heading="Our Happy Clients"/>
<ReviewSlider/>
<HeadingComponent heading="Frequently Asked Questions"/>
<FAQSection/>
{/* <PopupForm/> */}
    </div>
  )
}

export default home