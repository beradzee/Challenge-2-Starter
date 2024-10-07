import React from "react";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className="flex items-center justify-center px-6 sm:px-16">
        <div className="max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="flex items-center justify-center px-6 sm:px-16 bg-primary sm:px16">
        <div className="max-w-[1280px] w-full">
          <Foot />
        </div>
      </div>
    </div>
  );
};

export default App;
