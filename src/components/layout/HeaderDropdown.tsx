
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

  const renderItem = (item: DropdownItem, index: number) => {
    if (item.isSeparator) {
      return <div key={index} className="dropdown-separator" />;
    }
    if (item.type === 'header') {
      return <div key={index} className="dropdown-header">{item.name}</div>;
    }
    if (item.type === 'link') {
      return (
        <Link href={item.href || '#'} key={index} className="menu-item" target={item.href?.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
          {item.name}
          {item.subtext && <span className="sub-text">{item.subtext}</span>}
        </Link>
      );
    }
    return (
      <div key={index} className={`menu-item ${item.active ? 'active-pink' : ''}`}>
        {item.name}
        {item.subtext && <span className="sub-text">{item.subtext}</span>}
      </div>
    );
  };

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
          {items.map((item, index) => renderItem(item, index))}
        </div>
      )}
    </div>
  );
}
