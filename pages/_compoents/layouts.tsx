import React, { useState, ReactNode } from 'react';
import Image from 'next/image';
import backgroundImage from '../public/background.png'; // Adjust the path

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen bg-custom-pattern flex flex-col">
            <header className="bg-gray-900 text-white py-4 flex justify-between items-center px-4 md:px-8">
                <div className="text-lg font-bold">Your Logo</div>
                <nav className="hidden md:flex space-x-4">
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:underline">Games</a></li>
                        <li><a href="#" className="hover:underline">Developers</a></li>
                        <li><a href="#" className="hover:underline">Community</a></li>
                    </ul>
                </nav>
                <div className="hidden md:block">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Launch App</button>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 text-white py-4">
                    <nav className="flex flex-col items-center space-y-4">
                        <a href="#" className="hover:underline">Games</a>
                        <a href="#" className="hover:underline">Developers</a>
                        <a href="#" className="hover:underline">Community</a>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Launch App</button>
                    </nav>
                </div>
            )}
            <main className="flex-grow flex items-center justify-center">
                <div className="relative w-[414px] h-[896px] bg-black rounded-md shadow-lg overflow-hidden">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
