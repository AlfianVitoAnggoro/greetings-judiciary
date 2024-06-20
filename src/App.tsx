// App.tsx
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import FireworksComponent from './components/Fireworks';

const App: React.FC = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const handleButtonClick = () => {
    setShowTitle(true);
    setTimeout(() => {
      setAnimate(true);
      setShowFireworks(true);
      // setTimeout(() => setShowFireworks(false), 5000); // Stop fireworks after 5 seconds
    }, 10); // Slight delay to trigger animation
  };

  return (
    <div className="bg-blue-800 h-screen w-screen flex justify-center items-start relative overflow-hidden">
      {showFireworks && (
        <div className="absolute top-0 z-20 w-screen h-screen">
          <FireworksComponent />
        </div>
      )}
      <Spline scene="https://prod.spline.design/1WM706dIe3g8Bbt0/scene.splinecode" />
      <div className="absolute z-10 top-1/2 left-auto bottom-1/2 flex justify-center items-center gap-5 transform -translate-y-1/2">
        <div className="flex justify-center items-center gap-5 bg-black px-5 shadow bg-opacity-35 rounded-xl border border-white">
          <div className="w-40 h-52 rounded-xl">
            <img
              src="public/2010631170044-removebg-preview.png"
              alt="Foto"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-white text-5xl font-bold flex ">
            <h1>Alfian Vito Anggoro</h1>
            {showTitle && <span className="mr-2">,</span>}
            {showTitle && (
              <h1
                className={`transform transition-all duration-1000 ${
                  animate
                    ? 'opacity-100 translate-x-0 scale-100'
                    : 'opacity-0 translate-x-5 scale-50'
                }`}
              >
                S.Kom
              </h1>
            )}
          </div>
        </div>
      </div>
      <div className="absolute z-10 bottom-10">
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 w-40 text-white font-bold py-2 px-4 rounded"
        >
          ACC
        </button>
      </div>
    </div>
  );
};

export default App;
