import React from 'react';
import CardElem from '../moleculs/CardElem';
import MainInput from '../moleculs/MainInput';

const MainContent:React.FC = () => {
    return (
        <main className='md:flex items-center'>
            <CardElem/>
            <MainInput/>
        </main>
    )
}

export default MainContent;