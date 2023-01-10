import React, { type ReactNode } from 'react';

type tProps = {
  children: ReactNode;
  text: string;
};

const Image4: React.FC<tProps> = (props) => {
  const {children, text } = props;

  return (
    <div  className='md:flex mx-20 w-auto' style={{
       backgroundImage: 'url("https://images.pexels.com/photos/1187974/pexels-photo-1187974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
    }}>
      <span className='text-lg font-medium flex items-center w-2/3'>{text}</span>
      <div className='justify-items-end w-2/3 h-100%'>
        {children}
      </div>
    </div>
  )
}

export default Image4