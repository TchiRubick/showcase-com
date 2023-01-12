import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const letstalk: React.FC = () => {
  return(
    <div>
      <div>
        <Header/>
      </div>
      <div className="bg-slate-500 shadow-current drop-shadow-lg rounded w-96 h-96 flex flex-col mx-auto place-content-center space-y-6">
        <div className="mx-auto">
          <input 
            type="text" 
            placeholder="" 
            className="input input-bordered w-96 max-w-xs" 
          />
        </div>
        <div className="mx-auto">
          <button className="btn  md:btn-md lg:btn-lg">
            Login
          </button>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default letstalk;