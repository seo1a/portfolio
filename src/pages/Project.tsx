import backgroundImage from "../assets/background.png";
import projectLogo from "../assets/Project_logo.png";
import jonmatSearcherImg from "../assets/jonmat_searcher1.png";
import movieProjectImg from "../assets/movie_project1.png";
import animalCrossingImg from "../assets/animal_crossing1.png";
import strxxtImg from "../assets/strxxt.png";
import jonmatSearcherVideo from "../assets/jonmat-searcher-video.mp4"
import strxxtVideo1 from "../assets/strxxt-video1_1.mp4";
import strxxtVideo2 from "../assets/strxxt-video2_1.mp4";
import strxxtVideo3 from "../assets/strxxt-video3_1.mp4";
import strxxtVideo4 from "../assets/strxxt-video4_1.mp4";
import animalCrossingVideo from "../assets/animal-crossing-video.mp4";
import movieProjectVideo from "../assets/movie-video.mp4"
import Loading from "./Loading";
import { useState } from "react";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";

export default function Project(){
    const [loadedCount, setLoadedCount] = useState(0);

    const TOTAL_MEDIA = 4;  // 모바일 브라우저의 autoplay 정책으로 video 제외 

    const handleLoaded = () => {
        setLoadedCount(prev => prev + 1);
    };

    const isLoading = loadedCount < TOTAL_MEDIA;

    return(
        <>
            {isLoading && <Loading />}
            
            <section
                className={`min-h-screen ${
                            isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
                            } transition-opacity duration-500 bg-top bg-repeat-y pt-[10vh] pb-[10vh]`} 
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "100% auto",
                }}
                >
                {/* <h1 className="text-6xl text-center mb-[15vh]">Project</h1> */}
                <img src={projectLogo} className="mx-auto w-[50vw] lg:w-[20vw] h-auto mb-[10vh] lg:mb-[15vh]" />

                <div className="flex flex-col gap-[15vh] lg:gap-[25vh] text-center">
                    <ProjectSection
                        title="STRXXT"
                        image={strxxtImg}
                        videos={[strxxtVideo1, strxxtVideo2, strxxtVideo3, strxxtVideo4]}
                        badges={[
                            "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                            "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
                            "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white",
                            "https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=gsap&logoColor=000",
                        ]}
                        githubUrl="https://github.com/seo1a/fashion-magazine"
                        deployUrl="https://my-fashion-magazine.vercel.app/"
                        projectColor="strxxt"
                        onMediaLoad={handleLoaded}
                    >
                        <p><span className="underline decoration-wavy decoration-myGreen/80 font-bold">STRXXT</span>은 스트릿 패션 문화를 탐색하고 브랜드, 아이템을 소개하는 반응형 웹 매거진 애플리케이션입니다.
                        ScrollTrigger과 GSAP 애니메이션을 활용한 시각적 흐름과 사용자 경험 설계에 집중했습니다.</p>

                        <p><span className="font-bold">Home</span> 페이지는 스트릿 패션의 문화와 배경을 소개하는 도입부로, 
                        <span className="underline decoration-wavy decoration-myGreen/80 font-bold">스크롤에 따라</span> 이미지와 텍스트가 동적으로 등장하는 애니메이션을 적용했습니다.</p>

                        <p><span className="font-bold">Brand</span> 페이지는 GSAP ScrollTrigger를 활용한 <span className="underline decoration-wavy decoration-myGreen/80 font-bold">가로 스크롤 기반 섹션</span>으로 구성해
                        매거진을 읽는 듯한 탐색 경험을 제공하며, <span className="underline decoration-wavy decoration-myGreen/80 font-bold">네비게이션</span>을 통해 원하는 브랜드로
                        즉시 이동할 수 있도록 설계했습니다.</p>

                        <p>Home 페이지와 Brand 페이지는 스크롤 흐름을 하나의 인터랙션으로 활용해,
                        <span className="underline decoration-wavy decoration-myGreen/80 font-bold">최하단 도달 시 다음 페이지로 자연스럽게 전환</span>되도록 구현했습니다.</p>

                        <p><span className="font-bold">Item</span> 페이지는 <span className="underline decoration-wavy decoration-myGreen/80 font-bold">Swiper</span>를 사용해 쇼핑몰 형태의 인터페이스로
                        최근 스트릿 패션 인기 아이템을 확인할 수 있도록 구성했습니다.</p>

                        <p><span className="font-bold">Snap</span> 페이지는 스트릿 패션 스냅 이미지 아카이브로,
                        이미지 확대 및 출처 링크 이동 기능을 제공합니다.</p>

                        <p><span className="underline decoration-wavy decoration-myGreen/80 font-bold">반응형 디자인</span>을 제공합니다.</p>
                    </ProjectSection>
                                   
                    <ProjectSection
                        title="JMT Searcher"
                        image={jonmatSearcherImg}
                        videos={[jonmatSearcherVideo]}
                        badges={[
                          "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                          "https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=orange",
                          "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white",
                          "https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white",
                        ]}
                        githubUrl="https://github.com/seo1a/jonmat-searcher"
                        deployUrl="https://jonmat-searcher.vercel.app"
                        projectColor="jmt"
                        onMediaLoad={handleLoaded}
                    >
                        <p><span className="underline decoration-wavy decoration-blue-400 font-bold">JMT Searcher</span>는 맛집의 지도 상 위치 정보와 여러 플랫폼의 리뷰 및 사진을 한 화면에서 확인할 수 있는 반응형 웹 애플리케이션입니다.</p>

                        <p>상단 검색창을 통해 식당 및 카페를 검색할 수 있으며, <span className="underline decoration-wavy decoration-blue-400 font-bold">자동완성 드롭다운</span>을 제공합니다.</p>

                        <p>검색이 완료되면 카카오맵 API를 활용해 식당의 위치를 <span className="underline decoration-wavy decoration-blue-400 font-bold">지도에 표시</span>합니다. 플랫폼 버튼을 통해 해당 식당의 네이버와 구글 <span className="underline decoration-wavy decoration-blue-400 font-bold">리뷰 및 사진을 조회</span>할 수 있습니다.</p>

                        <p>리뷰 클릭 시 <span className="underline decoration-wavy decoration-blue-400 font-bold">원본 게시글로 이동</span>하고 사진은 <span className="underline decoration-wavy decoration-blue-400 font-bold">클릭 시 확대</span>해 확인할 수 있습니다.</p>

                        <p>네이버 리뷰는 네이버 검색 API의 블로그·이미지 API를, 구글 리뷰는 Google Places API의 리뷰, 사진, 별점 데이터를 활용했습니다.</p>

                        <p><span className="underline decoration-wavy decoration-blue-400 font-bold">Vercel Serverless Functions</span>를 통해 각 플랫폼의 리뷰, 사진 데이터를 처리합니다.</p>

                        <p>카카오맵 리뷰의 경우 정책 변경으로 인해 기존 텍스트 리뷰 수집 방식이 불가능해졌으며, 이에 따라 카카오맵 리뷰 페이지로 직접 이동할 수 있는 방식으로 기능을 수정해 대응했습니다.</p>

                        <p><span className="underline decoration-wavy decoration-blue-400 font-bold">반응형 디자인</span>을 제공합니다.</p>
                    </ProjectSection>            

                    <ProjectSection
                        title="Animal Crossing"
                        image={animalCrossingImg}
                        videos={[animalCrossingVideo]}
                        badges={[
                            "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                            "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
                            "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white",
                            "https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=gsap&logoColor=000",
                            "https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"             
                        ]}
                        githubUrl="https://github.com/seo1a/animal-crossing"
                        deployUrl="https://animal-crossing-henna.vercel.app/"
                        projectColor="animal"
                        onMediaLoad={handleLoaded}
                    >
                        <p><span className="underline decoration-wavy decoration-emerald-400 font-bold">모아봐요 동물의 숲</span>은 동물의 숲 주민 정보를 <span className="underline decoration-wavy decoration-emerald-400 font-bold">조회·검색·정렬</span>할 수 있는 반응형 웹 애플리케이션입니다.</p>

                        <p>Nookipedia의 Animal Crossing API를 활용했으며, 주민 카드는 GSAP 기반 <span className="underline decoration-wavy decoration-emerald-400 font-bold">확대 및 Flip 애니메이션</span>을 적용해 클릭 시 주민의 상세 정보를 표시합니다.</p>

                        <p>카드의 색상은 API의 주민 고유색상 파라미터에 따라 정해집니다.</p>

                        <p>검색창에서는 이름 <span className="underline decoration-wavy decoration-emerald-400 font-bold">검색</span>과 <span className="underline decoration-wavy decoration-emerald-400 font-bold">자동완성</span> 기능이 제공됩니다.</p>
                        <p>또한, 검색창 상단에 <span className="underline decoration-wavy decoration-emerald-400 font-bold">기준 정렬 필터링</span>을 제공해 원하는 주민을 빠르게 탐색할 수 있습니다.</p>

                        <p>API의 페이지네이션 미지원으로 무한 스크롤 대신 <span className="underline decoration-wavy decoration-emerald-400 font-bold">localStorage와 React Query 캐싱</span>을 적용해 네트워크 요청을 줄이고 초기 렌더링 속도를 최적화했습니다.</p>

                        <p><span className="underline decoration-wavy decoration-emerald-400 font-bold">반응형 디자인</span>을 제공합니다.</p>
                    </ProjectSection>     
               
                    <ProjectSection
                        title="Movie Project"
                        image={movieProjectImg}
                        videos={[movieProjectVideo]}
                        badges={[
                            "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                            "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
                            "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white",
                            "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white",
                            "https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"
                        ]}
                        githubUrl="https://github.com/seo1a/movie-projct-nextjs"
                        deployUrl="https://movie-project-nextjs-five.vercel.app/"
                        projectColor="movie"
                        onMediaLoad={handleLoaded}
                    >
                        <p><span className="underline decoration-wavy decoration-red-400 font-bold">Movie Project</span>는 현재 상영 중인 영화 목록을 <span className="underline decoration-wavy decoration-red-400 font-bold">조회·검색·정렬·즐겨찾기</span>할 수 있는 반응형 웹 애플리케이션입니다.</p>

                        <p>검색창에 영화 제목을 입력하면 <span className="underline decoration-wavy decoration-red-400 font-bold">자동완성 검색어</span>가 드롭다운으로 표시됩니다.</p>

                        <p>홈 화면에서 기본 정렬(기본 API 정렬), 평점 높은 순, 개봉 최신 순, 개봉 오래된 순의 <span className="underline decoration-wavy decoration-red-400 font-bold">4가지 기준으로 정렬</span> 가능합니다</p>

                        <p>영화 포스터 이미지 클릭 시 <span className="underline decoration-wavy decoration-red-400 font-bold">영화 상세 정보</span>를 표시합니다.</p>

                        <p>각 영화에 하트 아이콘을 눌러 <span className="underline decoration-wavy decoration-red-400 font-bold">즐겨찾기</span>에 저장할 수 있습니다. 즐겨찾기 리스트는 <span className="underline decoration-wavy decoration-red-400 font-bold">local storage</span>에 저장되어 새로고침 후에도 유지됩니다.</p>

                        <p>유저가 클릭으로 <span className="underline decoration-wavy decoration-red-400 font-bold">다크/라이트 모드</span> 간 전환할 수 있습니다.</p>

                        <p>useMemo와 useCallback을 활용하여 불필요한 리렌더링을 방지하고 성능을 최적화했습니다.</p>

                        <p><span className="underline decoration-wavy decoration-red-400 font-bold">반응형 디자인</span>을 제공합니다.</p>
                    </ProjectSection>     
                </div>

                <Footer/>
            </section>
        </>
    );
}