import "../backEnd/backEnd.scss"
import AOS from "aos"

export default function BackEnd() {



    AOS.init({
        duration: 1000
    });
    
    return (
        <div className="BackEnd">
            <div className="Content">
                hello from BackEnd
                <div data-aos="fade-up">XDDDD</div>
            </div>
        </div>
    )
}