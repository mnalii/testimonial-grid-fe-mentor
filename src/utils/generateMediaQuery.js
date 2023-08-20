// Breakpoints
const breakpoints = {
  sm: '375px',
  md: '768px',
  lg: '976px',
  xl: '1440px',
};

// Helper function to generate media query styles
const generateMediaQuery = (breakpoint, styles) => `
  @media (min-width: ${breakpoints[breakpoint]}) {
    ${styles}
  }
`;

export default generateMediaQuery;
