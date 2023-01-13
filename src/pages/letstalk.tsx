import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const letstalk: React.FC = () => {
  return(
    <div>
      <div>
        <Header/>
      </div> 
      <div className="flex flex-nowrap drop-shadow-lg place-content-center h-96 rounded sm:w-auto">
        <div className="">
          <img className="w-52 h-96 object-cover" src="https://sb.kaleidousercontent.com/67418/604x802/8d3b057fdf/people1-bg22.jpg" alt="coco" 
          />
        </div>
        <div 
          style={{
            backgroundImage:'url("https://images.iphonephotographyschool.com/22682/How-To-Blur-Background-On-iPhone.jpg")'
          }}
          className=" bg-cover flex flex-col place-content-center space-y-6">
          <div className="form-control w-96 max-w-xs">
            <label className="label">
              <span className="label-text text-violet-700 font-semibold">What is your name?</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="mx-auto">
            <button className="btn  md:btn-md lg:btn-lg">
              Click
            </button>
          </div>
        </div>
      </div> 
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default letstalk;