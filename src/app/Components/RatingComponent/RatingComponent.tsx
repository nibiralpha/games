'use client';
import Image from 'next/image';

interface Props {
  data: string;
  imgSrc?: string;
}

export default function RatingComponent({ data, imgSrc }: Readonly<Props>) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-[50px] bg-slate-100 border border-slate-700 p-2 px-4 w-max">
      {imgSrc && (
        <div>
          <Image src={imgSrc} alt="icon" height={20} width={20} />
        </div>
      )}

      <div className="text-sm font-semibold whitespace-nowrap">{data}</div>
    </div>
  );
}
