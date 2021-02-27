import "../else/else.scss"
import logoGit from "../../Graphics/git.png"
import logoDocker from "../../Graphics/docker.png"


export default function Else() {

    return (
        <div className="Else">
            <div className="Content">
                <div className="TextArea"><img src={logoGit} className="my-5"  data-aos="flip-right"/><p data-aos="fade-left">React jest to biblioteka JavaScript. Stworzona przez zespół Facebook, jest wykorzystywana do tworzenia interfejsów graficznych aplikacji internetowych. Z biblioteką React pracuje od około dwóch lat, wykorzystywałem ją zarówno w projektach uczelnianych jak również w pracy.  </p></div>
                <div className="TextArea"><p data-aos="fade-right">Redux jest to biblioteka JavaScript służąca do zarządzania stanem aplikacji. Dzieki wykorzystaniu biblioteki Redux możemy wykorzystać biblioteki takie jak redux-modal czy redux-form. Biblioteke Redux wraz z React od około dwóch lat wykorzystywałem w projektach uczelnianych oraz w pracy.   </p><img src={logoDocker}  data-aos="flip-left"/></div>
            </div>
        </div>
    )
}