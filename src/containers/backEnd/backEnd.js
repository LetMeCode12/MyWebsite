import "../backEnd/backEnd.scss"
import logoExpress from "../../Graphics/sliderImages/ExpressjsLogo.png"
import SpringBootLogo from "../../Graphics/sliderImages/SpringBootLogo.png"
import awsLogo from "../../Graphics/sliderImages/awsLogo.png"

export default function BackEnd() {

   
    return (
        <div className="BackEnd">
            <div className="Content">
                <div className="TextArea"><img src={logoExpress} className="my-3" data-aos="flip-right" data-aos-offset="200"/><p data-aos="fade-left">Express jest to biblioteka JavaScript. Stworzona przez zespół Facebook, jest wykorzystywana do tworzenia interfejsów graficznych aplikacji internetowych. Z biblioteką React pracuje od około dwóch lat, wykorzystywałem ją zarówno w projektach uczelnianych jak również w pracy.  </p></div>
                <div className="TextArea"><p data-aos="fade-right">Redux jest to biblioteka JavaScript służąca do zarządzania stanem aplikacji. Dzieki wykorzystaniu biblioteki Redux możemy wykorzystać biblioteki takie jak redux-modal czy redux-form. Biblioteke Redux wraz z React od około dwóch lat wykorzystywałem w projektach uczelnianych oraz w pracy.   </p><img src={SpringBootLogo} data-aos="flip-left"/></div>
                <div className="TextArea"><img src={awsLogo} data-aos="flip-right" data-aos-offset="200"/><p data-aos-offset="200" data-aos="fade-left"> Bootstrap jest to biblioteka CSS zawierająca zestaw narzędzi ułatwiających tworzenie interfejsu graficznego.</p></div>
            </div>
        </div>
    )
}