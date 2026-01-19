import backgroundImage from "../assets/background.png";
import profileImage from "../assets/profile_image.jpg";

export default function AboutMe(){
    return(
        <section 
            className="min-h-screen bg-cover bg-center bg-no-repeat pt-[15vh] pb-[25vh]" 
            style={{ backgroundImage: `url(${backgroundImage})` }} 
        > 
            <h1 className='[font-family:"pf-pixelscript",sans-serif] text-4xl lg:text-5xl text-center font-bold mb-[2vh] lg:mb-[8vh]'>About Me</h1> 
            <div className="relative mx-auto w-[85vw] lg:w-[45vw] mt-[3vh] pt-[4vh] lg:pt-[5vh] pb-[10vh] rounded-4xl overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-60"></div>

                <div className="relative z-10">
                    <img src={profileImage} className="mx-auto w-[55vw] lg:w-[20vw] h-auto"/>

                    <div className='[font-family:"high1-wonchuri-body",sans-serif] text-[14px] lg:text-[18px] mt-[5vh] mx-[8vw] text-center'>
                        <p>시각적으로 흥미를 끄는 웹페이지를 구현하는 과정에서 가장 큰 즐거움을 느끼는 프론트엔드 개발자입니다.</p>
                        <p>단순히 화려한 화면을 만드는 것을 넘어, 기획 의도와 서비스의 목적을 이해하고 이를 사용자가 직관적으로 경험할 수 있는 화면과 흐름으로 구현하는 것을 중요하게 생각합니다.</p>
                        <p>사용자가 한눈에 관심을 갖고 자연스럽게 다음 행동으로 이어지도록 유도하는 인터페이스와 경험을 고민합니다.</p>

                        <p>다양한 레퍼런스 사이트를 탐색하며 어떤 요소가 사용자에게 ‘궁금함’을 남기는지, 어떤 연출이 소통을 만들어내는지를 끊임없이 분석하고 이를 제 작업에 적용해왔습니다.</p>
                        <p>스크롤을 멈추지 않게 하는 흐름, 설명이 살아 움직이는 듯한 연출, 그리고 다시 한 번 찾아보고 싶어지는 인상을 남기는 것이 제가 지향하는 웹 경험입니다.</p>

                        <p>최근에는 AI를 개발 과정의 보조 도구로 활용하며 아이디어를 확장하고 구현 방식을 빠르게 검토하고 있습니다.</p>
                        <p>다만 구조 설계와 사용자 흐름에 대한 판단은 기본적인 이해를 바탕으로 직접 고민하며, 새로운 도구를 활용하되 기본을 잃지 않는 개발을 지향합니다.</p>

                        <p>동시에 상태 관리, 컴포넌트 구조, 성능과 유지보수성을 고려한 설계 등 눈에 잘 드러나지 않는 영역까지 탄탄하게 구축하는 것을 중요하게 생각합니다.</p>
                        <p>화려함과 안정성, 트렌드와 기본기 사이의 균형을 통해 더 나은 사용자 경험을 제공하는 프론트엔드 개발자로 성장해 나가고자 합니다.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}