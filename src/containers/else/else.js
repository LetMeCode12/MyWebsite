import "../else/else.scss"
import logoGit from "../../Graphics/git.png"
import logoDocker from "../../Graphics/docker.png"


export default function Else() {

    return (
        <div className="Else">
            <div className="Content">
                <div className="TextArea"><img src={logoGit} data-aos-offset="200"  data-aos="flip-right"/><p data-aos="fade-left">Git to system kontroli wersji. Wykorzystywany był przezemnie za równo w pracy jak i w zastosowaniu uczelnianym do pracowania grupowego nad projektami lub przechowywania prajektów. Urzywałem zarówno Githuba jak i CodeCommit od AWS. </p></div>
                <div className="TextArea"><p data-aos="fade-right" >Docker to narzędzie służące do tworzenia, wdrażania oraz uruchamiania aplikcaji rozproszonych. Wykorzystywałem je głównie do wdrażania aplikacji na serverach VPS za pomocą DockerHub.</p><img src={logoDocker} data-aos="flip-left"/></div>
            </div>
        </div>
    )
}