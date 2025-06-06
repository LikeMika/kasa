import { useState } from 'react';
import '../styles/Collapse.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggle}>
        <h2>{title}</h2>
        {isOpen ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
      </div>
      {isOpen && (
        <div className="collapse-content">
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

export default Collapse;
