import React from 'react';
import Image from 'next/image';

const SettingsButton = ({ setVisible }) => {
	return (
		<div
			className='mt-[65px] cursor-pointer'
			onClick={() => setVisible(true)}>
			<Image
				src='/images/settings.png'
				alt='setting'
				width={27}
				height={28}
			/>
		</div>
	);
};

export default SettingsButton;
