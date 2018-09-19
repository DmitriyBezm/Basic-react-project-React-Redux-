import React from 'react';

function isElement(element) {
  return React.isValidElement(element);
}

export const isDOMTypeElement = (element) => {
  return isElement(element) && typeof element.type === 'string';
}
