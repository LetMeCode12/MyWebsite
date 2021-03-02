import "../tests/tests.scss"
import logoMocha from "../../Graphics/mocha.png"
import logoCypress from "../../Graphics/cypress.png"

export default function Tests() {

    return (
        <div className="Tests">
            <div className="Content">
                <div className="TextArea"><img src={logoMocha}  data-aos="flip-right"/><p data-aos="fade-left">React jest to biblioteka JavaScript. Stworzona przez zespół Facebook, jest wykorzystywana do tworzenia interfejsów graficznych aplikacji internetowych. Z biblioteką React pracuje od około dwóch lat, wykorzystywałem ją zarówno w projektach uczelnianych jak również w pracy.  </p></div>
                <div className="TextArea"><p data-aos="fade-right">Redux jest to biblioteka JavaScript służąca do zarządzania stanem aplikacji. Dzieki wykorzystaniu biblioteki Redux możemy wykorzystać biblioteki takie jak redux-modal czy redux-form. Biblioteke Redux wraz z React od około dwóch lat wykorzystywałem w projektach uczelnianych oraz w pracy.   </p><img src={logoCypress} style={{maxHeight:"150px"}} data-aos="flip-left"/></div>
            </div>
        </div>
    )
}