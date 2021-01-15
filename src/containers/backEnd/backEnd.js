import "../backEnd/backEnd.scss"
import AOS from "aos"
import { useState,useEffect,useRef } from "react";

export default function BackEnd() {

    AOS.init({
        duration: 1000
    });

    const [click,setClick] = useState(0);

    let prevClickRef = useRef(0);

    const onClick = () =>{
        prevClickRef.current = click;
        setClick(click =>{
            return click +1
        })
    }

    useEffect(() => {    
       console.log("Wywołało",click,"prev",prevClickRef.current)
    },[click])
    
    return (
        <div className="BackEnd">
            <div className="Content">
                hello from BackEnd {click}
                <button onClick={onClick}>Click</button>
                <div data-aos="fade-up">XDDDD</div>
            </div>
        </div>
    )
}