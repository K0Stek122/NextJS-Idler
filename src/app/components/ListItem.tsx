'use client';
import React from 'react';

interface ListItemProps {
    onClick?: () => void;
    text?: string;
}

const ListItem: React.FC<ListItemProps> = ({ onClick, text }) => {
    return (
        <li className='relative cursor-pointer group' onClick={onClick}>
            <span className="hover:text-white">{text}</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
    );
};

export default ListItem;