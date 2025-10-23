'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const TABS = ['deposit', 'withdraw', 'send'];

export default function Tabs() {
	const [active, setActive] = useState('deposit');
	return (
		<div className="flex items-center gap-3 mt-4">
			{TABS.map((item, index) => {
				return (
					<button
						key={index}
						onClick={() => {
							setActive(item);
						}}
						className={cn(
							'px-4 py-2 bg-[#0f0f0f] capitalize rounded-md w-full text-center font-medium',
							{
								'bg-[#41f4c4] text-black': item === active,
							}
						)}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
}
