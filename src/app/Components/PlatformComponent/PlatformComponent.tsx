'use client';
import React, { useEffect } from 'react';
import styles from './PlatformComponent.module.css';
import Image from 'next/image';

interface Props {
  name: string;
  alias: string;
  img: string;
}
export default function PlatformComponent({ name, alias, img }: Readonly<Props>) {
  return (
    <div className="flex w-max items-center justify-center rounded-[10px] border border-slate-700 py-[10px] px-[20px]">
      <div>
        <Image src={img} alt="icon" height={30} width={30} />
      </div>
      <div className='ml-3'>{name}</div>
    </div>
  );
}
