import profileSrc from "./assets/profile.png";
import GithubIcon from "./icons/Github";
import MediumIcon from "./icons/Medium";
import image from "./assets/image.jpg";
import { useRef } from "react";
import { useMouseOverZoom } from "./hooks";

function App() {

  const source = useRef<HTMLImageElement>(null);
  const target = useRef<HTMLCanvasElement>(null);

  // call the custom hook
  useMouseOverZoom(source, target);

  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-indigo-200 to-indigo-50 relative">
      <div className="grid grid-cols-12 gap-6 h-full">
        <div className="col-span-12 md:col-span-6 px-12 md:px-24 flex items-center relative">
          {/* SVG PARTICLES */}
          <div className="absolute top-12 right-12 z-[5]">
            <svg
              className="w-16 h-16 md:w-32 md:h-32"
              viewBox="0 0 158 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.65"
                d="M105.214 49.7957L35.7542 101.519L25.6902 15.5035L105.214 49.7957Z"
                fill="#6366F1"
              />
              <path
                opacity="0.65"
                d="M141.781 136.398L96.9053 130.552L124.406 94.6114L141.781 136.398Z"
                fill="#6366F1"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 md:bottom-16 left-12 md:left-24">
            <svg className="w-16 h-16 md:w-32 md:h-32" viewBox="0 0 218 187" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.65" d="M139.241 46.2015L110.502 156.471L29.3759 76.4473L139.241 46.2015Z" fill="#6366F1"/>
              <path opacity="0.65" d="M192.519 137.172L160.697 104.995L204.474 93.5246L192.519 137.172Z" fill="#6366F1"/>
              <path opacity="0.65" d="M186.019 36.8746L153.989 33.5467L172.886 7.47197L186.019 36.8746Z" fill="#6366F1"/>
            </svg>
          </div>
          {/* CONTENT */}
          <div className="flex flex-col items-start space-y-4 relative z-10">
            <div className="flex flex-col items-start space-y-1">
              <h3 className="text-2xl text-gray-700 opacity-50">
                React Tutorial
              </h3>
              <h1 className="text-5xl text-indigo-600 font-bold leading-[1.2]">
                Mouse-Over Zoom Effect
              </h1>
            </div>
            <a href="https://www.instagram.com/a2.coder/" className="cursor-pointer rounded-full bg-gray-50 hover:bg-indigo-50 py-2 pl-2 pr-4 flex items-center space-x-2 border border-indigo-200 hover:border-indigo-300 transition ease-in-out duration-500">
              <img
                src={profileSrc}
                alt="a2.coder"
                className="w-8 h-8 rounded-full object-cover object-center"
              />
              <div className="text-lg font-semibold text-gray-800">
                a2.coder
              </div>
            </a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/a2-coder/tutorial-mouseover-zoom" className="text-indigo-400 hover:text-gray-800 transition duration-500 ease-in-out">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-indigo-400 hover:text-gray-800 transition duration-500 ease-in-out">
                <MediumIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 border-t-8 md:border-t-0 md:border-l-8 border-indigo-500 relative z-10">
          <img ref={source} src={image} className="w-full h-full bg-gray-100 cursor-crosshair object-cover" />
          <canvas ref={target} className="absolute pointer-events-none bottom-full translate-y-1/2 left-1/2 -translate-x-1/2 md:translate-y-0 md:translate-x-0 md:bottom-16 md:-left-16 border-8 border-indigo-500 w-32 h-32 z-10 bg-gray-200" />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
