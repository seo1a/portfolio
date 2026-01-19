import backgroundImage from "../assets/background.png";
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


export default function Project(){
    return(
        <section
            className="min-h-screen bg-top bg-repeat-y pt-[10vh] pb-[25vh]" 
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "100% auto",
            }}
            >
            <h1 className="text-6xl text-center mb-[15vh]">Project</h1>

            <div className="flex flex-col gap-[25vh] text-center">
                <div>
                    <h1 className="text-4xl mb-[5vh]">STRXXT</h1>
                    <div className="relative mx-auto w-[65vw] pt-[8vh] pb-[10vh] rounded-4xl overflow-hidden">
                        {/* 배경 레이어 */}
                        <div className="absolute inset-0 bg-white opacity-60"></div>

                        {/* 콘텐츠 레이어 */}
                        <div className="relative z-10">
                            <img src={strxxtImg} className="mx-auto w-[50vw] mb-[8vh]" />
                            <video
                                src={strxxtVideo1}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="mx-auto w-[50vw] mb-[8vh]"
                            />
                            <video
                                src={strxxtVideo2}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="mx-auto w-[50vw] mb-[8vh]"
                            />
                            <video
                                src={strxxtVideo3}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="mx-auto w-[50vw] mb-[8vh]"
                            />
                            <video
                                src={strxxtVideo4}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="mx-auto w-[50vw] mb-[8vh]"
                            />
                            <div className='mx-[15vw] text-center [font-family:"wonchuri",sans-serif] font-[400] text-[17px]'>
                                <p>STRXXT는 스트릿 패션 문화를 탐색하고 브랜드, 아이템을 소개하는 반응형 웹 매거진 애플리케이션입니다.</p>
                                <p>본 프로젝트는 그동안 학습한 프론트엔드 개발 전반의 기능과 표현 기법을 하나의 프로젝트에 종합적으로 적용해보기 위해 진행하였습니다. 패션을 주제로 한 소개형 웹페이지로, 적절한 외부 API가 존재하지 않아 직접 콘텐츠 소스를 수집하고 JSON 형식의 데이터로 구조화하여 사용했습니다.</p>

                                <p>본 프로젝트에서는 스크롤과 GSAP 애니메이션을 활용한 시각적 흐름과 사용자 경험 설계에 보다 집중했습니다. 설명 텍스트가 스크롤에 따라 동적으로 등장하는 효과, 가로 스크롤 기반 섹션 구성, 스크롤이 최하단에 도달하면 다음 페이지로 자연스럽게 전환되는 인터랙션 등을 구현하여, 사용자가 콘텐츠를 ‘읽는 것’보다 경험하며 탐색할 수 있도록 구성했습니다.</p>

                                <p>프로젝트의 성격에 따라 기능 우선순위와 UX 설계 방향이 달라져야 함을 체감하고 정리하는 계기가 된 프로젝트였습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="text-4xl mb-[5vh]">Jonmat Searcher</h1>
                    <div className="relative mx-auto w-[65vw] pt-[8vh] pb-[10vh] rounded-4xl overflow-hidden">
                        
                        <div className="absolute inset-0 bg-white opacity-60"></div>

                        <div className="relative z-10">
                            <img src={jonmatSearcherImg} className="mx-auto w-[50vw] mb-[8vh]" />
                            <video
                                src={jonmatSearcherVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="mx-auto w-[50vw] mb-[8vh]"
                            />
                            <div className='mx-[15vw] text-center [font-family:"wonchuri",sans-serif] font-[400] text-[17px]'>
                                <p>맛집을 검색하면 리뷰, 사진, 지도 상 위치 정보를 확인할 수 있는 반응형 웹 애플리케이션입니다.</p>
                                <p>네이버 블로그, 구글 플레이스, 카카오맵 총 3가지 플랫폼의 리뷰와 사진을 확인하고 비교할 수 있습니다.</p>

                                <p>맛집 검색기를 만들게 된 이유는 내가 직접 쓰고 싶은 웹서비스를 만들어보고 싶다는 생각에서였습니다.</p>
                                <p>꽤 오래 전 기획했고 Vanilla JS를 사용해 구현했던 첫 프로젝트였습니다.</p>
                                <p>그 당시에는 기술적으로 아쉬운 점이 상당히 많은 채로 끝마쳤던 프로젝트였는데,</p>
                                <p>이번에는 리액트, 자바스크립트 및 여러 다른 기술 스택을 사용해 다시 구현해보았습니다.</p>

                                <p>맛집 검색을 위해 여러 플랫폼을 일일이 방문하는 번거로움을 없애고,</p>
                                <p>3가지 플랫폼의 리뷰를 빠르게 비교할 수 있게 하기 위함을 첫번째 목표로 설정했습니다.</p>
                                <p>검색창에 맛집 이름을 검색하면 후기와 장소가 표시될 것임을 별도의 설명 없이도 알 수 있도록 구현하고 싶었습니다.</p>
                                <p>따라서 누구나 쉽게 쓸 수 있도록 직관적인 싱글 페이지 UI를 설계했으며, 모바일 최적화도 함께 고려했습니다.</p>
                                <p>맛집의 위치를 표시할 지도 api로는 네이버 지도 api의 search place 기능이 운영 종료된 관계로, 장소 검색 라이브러리가 제공되는 카카오맵 api를 선택했습니다.</p>
                                <p>사용자가 직접 맛집을 검색하고, 여러 플랫폼의 사진과 리뷰를 빠르게 비교하며 결정할 수 있는 경험을 만드는 것이 본 프로젝트의 핵심 목표입니다.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="text-4xl mb-[5vh]">Animal Crossing</h1>
                    <div className="relative mx-auto w-[65vw] pt-[8vh] pb-[10vh] rounded-4xl overflow-hidden">
                        
                        <div className="absolute inset-0 bg-white opacity-60"></div>

                        <div className="relative z-10">
                            <img src={animalCrossingImg} className="mx-auto w-[50vw] mb-[8vh]" />
                            <video
                                src={animalCrossingVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="mx-auto w-[50vw] mb-[8vh]"
                            />
                            <div className='mx-[15vw] text-center [font-family:"wonchuri",sans-serif] font-[400] text-[17px]'>
                                <p>모아봐요 동물의숲은 게임 동물의숲 이웃의 정보를 확인하고 검색 및 기준에 따른 모아보기를 할 수 있는 반응형 웹 애플리케이션입니다.</p>
                                <p>Animal Crossing 프로젝트는 데이터 중심의 기능 구현보다는, 시각적 인터랙션과 사용자 경험(UI/UX)에 집중하기 위해 진행한 개인 프로젝트입니다.</p>
                                <p>Nookipedia API를 통해 제공되는 제한적인 정보 구조를 가진 데이터를 바탕으로, 이를 어떻게 시각적으로 흥미롭게 표현할 수 있을지에 대해 고민하며 기획을 시작했습니다.</p>

                                <p>특히 본 프로젝트를 통해 GSAP 애니메이션 라이브러리를 학습하고 적용하는 것을 주요 목표로 삼았습니다.</p>
                                <p>카드 호버 시 확대 효과, 클릭 시 카드가 뒤집히는 Flip 애니메이션 등을 구현하여, 사용자 인터랙션에 따라 자연스럽게 반응하는 화면 흐름을 구성했습니다.</p>

                                <p>또한 시각적 완성도를 높이기 위해, Animal Crossing 게임 특유의 아기자기하고 귀여운 분위기를 웹페이지 전반에 반영하고자 했습니다.</p>
                                <p>로고와 폰트는 게임의 아이덴티티를 참고하여 선택하였으며, 각 주민의 고유 색상을 카드 UI에 적용해 시각적인 다양성과 구분감을 주었습니다.</p>

                                <p>본 프로젝트는 외부 API로부터 받아온 데이터를 기반으로, 애니메이션과 디자인 요소를 적극적으로 활용해 정보 전달과 시각적 경험을 동시에 만족시키는 UI를 구현하는 데 초점을 둔 프로젝트입니다.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="text-4xl mb-[5vh]">Movie Project</h1>
                    <div className="relative mx-auto w-[65vw] pt-[8vh] pb-[10vh] rounded-4xl overflow-hidden">
                        
                        <div className="absolute inset-0 bg-white opacity-60"></div>

                        <div className="relative z-10">
                            <img src={movieProjectImg} className="mx-auto w-[50vw] mb-[8vh]" />
                            <video
                                src={movieProjectVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="mx-auto w-[50vw] mb-[8vh]"
                            />
                            <div className='mx-[15vw] text-center [font-family:"wonchuri",sans-serif] font-[400] text-[17px]'>
                                <p>Movie Project는 현재 상영 중인 영화 목록을 조회·검색·정렬·즐겨찾기할 수 있는 반응형 웹 애플리케이션입니다.</p>
                                <p>이 프로젝트는 과거 프론트엔드 개발자로서의 기초 역량과 개인적인 기술 숙련도를 향상시키는 것을 목표로 시작한 프로젝트입니다.</p>
                                <p>JavaScript 언어로만 구현했던 jonmat-searcher 프로젝트 이후, TypeScript를 처음으로 학습하고 실전에서 적용해보기 위한 목적도 함께 담고 있습니다.</p>

                                <p>또한 웹 서비스에서 필수적으로 사용되는 기능인 영화 데이터 API 연동, 검색 및 정렬, 다크 모드, 즐겨찾기 기능 등을 직접 구현하며,</p>
                                <p>프론트엔드 개발자가 기본적으로 이해하고 있어야 할 상태 관리, UI/UX 처리, 컴포넌트 구조 설계에 대한 전반적인 학습을 진행했습니다.</p>

                                <p>본 프로젝트는 화려한 기능보다는, 프론트엔드 개발자가 기본적으로 이해하고 있어야 할 기능들을 실제 서비스 흐름 안에서 구현해보는 것에 중점을 두었으며,</p>
                                <p>TypeScript 기반 React 개발에 대한 이해도를 높이고, 실무에 가까운 코드 구조를 경험하는 것을 목표로 구현하였습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}