import React, { useState } from 'react';
import tw from 'tailwind-styled-components';

const Controls = ({ timerMode, setTimerMode }) => {
	const handleRadioClick = e => {
		setTimerMode(e.currentTarget.value);
	};

	return (
		<div className='inline-flex overflow-hidden rounded-2xl bg-darkblue'>
			<Input
				type='radio'
				value='pomo'
				name='options'
				id='option1'
				checked={timerMode === 'pomo'}
				onChange={handleRadioClick}
			/>
			<Label htmlFor='option1'>pomodoro</Label>
			<Input
				type='radio'
				value='short'
				name='options'
				id='option2'
				checked={timerMode === 'short'}
				onChange={handleRadioClick}
			/>
			<Label htmlFor='option2'>short break</Label>
			<Input
				type='radio'
				value='long'
				name='options'
				id='option3'
				checked={timerMode === 'long'}
				onChange={handleRadioClick}
			/>
			<Label htmlFor='option3'>long break</Label>
		</div>
	);
};

const Input = tw.input`
    hidden
`;

const Label = tw.label`
    py-3 px-7 text-darkgray text-base cursor-pointer bg-darkblue transition duration-100
`;

export default Controls;
