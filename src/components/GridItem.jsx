import styled from 'styled-components';

import generateMediaQuery from '../utils/generateMediaQuery';

const GridItem = styled.div`
  ${({ $columns }) => {
    if ($columns) {
      return Object.keys($columns).map((breakpoint) => {
        return generateMediaQuery(
          breakpoint,
          `
            grid-column: span ${$columns[breakpoint]} / span ${$columns[breakpoint]};
          `
        );
      });
    }
    return '';
  }}

  ${({ $rowSpan }) => {
    if ($rowSpan) {
      return Object.keys($rowSpan).map((breakpoint) => {
        return generateMediaQuery(
          breakpoint,
          `
            grid-row: span ${$rowSpan[breakpoint]} / span ${$rowSpan[breakpoint]};
          `
        );
      });
    }
    return '';
  }}
  
  ${({ $rowStart }) => {
    if ($rowStart) {
      return Object.keys($rowStart).map((breakpoint) => {
        return generateMediaQuery(
          breakpoint,
          `
            grid-row-start: ${$rowStart[breakpoint]};
          `
        );
      });
    }
    return '';
  }}

  ${({ $colStart }) => {
    if ($colStart) {
      return Object.keys($colStart).map((breakpoint) => {
        return generateMediaQuery(
          breakpoint,
          `
            grid-column-start: ${$colStart[breakpoint]};
          `
        );
      });
    }
    return '';
  }}
`;

export default GridItem;
