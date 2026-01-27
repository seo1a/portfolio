interface ProjectMediaProps {
    image: string;
    videos: string[];
    onLoad?: () => void;
}

export default function ProjectMedia({
    image,
    videos = [],
    onLoad
}: ProjectMediaProps) {
    return(
        <>
            <img
                src={image}
                onLoad={onLoad}
                className="mx-auto w-[70vw] lg:w-[50vw] mb-[3vh] lg:mb-[8vh]"
            />

            {videos.map((video, index) => (
                <video
                    key={index}
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="mx-auto w-[70vw] lg:w-[50vw] mb-[3vh] lg:mb-[8vh]"
                />
            ))}
        </>
    )
}