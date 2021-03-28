import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 4rem;
  padding: 0 1.6rem;
  background: #860ebe;

  font: 400 1.6rem 'Montserrat', sans-serif;
  color: #fff;

  border: 0;
  border-radius: 0.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
