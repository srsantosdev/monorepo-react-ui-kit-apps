import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary';
  backgroundTransparent?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  backgroundTransparent,
  ...rest
}) => {
  return (
    <Container
      color={color}
      backgroundTransparent={backgroundTransparent}
      {...rest}
    >
      {children}
    </Container>
  );
};
