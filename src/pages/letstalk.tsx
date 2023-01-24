import React, { useState, useEffect, type SyntheticEvent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Letstalk: React.FC = () => {
  const [email, setEmail] = useState<string>('Tophy');
  const [active, setActive] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);


  const validateEmail = () =>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    {
      setActive(true);
    }
      else
      {
        setActive(false);
      }
  };

  useEffect(() => {
    setCounter(counter + 1);
      if (email) 
      {
        setActive(true);
      } 
        else 
        {
          setActive(false);
        }
  },[validateEmail]);

  const handleChange = (e: SyntheticEvent) => {
    const { target } = e;
    const { value } = target as { value: string } & EventTarget;
    setEmail(value);
  };

  const handleClick = () => {
    alert(email);
  };

  return(
    <div>
      <div>
        <Header/>
      </div> 
      {counter}
      <div className="flex flex-nowrap place-content-center h-96 sm:w-auto  ">
        <div className="flex flex-col place-content-center bg-white bg-opacity-5 backdrop-blur-lg space-y-6">
          <div className="form-control w-96 max-w-xs">
            <label className="label">
              <span className="label-text text-lg text-violet-700 font-bold">
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
              disabled={!active}>
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