import "../backEnd/backEnd.scss"
import logoExpress from "../../Graphics/sliderImages/ExpressjsLogo.png"
import SpringBootLogo from "../../Graphics/sliderImages/SpringBootLogo.png"
import awsLogo from "../../Graphics/sliderImages/awsLogo.png"

export default function BackEnd() {

   
    return (
        <div className="BackEnd">
            <div className="Content">
                <div className="TextArea"><img src={logoExpress} className="my-3" data-aos="flip-right" data-aos-offset="200"/><p data-aos="fade-left">Express jest to biblioteka JavaScript. Stworzona przez zespół Facebook, jest wykorzystywana do tworzenia interfejsów graficznych aplikacji internetowych. Z biblioteką React pracuje od około dwóch lat, wykorzystywałem ją zarówno w projektach uczelnianych jak również w pracy.  </p></div>
                <div className="TextArea"><p data-aos="fade-right">SpringBoot jest to framework oparty o język programowania Java. Stosowany to tworzenia serwisów sieciowych, mikroserwisów. Stosowałem go w projektach prywatnych oraz uczelnianych. Najczęściej swe projekty opierałem o narzędzie automatyzujące Maven. Jeśli zajdzie taka potrzeba udostępnie swoje projekty.</p><img src={SpringBootLogo} data-aos="flip-left"/></div>
                <div className="TextArea"><img src={awsLogo} data-aos="flip-right" /><p  data-aos="fade-left">Chmura AWS udostepnia szereg możliwości. Ja pracowałem w obrębie DynamoDB, Lambda, RDS, EC2, S3, Cognito. Pierwszy kontakt z chmurą mialem w poprzedniej pracy, następnie zainteresowałem się tą technologia i zaczołem tworzyć przy ich użyciu projekty na uczelnie oraz własne. Co do serverów VPS oprócz AWS również działam na VPS od Google.</p></div>
            </div>
        </div>
    )
}