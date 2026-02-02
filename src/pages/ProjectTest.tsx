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

export default function ProjectTest(){
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
                            } transition-opacity duration-500 bg-top bg-repeat-y pt-[10vh] pb-[25vh]`} 
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
                        <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">
                            지도 기반으로 여러 플랫폼의 리뷰를 한 번에 비교할 수 있는 맛집 검색 웹 앱
                        </h3>

                       
                        <p>검색창을 통해 위치 정보 입력 및 오픈 지도 표시</p>
                        <p>검색 시 <span className="underline decoration-wavy decoration-blue-400 font-bold">자동완성</span> 기능 제공</p>
                        <p><span className="underline decoration-wavy decoration-blue-400 font-bold">카카오맵 API</span>를 활용한 지도 상 위치 표시</p>
                        <p>네이버, 구글 플랫폼 리뷰 통합 (Naver 검색, Google Places API 사용).</p>
                        <p>플랫폼 선택 시 리뷰와 사진 표시</p>
                        <p><span className="underline decoration-wavy decoration-blue-400 font-bold">반응형 디자인</span> 제공</p>


                        <p><span className="underline decoration-wavy decoration-blue-400 font-bold">JMT Searcher</span>는 맛집을 검색하면 지도 상 위치 정보와 여러 플랫폼의 리뷰 및 사진을 한 화면에서 확인할 수 있는 반응형 웹 애플리케이션입니다.</p>

                        <p>상단 검색창을 통해 식당 및 카페를 <span className="underline decoration-wavy decoration-blue-400 font-bold">검색</span>할 수 있으며, <span className="underline decoration-wavy decoration-blue-400 font-bold">자동완성 드롭다운</span>을 제공해 보다 빠르고 정확한 검색이 가능하도록 구현했습니다.</p>

                        <p>검색이 완료되면 카카오맵 API를 활용해 <span className="underline decoration-wavy decoration-blue-400 font-bold">식당의 위치를 지도에 표시</span>하고, 플랫폼 버튼을 통해 <span className="underline decoration-wavy decoration-blue-400 font-bold">네이버와 구글 리뷰 및 사진을 조회</span>할 수 있습니다.</p>
                        <p>네이버 리뷰는 네이버 검색 API의 블로그·이미지 API를, 구글 리뷰는 Google Places API의 리뷰, 사진, 별점 데이터를 활용했습니다.</p>

                        <p>플랫폼 선택 시 화면 우측에는 <span className="underline decoration-wavy decoration-blue-400 font-bold">리뷰 목록</span>이, 하단에는 <span className="underline decoration-wavy decoration-blue-400 font-bold">관련 사진</span>이 표시되도록 레이아웃을 구성했으며, 리뷰 클릭 시 원본 게시글로 이동하고 사진은 클릭 시 확대해 확인할 수 있습니다.</p>

                        <p>카카오맵 리뷰의 경우 정책 변경으로 인해 기존 텍스트 리뷰 수집 방식이 불가능해졌으며, 이에 따라 <span className="underline decoration-wavy decoration-blue-400 font-bold">카카오맵 리뷰 페이지로 직접 이동</span>할 수 있는 방식으로 기능을 수정해 대응했습니다.</p>
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
                        <p><span className="underline decoration-wavy decoration-emerald-400 font-bold">모아봐요 동물의숲</span>은 게임 동물의숲 이웃의 정보를 확인하고 검색 및 기준에 따른 모아보기를 할 수 있는 반응형 웹 애플리케이션입니다.</p>
                        <p>Animal Crossing 프로젝트는 데이터 중심의 기능 구현보다는, <span className="underline decoration-wavy decoration-emerald-400 font-bold">시각적 인터랙션</span>과 <span className="underline decoration-wavy decoration-emerald-400 font-bold">사용자 경험(UI/UX)</span>에 집중하기 위해 진행한 개인 프로젝트입니다.</p>
                        <p>Nookipedia API를 통해 제공되는 제한적인 정보 구조를 가진 데이터를 바탕으로, 이를 어떻게 시각적으로 흥미롭게 표현할 수 있을지에 대해 고민하며 기획을 시작했습니다.</p>

                        <p>특히 본 프로젝트를 통해 <span className="underline decoration-wavy decoration-emerald-400 font-bold">GSAP</span> 애니메이션 라이브러리를 학습하고 적용하는 것을 주요 목표로 삼았습니다.</p>
                        <p>카드 호버 시 확대 효과, 클릭 시 카드가 뒤집히는 <span className="underline decoration-wavy decoration-emerald-400 font-bold">Flip 애니메이션</span> 등을 구현하여, 사용자 인터랙션에 따라 자연스럽게 반응하는 화면 흐름을 구성했습니다.</p>

                        <p>또한 시각적 완성도를 높이기 위해, Animal Crossing 게임 특유의 아기자기하고 귀여운 분위기를 웹페이지 전반에 반영하고자 했습니다.</p>
                        <p>로고와 폰트는 게임의 아이덴티티를 참고하여 선택하였으며, 각 주민의 고유 색상을 카드 UI에 적용해 시각적인 다양성과 구분감을 주었습니다.</p>

                        <p>본 프로젝트는 외부 API로부터 받아온 데이터를 기반으로, 애니메이션과 디자인 요소를 적극적으로 활용해 정보 전달과 시각적 경험을 동시에 만족시키는 UI를 구현하는 데 초점을 둔 프로젝트입니다.</p>
                    </ProjectSection>     
               
                    <ProjectSection
                        title="Movie Projet"
                        image={movieProjectImg}
                        videos={[movieProjectVideo]}
                        badges={[
                            "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                            "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
                            "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white",
                            "https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"
                        ]}
                        githubUrl="https://github.com/seo1a/movie-projct-ts"
                        deployUrl="https://movie-project-ts-eosin.vercel.app"
                        projectColor="movie"
                        onMediaLoad={handleLoaded}
                    >
                        <p><span className="underline decoration-wavy decoration-red-400 font-bold">Movie Project</span>는 현재 상영 중인 영화 목록을 조회·검색·정렬·즐겨찾기할 수 있는 반응형 웹 애플리케이션입니다.</p>
                        <p>이 프로젝트는 과거 프론트엔드 개발자로서의 기초 역량과 개인적인 기술 숙련도를 향상시키는 것을 목표로 시작한 프로젝트입니다.</p>
                        <p>JavaScript 언어로만 구현했던 jonmat-searcher 프로젝트 이후, TypeScript를 처음으로 학습하고 실전에서 적용해보기 위한 목적도 함께 담고 있습니다.</p>

                        <p>또한 웹 서비스에서 필수적으로 사용되는 기능인 영화 데이터 <span className="underline decoration-wavy decoration-red-400 font-bold">API 연동, 검색 및 정렬, 다크 모드, 즐겨찾기 기능</span> 등을 직접 구현하며,</p>
                        <p>프론트엔드 개발자가 기본적으로 이해하고 있어야 할 상태 관리, UI/UX 처리, 컴포넌트 구조 설계에 대한 전반적인 학습을 진행했습니다.</p>

                        <p>본 프로젝트는 화려한 기능보다는, 프론트엔드 개발자가 기본적으로 이해하고 있어야 할 기능들을 실제 서비스 흐름 안에서 구현해보는 것에 중점을 두었으며,</p>
                        <p>TypeScript 기반 React 개발에 대한 이해도를 높이고, 실무에 가까운 코드 구조를 경험하는 것을 목표로 구현하였습니다.</p> 
                    </ProjectSection>     
                </div>
            </section>
        </>
    );
}