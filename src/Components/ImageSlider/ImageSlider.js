import { useEffect, useState } from "react";

const data = ["https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630","https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=","https://buffer.com/library/content/images/2023/10/free-images.jpg"]

const ImageSlider = () => {
    const[activeImageIndex, setActiveImageIndex] = useState(0);

    const handleNextClick = () =>{
        setActiveImageIndex((activeImageIndex + 1) % data.length);
    }

    // const handlePreviousClick = () =>{
    //     // if(activeImageIndex===0){
    //     //     setActiveImageIndex(data.length - 1)
    //     // }
    //     // else
    //     // setActiveImageIndex(activeImageIndex - 1);
    //     // or
    //     setActiveImageIndex(
    //         !activeImageIndex ? activeImageIndex - 1 : data.length - 1
    //     )
    // }

    const handlePreviousClick = () =>{
        setActiveImageIndex((activeImageIndex - 1 + data.length) % data.length);
    };
    

    useEffect(() =>{
       const timer = setTimeout(() =>{
            handleNextClick();
        },5000)
        return () =>{
            clearTimeout(timer);
        }
    },[activeImageIndex])




    return(
        <div className="flex justify-center">
            <button className="font-bold p-5 m-10 bg-emerald-400" onClick={handlePreviousClick}>Previous</button>
            {data.map((url, i)=>(
                <img src={url} alt="" className={"w-[700px] h-[500px] object-contain " + (activeImageIndex ===i ? "block" : "hidden")}   />
            )
            )}
            <button className="font-bold p-5 m-10 bg-emerald-400" onClick={handleNextClick}>Next</button>
        </div>
    );
};

export default ImageSlider;