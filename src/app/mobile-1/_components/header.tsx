import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	HeadphonesFreeIcons,
	Notification02Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function Header() {
	return (
		<div className="flex items-center justify-between py-4 gap-2">
			<div className="flex items-center gap-2">
				<Avatar className="size-10">
					<AvatarImage src={'/img/you.png'} />
					<AvatarFallback>K</AvatarFallback>
				</Avatar>
				<div>
					<p>Mathis Ezikal</p>
					<p className="text-xs -mt-1  text-muted-foreground">
						Hey Welcome back
					</p>
				</div>
			</div>

			<div className="flex items-center gap-2">
				<div className="bg-[#111111] p-2 rounded-full">
					<HugeiconsIcon size={16} icon={HeadphonesFreeIcons} />
				</div>
				<div className="relative">
					<div className="bg-[#111111] p-2 rounded-full">
						<HugeiconsIcon size={16} icon={Notification02Icon} />
					</div>
					<div className="absolute size-2.5 rounded-full bg-red-500 top-1 right-2" />
				</div>
			</div>
		</div>
	);
}
