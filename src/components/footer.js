import React, { Component } from "react";
//import './Footer.css'

class Footer extends Component {
  render() {
    return (
        <footer class="page-footer font-small mdb-color pt-4" id="foot">
        
            <div class="container text-center text-md-left">
              <div class="row text-center text-md-left mt-3 pb-3">
                
        
               
        
                
        
                <hr class="w-100 clearfix d-md-none"/>
        
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold"><strong>Contacts</strong></h6>
                  <p>
                    <i class="fas fa-home mr-3"></i> Antananarivo,102, MG</p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> rakotoarimananafabricien@gmail.com</p>
                    <p>
                    <i class="fas fa-print mr-3"></i> + 261 33 74 962 87</p>
                </div>
        
              </div>
        
              <hr/>
        
              <div class="row d-flex align-items-center">
        
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        
                  <p class="text-center text-md-left">© 2019 Copyright Setraniaiana Fabricien RAKOTOARIMANANA.
                   
                  </p>
        
                </div>
                
        
              </div>
        
            </div>
        
          </footer>
    );
  }
  };

  export default Footer;