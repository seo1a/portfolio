import ProjectMedia from "./ProjectMedia";
import ProectBadges from "./ProjectBadges";
import ProjectLinks from "./ProjectLinks";
import type { ProjectColor } from "../types/projectColor";

interface ProjectSectionProps {
    title: string;
    image: string;
    videos?: string[];
    badges: string[];
    children: React.ReactNode;
    githubUrl: string;
    deployUrl: string;
    projectColor: ProjectColor;
    onMediaLoad?: () => void;
}

export default function ProjectSection({
    title,
    image,
    videos = [],
    badges,
    children,
    githubUrl,
    deployUrl,
    projectColor,
    onMediaLoad,
}: ProjectSectionProps) {
    return(
        <div>
            <h1 className='[font-family:"pf-pixelscript",sans-serif] text-2xl md:text-4xl lg:text-5xl text-neutral-700 font-bold mb-[3vh] lg:mb-[5vh]'>
                {title}
            </h1>
            <div className="relative mx-auto w-[85vw] lg:w-[65vw] pt-[4vh] lg:pt-[8vh] pb-[8vh] lg:pb-[10vh] rounded-4xl overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-60"></div>

                <div className="relative z-10 mb-[3hv] lg:mb-[0vh]">
                    <ProjectMedia
                        image={image}
                        videos={videos}
                        onLoad={onMediaLoad}
                    />
                    
                    <div className='mx-[8vw] lg:mx-[15vw] text-center [font-family:"high1-wonchuri-body",sans-serif] text-[13px] md:text-[15px] lg:text-[19px]'>
                        <ProectBadges
                            badges={badges}
                        />

                        {children}

                        <ProjectLinks 
                            githubUrl={githubUrl}
                            deployUrl={deployUrl}
                            projectColor={projectColor}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}