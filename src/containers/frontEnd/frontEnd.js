import "../frontEnd/frontEnd.scss"
import logoReact from "../../Graphics/logoReact.png"
import logoRedux from "../../Graphics/Reduxx.png"
import logoBootstrap from "../../Graphics/bootstrap.png"
import logoSass from "../../Graphics/sasss.png"

export default function FrontEnd(){

    return(
        <div className="FrontEnd">
            <div className="Content">
                <div className="TextArea"><img src={logoReact} data-aos="flip-right"/><p data-aos="fade-left">React jest to biblioteka JavaScript. Stworzona przez zespół Facebook, jest wykorzystywana do tworzenia interfejsów graficznych aplikacji internetowych. Z biblioteką React pracuje od około dwóch lat, wykorzystywałem ją zarówno w projektach uczelnianych jak również w pracy.  </p></div>
                <div className="TextArea"><p data-aos="fade-right">Redux jest to biblioteka JavaScript służąca do zarządzania stanem aplikacji. Dzieki wykorzystaniu biblioteki Redux możemy wykorzystać biblioteki takie jak redux-modal czy redux-form. Biblioteke Redux wraz z React od około dwóch lat wykorzystywałem w projektach uczelnianych oraz w pracy.   </p><img src={logoRedux} data-aos="flip-left"/></div>
                <div className="TextArea"><img src={logoBootstrap} data-aos="flip-right"/><p data-aos="fade-left"> Bootstrap jest to biblioteka CSS zawierająca zestaw narzędzi ułatwiających tworzenie interfejsu graficznego.</p></div>
                <div className="TextArea"><p data-aos="fade-right">Sass jest to język skryptowy preprocesora, który interpretowany jest w do postaci CSS.</p><img src={logoSass} data-aos="flip-left"/></div>

            </div>
        </div>
    )
}