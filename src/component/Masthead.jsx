import React from 'react'
import  Avtar  from './assets/img/avataaars.svg'
function Masthead() {
  return (
    <div>
      <header class="masthead bg-primary text-white text-center " id="masthead">
            <div class="container d-flex align-items-center flex-column">
       
                <img class="masthead-avatar mb-5" src={Avtar} alt="" />
               
                <h1 class="masthead-heading text-uppercase mb-0">The Ancoders</h1>

                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                <p class="masthead-subheading font-weight-light mb-0">React - HTML - CSS</p>
            </div>
        </header>
    </div>
  )
}

export default Masthead
