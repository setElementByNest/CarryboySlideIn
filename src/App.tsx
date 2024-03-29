import './App.css'
import type { ThemeConfig } from 'antd';
import { ConfigProvider } from 'antd';
import Nav from './assets/all/Nav'
import Notice from './assets/buildyourcamper/Notice';
import Layout1 from './assets/buildyourcamper/Layout1'

function App() {
  const config: ThemeConfig = {
    token: {
      colorPrimary: '#cc0000',
    },
  };

  return (
    <div className='app'>
      <ConfigProvider theme={config}>
        <Nav />
        <Notice />
        <Layout1 />
      </ConfigProvider>
    </div>
  )
}

export default App
