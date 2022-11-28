import React from 'react';
import { MenuProps, Space, Menu, Dropdown } from 'antd';
import { AiOutlineMenu } from "react-icons/ai";

const items = [
    { label: 'item 1', key: 'item-1' },
    { label: 'item 2', key: 'item-2' },
  ];

const DropDownMenu:React.FC = () => {
    return (
        <>

            <Dropdown className="text-white md:hidden" menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <AiOutlineMenu/>
                </Space>
                </a>
            </Dropdown>
        </>
    )
}

export default DropDownMenu;