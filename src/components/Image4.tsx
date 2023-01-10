import React, { type ReactNode } from 'react';

type tProps = {
  children: ReactNode;
  text: string;
};

const Image4: React.FC<tProps> = (props) => {
  const {children, text } = props;

  return (
    <div  className='flex flex-row mx-10 bg-no-repeat' style={{
       backgroundImage: 'url("https://images.pexels.com/photos/1187974/pexels-photo-1187974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
    }}>
      <span className='text-lg font-medium flex items-center w-auto px-20'>{text}</span>
      <section className='w-auto'>
       {children}
      </section>
    </div>
  )
}

export default Image4