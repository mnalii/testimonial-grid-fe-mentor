import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

export default Container;
