import React, { Component } from "react";
import "./describer.scss";
import utp from "../../Graphics/utp.png";
import Aos from "aos";

class Describer extends Component {

  componentDidMount() {
    Aos.init({
      duration: 2000
    })
  }

  render() {
    return (
      <div className="Describer">
        <div className="Content">
          <p>Witam na mojej stronie. Nazywam sie Norbert, ukończyłem pierwszy stopień na Uniwersytecie Technologiczno-Przyrodniczy im. Jana i Jędrzeja Śniadeckich w Bydgoszczy.</p><img className="UtpLogo" data-aos="fade-left" src={utp} />
        </div>
      </div>

    )
  }
}

export default Describer