// State transitions
export const setA = value => state => ({ ...state, a: value });
export const setB = value => state => ({ ...state, b: value });

export const signedIn = () => state => ({ ...state, auth: true });
export const signedOut = () => state => ({ ...state, auth: false });
