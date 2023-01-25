import React from 'react';

type tProps = {
  title: string;
};

const Example: React.FC<tProps> = (props) => {
  const { title } = props;

  // const title = props.title;
  // const text = props.text;

  return (
    <div className="text-5xl text-red-900 font-bold">{title}</div>
  );
};

export default Example;
