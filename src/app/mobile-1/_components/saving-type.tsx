const nums = [200, 500, '10K', '50K', '200K', '1M'];

export default function SavingType() {
	return (
		<div className="mt-6">
			<p className="text-lg font-medium mb-4">Saving type</p>

			<div className="grid grid-cols-3 gap-4">
				{nums.map((item, index) => {
					return (
						<button
							key={index}
							className="bg-[#0f0f0f] rounded-2xl px-4 py-3 w-full"
						>
							${item}
						</button>
					);
				})}

				<button className="bg-[#0f0f0f] rounded-2xl px-4 py-2 w-full">
					<span className="text-[#41f4c4]">+</span>
				</button>
			</div>
		</div>
	);
}
