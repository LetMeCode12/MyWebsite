import "../rightNav/rightNav.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from "@fortawesome/free-solid-svg-icons";


export default function RightNav({onShow}){
    return(
        <div className="RightNav">
          <FontAwesomeIcon icon={faAt}  /> <span onClick={onShow}>Wyślij Email</span> 
        </div>
    )
}