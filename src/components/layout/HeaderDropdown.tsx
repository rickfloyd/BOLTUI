
'use client';
import { useState } from 'react';
import Link from 'next/link';

export type DropdownItem = {
  name: string;
  subtext?: string;
  active?: boolean;
  type?: 'item' | 'header' | 'link';
  isSeparator?: boolean;
  href?: string;
};

type HeaderDropdownProps = {
  title: string;
  items: DropdownItem[];
  titleClassName?: string;
};

export function HeaderDropdown({ title, items, titleClassName }: HeaderDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="header-dropdown-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href="#" className={`nav-item ${titleClassName || 'neon-cyan'}`}>
        {title}
      </a>
      {isOpen && (
        <div className="header-dropdown-menu">
          {items.map((item, index) => {
            if (item.isSeparator) {
              return <div key={index} className="dropdown-separator" />;
            }
            if (item.type === 'header') {
                return <div key={index} className="dropdown-header">{item.name}</div>
            }
            if (item.type === 'link') {
                return (
                    <Link href={item.href || '#'} key={index} className="menu-item" target="_blank" rel="noopener noreferrer">
                        {item.name}
                    </Link>
                )
            }
            return (
              <div key={index} className={`menu-item ${item.active ? 'active-pink' : ''}`}>
                {item.name}
                {item.subtext && <span className="sub-text">{item.subtext}</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
