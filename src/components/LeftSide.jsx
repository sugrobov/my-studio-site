import React from 'react';

const LeftSide = ({ menu, isMobileMenuOpen, onClose }) => {

    return (
        <>
            {/* Overlay for mobile */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar for desktop */}
            <aside className="hidden md:block w-64 bg-gray-100 min-h-screen p-4">
                <nav>
                    <ul className="space-y-2">
                        {menu.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} className="block py-2 px-4 rounded hover:bg-gray-200">
                                    {item.title}
                                </a>
                            </li>
                        ))
                        }
                    </ul>
                </nav>
            </aside>

            {/* Mobile menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-100 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4 border-b border-gray-300 flex justify-between items-center">
                    <h2 className="text-lg font-bold">Меню</h2>
                    <button
                        className="text-2xl font-bold focus:outline-none"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>
                <nav className="p-4">
                    <ul className="space-y-2">
                        {menu.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} className="block py-2 px-4 rounded hover:bg-gray-200">
                                    {item.title}
                                </a>
                            </li>
                        ))
                        }
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default LeftSide;