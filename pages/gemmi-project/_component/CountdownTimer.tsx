import { useState } from 'react';
import Countdown from 'react-countdown';
import { TCountdownRenderer } from '../constant';

export default function CountdownTimer() {
    const futureDate = Date.now() + 60 * 60 * 1000;

    const renderer = ({ hours, minutes, seconds, completed }: TCountdownRenderer) => {
        if (completed) {
            return <span>Countdown finished!</span>;
        } else {
            return (
                <span className="text-4xl text-gray-400">
                    {hours}:{minutes}:{seconds}
                </span>
            );
        }
    };

    return (
        <div className="text-4xl text-gray-400">
            <Countdown date={futureDate} intervalDelay={0} precision={3} renderer={renderer} />
        </div>
    );
}