import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { ButtonProps } from '.';

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 4rem;
  padding: 0 1.6rem;
  background: #860ebe;

  ${props =>
    props.color === 'secondary' &&
    css`
      background: #212425;
    `}

  font: 400 1.6rem 'Montserrat', sans-serif;
  color: #fff;

  border: 0;
  border-radius: 0.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  ${props =>
    props.backgroundTransparent &&
    css`
      background: transparent;
      color: #212425;
      font-weight: 500;
      transition: color 0.2s;

      ${props.color === 'secondary' &&
      css`
        color: #860ebe;
      `}

      &:hover {
        color: ${transparentize(0.2, '#212425')};

        ${props.color === 'secondary' &&
        css`
          color: #860ebe;
        `}
      }
    `}
`;
