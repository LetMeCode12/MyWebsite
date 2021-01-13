import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div>
            Error 404. Please back to: <Link to="/Home"> Home </Link>
        </div>
    )
}