import React from 'react';

export default ({options, innerRef, onSelect}) => (
  <div className="desktopFilter__sections-wrap" ref={innerRef}>
    {options.map((option, index) => (
      <button
        className="desktopFilter__options-item"
        onClick={() => onSelect(option)}
        key={index}
        children={option.title}
      />
    ))}
  </div>
);
