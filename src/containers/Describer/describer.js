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
          <p><img className="UtpLogo" data-aos="fade-left" src={utp} />Witam na mojej stronie. Nazywam sie Norbert, ukończyłem pierwszy stopień na Uniwersytecie Technologiczno-Przyrodniczy im. Jana i Jędrzeja Śniadeckich w Bydgoszczy. Przez dwa lata zajmowałem stanowisko frontend developera pracując z biblioteka React. Zajmowałem się między innymi wprowadzaniem nowych funkcionalności, poprawianiem błędów, testowaniem unit z wykorzystaniem mocha.js oraz e2e przy urzyciu cypress.io.</p>
        </div>
      </div>

    )
  }
}

export default Describer