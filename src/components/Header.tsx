import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
interface HeaderProps {
  selectedChain: string;
  setSelectedChain: (chain: string) => void;
}

function Header() {
  return (
    <header className='h-24 z-20 p-5 w-full relative bg-black '>
        <div className='flex flex-row items-center justify-start  dark:text-white text-white'>
        <div>
          <Image
          src='/ZKLOGO.png'
          alt=''
          height={80}
          width={80}
          />
        </div>
        </div>
    </header>
)
}

export default Header