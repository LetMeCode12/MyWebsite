import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="Content">
            Error. Please back to: <Link to="/Home"> Home </Link>
        </div>
    )
}