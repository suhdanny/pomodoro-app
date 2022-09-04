import { useState } from 'react';
import Header from '../components/Header/Header';
import Controls from '../components/Controls/Controls';
import Timer from '../components/Timer/Timer';

export default function Home() {
	const [timerMode, setTimerMode] = useState('pomo'); // 'pomo', 'short', 'long'

	return (
		<div className='bg-blue h-[100vh] flex flex-col items-center'>
			<Header />
			<Controls timerMode={timerMode} setTimerMode={setTimerMode} />
			<Timer />
		</div>
	);
}
