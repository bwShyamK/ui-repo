import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import {
	Agreement02Icon,
	BitcoinBagIcon,
	Home09Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const nav = [
	{
		label: 'home',
		icon: Home09Icon,
	},
	{
		label: 'loan',
		icon: Agreement02Icon,
	},
	{
		label: 'asset',
		icon: BitcoinBagIcon,
	},
];
export default function Footer() {
	return (
		<div className="fixed max-w-sm  w-full bottom-0 z-50 bg-[#050505] border-t py-3 px-4 flex items-center justify-around gap-4">
			{nav.map((item, index) => {
				return (
					<div
						key={index}
						className={cn(
							'flex items-center justify-center flex-col',
							{
								'text-[#41f4c4]': item.label === 'home',
							}
						)}
					>
						<HugeiconsIcon icon={item.icon} />
						<p className=" capitalize">{item.label}</p>
					</div>
				);
			})}
			<div
				className={cn('flex items-center justify-center flex-col', {
					'text-[#41f4c4]': '',
				})}
			>
				<Avatar>
					<AvatarImage src={'/img/you.png'} />
					<AvatarFallback>K</AvatarFallback>
				</Avatar>
				<p>Profile</p>
			</div>
		</div>
	);
}
