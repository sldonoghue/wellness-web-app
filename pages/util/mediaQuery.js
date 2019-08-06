import BREAKPOINTS from '../config/breakpoints';


const breakpointValue = (breakpoint) => {
  if (typeof breakpoint !== 'string') throw Error('Invalid parameter type');
  if (!(breakpoint in BREAKPOINTS)) throw Error(`Invalid breakpoint: ${breakpoint}`);
  return BREAKPOINTS[breakpoint];
};


const above = breakpoint => window.innerWidth >= breakpointValue(breakpoint);


const below = breakpoint => window.innerWidth < breakpointValue(breakpoint);


const between = (breakpointLow, breakpointHigh) => {
  const isAboveBreakpointLow = window.innerWidth >= breakpointValue(breakpointLow);
  const isBelowBreakpointHigh = window.innerWidth < breakpointValue(breakpointHigh);
  return isAboveBreakpointLow && isBelowBreakpointHigh;
};


export { above, below, between };
export default { above, below, between };

