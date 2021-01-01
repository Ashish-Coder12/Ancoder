import React from 'react'
import Cards from './Cards'


function Portfolio() {
  return (
    <div>
      <section class="page-section portfolio" id="portfolio">
            <div class="container">
  
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
 
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
              
                <div class="row justify-content-center">
                    {/* <Cards image={Safe}/>
                    <Cards image={Cabin}/>
                    <Cards image={Circus}/>
                    <Cards image={Cake}/>
                    <Cards image={Submarine}/>
                    <Cards image={Game} /> */}
                    
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Portfolio
