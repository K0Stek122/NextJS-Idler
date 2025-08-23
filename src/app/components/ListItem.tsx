'use client';
import React from 'react';
import Link from 'next/link';

interface ListItemProps {
    href?: string;
    text?: string;
}

const ListItem: React.FC<ListItemProps> = ({
    href = "#",
    text = "!",
}) => {
    return (
        <Link href={href}>
            <li className='relative cursor-pointer group'>
                <span className="hover:text-white">{text}</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
        </Link>
    );
};

export default ListItem;