import "../tests/tests.scss"
import logoMocha from "../../Graphics/mocha.png"
import logoCypress from "../../Graphics/cypress.png"

export default function Tests() {

    return (
        <div className="Tests">
            <div className="Content">
                <div className="TextArea"><img src={logoMocha}  data-aos="flip-right"/><p data-aos="fade-left">Mocha.js jest to platforma testowa JavaScript, pisałem w niej testy wraz z biblioteką Enzyme.js. Wykorzystywałem je głównie w poprzedniej pracy do pisania testów jednostkowych.</p></div>
                <div className="TextArea"><p data-aos="fade-right">Cypress.io jest to narzędzie do automatyzacji testów. Pisalem w nim testy e2e na potrzeby działania aplikacji w poprzedniej pracy.</p><img src={logoCypress} style={{maxHeight:"150px"}} data-aos="flip-left"/></div>
            </div>
        </div>
    )
}