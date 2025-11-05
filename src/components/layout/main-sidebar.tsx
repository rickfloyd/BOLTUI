'use client';
import { useState } from 'react';

export function MainSidebar() {
  const [openMenu, setOpenMenu] = useState('');

  const toggleMenu = (menuId: string) => {
    setOpenMenu(openMenu === menuId ? '' : menuId);
  };

  return (
    <aside className="left-sidebar">
      {/* The AI Platform section has been moved to the header. */}
    </aside>
  );
}
