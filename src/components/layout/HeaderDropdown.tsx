'use client';
import { useState } from 'react';

type DropdownItem = {
  name: string;
  subtext: string;
  active?: boolean;
};

type HeaderDropdownProps = {
  title: string;
  items: DropdownItem[];
};

export function HeaderDropdown({ title, items }: HeaderDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="header-dropdown-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href="#" className="nav-item neon-cyan">
        {title}
      </a>
      {isOpen && (
        <div className="header-dropdown-menu">
          {items.map((item, index) => (
            <div key={index} className={`menu-item ${item.active ? 'active-pink' : ''}`}>
              {item.name}
              <span className="sub-text">{item.subtext}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
