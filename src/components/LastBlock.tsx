import React, { type ReactNode } from 'react';

type tProps = {
  children: ReactNode;
  text: string;
};

const Image4: React.FC<tProps> = (props) => {
  const {children, text,} = props;

  return (
    <div className='mx-10 mt-36 bg-cover sm:w-auto' 
         style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1187974/pexels-photo-1187974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
         }}>
      <span className='text-2xl font-medium flex items-center w-1/2  pt-36 py-20 px-20 text-white'>
        {text}
      </span>
      <section className='w-auto pl-20 pb-20'>
        {children}
      </section>
    </div>
  );
};

export default Image4;