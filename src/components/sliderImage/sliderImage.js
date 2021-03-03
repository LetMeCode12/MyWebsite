import React, { useEffect, useRef } from 'react';
import "./sliderImage.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function SliderImage({ imagesPath}) {

    const mySlider = useRef();
    let changeSlide = undefined;

    const leng = imagesPath.length;
    let cnt = +mySlider.current?.style?.left.slice(1,2) || 0; 
      

    const moveImages = () => {
        if (cnt >= leng) {
            cnt = 0;
        }
        if (mySlider && mySlider.current) {
            mySlider.current.style.left = `-${cnt}00vw`;
            cnt++;
        }
        
    }

    useEffect(()=>{      
       changeSlide = setInterval(moveImages, 5000)
       return () => {  clearInterval(changeSlide)}
    })

    const onNextImage = () => {
        clearInterval(changeSlide)
        if (cnt >= leng) {
            cnt = 0;
        }
        mySlider.current.style.left = `-${cnt}00vw`;
        cnt++;
        changeSlide = setInterval(moveImages, 5000)
    }

    const onPrevImage = () => {
        clearInterval(changeSlide)
        cnt-=2;
        if (cnt < 0) {
            cnt = leng - 1;
        }
        mySlider.current.style.left = `-${cnt}00vw`;
        cnt++;
        changeSlide = setInterval(moveImages, 5000)
    }

    const renderImage = (e, index) => {
        return <img className={`myImage ${index}`} src={e} />
    }

    return (
        <div className="sliderImage" >
            <div className="prev" onClick={onPrevImage}>
                <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
            </div>
            <div className="innerSlider" ref={mySlider}>

                {
                    imagesPath.map((imagePath, index) => renderImage(imagePath, index))
                }

            </div>
            <div className="next" onClick={onNextImage}>
                <FontAwesomeIcon icon={faArrowRight} size={"2x"} />
            </div>
        </div>
    )
}

export default SliderImage;
