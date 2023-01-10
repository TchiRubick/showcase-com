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
    <div className='flex justify-end flex-col'>
      <span className='text-blue-700 font-semibold font-sans mb-7'>
        {title}
      </span>
      <div>
        <h1 className='text-black text-5xl font-sans font-bold mb-7'>
          {text}
        </h1>
      </div>
      <div>
        <span className='text-sm'>
          {text2}
        </span>
      </div>
      <div className='bnt btn-primary w-1/4 h-9 p-auto mt-6 px-3 pt-1 cursor-pointer'>
        {children}
      </div>
    </div>
  );
};

export default Body2