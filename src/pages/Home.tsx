import { Link } from "react-router-dom";
import { useEffect } from "react";
import backgroundImage from "../assets/background_home5.png";
import iconImage1_up from "../assets/baby_icon2_up.png";
import iconImage2_up from "../assets/baby_icon1_up.png";
import iconImage1_down from "../assets/baby_icon2_down.png";
import iconImage2_down from "../assets/baby_icon1_down.png";
import imessage_aboutme from "../assets/imessage1.png";
import imessage_project from "../assets/imessage2.png"

const preloadImages = () => {
    const images = [iconImage1_up, iconImage1_down, iconImage2_up, iconImage2_down, imessage_aboutme];
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
};

export default function Home(){
    useEffect(() => {
        preloadImages();
    }, []);

    return( 
        <section 
            className="min-h-screen bg-cover bg-center bg-no-repeat relative" 
            style={{ backgroundImage: `url(${backgroundImage})` }} 
        > 
            <div className="absolute inset-0 bg-white opacity-25 z-0"></div>
            <Link to={`/aboutme`}>
                <div className="group absolute top-[66%] lg:top-[66%] left-[30%] lg:left-[40%] -translate-x-1/2 -translate-y-1/2 z-20">
                    <img 
                        src={imessage_aboutme}
                        className="
                            absolute right-[87%]
                            top-[23%] -translate-y-1/2
                            w-32 lg:w-40 h-auto
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            pointer-events-none"
                        alt="About Me Message"
                    />
                    <button
                        className="
                            w-44 lg:w-90 h-44 lg:h-90
                            cursor-pointer bg-transparent
                            relative"
                    >
                        <img src={iconImage1_down}
                            className="absolute inset-0 w-full h-full" 
                        />
                        <img src={iconImage1_up}
                            className="
                                absolute inset-0 w-full h-full
                                transition-opacity duration-300
                                opacity-100 group-hover:opacity-0" 
                        />
                    </button>
                </div>
            </Link>
            
            <Link to={`/project`}>
                <div className="group absolute top-[66%] lg:top-[66%] left-[75%] lg:left-[60.5%] -translate-x-1/2 -translate-y-1/2 z-20">
                    <img 
                        src={imessage_project}
                        className="
                            absolute left-[87%]
                            top-[23%] -translate-y-1/2
                            w-32 lg:w-36 h-auto
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            pointer-events-none"
                        alt="Project Message"
                    />
                    <button
                        className="
                            w-45 lg:w-90 h-45 lg:h-90
                            cursor-pointer bg-transparent
                            relative"
                    >
                        <img src={iconImage2_down}
                            className="absolute inset-0 w-full h-full" 
                        />
                        <img src={iconImage2_up}
                            className="
                                absolute inset-0 w-full h-full
                                transition-opacity duration-300
                                opacity-100 group-hover:opacity-0" 
                        />
                    </button>
                </div>
            </Link>
        </section>
    );
}