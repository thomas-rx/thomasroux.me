import React from 'react';

export function GradienText(props) {
  return (
    <div className='text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-green-600 to-blue-500'>
      {props.text}
    </div>
  );
}
