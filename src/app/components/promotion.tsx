import React from 'react';
import Image from 'next/image';
import { deletePromotion, IPromotion } from '@/lib/api';
import { TiDelete } from "react-icons/ti";

import { useMutation, useQueryClient } from '@tanstack/react-query';

export interface PromotionProps {
  promotion: IPromotion;
}



export default function Promotion({ promotion }: PromotionProps) {
 const queryClient = useQueryClient();
  const id = promotion.id;
  
  const { mutateAsync } = useMutation({
    mutationKey: ['promotions', id],
    mutationFn: () => deletePromotion(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['promotions'],
      });
    },
  });

  return (
    <div className="rounded overflow-hidden	bg-gray-100">
      <div className="relative w-full h-40 bg-gray-300">
        {promotion.avatar && (
          <Image fill src={promotion.avatar} alt="promotion avatar" />
        )}
        <div className="w-14 h-14 absolute top-0 left-px rounded-br-full bg-lime-200" />
        <div className="w-14 h-14 absolute inset-0 py-3 pr-3 pl-0.5 rounded-br-full bg-gray-900">
          <p className="text-center text-xs font-bold text-lime-200">{`-${promotion.discount}%`}</p>
        <TiDelete onClick={()=>mutateAsync()} className='absolute top-2 left-[365px] cursor-pointer size-10'/>
        </div>
      </div>
      <div className="flex flex-col p-5 gap-3">
        <p className="text-base font-semibold text-gray-900">
          {promotion.title}
        </p>
        <p className="text-sm text-gray-900">{promotion.description}</p>
      </div>
    </div>
  );
}
