import React from 'react';
import styled from 'styled-components';
import { formatTimeLeft } from '../../utils/formatTimeLeft';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Timer = ({ buttonText, secondsLeft, handleTimerClick, calcPercentage }) => {
	return (
		<Wrapper>
			<TimerWrapper>
				<CircularProgressbarWithChildren
					value={calcPercentage()}
					strokeWidth={4}
					text={formatTimeLeft(secondsLeft)}
					styles={buildStyles({
						pathTransitionDuration: 0.5,
						pathColor: '#F87070',
						textColor: '#D7E0FF',
						textSize: '25px',
						trailColor: 'none',
					})}>
					<button
						className='mt-[10rem] text-darkgray font-bold text-base tracking-[15px] uppercase'
						onClick={handleTimerClick}>
						{buttonText}
					</button>
				</CircularProgressbarWithChildren>
			</TimerWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 380px;
	height: 380px;
	margin-top: 65px;
	border-radius: 90%;
	background: linear-gradient(315deg, #2e325a, #0e112a);
	box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TimerWrapper = styled.div`
	width: 90%;
	height: 90%;
	border-radius: 90%;
	padding: 10px;
`;

export default Timer;
