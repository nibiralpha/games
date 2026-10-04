'use client';
import Image from 'next/image';

interface Props {
  data: number;
}

export default function RatingComponent({ data }: Readonly<Props>) {
  return (
    <div className="flex items-center rounded-[50px] bg-slate-100 border border-slate-300 p-2 border-slate-700">
      <div className='ml-2'>
        <Image src="/star.svg" alt="star" height={20} width={20} />
      </div>
      <div className="flex items-center ml-2 mr-4 text-lg font-semibold">4.5</div>
    </div>
  );
}
