import backgroundImage from "../assets/background.png";

export default function Loading() {
  return (
    <section 
            className="min-h-screen bg-cover bg-center bg-no-repeat bg-sky-50 pt-[15vh] pb-[25vh]" 
            style={{ backgroundImage: `url(${backgroundImage})` }} 
        > 
      <div className="text-center space-y-8 flex flex-col items-center justify-center h-[calc(100vh-15vh-25vh)]">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-gray-600 mx-auto"></div>
        <div>
          <h2 className='[font-family:"pf-pixelscript",sans-serif] text-3xl font-bold text-gray-800 mb-3'>Loading now...</h2>
          <p className='[font-family:"high1-wonchuri-body",sans-serif] text-lg text-gray-600'>잠시만 기다려주세요!</p>
        </div>
      </div>
    </section>
  );
}