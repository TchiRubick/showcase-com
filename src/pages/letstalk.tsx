import React, { useState, type SyntheticEvent } from "react";
import {  type NextPage } from "next";
import Layout from "../components/Layout";

const formatEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Letstalk: NextPage = () => {
  const [email, setEmail] = useState<string>('Tophy');
  
  const handleChange = (e: SyntheticEvent) => {
    const { target } = e;
    const { value } = target as { value: string } & EventTarget;
    setEmail(value);
  };

  const handleClick = (p: string) => () => {
    alert(p);
  };

  return(
    <div className="dark:bg-slate-800  pt-10">
      <Layout>
        <div className="flex flex-nowrap place-content-center mt-5 h-96 sm:w-auto">
          <div className="flex flex-col place-content-center bg-gray-500 bg-opacity-20 shadow-lg backdrop-blur-lg dark:bg-white dark:bg-opacity-5 dark:backdrop-blur-lg space-y-6 rounded-lg">
            <div className="form-control w-96 max-w-xs">
              <label className="label">
                <span className="label-text text-lg text-blue-300 font-bold">
                  Adress Email
                </span>
              </label>
              <input 
                type="text" 
                placeholder="info@gmail.com"
                className="input input-info w-3/4 max-w-xs dark:text-green-50 bg-inherit mx-auto" 
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="mx-auto">
              <button 
                type="button"
                className="btn btn-sm md:btn-sm lg:btn-sm cursor-allowed  hover:bg-blue-600 bg-blue-700 h-24" 
                onClick={handleClick('1')} 
                disabled = {!formatEmail.test(email)}>
                Click
              </button>
            </div>
          </div>
        </div> 
      </Layout>
    </div>
  );
};

export default Letstalk;