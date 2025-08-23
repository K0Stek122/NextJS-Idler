'use client';
import React from 'react';
import Navbar from './Navbar';

const MainPage: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen drop-shadow-lg w-3/6 rounded-lg bg-gray-800">
            <Navbar />
        </div>
    );
};

export default MainPage;