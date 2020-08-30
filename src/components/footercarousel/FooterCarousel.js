import React from 'react'
import './footercarousel.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faFacebookF, faDiscord} from "@fortawesome/free-brands-svg-icons"

import 'bootstrap/dist/css/bootstrap.css';
class FooterCarousel extends React.Component {
  render() {
    return (
          <div className="container top-container">
            <div className="row bottom-container">
            <div className="col-sm footer-text">
              <div className="col-sm footer-text">
               <a href="https://www.instagram.com/calstatela_acm/?hl=en"> <FontAwesomeIcon className="iconBrand" size="2x" icon={faInstagram}></FontAwesomeIcon></a>
                                  <a href="https://www.facebook.com/calstatela.acm"> <FontAwesomeIcon  className="iconBrand" size="2x" icon={faFacebookF}></FontAwesomeIcon></a>
                                  <a href="https://discordapp.com/invite/wX58JRv"><FontAwesomeIcon  className="iconBrand" size="2x" icon={faDiscord}></FontAwesomeIcon></a>
                  <br></br><br></br>
                  Contact us: <b>acm.calstatela@gmail.com</b><br></br>
                                {/* Office hours: E&T C-245 3PM-4PM every <b>Thursday</b> */}
                                There will be no office hours
                                <br></br><br></br>

                  <span className="footer-catchy-text">It's not a bug. <span className="highlight-text"><b><i>It's a feature.</i></b></span></span><br></br>
                <b className="copy-right">© Association of Computing Machinery - California State University, Los Angeles.</b><br></br><br></br>
                     </div>
              </div>
            </div>
          </div>
    );
  }
}

export default FooterCarousel;
