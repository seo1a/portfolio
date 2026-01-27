interface ProjectBadgesProps {
    badges: string[];
    mobileSplit?: boolean;
}

export default function ProectBadges({
    badges,
    mobileSplit = false
} : ProjectBadgesProps) {
    if (!mobileSplit){
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-4 mb-8">
            {badges.map(src => (
                <img key={src} src={src} className="rounded-lg h-5 md:h-auto" />
            ))}
        </div>
    }
    return (
        <div className="flex justify-center mb-8">
            {/* 모바일 */}
            <div className="md:hidden">
                <div className="flex justify-center gap-2">
                    {badges.slice(0, 2).map(src => (
                        <img key={src} src={src} className="rounded-lg h-5" />
                    ))}
                </div>
                <div className="flex justify-center gap-2 mt-2">
                    {badges.slice(2).map(src => (
                        <img key={src} src={src} className="rounded-lg h-5" />
                    ))}
                </div>
            </div>

            {/* md 이상 */}
            <div className="hidden md:flex gap-x-3 lg:gap-x-4">
                {badges.map(src => (
                    <img key={src} src={src} className="rounded-lg h-7 lg:h-auto" />
                ))}
            </div>
        </div>
    );
}