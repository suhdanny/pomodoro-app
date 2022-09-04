import { useState } from 'react';
import Header from '../components/Header/Header';
import Controls from '../components/Controls/Controls';

export default function Home() {
	const [timerMode, setTimerMode] = useState('pomo');

	return (
		<div className='bg-blue h-[100vh] flex flex-col items-center'>
			<Header />
			<Controls timerMode={timerMode} setTimerMode={setTimerMode} />
		</div>
	);
}
