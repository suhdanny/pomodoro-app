import { useEffect } from 'react';

const AdBanner = ({ customStyle }) => {
	useEffect(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<div className={customStyle}>
			<ins
				className='adsbygoogle'
				style={{ display: 'inline-block', width: '150px', height: '700px' }}
				data-ad-client='ca-pub-6235238979074116'
				data-ad-slot='6288802791'
				data-ad-format='auto'
				data-full-width-responsive='true'></ins>
		</div>
	);
};

export default AdBanner;
