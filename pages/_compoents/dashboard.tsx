import Reac, { useState } from 'react';
import Image from 'next/image';
import Countdown from 'react-countdown';
import CountdownTimer from '../gemmi-project/_component/CountdownTimer';


const Dashboard = () => {
    const [click, setClick] = useState(false);
    const [showFireworks, setShowFireworks] = useState(false);
    const handleFireworks = () => {
        setShowFireworks(true);

        setTimeout(() => {
            setShowFireworks(false);
        }, 1000); // Duration of the fireworks animation (0.5s) + fade out duration (0.5s)
    };
    return (
        <div className="w-full h-full bg-gray-800 rounded-t-3xl shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-400">
                    Avialable POP<br />
                    <span className="text-xl text-green-500">2</span>
                </div>
                <div className="text-sm text-gray-400">
                    POP Total<br />
                    <span className="text-xl text-orange-500">100</span>
                </div>
                <div className="text-sm text-gray-400">
                    Coins to level up<br />
                    <span className="text-xl text-blue-500">25K</span>
                </div>
            </div>
            <div className="flex justify-center items-center mb-4 relative">
                <div className="flex-shrink-0 relative">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={180}
                        height={120}
                        className="hover:animate-pulse cursor-pointer"
                        onClick={handleFireworks}
                    />
                    <div
                        id="fireworks-container"
                        className={`absolute top-0 left-0 w-full h-full flex justify-center items-center transition-all duration-300 ${showFireworks ? 'visible opacity-100' : 'invisible opacity-0'}`}
                    >
                        <div className="w-24 h-24 bg-yellow-400 rounded-full animate-firework"></div>
                    </div>
                </div>
            </div>
            <div className="text-center mb-4">
                <div className="text-4xl text-yellow-400">5,690 JIBJIB</div>
                <div className="text-4lg text-gray-400">
                    <CountdownTimer />
                </div>
            </div>
            <div className="bg-gray-700 p-2 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                    <div className="text-sm">Daily combo</div>
                    <div className="text-sm text-purple-500">+5,000,000</div>
                </div>
                <div className="flex justify-around mt-2">
                    <div className="w-16 h-16 bg-gray-600 rounded-md flex items-center justify-center">
                        <div className="text-yellow-500 text-3xl">?</div>
                    </div>
                    <div className="w-16 h-16 bg-gray-600 rounded-md flex items-center justify-center">
                        <div className="text-yellow-500 text-3xl">?</div>
                    </div>
                    <div className="w-16 h-16 bg-gray-600 rounded-md flex items-center justify-center">
                        <div className="text-yellow-500 text-3xl">?</div>
                    </div>
                </div>
            </div>
            {/* <div className="flex justify-around mb-4">
                <button className="bg-gray-700 py-2 px-4 rounded-md">Markets</button>
                <button className="bg-gray-700 py-2 px-4 rounded-md">PR&Team</button>
                <button className="bg-gray-700 py-2 px-4 rounded-md">Legal</button>
                <button className="bg-gray-700 py-2 px-4 rounded-md">Specials</button>
            </div> */}
            <div className="flex justify-around mb-4">
                <div className="bg-gray-700 p-4 rounded-md flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-600 rounded-full mb-2"></div>
                    <div className="text-sm">Fan tokens</div>
                    <div className="text-green-500 text-sm">per hour +950</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-md flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-600 rounded-full mb-2"></div>
                    <div className="text-sm">Staking</div>
                    <div className="text-green-500 text-sm">per hour +600</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;