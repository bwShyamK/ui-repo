import Image from 'next/image';
import React from 'react';

type Props = {};

export default function Carousel({}: Props) {
	return (
		<div className="mt-8">
			<div className="p-4 bg-[#a751fa] rounded-2xl flex justify-between">
				<div className="max-w-[210px]">
					<p className="font-bold text-sm text-white">
						Save money like a <br /> billionaire - Smart, <br />
						Stretegic and Effortlessly.
					</p>
					<button className="text-xs mt-3 bg-[#3e1165] px-2 py-1 rounded-full">
						See more
					</button>
				</div>
				<Image
					src={'/img/you.png'}
					width={60}
					height={60}
					alt="something"
					className="size-22"
				/>
			</div>
		</div>
	);
}
