import "../backEnd/backEnd.scss"
import logoExpress from "../../Graphics/sliderImages/ExpressjsLogo.png"
import SpringBootLogo from "../../Graphics/sliderImages/SpringBootLogo.png"
import awsLogo from "../../Graphics/sliderImages/awsLogo.png"

export default function BackEnd() {

   
    return (
        <div className="BackEnd">
            <div className="Content">
                <div className="TextArea"><img src={logoExpress} className="my-3" data-aos="flip-right" data-aos-offset="200"/><p data-aos="fade-left">Express.js jest to szkielet aplikacji internetowych zaplecza dla node.js. Wykorzystywałem go głowienie do tworzenia interfejsów API. Używałem w nim takich bibliotek jak między innymi sequelize, preer.js, nodemailer.</p></div>
                <div className="TextArea"><p data-aos="fade-right">SpringBoot jest to framework oparty o język programowania Java. Stosowany to tworzenia serwisów sieciowych, mikroserwisów. Stosowałem go w projektach prywatnych oraz uczelnianych. Najczęściej swe projekty opierałem o narzędzie automatyzujące Maven oraz framework Hibernate. Jeśli zajdzie taka potrzeba udostępnię swoje projekty.</p><img src={SpringBootLogo} data-aos="flip-left"/></div>
                <div className="TextArea"><img src={awsLogo} data-aos="flip-right" /><p  data-aos="fade-left">Chmura AWS udostepnia szereg możliwości. Ja pracowałem w obrębie DynamoDB, Lambda, RDS, EC2, S3, Cognito. Pierwszy kontakt z chmurą mialem w poprzedniej pracy, następnie zainteresowałem się tą technologią i tworzyłem przy ich użyciu projekty na uczelnie oraz realizowałem własne projekty. Co do serverów VPS oprócz AWS również działam na VPS od Google.</p></div>
            </div>
        </div>
    )
}