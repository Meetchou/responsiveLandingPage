import React from 'react';
import './App.css';
import HeaderNav from './organisms/Header';
import { Layout } from 'antd';
import { ConfigProvider, theme } from 'antd';
import MainContent from './organisms/MainContent';


const { Header, Footer, Content } = Layout;
const { useToken } = theme;

function App() {
	const { token } = useToken();
	return (
		<ConfigProvider
		theme={{
		  token: {
			colorPrimary: '#12274F',
		  },
		}}
	  >
	
			<div className="App">
				<Layout>
					<Header>
						<HeaderNav/>
					</Header>
					<Content className='self-center p-10 max-w-sm md:max-w-xl'>
						<MainContent/>
					</Content>
					<Footer className='fixed bottom-0 left-0 right-0'>Footer</Footer>
				</Layout>
				
			</div>
		</ConfigProvider>
	);
}

export default App;
