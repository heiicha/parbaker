import React from "react";
import logo from './assets/parbake.png'

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-bgcolor ">
      {/* Illustration Section */}
      <div className="mb-8">
        <img
          src={logo}
          alt="parbake mascot thing"
          className="w-64 h-64 object-scale-down object-center"
        />
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col items-center space-y-2 ">
        <a
          href="/egg-timer"
          className="font-silkscreen font-bold text-3xl bg-buttoncolor text-white py-3 px-10 text-lg rounded-xl shadow-shadow text-center hover:bg-buttonhover transition-all duration-300"
          style={{
            boxShadow: '2px 4px 15px #8B6F00',
          }}
        >
          Egg Timer
        </a>
        <a
          href="/recipe-converter"
          className="font-silkscreen font-bold text-3xl bg-buttoncolor text-white py-3 px-10 text-lg rounded-xl shadow-shadow hover:bg-buttonhover text-center transition-all duration-300"
        >
        Recipe Converter
        </a>
      </div>

      </div>
  );
}

export default App;
