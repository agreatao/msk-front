import { BROWSER_RESIZE, BROWSER_SCROLL } from '../types/browser';

export const browserResize = payload => ({ type: BROWSER_RESIZE, payload });
export const browserScroll = payload => ({ type: BROWSER_SCROLL, payload });
