import React, { useState } from 'react';

function Accordion({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleToggle}>
        <span className="icon text-white">{isOpen ? 'x' : '+'}</span>
        <span className="text text-white text-primary">{title}</span>
      </div>
      <div
        className="accordion-content text-white"
        style={{
          maxHeight: isOpen ? '220px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Accordion;
