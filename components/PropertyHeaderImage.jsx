import Image from 'next/image';

export default function PropertyHeaderImage({ image }) {
	return (
		<div>
			<Image
				src={image}
				alt='room'
				width={0}
				height={0}
				sizes='100vw'
				priority={true}
				className='object-cover h-[400px] w-full'
			/>
		</div>
	);
}
