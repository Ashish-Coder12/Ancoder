import React from 'react'

function About() {
  return (
    <div>
      <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">

                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>

                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ml-auto"><p class="lead">We are the React Depeloper , we develop website in different Variation</p></div>
                    <div class="col-lg-4 mr-auto"><p class="lead">We work on differnt technology link HTML , CSS , Javascript , React , React spring , Getsby.js etc </p></div>
                </div>

                <div class="text-center mt-4">
                    {/* <a class="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                        <i class="fas fa-download mr-2"></i>
                       
                    </a> */}
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
