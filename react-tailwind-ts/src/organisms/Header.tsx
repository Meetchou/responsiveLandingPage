import React from 'react';
import { Layout } from 'antd';
import DropDownMenu from '../moleculs/DropDownMenu';

const { Header } = Layout;

const HeaderNav:React.FC = () => {
    return (
        <>
            <Header className='flex justify-between'>
                <h1 className='text-white'>TEST</h1>
                <DropDownMenu/>
                <nav className='text-white hidden md:flex'>
                    <ul className='md:flex md:justify-between'>
                        <li className='md:mr-10'><a>item 1</a></li>
                        <li><a>item 2</a></li>
                    </ul>
                </nav>
            </Header>
        </>
    )
}

export default HeaderNav;