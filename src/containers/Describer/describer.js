import React, { Component } from "react";
import "./describer.scss";
import utp from "../../Graphics/utp.png";

class Describer extends Component {

  componentDidMount(){
    console.log("props:",this.props);
  }
  
  render() {
    return (
      <div className="Describer">
        <div className="Content">
          <div>
          <p><img className="UtpLogo" data-aos="zoom-in" src={utp} />Witam na mojej stronie. Nazywam sie Norbert, ukończyłem pierwszy stopień informatyki stosowanej na Uniwersytecie Technologiczno-Przyrodniczym im. Jana i Jędrzeja Śniadeckich w Bydgoszczy. Przez prawie dwa lata zajmowałem stanowisko frontend developera pracując z biblioteka React oraz Redux. Zajmowałem się między innymi wprowadzaniem nowych funkcionalności, poprawianiem błędów, testowaniem unit z wykorzystaniem mocha.js oraz e2e przy urzyciu cypress.io.</p>
          <p>W przyszłości planuje kontynuować nauczanie w formie zaocznej, na kierunku informatyka stosowana. Interesuje mnie tworzenie aplikacji webowych oraz projektowanie serwisów sieciowych. W przyszłości chciałbym zajmować stanowisko fullstack developera. Interesują mnie również technologie SSR, miedzy innymi biblioteka next.js, z której podstawami jestem zaznajomiony. Jestem otwarty na poznawanie nowych technologii. Poniżej znajduje sie link do jednego z moich projektów, został on stworzony w oparcui o technologie react, redux oraz chmurę AWS z wykorzystaniem lambd, DynamoDB, S3, Cognito.</p>  
          <a href="https://master.dphz25phueft1.amplifyapp.com/#/content/P">Projekt</a> 
          </div>
        </div>
      </div>

    )
  }
}

export default Describer