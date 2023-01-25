import React, { type ReactNode } from 'react';

type tProps = {
  children: ReactNode;
  title: string;
};

const Menu: React.FC<tProps> = (props) => {
  const { children, title } = props;

  return (
    <div className="flex flex-nowrap flex-col mb-10">
      <div className='text-2xl text-inherit mb-5 dark:text-slate-100 '>
        {title}
      </div>   
      <div>
        <span className="text-sm text-black dark:text-slate-100">
          {children}
        </span>
      </div>
    </div>
  )
}

export default Menu