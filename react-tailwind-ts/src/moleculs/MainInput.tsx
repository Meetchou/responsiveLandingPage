import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value: string) => console.log(value);

const MainInput: React.FC = () => (

    <Search className='m-2 md:m-5'
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
);

export default MainInput;