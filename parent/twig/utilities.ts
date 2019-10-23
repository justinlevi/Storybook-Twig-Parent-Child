const darkPadding = 'background-color:#24387e; width:100%; padding:25px;';

export const withWrapper = fn => (...args) => `<div style="padding:25px;">${fn(...args)}</div>`;
export const withDarkWrapper = fn => (...args) => `<div style="${darkPadding}">${fn(...args)}</div>`;
