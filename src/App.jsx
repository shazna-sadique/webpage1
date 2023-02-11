import React from 'react'
import styles from './style'
import { Navbar,Hero,Contact } from './components';

const App = () => {

let component
 switch(window.location.pathname){
  case "/" :
    component = <Hero/>
    break
  case "/contact":
    component =  <Contact/>
 }


  return (
    <>

  <div className="home">
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {component}
      </div>
    </div>


  </div>
  
  
 
  </>
  )
}





export default App