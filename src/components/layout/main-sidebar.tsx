'use client';
import React from 'react';
import {
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { ChevronsUpDown } from 'lucide-react';


const educationalItems = [
    { name: 'Republican', description: 'Conservative market analysis' },
    { name: 'Democrat', description: 'Progressive economic insights', active: true },
    { name: 'Liberal', description: 'Social-focused market views' },
    { name: 'Independent', description: 'Unbiased market perspective' },
];

const platformItems = [
    'AI Price Prediction Engine',
    'ML Pattern Recognition',
    'Sentiment Analysis AI',
    'Smart Risk Management',
    'Automated Trading Signals',
    'Neural Networks & LSTM',
    'Advanced Drawing Tools',
    'Real-Time Market Data',
    'Portfolio Management',
    'Custom Scripting Engine',
];


export function MainSidebar() {
  const [openSection, setOpenSection] = React.useState('educational');

  return (
    <>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Collapsible open={openSection === 'educational'} onOpenChange={(isOpen) => setOpenSection(isOpen ? 'educational' : '')}>
            <CollapsibleTrigger className="w-full">
              <div className="section-title flex items-center justify-between p-2 rounded-md hover:bg-muted">
                <div className="flex items-center gap-2 neon-cyan">
                  <span className="dot-indicator"></span>
                  <span className="font-semibold">Educational</span>
                </div>
                <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-2 space-y-1">
                {educationalItems.map((item) => (
                  <div
                    key={item.name}
                    className={cn(
                      'menu-item p-2 rounded-md text-sm',
                      item.active ? 'active-pink' : 'hover:bg-muted'
                    )}
                  >
                    {item.name}
                    <span className="sub-text block text-xs text-muted-foreground">{item.description}</span>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="section-title flex items-center gap-2 p-2 mt-4 neon-pink">
             <span className="dot-indicator"></span>
             <span className="font-semibold">Market Summary</span>
          </div>

          <Collapsible open={openSection === 'platform'} onOpenChange={(isOpen) => setOpenSection(isOpen ? 'platform' : '')} className="mt-4">
            <CollapsibleTrigger className="w-full">
               <div className="section-title flex items-center justify-between p-2 rounded-md hover:bg-muted">
                 <div className="flex items-center gap-2 neon-blue">
                   <span className="dot-indicator"></span>
                   <span className="font-semibold">AI-Powered Trading Platform</span>
                 </div>
                 <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
               </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-2 space-y-1">
                {platformItems.map((item) => (
                    <div key={item} className="menu-item p-2 rounded-md text-sm hover:bg-muted">
                      {item}
                    </div>
                ))}
                 <div className="menu-item p-2 rounded-md text-sm revolutionary-text text-accent font-bold">
                    Revolutionary AI Trading Platform!
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>
    </>
  );
}
