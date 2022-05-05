import React from 'react';

export function GradienText(props) {
  return (
    <div className='text-transparent bg-clip-text bg-gradient-to-br from-lime-600 to-cyan-500'>
      {props.text}
    </div>
  );
}
