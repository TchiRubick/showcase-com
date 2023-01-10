import React, { type ReactNode } from 'react';

type tProps = {
  children: ReactNode;
  title: string;
  text: string;
};

const Menu: React.FC<tProps> = (props) => {
  const { children, title, text} = props;

  return (
    <div className="flex flex-nowrap flex-col mb-10">
      <div className='text-2xl text-inherit mb-5'>
        {title}
      </div>   
      <p className="text-sm">
        {text}
      </p>
      <div>
        <p className="text-sm">
          {children}
        </p>
     
      </div>
    </div>
  )
}

export default Menu