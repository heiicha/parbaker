// src/App.js
import React from 'react';
import './input.css'; // Import Tailwind and custom styles

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <h1 className="text-center text-3xl">Baobei Recipe & Timer</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-8">
        {/* Egg Timer */}
        <div className="mb-8">
          <h2 className="text-2xl mb-4">Egg Timer</h2>
          {/* Placeholder for Egg Timer */}
          <div className="bg-gray-100 p-4 rounded-lg">
            {/* Egg Timer Form */}
          </div>
        </div>

        {/* Recipe Converter */}
        <div>
          <h2 className="text-2xl mb-4">Recipe Converter</h2>
          {/* Placeholder for Recipe Converter */}
          <div className="bg-gray-100 p-4 rounded-lg">
            {/* Recipe Converter Form */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <p className="text-center">&copy; 2025 Baobei. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
