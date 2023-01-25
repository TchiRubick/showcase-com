import React, { useState, useEffect, type SyntheticEvent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const formatEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Letstalk: React.FC = () => {
  const [email, setEmail] = useState<string>('Tophy');
  const [active, setActive] = useState<boolean>(false);
  
  const validEmail = () => {
    if (formatEmail.test(email))
    {
      setActive(true);
    }
    else
    {
      setActive(false);
    }
  };
  
  useEffect(() => {
    validEmail();
  },[email]);

  const handleChange = (e: SyntheticEvent) => {
    const { target } = e;
    const { value } = target as { value: string } & EventTarget;
    setEmail(value);
  };

  const handleClick = () => {
    alert(email);
  };

  return(
    <div className="dark:bg-slate-800 pt-10">
      <div>
        <Header/>
      </div> 
      <div className="flex flex-nowrap place-content-center h-96 sm:w-auto  ">
        <div className="flex flex-col place-content-center bg-white bg-opacity-5 backdrop-blur-lg space-y-6 rounded-lg">
          <div className="form-control w-96 max-w-xs">
            <label className="label">
              <span className="label-text text-lg text-blue-300 font-bold">
                Adress Email
              </span>
            </label>
            <input 
              type="text" 
              placeholder="info@gmail.com"
              className="input input-info w-3/4 max-w-xs bg-inherit mx-auto" 
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="mx-auto">
            <button 
              className="btn btn-sm md:btn-sm lg:btn-sm bg-indigo-800 hover:bg-indigo-600 h-24" 
              onClick={handleClick} 
              disabled={!formatEmail.test(email)}>
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

export default Letstalk;