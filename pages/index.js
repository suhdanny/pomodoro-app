import { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Controls from '../components/Controls/Controls';
import Timer from '../components/Timer/Timer';
import SettingsButton from '../components/SettingsButton/SettingsButton';
import Settings from '../components/Settings/Settings';
import AdBanner from '../components/AdBanner/AdBanner';

export default function Home() {
	const [visible, setVisible] = useState(false);
	const [timerMode, setTimerMode] = useState('pomo');
	const [pomoLength, setPomoLength] = useState(25);
	const [shortLength, setShortLength] = useState(5);
	const [longLength, setLongLength] = useState(15);
	const [secondsLeft, setSecondsLeft] = useState(pomoLength * 60);
	const [isActive, setIsActive] = useState(false);
	const [buttonText, setButtonText] = useState('start');

	const handleTimerClick = () => {
		if (buttonText === 'restart') {
			restartTimer();
		} else {
			setButtonText(text => {
				return text === 'start' || text === 'resume' ? 'pause' : 'resume';
			});
		}
		setIsActive(prev => !prev);
	};

	const handleRadioClick = e => {
		setTimerMode(e.currentTarget.value);
		setIsActive(false);
		setButtonText('start');
		switch (e.target.value) {
			case 'short':
				setSecondsLeft(shortLength * 60);
				break;
			case 'long':
				setSecondsLeft(longLength * 60);
				break;
			default:
				setSecondsLeft(pomoLength * 60);
		}
	};

	const restartTimer = () => {
		switch (timerMode) {
			case 'short':
				setSecondsLeft(shortLength * 60);
				break;
			case 'long':
				setSecondsLeft(longLength * 60);
				break;
			default:
				setSecondsLeft(pomoLength * 60);
		}
		setButtonText('pause');
	};

	const endTimer = interval => {
		clearInterval(interval);
		setButtonText('restart');
		setIsActive(false);
	};

	const calcPercentage = () => {
		if (timerMode === 'pomo') {
			return 100 - (secondsLeft / (pomoLength * 60)) * 100;
		}
		if (timerMode === 'short') {
			return 100 - (secondsLeft / (shortLength * 60)) * 100;
		}
		if (timerMode === 'long') {
			return 100 - (secondsLeft / (longLength * 60)) * 100;
		}
	};

	useEffect(() => {
		if (isActive) {
			const interval = setInterval(() => {
				setSecondsLeft(secondsLeft => secondsLeft - 1);
			}, 1000);

			if (secondsLeft === 0) {
				endTimer(interval);
			}

			return () => clearInterval(interval);
		}
	}, [isActive, secondsLeft]);

	return (
		<div className='bg-blue h-[100vh] relative flex flex-col items-center'>
			<AdBanner customStyle={'absolute left-0 top-20'} />
			<AdBanner customStyle={'absolute right-0 top-20'} />
			<Header />
			<Controls timerMode={timerMode} handleRadioClick={handleRadioClick} />
			<Timer
				timerMode={timerMode}
				buttonText={buttonText}
				secondsLeft={secondsLeft}
				handleTimerClick={handleTimerClick}
				calcPercentage={calcPercentage}
			/>
			<SettingsButton setVisible={setVisible} />
			<Settings
				visible={visible}
				setVisible={setVisible}
				setPomoLength={setPomoLength}
				setShortLength={setShortLength}
				setLongLength={setLongLength}
				timerMode={timerMode}
				setSecondsLeft={setSecondsLeft}
				setButtonText={setButtonText}
			/>
		</div>
	);
}
