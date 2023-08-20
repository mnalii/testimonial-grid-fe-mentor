import styled from 'styled-components';

import generateMediaQuery from '../utils/generateMediaQuery';

const Grid = styled.div`
  display: grid;
  gap: ${(props) => (props.$gridGaps ? `${0.3125 * props.$gridGaps}rem` : '0')};

  ${({ $rows }) => {
    if ($rows) {
      return Object.keys($rows)
        .map((breakpoint) => {
          return generateMediaQuery(
            breakpoint,
            `
          grid-template-rows: repeat(${$rows[breakpoint]}, minmax(0, 1fr));
        `
          );
        })
        .join(' ');
    }
    return '';
  }};

  ${({ $columns }) => {
    if ($columns) {
      return Object.keys($columns)
        .map((breakpoint) => {
          return generateMediaQuery(
            breakpoint,
            `
          grid-template-columns: repeat(${$columns[breakpoint]}, minmax(0, 1fr));
        `
          );
        })
        .join(' ');
    }
    return '';
  }};
`;

export default Grid;
