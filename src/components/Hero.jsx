import React from 'react'
import styles from './../style'

const Hero = () => {
  return ( 
  <>
  
    <section id='home' className={'flex md:flex-row flex-col h-[90vh] '}>
        <div className='flex flex-row justify-between items-center w-full pl-20'>
            <h1 className='font-poppins font-semibold xs:text-[50px] text-[40px] text-sky-700 leading-loose  '>
                CONNECTING <br/>{" "}
                BUSINESS AND <br/>{" "}
                <span>TECHNOLOGY </span>
            </h1>    
        </div> 
        <div className='flex flex-row '>
            <a href="/">
            <img src='imgg.jpeg' className='rounded-full w-[100vh] bg-blend-multiply  ' alt='/'/>
            </a>
            </div> 
    </section>

    
  </>
  )
}

export default Hero