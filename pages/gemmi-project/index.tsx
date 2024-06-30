import React, { useCallback, useState } from "react";
import Image from "next/image";

import { useAddress, ConnectWallet, useDisconnect, lightTheme } from "@thirdweb-dev/react";
import Dashboard from "../_compoents/dashboard";
import Layout from "../_compoents/layouts";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTheme, useSetTheme } from "../../store/useThemeStore";
import styles from "../../styles/Home.module.css";

// constant
import { TTabsList } from "./constant";
import useRankStore from "../../store/useRankStore";

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
            <div className="flex flex-col bg-background-card min-h-screen text-white">
                {/* Header */}
                <div className="flex justify-between items-center p-4">
                    <div className="flex items-center">
                        <span className="gradientText3 text-3xl text-center">
                            <a
                                href="https://jibjib.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 font-bold text-center"
                            >
                                JIBTAP.
                            </a>
                        </span>
                    </div>
                    <ConnectWallet
                        theme={lightTheme({
                            colors: {
                                primaryButtonBg: "#c6a9a3",
                                accentButtonText: "#fdfcfd",
                                primaryButtonText: "#1a1523",
                                secondaryIconColor: "#706f78",
                            },
                        })}
                        style={{
                            borderRadius: '25px',
                            border: '2px solid #000000',
                        }}
                    />
                </div>
                {/* Content */}
                {ActiveComponent()}
                {/* Footer Navbar */}
                <div className="flex justify-center items-center p-4">
                    <div className="flex justify-around items-center bg-background-card h-auto p-1 shadow-2xl" style={{ borderRadius: '25px', border: '2px solid #000000' }}>
                        {tabsList.map((tab) => (
                            <div
                                key={tab.name}
                                className={`flex flex-col items-center justify-center p-2 m-1 shadow-md ${activeTab === tab.name
                                    ? 'bg-white text-black border border-black'
                                    : 'bg-background-dark text-yellow-light hover:bg-background-light hover:text-yellow-primary'
                                    }`}
                                style={{ width: '82px', height: '64px', borderRadius: '25px' }}
                                onClick={() => handleTabClick(tab.name)}
                            >
                                <i className={`${tab.icon}`}></i>
                                <span className="text-sm font-medium">{tab.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default GemmiProject;