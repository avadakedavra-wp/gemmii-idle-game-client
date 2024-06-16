import React, { useState } from "react";
import Image from "next/image"; // Import the Image component from the appropriate package

import { useAddress, ConnectWallet } from "@thirdweb-dev/react";
import Dashboard from "../_compoents/dashboard";
import Layout from "../_compoents/layouts";
import '@fortawesome/fontawesome-free/css/all.min.css';

// constant
import { TTabsList } from "./constant";


const tabsList: TTabsList[] = [
    {
        id: 1,
        name: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        component: <div>Dashboard</div>,
    },
    {
        id: 2,
        name: 'Farm',
        icon: 'fa-regular fa-gem',
        component: <div>Farm</div>,
    },
    {
        id: 3,
        name: 'Tools',
        icon: 'fas fa-tools',
        component: <div>Tools</div>,
    },
    {
        id: 4,
        name: 'Rewards',
        icon: 'fa-solid fa-gift',
        component: <div>Rewards</div>,
    },
];

function GemmiProject() {
    const addreses = useAddress();
    const [activeTab, setActiveTab] = useState('Dashboard');

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    const ActiveComponent = () => {
        switch (activeTab) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Farm':
                return <div className="p-4">About Component</div>;
            case 'Tools':
                return <div className="p-4">Contact Component</div>;
            case 'Rewards':
                return <div className="p-4">Contact Component</div>;
            default:
                return null;
        }
    };

    return (
        <Layout>
            {/* Main content area */}
            <div className="flex-grow h text-white">
                {/* Header */}
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-xl font-semibold">GEMMII</h1>
                    <div className="flex gap-4">
                        <ConnectWallet />
                    </div>
                </div>

                {/* Main Content */}
                <div className="mt-4">
                    <ActiveComponent />
                </div>
            </div>

            {/* Footer navigation bar */}
            <footer className="bg-gray-800 h-full shadow-md">
                <nav className="flex justify-around item-center alight-center">
                    {tabsList.map((tab) => (
                        <div
                            key={tab.name}
                            className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md ${activeTab === tab.name
                                ? 'bg-gray-800 text-yellow-500 border border-yellow-500'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-800 hover:text-yellow-400'
                                }`}
                            style={{ minWidth: '40px', minHeight: '40px' }} // Set minimum width and height
                            onClick={() => handleTabClick(tab.name)}
                        >
                            {tab.icon === 'logo' ? (
                                <Image src="/images/character-gif-1.gif" alt="logo" width={30} height={20} /> // Use the Image component correctly
                            ) : (
                                <i className={`${tab.icon}`}></i>
                            )}
                            <span className="text-sm font-medium">{tab.name}</span>
                        </div>
                    ))}
                </nav>
            </footer>
        </Layout>
    );
}

export default GemmiProject;