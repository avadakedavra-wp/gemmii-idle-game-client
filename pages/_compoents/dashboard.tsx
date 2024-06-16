import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-gray-400">
                        รายได้ต่อการแตะ<br />
                        <span className="text-xl text-orange-500">+2</span>
                    </div>
                    <div className="text-sm text-gray-400">
                        Coins to level up<br />
                        <span className="text-xl text-blue-500">25K</span>
                    </div>
                    <div className="text-sm text-gray-400">
                        กำไรต่อชั่วโมง<br />
                        <span className="text-xl text-green-500">0</span>
                    </div>
                </div>
                <div className="text-center mb-4">
                    <div className="text-4xl text-yellow-400">5,690</div>
                    <div className="text-sm text-gray-400">20:16:00</div>
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
                <div className="flex justify-around mb-4">
                    <button className="bg-gray-700 py-2 px-4 rounded-md">Markets</button>
                    <button className="bg-gray-700 py-2 px-4 rounded-md">PR&Team</button>
                    <button className="bg-gray-700 py-2 px-4 rounded-md">Legal</button>
                    <button className="bg-gray-700 py-2 px-4 rounded-md">Specials</button>
                </div>
                <div className="flex justify-around mb-4">
                    <div className="bg-gray-700 p-4 rounded-md flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-600 rounded-full mb-2"></div>
                        <div className="text-sm">Fan tokens</div>
                        <div className="text-green-500 text-sm">กำไรต่อชั่วโมง +950</div>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-md flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-600 rounded-full mb-2"></div>
                        <div className="text-sm">Staking</div>
                        <div className="text-green-500 text-sm">กำไรต่อชั่วโมง +600</div>
                    </div>
                </div>
                <div className="flex justify-around">
                    <button className="bg-yellow-500 p-4 rounded-full">Exchange</button>
                    <button className="bg-gray-700 p-4 rounded-full">Mine</button>
                    <button className="bg-gray-700 p-4 rounded-full">Friends</button>
                    <button className="bg-gray-700 p-4 rounded-full">Earn</button>
                    <button className="bg-gray-700 p-4 rounded-full">Airdrop</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;