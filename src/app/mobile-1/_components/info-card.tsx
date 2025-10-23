import {
	ArrowRight01Icon,
	EyeIcon,
	ViewIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';

type Props = {};

export default function InfoCard({}: Props) {
	return (
		<div className="rounded-2xl p-4 bg-secondary mt-2">
			<div className="flex items-center justify-between text-sm">
				<div className="flex text-muted-foreground items-center gap-2">
					<span>My Saving</span>
					<HugeiconsIcon icon={ViewIcon} size={20} />
				</div>

				<div className="flex items-center text-[#41f4c4] ">
					<span>Transaction History</span>
					<HugeiconsIcon icon={ArrowRight01Icon} size={20} />
				</div>
			</div>
			<p className="text-4xl font-semibold mt-4">$590,000</p>
		</div>
	);
}
