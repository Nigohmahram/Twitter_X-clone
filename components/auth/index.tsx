import React from 'react';
import Image from 'next/image';

export default function Auth() {
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen'>
				<Image src={'/images/x.svg'} alt='X' width={450} height={450} className='justify-self-center hidden md:block' />
			</div>
		</>
	);
}
