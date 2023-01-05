import React, { type ReactNode } from 'react';

type tProps = {
  children: ReactNode;
  title: string;
};

const ExampleChild: React.FC<tProps> = (props) => {
  const { children, title } = props;

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {children}
      </div>
    </div>
  )
}

export default ExampleChild