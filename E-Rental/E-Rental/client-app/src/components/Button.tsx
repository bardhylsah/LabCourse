// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { ButtonProps } from 'semantic-ui-react/dist/commonjs/elements/Button';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}: ButtonProps) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  interface ButtonProps {
      children: any[];
      type: any[];
      onClick: any[];
      buttonStyle: any[];
      buttonSize: any[];
  }


  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};