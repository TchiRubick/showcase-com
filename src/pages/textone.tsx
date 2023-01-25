import React from "react";
import { FaHome, FaHouseUser, FaScroll } from 'react-icons/fa';

const textone = () => {
  
  return (
      <div>
         <div className="  ml-20 mt-20 p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 ">
            <div>
            <FaHome className="inline-block align-middle"/>
                 <div className="font-bold text-black text-2xl">Property Insurance</div>
                 
                 <div className="pt-5 leading-8 text-slate-500 ">Real estate is a class of "realproperty" that <br/>includes land and anything permanently <br/> attached whether natural.</div>
            </div>
            
            <div>
                <FaScroll/>
                 <div className="font-bold text-black text-2xl">Tax Advantage</div>
                 <div className="pt-5 leading-8 text-slate-500">Real estate is a class of "realproperty" that <br/>includes land and anything permanently <br/> attached whether natural.</div>
            </div>
            <div>
                <FaHouseUser/>
                 <div className="font-bold text-black text-2xl">Lowest Comission</div>
                 <div className="pt-5 leading-8 text-slate-500">Real estate is a class of "realproperty" that <br/>includes land and anything permanently <br/> attached whether natural.</div>
            </div>
        </div>  
        
      </div>

    );
};

export default textone;