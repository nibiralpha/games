"use client";

import React from "react";
import { Drawer } from "vaul";

interface MobileFilterDrawerProps {
  children: React.ReactNode; 
}

export default function SearchMenuMobileComponent({ children }: MobileFilterDrawerProps) {
  return (
    <Drawer.Root dismissible={true}>
      <Drawer.Trigger asChild>
        {children}
      </Drawer.Trigger>
      
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300" />
        
        <Drawer.Content className="bg-white flex flex-col rounded-t-[20px] h-[80vh] fixed bottom-0 left-0 right-0 z-50 outline-none shadow-2xl p-6">
          <div className="bg-white flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-6" />
            
            <Drawer.Title className="font-bold text-xl mb-4 text-black">Filter</Drawer.Title>
            
            <div className="space-y-1">
              <div className="border-b py-3 font-bold border-[#e1e1e1] text-[#626262]">Platform</div>
              <div className="border-b py-3 font-bold border-[#e1e1e1] text-[#626262]">Genre</div>
              <div className="border-b py-3 font-bold border-[#e1e1e1] text-[#626262]">Release Date</div>
              <div className="border-b py-3 font-bold border-[#e1e1e1] text-[#626262]">Feature</div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}