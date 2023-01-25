import React, { type ReactNode } from 'react';

type tProps = {
  children: ReactNode;
  title: string;
  text: string;
  text2:string;
};

const Body2: React.FC<tProps> = (props) => {
  const { children, title, text, text2 } = props;

  return (
    <div className='flex flex-col space-y-12'>
      <span className='text-blue-700 font-semibold font-sans dark:text-slate-100'>
        {title}
      </span>
      <div>
        <h1 className='text-black text-6xl font-sans font-bold dark:text-slate-100'>
          {text}
        </h1>
      </div>
      <div>
        <span className='text-sm dark:text-slate-100'>
          {text2}
        </span>
      </div>
      <div>
        <button className='active:bg-blue-800 hover:bg-blue-600 bg-blue-700 h-11 w-40 cursor-pointer font-medium  text-white text-sm dark:text-slate-100'>
          {children}
        </button> 
      </div>
    </div>
  );
};

export default Body2