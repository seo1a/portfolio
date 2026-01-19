import { Link } from "react-router-dom";
import backgroundImage from "../assets/background_home2.png";
import iconImage1_up from "../assets/baby_icon1_up.jpg";
import iconImage2_up from "../assets/baby_icon2_up.jpg";
import iconImage1_down from "../assets/baby_icon1_down2.jpg";
import iconImage2_down from "../assets/baby_icon2_down.jpg";


export default function Home(){
    
    return(
        <section 
            className="min-h-screen bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${backgroundImage})` }} 
        > 
            <Link to={`/aboutme`}>
                <button
                className="
                    group
                    w-46 lg:w-82 h-46 lg:h-82
                    absolute top-[66%] left-[30%] lg:left-[40%]
                    -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                    <img src={iconImage1_up}
                        className="
                            absolute inset-0
                            w-full h-full
                            transition-opacity duration-300
                            opacity-100
                            group-hover:opacity-0" 
                    />
                    <img src={iconImage1_down}
                        className="
                            absolute inset-0
                            w-full h-full
                            transition-opacity duration-300
                            opacity-0
                            group-hover:opacity-100" 
                    />
                </button>
            </Link>
            
            <Link to={`/project`}>
                <button
                    className="
                    group
                    w-50 lg:w-90 h-50 lg:h-90
                    absolute top-[66%] left-[73%] lg:left-[60.5%]
                    -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                    <img src={iconImage2_up}
                        className="
                            absolute inset-0
                            w-full h-full
                            transition-opacity duration-300
                            opacity-100
                            group-hover:opacity-0" 
                    />
                    <img src={iconImage2_down}
                        className="
                            absolute inset-0
                            w-full h-full
                            transition-opacity duration-300
                            opacity-0
                            group-hover:opacity-100" 
                    />
                </button>
            </Link>
        </section>
    );
}