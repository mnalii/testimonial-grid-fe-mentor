import styled from 'styled-components';

const QuoteImg = styled.img`
  position: absolute;
  top: 0.75rem;
  right: 2.5rem;
  transform: scale(1.25);

  @media (min-width: 768px) {
    right: 6rem;
    top: 1.7rem;
    transform: scale(1.5);
  }
`;

export default QuoteImg;
