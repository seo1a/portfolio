import type { ProjectColor } from "../types/projectColor";

interface ProjectLinksProps {
    githubUrl: string;
    deployUrl: string;
    projectColor: ProjectColor;
}

const bgColorMap: Record<ProjectColor, string> = {
    strxxt: "bg-myGreen/80",
    jmt: "bg-blue-400",
    animal: "bg-emerald-400",
    movie: "bg-red-400",
};

export default function ProjectLinks({
    githubUrl,
    deployUrl,
    projectColor,
} : ProjectLinksProps) {
    return(
        <div className="flex justify-center gap-6 mt-12 mb-5">
            <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                w-[23vw] sm:w-[160px] lg:w-[130px]
                lg:px-6 py-3
                rounded-xl
                bg-indigo-600 text-white
                text-sm sm:text-base lg:text-lg
                font-bold
                text-center
                hover:opacity-80
                transition"
            >
                🔗깃허브
            </a>
            <a
                href={deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                w-[23vw] sm:w-[160px] lg:w-[130px]
                lg:px-6 py-3
                rounded-xl
                ${bgColorMap[projectColor]}
                text-black
                text-sm sm:text-base lg:text-lg
                font-bold
                text-center
                hover:opacity-80
                transition`}
            >
                🔗배포
            </a>
        </div>
    )
}