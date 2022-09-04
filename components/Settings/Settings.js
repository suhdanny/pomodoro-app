import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

const Settings = ({
	visible,
	setVisible,
	setPomoLength,
	setShortLength,
	setLongLength,
	timerMode,
	setSecondsLeft,
	setButtonText,
}) => {
	const [formData, setFormData] = useState({
		pomodoro: 25,
		shortBreak: 5,
		longBreak: 15,
	});

	const handleChange = e => {
		const { name, value } = e.target;

		setFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: parseInt(value),
			};
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setPomoLength(formData.pomodoro);
		setShortLength(formData.shortBreak);
		setLongLength(formData.longBreak);
		setButtonText('start');

		switch (timerMode) {
			case 'short':
				setSecondsLeft(formData.shortBreak * 60);
				break;
			case 'long':
				setSecondsLeft(formData.longBreak * 60);
				break;
			default:
				setSecondsLeft(formData.pomodoro * 60);
		}

		setVisible(false);
	};

	if (visible) {
		return (
			<div className='w-[540px] h-[400px] bg-white absolute top-[18%] rounded-[25px] flex flex-col'>
				<div className='flex items-center justify-between border-b p-[35px] border-gray'>
					<span className='font-bold text-2xl leading-[35px]'>Settings</span>
					<span className='cursor-pointer' onClick={() => setVisible(false)}>
						<AiOutlineClose size={24} />
					</span>
				</div>
				<form
					className='flex flex-col px-[40px] py-[20px] items-center justify-around flex-1'
					onSubmit={handleSubmit}>
					<div>
						<h3 className='font-bold text-sm tracking-[5px] mb-8 uppercase'>
							Time (Minutes)
						</h3>
						<TimeWrapper>
							<TimeLabel htmlFor='pomodoro'>pomodoro</TimeLabel>
							<TimeInput
								type='number'
								name='pomodoro'
								id='pomodoro'
								min='5'
								max='90'
								value={formData.pomodoro}
								onChange={handleChange}
							/>
							<TimeLabel htmlFor='short-break'>short break</TimeLabel>
							<TimeInput
								type='number'
								name='shortBreak'
								id='short-break'
								min='1'
								max='14'
								value={formData.shortBreak}
								onChange={handleChange}
							/>
							<TimeLabel htmlFor='long-break'>long break</TimeLabel>
							<TimeInput
								type='number'
								name='longBreak'
								id='long-break'
								min='15'
								max='30'
								value={formData.longBreak}
								onChange={handleChange}
							/>
						</TimeWrapper>
					</div>
					<button className='bg-orange text-white text-base w-[150px] h-[50px] rounded-3xl mt-2'>
						Apply
					</button>
				</form>
			</div>
		);
	}
};

const TimeWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 12px;
`;

const TimeInput = styled.input`
	width: 150px;
	height: 50px;
	grid-row: 2;
	background: #eff1fa;
	border-radius: 10px;
	padding: 16px;
`;

const TimeLabel = styled.label`
	font-size: 12px;
	grid-row: 1;
	margin-bottom: 8px;
`;

// const LineBreak = styled.hr`
// 	width: 100%;
// 	color: #e3e1e1;
// 	margin-top: 24px;
// `;

export default Settings;
