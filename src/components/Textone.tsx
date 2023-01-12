import React from "react";
import {   FaEyeSlash, FaHome, FaHouseUser, FaLocationArrow, FaScroll, FaSearchLocation } from 'react-icons/fa';

const Textone: React.FC = () => {
  
  return (
      <div>
         <div className="  ml-20 mt-20 p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 ">
            <div>
              <FaSearchLocation className="pl-20 pt-16 absolute " size={150} color="grey" /> 
              <FaHome className=" pl-14  relative brightness-0" size={150}/> 
              <div className="font-bold text-black text-2xl mt-10">Property Insurance</div>
              <div className="pt-5 leading-8 text-slate-500 ">Real estate is a class of "realproperty" that <br/>includes land and anything permanently <br/> attached whether natural.</div>
            </div>
            
            <div>
              <FaHouseUser className="pl-20 pt-16 absolute " size={150} color="grey" />
              <FaScroll className=" pl-14  relative brightness-0" size={150}/>
              <div className="font-bold text-black text-2xl mt-10">Tax Advantage</div>
              <div className="pt-5 leading-8 text-slate-500">Real estate is a class of "realproperty" that <br/>includes land and anything permanently <br/> attached whether natural.</div>
            </div>
            <div>
                <FaEyeSlash className="pl-20 pt-16 absolute " size={150} color="grey" />
                <FaHouseUser className=" pl-14  relative brightness-0" size={150} />
                 <div className="font-bold text-black text-2xl mt-10">Lowest Comission</div>
                 <div className="pt-5 leading-8 text-slate-500">Real estate is a class of "realproperty" that <br/>includes land and anything permanently <br/> attached whether natural.</div>
            </div>
        </div>  
        
      </div>

    );
};

export default Textone;

